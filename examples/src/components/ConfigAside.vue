<template>
  <div class="aside-container">
    <div class="aside-item">
      <div>图标大小</div>
      <div>
        <slider v-model="size" :min="10" :max="60"></slider>
        <tiny-numeric v-model="size" class="number-input"></tiny-numeric>
      </div>
    </div>
    <div class="aside-item">
      <div>线段粗细</div>
      <div>
        <slider v-model="strokeWidth" :min="1" :max="4"></slider>
        <tiny-numeric v-model="strokeWidth" class="number-input"></tiny-numeric>
      </div>
    </div>
    <div class="aside-item">
      <div>图标风格</div>
      <radio-group v-model="theme" class="grid-group">
        <radio-button label="outline">线性</radio-button>
        <radio-button label="filled">填充</radio-button>
        <radio-button label="two-tone">双色</radio-button>
        <radio-button label="multi-color">多色</radio-button>
      </radio-group>

      <div class="color-picker-container">
        <div class="color-group" v-if="theme === 'outline'">
          <div class="color-group-item">
            <div class="label">描边颜色</div>
            <div class="color-picker-components">
              <color-picker v-model="fill" class="color-picker" :predefine="predefine"></color-picker>
              <tiny-input v-model="fill" size="small" class="color-input"></tiny-input>
            </div>
          </div>
        </div>
        <div class="color-group" v-if="theme === 'filled'">
          <div class="color-group-item">
            <div class="label">填充颜色</div>
            <div class="color-picker-components">
              <color-picker v-model="fill" class="color-picker" :predefine="predefine"></color-picker>
              <tiny-input v-model="fill" size="small" class="color-input"></tiny-input>
            </div>
          </div>
        </div>
        <div class="color-group" v-if="theme === 'two-tone'">
          <div class="color-group-item">
            <div class="label">描边颜色</div>
            <div class="color-picker-components">
              <color-picker v-model="twoColor[0]" class="color-picker" :predefine="predefine"></color-picker>
              <tiny-input v-model="twoColor[0]" size="small" class="color-input"></tiny-input>
            </div>
          </div>
          <div class="color-group-item">
            <div class="label">填充颜色</div>
            <div class="color-picker-components">
              <color-picker v-model="twoColor[1]" class="color-picker" :predefine="predefine"></color-picker>
              <tiny-input v-model="twoColor[1]" size="small" class="color-input"></tiny-input>
            </div>
          </div>
        </div>

        <div class="color-group" v-if="theme === 'multi-color'">
          <div>
            <div class="color-group-item">
              <div class="label">外部描边颜色</div>
              <div class="color-picker-components">
                <color-picker v-model="multiColor[0]" class="color-picker" :predefine="predefine"></color-picker>
                <tiny-input v-model="multiColor[0]" size="small" class="color-input"></tiny-input>
              </div>
            </div>
            <div class="color-group-item">
              <div class="label">外部填充颜色</div>
              <div class="color-picker-components">
                <color-picker v-model="multiColor[1]" class="color-picker" :predefine="predefine"></color-picker>
                <!-- <tiny-base-select v-model="multiColor[1]" text-field="label" allow-create filterable default-first-option size="small" class="color-input">
                  <tiny-option v-for="item in colorOptions" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
                </tiny-base-select> -->
                <tiny-input v-model="multiColor[1]" size="small" class="color-input"></tiny-input>
              </div>
            </div>
          </div>
          <div>
            <div class="color-group-item">
              <div class="label">内部描边颜色</div>
              <div class="color-picker-components">
                <color-picker v-model="multiColor[2]" class="color-picker" :predefine="predefine"></color-picker>
                <tiny-input v-model="multiColor[2]" size="small" class="color-input"></tiny-input>
              </div>
            </div>
            <div class="color-group-item">
              <div class="label">内部填充颜色</div>
              <div class="color-picker-components">
                <color-picker v-model="multiColor[3]" class="color-picker" :predefine="predefine"></color-picker>
                <tiny-input v-model="multiColor[3]" size="small" class="color-input"></tiny-input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '@opentiny/vue-slider';
import RadioGroup from '@opentiny/vue-radio-group';
import RadioButton from '@opentiny/vue-radio-button';
import ColorPicker from '@opentiny/vue-color-picker';
import TinyInput from '@opentiny/vue-input';
import TinyNumeric from '@opentiny/vue-numeric'
import { INITIAL_VALUE, PREDEFINE_COLORS } from '../consts.js';

export default {
  components: {
    'slider': Slider,
    'radio-group': RadioGroup,
    'radio-button': RadioButton,
    'color-picker': ColorPicker,
    'tiny-input': TinyInput,
    TinyNumeric,
  },
  props: {
    update: Function,
  },

  data() {
    return {
      size: INITIAL_VALUE.size,
      strokeWidth: INITIAL_VALUE.strokeWidth,
      theme: INITIAL_VALUE.theme,
      fill: INITIAL_VALUE.fill,
      twoColor: INITIAL_VALUE.twoColor,
      multiColor: INITIAL_VALUE.multiColor,
      predefine: Object.values(PREDEFINE_COLORS).flat(),
    };
  },
  watch: {
    size(val) {
      this.$emit('update', 'size', val);
    },
    strokeWidth(val) {
      this.$emit('update', 'strokeWidth', val);
    },
    theme(val) {
      if (['filled', 'outline'].includes(val)) {
        this.fill = INITIAL_VALUE.fill;
      }
      this.$emit('update', 'theme', val);
    },
    twoColor(val) {
      this.fill = val;
    },
    multiColor(val) {
      this.fill = val;
    },
    fill(val) {
      this.$emit('update', 'fill', val);
    },
  },
  methods: {
    handleConfigUpdate() { },
    updateColor(color) {
      this.fill = color;
    }
  }
};
</script>
<style lang="less" scoped>
.aside-container {
  position: fixed;
  top: 100px;
  right: 0;
  width: 200px;
  // padding: 0 20px;
  padding-left: 20px;
  padding-right: 10px;
}

.aside-item {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
}

.grid-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.color-picker-components {
  display: flex;
  gap: 4px;
}

.color-picker-container {
  margin-top: 16px;
  font-size: 14px;
  width: 100%;
}

.color-group {
  display: flex;
  gap: 8px;

  .color-group-item {
    display: flex;
    align-items: self-start;
    flex-direction: column;
    gap: 4px;
  }
}

.color-picker {
  width: 16px;
  height: 16px;

  /deep/.tiny-color-select-panel {
    right: 30px;
    top: -265px;

    .tiny-collapse .tiny-collapse-item__content .tiny-color-select-panel__predefine {
      display: grid;
      gap: 2px;
      grid-template-columns: repeat(3, 1fr) 1.5fr repeat(4, 1fr);
    }

    --tv-color-bg: #f1f1f1;
  }
}

.color-input {
  width: 65px;
}

.number-input {
  margin-top: 6pxs;
}
</style>
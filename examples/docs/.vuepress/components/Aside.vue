<template>
  <div class="aside-container">
    <div class="aside-item">
      <div>图标大小</div>
      <slider v-model="size" :min="10" :max="60"></slider>
    </div>
    <div class="aside-item">
      <div>线段粗细</div>
      <slider v-model="strokeWidth" :min="1" :max="4"></slider>
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
        <div>描边颜色</div>
        <div class="color-picker-components">
          <color-picker v-model="fill" class="color-picker"></color-picker>
          <tiny-input v-model="fill" size="small" class="color-input"></tiny-input>
        </div>
      </div>
      <div class="color-group" v-if="theme === 'filled'">
        <div>填充颜色</div>
        <div class="color-picker-components">
          <color-picker v-model="fill" class="color-picker"></color-picker>
          <tiny-input v-model="fill" size="small" class="color-input"></tiny-input>
        </div>
      </div>
      <div class="color-group" v-if="theme === 'two-tone'">
        <div>描边颜色</div>
        <div class="color-picker-components">
          <color-picker v-model="twoColor[0]" class="color-picker"></color-picker>
          <tiny-input v-model="twoColor[0]" size="small" class="color-input"></tiny-input>
        </div>
        <div>填充颜色</div>
        <div class="color-picker-components">
          <color-picker v-model="twoColor[1]" class="color-picker"></color-picker>
          <tiny-input v-model="twoColor[1]" size="small" class="color-input"></tiny-input>
        </div>
      </div>

      <div class="color-group" v-if="theme === 'multi-color'">
        <div>
          <div>外部描边颜色</div>
          <div class="color-picker-components">
            <color-picker v-model="multiColor[0]" class="color-picker"></color-picker>
            <tiny-input v-model="multiColor[0]" size="small" class="color-input"></tiny-input>
          </div>
          <div>外部填充颜色</div>
          <div class="color-picker-components">
            <color-picker v-model="multiColor[1]" class="color-picker"></color-picker>
            <tiny-input v-model="multiColor[1]" size="small" class="color-input"></tiny-input>
          </div>
        </div>
        <div>
          <div>内部描边颜色</div>
          <div class="color-picker-components">
            <color-picker v-model="multiColor[2]" class="color-picker"></color-picker>
            <tiny-input v-model="multiColor[2]" size="small" class="color-input"></tiny-input>
          </div>
          <div>内部填充颜色</div>
          <div class="color-picker-components">
            <color-picker v-model="multiColor[3]" class="color-picker"></color-picker>
            <tiny-input v-model="multiColor[3]" size="small" class="color-input"></tiny-input>
          </div>
        </div>
      </div>
    </div>

    </div>
  </div>
  <!-- <female theme="outline" size="24" fill="#333"/> -->
   <!-- <hourglass-null theme="outline" size="24" fill="#333" :strokeWidth="2"/> -->
    <!-- <female theme="multi-color" size="24" :fill="['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']" :strokeWidth="2"/> -->
</template>

<script>
import Slider from '@opentiny/vue-slider';
import RadioGroup from '@opentiny/vue-radio-group';
import RadioButton from '@opentiny/vue-radio-button';
import ColorPicker from '@opentiny/vue-color-picker';
import TinyInput from '@opentiny/vue-input';
import { INITIAL_VALUE } from './consts.js';

export default {
  components: {
    Slider,
    RadioGroup,
    RadioButton,
    ColorPicker,
    TinyInput,
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
    };
  },
  watch: {
    size(val) {
      this.$emit('update', 'size', val);
    },
    strokeWidth(val) {
      this.$emit('update', 'strokeWidth', val);
    },
    theme(val){
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
    fill(val){
      this.$emit('update', 'fill', val);
    },
  },
  computed: {

  },
  methods: {
    handleConfigUpdate() {}
  }
};
</script>
<style lang="less" scoped>
.aside-container {
  position: fixed;
  top: 100px;
  right: 0;
  width: 200px;
  padding: 0 20px;
}

.aside-item {
  border-bottom: 1px solid #eeeded;
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
  font-size: 14px;
}

.color-picker {
  width: 16px;
  height: 16px;
}

.color-input {
  width: 65px;
}
</style>
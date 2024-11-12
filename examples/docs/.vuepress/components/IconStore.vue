<template>
  <div>
    <recycle-scroller
      class="icon-list"
      :items="displayIcons"
      :item-size="74"
      page-mode
      key-field="id"
    >
      <template v-slot="{ item }">
        <div class="icon-row-container">
          <div v-for="iconName in item.icons" :key="iconName" @click="copyContent(iconName)" class="icon-container">
            <!-- <icon-park :type="iconName" :key="iconName" :size="size" :strokeWidth="strokeWidth" :theme="theme" :fill="fill" /> -->
            <component :is="allIcons[iconName]" :size="size" :strokeWidth="strokeWidth" :theme="theme" :fill="fill"></component>
          </div>
        </div>
      </template>
    </recycle-scroller>
  </div>
  <!-- <tiny-alert type="success" description="type 为 success"></tiny-alert> -->
</template>

<script>
// import * as allIcons from '@packages/vue/es/index.js';
// import Alert from '@opentiny/vue-alert';
import * as allIcons from '@icon-monorepo/components/packages/vue/es/index.js';
// import { IconPark } from '@icon-monorepo/components/packages/vue/es/all';

export default {
  props: {
    size: String,
    strokeWidth: Number,
    theme: String,
    fill: String,
  },
  // components: { 'icon-park': IconPark },
  data() {
    return {
      allIcons,
      info: '',
    };
  },
  computed: {
    iconNames() {
      return Object.keys(this.allIcons);
    },
    displayIcons() {
      let id = 0;
      const newArray = [];
      // return [{id: 0, icons: ['Home', 'Mail', 'Ad', 'a-cane', 'abdominal', 'abnormal']}];
      for (let i = 0; i < this.iconNames.length; i += 6) {
        newArray.push({
          id: id++,
          icons: this.iconNames.slice(i, i + 6),
        });
      }
      console.log(newArray);
      return newArray;
    },
  },
  methods: {
    copyContent(iconName) {
      const contentToCopy = `<${iconName} size="${this.size}" :strokeWidth=${this.strokeWidth} theme="${this.theme}" :fill="${this.fill}" />`;

      this.$copyText(contentToCopy).then(function (e) {
        alert(`复制成功！${contentToCopy}`);
        console.log(e)
      }, function (e) {
        alert(`复制失败！${contentToCopy}`);
        console.log(e)
      })
    },
  }
};
</script>
<style lang="less" scoped>
.icon-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 1000px;

  .icon-row-container {
    display: flex;
    gap: 10px;
  }

  .icon-container {
    width: 164px;
    height: 64px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
    cursor: pointer;

    &:hover {
      box-shadow : 0 4px 16px rgba(0, 0, 0, .1);
    }
  }
}
</style>
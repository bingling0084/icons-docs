<template>
  <div class="icon-store">
    <!-- <recycle-scroller
      class="icon-list"
      :items="displayIcons"
      :item-size="74"
      page-mode
      key-field="id"
    >
      <template v-slot="{ item }">
        <div class="icon-row-container">
          <div v-for="iconName in item.icons" :key="iconName" @click="copyContent(iconName)" class="icon-container">
            <icon-park :type="iconName" :key="iconName" :size="size" :strokeWidth="strokeWidth" :theme="theme" :fill="fill" />
          </div>
        </div>
      </template>
</recycle-scroller> -->
    <tiny-collapse class="category-collapse" v-model="activeCategories">
      <div v-for="category in categories" :key="category" class="icon-store-container">
        <tiny-collapse-item :title="icons[category][0].categoryCN" :name="category" :id="category">
          <!-- <h2 class="category" :id="category">{{ icons[category][0].categoryCN }}</h2> -->
          <div class="icon-view-container">
            <div v-for="item in icons[category]" :key="item.id" @click="copyContent(item.name)"
              class="icon-base-container">
              <div class="view-left">
                <icon-park :type="item.name" :key="item.id" :size="size" :strokeWidth="strokeWidth" :theme="theme"
                  :fill="fill" />
              </div>
              <div class="view-right">
                <div class="view-right-title">{{ item.title }}</div>
                <div class="view-right-name">{{ item.name }}</div>
              </div>
            </div>
          </div>

        </tiny-collapse-item>
      </div>
    </tiny-collapse>

  </div>
  <!-- <tiny-alert type="success" description="type 为 success"></tiny-alert> -->
</template>

<script>
// import Alert from '@opentiny/vue-alert';
// import iconList from '@icon-monorepo/components/packages/vue/icons.json';
// import * as allIcons from '@bingling00/vue-icons/es/index.js';
import { IconPark } from '@icon-monorepo/components/packages/vue/es/all';

import TinyCollapseItem from '@opentiny/vue-collapse-item';
import TinyCollapse from '@opentiny/vue-collapse';

export default {
  props: {
    icons: Object,
    size: String,
    strokeWidth: Number,
    theme: String,
    fill: String,
  },
  components: { 'icon-park': IconPark, TinyCollapse, TinyCollapseItem },
  data() {
    return {
      info: '',
      activeCategories: Object.keys(this.icons),
    };
  },
  computed: {
    categories() {
      return Object.keys(this.icons);
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
    toPascalCase(val) {
      return val.replace(/(^\w|-\w)/g, function (c) {
        return c.slice(-1).toUpperCase();
      })
    },
  }
}

</script>
<style lang="less" scoped>
.icon-store {
  overflow: auto;
  width: calc(100% - 440px);
  margin-left: 16px;
}

.icon-store-container {
  margin-bottom: 20px;
}

.category-collapse {
  /deep/.tiny-collapse-item {
    --tv-CollapseItem-bg-color: transparent;
  }
}

.category {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.icon-view-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
}

.icon-base-container {
  padding: 8px;
  display: flex;
  flex-direction: row;
  width: 170px;
  height: 64px;
  gap: 10px;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, .1);
  }
}

.view-left {
  width: 64px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.view-right {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
}

.view-right-name {
  font-size: 12px;
  color: #c4c6cd;
  text-align: left;
  word-break: break-all;
}

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
      box-shadow: 0 4px 16px rgba(0, 0, 0, .1);
    }
  }
}
</style>
<template>
  <div>
    <div class="header">
      <tiny-search @change="search" is-enter-search class="search-input" placeholder="输入关键词、名称搜索" clearable></tiny-search>
    </div>
    <div class="container">
      <menu-sidebar :links="links"></menu-sidebar>
      <icon-store :icons="icons" :size="size" :strokeWidth="strokeWidth" :theme="theme" :fill="fill"></icon-store>
      <config-aside class="aside" @update="update"></config-aside>
    </div>
  </div>
</template>

<script>
import IconStore from './IconStore.vue';
import ConfigAside from './ConfigAside.vue';
import { INITIAL_VALUE } from '../consts.js';
import iconList from '@icon-monorepo/components/packages/vue/icons.json';
import MenuSidebar from './MenuSidebar.vue';
import TinySearch from '@opentiny/vue-search';

export default {
  components: {
    IconStore,
    ConfigAside,
    MenuSidebar,
    TinySearch,
  },
  data() {
    return {
      iconList,
      size: INITIAL_VALUE.size,
      strokeWidth: INITIAL_VALUE.strokeWidth,
      theme: INITIAL_VALUE.theme,
      fill: INITIAL_VALUE.fill,
    };
  },
  computed: {
    links() {
      const res = [];
      this.iconList.forEach(item => {
        const { categoryCN, category, tag = [] } = item;
        const isCde = tag.includes('cde');
        const linkItem = {
          key: category,
          link: `#${category}`,
          title: categoryCN,
        };

        if (isCde) {
          const cdeItem = res.find(menu => menu.key === 'cde');
          if (cdeItem && !cdeItem.children.find(menu => menu.key === category)) {
            cdeItem.children.push(linkItem);
          }
          if (!cdeItem) {
            res.push({
              key: 'cde',
              title: "鸾图协同平台",
              link: `#cde`,
              children: [linkItem],
            })
          }
          console.log(res);
          return
        }
        if (!res.find(menu => menu.key === category)) {
          res.push(linkItem);
        }
      });

      return res;
    },
    icons() {
      const iconMap = {};
      this.iconList.forEach(item => {
        const category = item.category;
        if (!iconMap[category]) {
          iconMap[category] = [item];
        } else {
          iconMap[category].push(item);
        }
      });

      return iconMap;
    }
  },
  methods: {
    update(key, val) {
      console.log(key, val);
      this[key] = val;
    },
    search(_, val) {
      if (!val) {
        this.iconList = iconList;
      }
      this.iconList = this.iconList.filter(icon => {
        const { name, title, tag: tags, category, categoryCN } = icon;
        const isTagMatch = tags.some(tag => tag.includes(val) || val.includes(tag));
        const isTitleMatch = [name, title].some(item => item.includes(val) || val.includes(item));
        const isCategoryMatch = [category, categoryCN].some(menu => menu.includes(val) || val.includes(menu));
        return isTagMatch || isTitleMatch || isCategoryMatch;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  .search-input {
    width: 400px;
  }
}

.container {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 70px);
  overflow: hidden;

  .aside {
    width: 200px;
    flex-grow: 0;
    flex-shrink: 0;
  }
}
</style>
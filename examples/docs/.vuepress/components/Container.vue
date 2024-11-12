<template>
  <div class="container">
    <icon-store :size="size" :strokeWidth="strokeWidth" :theme="theme" :fill="fill"></icon-store>
    <Aside class="aside" @update="update"></Aside>
  </div>
</template>

<script>
import IconStore from './IconStore.vue';
import Aside from './Aside.vue';
import { INITIAL_VALUE } from './consts.js';

export default {
  components: {
    IconStore,
    Aside,
  },
  data() {
    return {
      size: INITIAL_VALUE.size,
      strokeWidth: INITIAL_VALUE.strokeWidth,
      theme: INITIAL_VALUE.theme,
      fill: INITIAL_VALUE.fill,
    };
  },
  computed: {
  },
  methods: {
    update(key, val) {
      console.log(key, val);
      this[key] = val;
    },
  }
};
</script>
<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: row;

  .aside {
    width: 200px;
    flex-grow: 0;
    flex-shrink: 0;
  }
}
</style>
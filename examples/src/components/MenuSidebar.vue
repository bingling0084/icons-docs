<template>
  <div class="anchor-container">
    <Anchor :links="links" :is-affix="false"></Anchor>
  </div>
</template>

<script>
import Anchor from '@opentiny/vue-anchor';

export default {
  components: {
    Anchor,
  },
  props: {
    links: Array,
  },
  // computed: {
  //   categoryLinks() {
  //     return this.links.map(link => ({
  //       key: link.category,
  //       title: link.title,
  //       link: `#${link.category}`,
  //       children: link.children,
  //     }));
  //   },
  // },
};
</script>
<style lang="less" scoped>
.anchor-container {
  width: 200px;
  height: 100%;
  overflow-y: auto;

  /deep/.tiny-anchor {
    width: 180px;
    text-align: left;

    .tiny-anchor-link-title {
      padding-top: 4px;
      padding-bottom: 4px;
      font-size: 14px;
    }
  }
}
</style>
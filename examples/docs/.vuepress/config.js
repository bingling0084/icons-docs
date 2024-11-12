const { resolve } = require("path");

module.exports = {
  title: "Hello VuePress1",
  description: "Just playing around",
  themeConfig: {
    logo: "https://excalidraw.com/apple-touch-icon.png",
    // sidebar: [
    //   {
    //     title: "Group 1", // 必要的
    //     path: "/page-a/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 3, // 可选的, 默认值是 1
    //     children: ["/page-a/abc"],
    //   },
    //   {
    //     title: "Group 2",
    //     children: [
    //         /* ... */
    //     ],
    //     initialOpenGroupIndex: -1, // 可选的, 默认值是 0
    //   },
    // ],
  },
  configureWebpack: () => ({
    devtool: "source-map",
    // resolve: {
    //   alias: {
    //     '@packages': resolve(__dirname, '../../../packages/'),
    //   }
    // }
  }),
  // globalUIComponents: [
  //   'Aside',
  // ],
  enhanceAppFiles: resolve(__dirname, 'enhanceApp.js'),
  plugins: ['@vuepress/back-to-top'],
};

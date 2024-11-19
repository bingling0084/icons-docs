# [cde-icon-web](http://)

## 介绍
图标源自[IconPark](http://iconpark.bytedance.com/official)和UI自研。总计提供了超过2000个高质量图标，并且提供了一个界面来帮你定制图标。与使用各种SVG源文件来达到换肤效果的方案不同的是，我们实现了一种创新性的技术，
通过改变一个SVG文件的属性来变换出多种主题，方便在代码中以组件的形式按需引用，比如[`vue-icons`](./packages/vue/README.md)

### 代码库开发方式
#### 新增图标
[`source`](./packages/components/source)文件夹下新增图标，然后在[`db.csv`](./packages/components/source/db.csv)文件内增加该图标描述信息。
编译图标和代码
```
pnpm i && pnpm compiler && pnpm build
```
启动图标文档页面查看效果
```
pnpm docs:serve
```
发布新版本：
更新packages/vue版本，切换到 packages/components目录下，执行
```
publish:lerna
```

#### 多种主题
基本的换肤可以通过在元素上设置两个属性来搞定：fill属性和stroke属性。fill属性设置对象内部的颜色，stroke属性设置绘制对象的线条的颜色。通过改变不同path的这2个属性，
你可以把一个SVG图标源文件变换出不同的主题。包括：`线框`、`填充`、`双色`、`多色`。


### 网站
#### 定制化 
这里是网站[IconPark](http://iconpark.bytedance.com/official)，每一个图标都被手绘在一个48*48的格子里，通过使用SVG 边框属性确保了最大范围的样式灵活性。
你可以在线去更改颜色、大小、线框宽度、端点类型、拐点类型等属性


#### 便捷操作
支持一键复制 Vue 代码组件

### 注意
一些自研Icon因和设计规范不一致，可能无法更改线段粗细、图标颜色。

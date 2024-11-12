## 基本使用

<div>
  <abdominal></abdominal>
  <div>hello</div>
</div>

::: details Show Code

```vue
<script setup lang="ts">
function onClick (e: Event) {
  console.log('click')
}
</script>
<template>
    <div>hello</div>
    <abdominal></abdominal>
  <!-- <accept-email></accept-email> -->
</template>

```

:::
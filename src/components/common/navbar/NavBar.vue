<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  /*一般导航栏都是44或64*/
  height: 44px;
  line-height: 44px;
  text-align: center;
}

.left, .right {
  width: 60px;
}

.center {
  /*其他元素固定大小，这个设置为1，会占据全部空间*/
  flex: 1;
}

</style>

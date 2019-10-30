<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
.my-el-custom-spinner {
  background: url("./assets/loading.gif");
  background-size: 60px 60px;
  width: 60px;
  height: 60px;
  display: inline-block;
}
</style>

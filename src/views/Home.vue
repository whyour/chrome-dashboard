<template>
  <el-container>
    <el-header class="layout-header">
      <div>
        <el-menu
          router
          :default-active="$route.path"
          class="el-menu-demo"
          mode="horizontal"
        >
          <el-submenu index="/trending">
            <template slot="title">
              Trending
            </template>
            <el-menu-item index="/trending/repositories">
              Repositories
            </el-menu-item>
            <el-menu-item index="/trending/developers">Developers</el-menu-item>
          </el-submenu>
          <el-menu-item index="/pull-request">pull-request</el-menu-item>
        </el-menu>
      </div>
      <div class="line"></div>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
export default {};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.layout-header {
  position: sticky;
  top: 0;
  background-color: #fff !important;
  border-bottom: solid 1px #e6e6e6;
  height: 61px !important;
  z-index: 1000;
}
.layout-header > div:first-of-type {
  max-width: 1012px;
  margin: 0 auto;
}
</style>

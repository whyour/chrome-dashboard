<template>
  <el-container>
    <el-header class="layout-header" height="61px">
      <div>
        <el-menu
          default-active="/develop"
          class="el-menu-demo"
          mode="horizontal"
          :router="true"
        >
          <el-menu-item index="/">处理中心</el-menu-item>
          <el-menu-item index="/develop">选项1</el-menu-item>
          <el-menu-item index="/explore">选项2</el-menu-item>
          <el-menu-item index="/2">选项3</el-menu-item>
        </el-menu>
      </div>
      <div class="line"></div>
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
  </el-container>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
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
}
.layout-header > div:first-of-type {
  max-width: 1012px;
  margin: 0 auto;
}
</style>

<template>
  <div class="nav1">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">新闻动态</template>
        <el-menu-item index="2-1">通告</el-menu-item>
        <el-menu-item index="2-2">公告</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" >消息中心</el-menu-item>
      <el-menu-item index="4">
        <a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavList",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>

<style>
.nav1{
  margin-top:40px;
}

.el-menu {
 
  background: rgb(58, 103, 240);

}


</style>
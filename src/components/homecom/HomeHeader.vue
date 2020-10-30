<template>
  <div class="header1">
    <div class="header-ct">
      <div class="left">欢迎来到这里啊啊啊啊啊啊</div>
      <div class="right">登录/注册</div>
      <div class="right">管理中心</div>
      <div class="right">移动端</div>
    </div>
     <img src="https://www.hnjmrh.gov.cn/static/img/newweb/logo.png" alt="" />
  </div>
   
</template>

<script>
export default {
  name: "HomeHeader",
};
</script>

<style scoped>
.header1{

  width:100%;
}
.header-ct{
  display: flex;
  padding:20px 0;
  height: 30px;
  font-size: 14px;
  font-weight: lighter;

}
.left{
  flex:1;
}
.right{
  width: 100px;
  text-align: right;
}

</style>
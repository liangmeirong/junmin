<template>
  <div class="bg">
   <home-header></home-header>
   <nav-list></nav-list>
  </div>
</template>

<script>
import HomeHeader from '@/components/homecom/HomeHeader'
import NavList from '@/components/homecom/NavList'

export default {
  name: 'Home',
  components: {HomeHeader,NavList}
}

</script>

<style scoped>
.bg{
  width: 95%;
  margin: 0 auto;
}

</style>
<template>
  <div class="bg">
   <home-header></home-header>
   <nav-list></nav-list>
   <hsearch></hsearch>

  </div>
</template>

<script>
import HomeHeader from '@/components/homecom/HomeHeader'
import NavList from '@/components/homecom/NavList'
import hsearch from '@/components/homecom/hsearch'

export default {
  name: 'Home',
  components: {HomeHeader,NavList,hsearch}
}

</script>

<style scoped>
.bg{
  width: 95%;
  margin: 0 auto;
}

</style>
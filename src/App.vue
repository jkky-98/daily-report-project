<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name : 'NavComponent',
  components: {
    Nav
  },
};
</script>


<style lang="scss">
  @import './assets/css/style.scss' ;
</style>

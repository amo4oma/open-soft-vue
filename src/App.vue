<template>
 
  <Nav />
  <Banner />
  <SectionTwo />
</template>

<script>
import Nav from './components/Nav.vue'
import Banner from './components/Banner.vue'
import SectionTwo from './components/Section-two.vue'
 
export default {
 
  name: 'App',
  components: {
    Nav,
    Banner,
    SectionTwo
  }
}
</script>

<style lang="scss">
#app {
  background-color: #E7E7E7;
  overflow-y: hidden;
}
</style>

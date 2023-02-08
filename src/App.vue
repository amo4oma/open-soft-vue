<template>
 
    <Nav />
     <Banner />
    <SectionTwo />
    <ServicesSecrion />
    <OurProducts />
    <ContactUs />
 </template>

 

<script >
 
import Nav from './views/Nav.vue'
import Banner from './views/Banner.vue'
import SectionTwo from './views/SectionTwo.vue'
import ServicesSecrion from './views/ServicesSection.vue'
import OurProducts from './views/OurProducts.vue'
import ContactUs from './views/ContactUs.vue'
 

export default {
 
 name: 'App',
 components: {
   Nav,
   Banner,
   SectionTwo,
   ServicesSecrion,
   OurProducts,
   ContactUs
 }
}
</script>

 
 


<style lang="scss">
#app {
  background-color: #E7E7E7;
  overflow-y: hidden;
}
</style>

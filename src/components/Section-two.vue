<template>
    <div id="body" class="container">
        <div class="rwo">

<Transition  
 :css="false"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
>
 
              <div class="sec-2-content">
                <div class="col-lg-6 col col-sm-12">
      
 
      <h1>Solutions</h1>
        <p>At OpenSoft, we are committed to providing top-quality software solutions that meet the unique needs of our clients. Our team of experienced professionals specializes in a range of services, including the development of ERP systems, mobile apps, web apps, and system analysis.</p> 

       <p>We work closely with our clients to understand their specific goals and challenges, and we use a variety of technologies and frameworks to deliver customized solutions that deliver results. Our development process is agile and iterative, allowing us to make adjustments and improvements along the way to ensure that the final product meets all of our clients' requirements.</p> 

      <p>In addition to our core software development services, we also offer support, maintenance, and training to ensure that our clients are able to get the most out of their solutions. We have a track record of successful projects and satisfied clients, and we are proud to be a trusted partner for businesses and organizations looking to leverage the power of technology.</p>
  </div>
  <div class="col-lg-6 col col-sm-12"></div>
            
            </div>
        </Transition>
        
        </div>
    </div>
</template>

<script>
 
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default {
  setup(){
 
  },
  name: 'SectionTwo',
  methods: {
    onBeforeEnter(el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    onEnter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: '1.6em',
        delay: el.dataset.index * 0.15,
        onComplete: done
      })
    },
    onLeave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.15,
        onComplete: done
      })
    }
  }

}
</script>

<style lang="scss">
#body{
    position: relative;
    padding-top: 150px;
    height: 100vh;
}
 
 
</style>
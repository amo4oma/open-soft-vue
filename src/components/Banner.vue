<template>
          <section id="moving" v-smooth-scroll>
          
            <vue-particles
            class="particles"
            color="#f07e13"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="5"
            linesColor="#000"
            :linesWidth="1.5"
            :lineLinked="true"
            :lineOpacity="0.5"
            :linesDistance="200"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"

            ></vue-particles>
            <transition name="fade" appear
            @before-enter="beforeEnter"
            @enter="enter"

            @after-enter="afterEnter"
            @beforeEnter="beforeEnter"
          
            >
              <div class="content">
            <h5 class="h5">Welcome to</h5>
            <img class="banner-logo" src="../assets/opensoft_logo2.png" />
            <h3 class="h3">For Information Technology and Systems</h3>
            
            </div>
          
            </transition>
            <div class="circle"></div>
            <div class="row">
              <div class="col-lg-6"></div>
              <div class="col-lg-6">
                <div class="about whatis">
                  <h1>About Us</h1>
                  <p>OpenSoft is a software company that specializes in creating information technology solutions for various sectors. Our services include the development of ERP systems, mobile apps, web apps, and system analysis. With our team of experienced professionals, we are dedicated to providing high-quality and innovative solutions to meet the unique needs of our clients.</p>
             
                </div>
                <div class="about mission-col">
                  <h1>Our Mission</h1>
                  <p>To be the leading provider of innovative and reliable information technology solutions, empowering businesses and organizations to achieve their full potential.</p>
                </div>
                <div class="about vision-col">
                  <h1>Vision</h1>
                  <p>To consistently deliver high-quality software products and services that meet the evolving needs of our clients.</p>
                    <p>To foster a culture of collaboration, creativity, and continuous learning within our team.</p>
                    <p>To make a positive impact on the world through the use of technology.</p>
                </div>
                <img class="mission" src="../../src/assets/mission.png" alt="">
                <img class="vision" src="../../src/assets/vission.png" alt="">
              </div>
            </div>
        <div class="box">
            <span></span>
            <span></span>
            <span></span>
          </div>
      <div id="net">
      </div>
    </section>
</template>

<script >
 
import gsap from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';
import ScrollSmoother  from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollSmoother);

export default {
  setup(){

    const beforeEnter= (el)=>{
      el.style.transform = 'translateY(-60px)'
      el.style.opacity = 0
    }
    const enter= (el)=>{
      gsap.to(el,
        { duration :1, 
          y:0, 
          opacity:1})
    }
    const afterEnter= ()=>{

    }
 
 
    return {beforeEnter, enter, afterEnter}
  },
 
  name: 'Banner-section',
 mounted:function(){
  this.scrollAnimation();
  this.leavingAnimation();
  this.smothS();
 },
 methods:{
  smothS(){
      ScrollSmoother.create({
  smooth: 5,               // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true,           // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
})
  },

  leavingAnimation(){
    gsap.timeline({
      scrollTrigger:{
        trigger:"#moving",
        start:"bottom +=250",
        end:"+=100",
        markers:true,
        scrub:1,
     

      }
    })
    .to(".circle",{duration : 3, scale:0})
    
  },
  scrollAnimation(){
    gsap.timeline({
      scrollTrigger:{
        trigger:"#moving",
        start:"top top",
        end:"+=1800",
        markers:true,
        pin:true,
        scrub:1,
     

      }
    })

    .to(".h5",{duration : 2, x:"-100%",ease: "power2.inOut"},'firs')
    .to(".banner-logo",{duration : 2, x:"-140%",ease: "power2.inOut"},'ed')
    .to(".h3",{duration : 2, x:"-105%",ease: "power2.inOut"},'jid')
    .from(".circle",{y:"100%",ease: "power2.inOut"})
    .to(".circle",{duration : 3, scale:5, x:'-90%',ease: "power2.inOut"})
    .to(".whatis",{duration : 3, y:'-40%',opacity:1,ease: "power2.inOut"})
    .to(".circle",{duration : 3})
    .to(".circle",{duration : 3})
    .to(".circle",{duration : 3,borderRadius:10,scale:4.2,ease: "power2.inOut"})
    .to(".circle",{duration : 3})
    .to(".whatis",{duration : 3, color:'#050038',ease: "power2.inOut"},'s')
    .to(".circle",{duration : 3, backgroundColor:'#FFD02F'},'s')
    .to(".whatis",{duration : 3,y:"-80%", opacity:0,ease: "power2.inOut"})
    .to(".mission-col",{duration : 3,opacity:1,y:"-50%", color: '#050038',ease: "power2.inOut"})
    .to(".mission",{duration : 3,opacity:1,y:"-100%", x:"30rem",delay:2,ease: "power2.inOut"})
    .to(".mission",{duration : 3,opacity:1,y:"-100%", x:"30rem",delay:2,ease: "power2.inOut"})
    .to(".mission",{duration : 3,opacity:1,y:"-100%", x:"30rem",delay:2,ease: "power2.inOut"})
    .to(".mission",{duration : 3,opacity:0,y:"-150%", x:"30rem",ease: "power2.inOut"})
    .to(".mission-col",{duration : 3,y:"-80%", opacity:0})
    .to(".vision-col",{duration : 3,y:"-50%", opacity:1,color: '#050038'})
    .to(".vision",{duration : 3,opacity:1,y:"-100%", x:"35rem",delay:2})
    .to(".vision",{duration : 3,opacity:1,y:"-100%", x:"35rem",delay:2})
    .to(".particles",{duration : 3, display :"none"})
    // .to(".about",{duration : 3, y:'40%',opacity:0})
    // .to(".circle",{duration : 3, scale:0.3, x:'-90%'})
    // .to(".h5",{duration : 2, x:"0%"})
    // .to(".banner-logo",{duration : 2, x:"0%"})
    // .to(".h3",{duration : 2, x:"0%"})

  }
 }
 
}
</script>
 
<style>
/* .fade-enter-from{
  opacity: 0;
}
.fade-enter-to{
  opacity: 1;
}
.fade-enter-active{
  transition: all 2s ease;
}
.fade-leave-from{}
.fade-leave-to{
  opacity: 0;
}
.fade-leave-active{
  transition: all 2s ease;
} */
#moving{
  overflow: hidden;
}
.vision,.mission{
  width: 250px;
  opacity: 0;
  position: absolute;
  top:200px;
  left: 10px;
  z-index: 556;
  
}
.about{
  position: absolute;
  z-index: 556;
  top:60%;
  color: #E7E7E7;
  width: 50%;
  font-size: 35px;
  font-weight: 500;
  right: 30px;
  opacity: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.mission-col{
  opacity: 0;
  font-size: 35px;
  font-weight: 500;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
 .circle{
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: #FF6575;
  position: absolute;
  z-index: 555;
 
  right: 0px;
  bottom: 10px;
 
 }
.box{
    position: absolute;
    top: 89%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 999;
}

.box span{
	display: block;
	width: 20px;
	height: 20px;
	border-bottom: 2px solid black;
	border-right: 2px solid black;
	transform: rotate(45deg);
	margin: -10px;
	animation: animate 2s infinite;
}

.box span:nth-child(2)
{
	animation-delay: -0.2s;
}

.box span:nth-child(3)
{
	animation-delay: -0.4s;
}

@keyframes animate{
	
	0%{
		opacity: 0;
		transform: rotate(45deg) translate(-20px, -20px);
	}
	50%{
		opacity: 1;
	}
	100%{
		opacity: 0;
		transform: rotate(45deg) translate(20px, 20px);
	}
}
#moving{
    position: relative;
    height: 100vh;
    background-color: #E7E7E7;
    width: 100%;

}
#net{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;

  }
  .banner-logo{
    width: 300px;
}
  .content{
      position: absolute;
      z-index: 2;
      left: 36%;
      top: 40%;
      width: 400px;
      height: 150px;
      text-align: center;
      color: #000;
   
    
  }
  h1{
    font-size: 2.5rem;
  }
</style>
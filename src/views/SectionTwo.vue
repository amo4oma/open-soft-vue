<template>
    <div id="body" class="container">
        <div class="rwo">

<Transition  
 :css="false"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
>
 
              <div class="sec-2-content" ref="box1">
                <div class="row">
                    <div class="col-lg-6 col-sm-12">
      
 
      <h1>Solutions</h1>
        <p>At OpenSoft, we are committed to providing top-quality software solutions that meet the unique needs of our clients. Our team of experienced professionals specializes in a range of services, including the development of ERP systems, mobile apps, web apps, and system analysis.</p> 

       <p>We work closely with our clients to understand their specific goals and challenges, and we use a variety of technologies and frameworks to deliver customized solutions that deliver results. Our development process is agile and iterative, allowing us to make adjustments and improvements along the way to ensure that the final product meets all of our clients' requirements.</p> 

      <p>In addition to our core software development services, we also offer support, maintenance, and training to ensure that our clients are able to get the most out of their solutions. We have a track record of successful projects and satisfied clients, and we are proud to be a trusted partner for businesses and organizations looking to leverage the power of technology.</p>
  </div>
  <div class="col-lg-5 col-sm-12">
    <img class="sec-2-o rotating" ref="image" src="../../src/assets/sec-2-o.png" alt="">
  </div>
                </div>

            
            </div>
        </Transition>
        
        </div>
    </div>
</template>

<script>
 
export default {
  name: 'SectionTwo',
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,700;1,200;1,400;1,700&family=Open+Sans:wght@400;600;700&family=Solitreo&display=swap');
#body{
 
    .sec-2-content{
      padding: 50px;
      
        .sec-2-o{
            width: 100%;
            animation: floater 1.5s infinite;
            transition: ease 0.5s;
            margin-left: 50px;
            @media (max-width:700px) {
              margin-left: 0px;
            }
        }
        @-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating  10s linear infinite;
  -moz-animation: rotating  10s linear infinite;
  -ms-animation: rotating  10s linear infinite;
  -o-animation: rotating  10s linear infinite;
  animation: rotating  10s linear infinite;
}
@keyframes floater {
  0%{transform: translateY(-10%);transition: ease 0.5s;}
  50%{transform: translateY(10%);transition: ease 0.5s;}
}
 

        opacity: 0;
        h1{
            font-family: 'Solitreo', cursive;
            font-size: 50px;
            font-weight: 600;

        }
        p{
            font-family: 'IBM Plex Mono', monospace;
            text-align: justify;

        }
       
    }
    position: relative;
    padding-top: 150px;
    height: 100vh;
    @media (max-width:700px) {
      height: 200vh;
    }
}
 
 
</style>
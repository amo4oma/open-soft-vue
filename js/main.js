VANTA.DOTS({
    el: ".about",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 300.00,
    minWidth: 300.00,
    scale: 2.00,
    scaleMobile: 1.00,
    backgroundColor: '#0F3D3E',
    size: 4.20,
    spacing: 70.00,
    showLines: false,
    backgroundAlpha: '#0F3D3E'
  })
  VANTA.WAVES({
    el: ".contact",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x1
  })

  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {          
        $('.navbar').css('height','60px')
        $('.logo').css('width','100px');
    }
    else{
        $('.navbar').css('height','100px')
        $('.logo').css('width','200px');
    }
    });

    VANTA.GLOBE({
        el: "#servises",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        showLines: false,
        scaleMobile: 1.00,
        color: 0xffaf3f,
        size: 1.20,
        backgroundColor: '#2C3333'
      })

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });


      gsap.registerPlugin(ScrollTrigger,TextPlugin);


      
let tl = gsap.timeline({
    scrollTrigger :{
        trigger : ".about",
        pin: true, 
        markers:true,
        toggleActions: 'play none play none',
        scrub: true,
        nullTargetWarn: false,
        start : "top top",
        end: '+=1500',
      }
        });

        tl.to('.about-title',5,{opacity:0, y:-150},'f')
        tl.to('.o',5,{width:400, x:'-90%'},'f')
        tl.to('.o',5,{rotation:360},'s')
        tl.to('.about-container',5,{opacity:1, y:'-50%'},'s')
        tl.to('.about-container',5,{opacity:1, y:'-100%', opacity:0},'t')
   
        tl.to('.o',5,{rotation:360*2},'t')
        tl.to('.secondary-slide',5,{opacity:1, y:'-50%'},'forth') 
        tl.to('.o',5,{rotation:360*2},'forth')
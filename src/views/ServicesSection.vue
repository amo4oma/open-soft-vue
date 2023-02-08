<template>
  <section id="services-2" class="services-2 d-flex flex-column">

    <div class="title">
      <h1>What we bring to the tabel</h1>
      <span></span>


    </div>


    <div class="container swiper">
      <div class="row d-flex">
        <div class="col-lg-3 col-sm-12 text-center">
          <div class="swiper-slide">
            <div class="service-card">
              <img class="card-image"
                src="../assets/support.png" alt="">
              <h2>Support & analysis </h2>
              <div class="inner-card-body">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim laboriosam sunt labore accusantium
                  tenetur distinctio pariatur perferendis cupiditate iure deleniti! Tempore, suscipit maiores ipsam
                  ullam omnis eligendi totam commodi aliquam!</p>

              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-12">
          <div class="swiper-slide">
            <div class="service-card">
              <img class="card-image"
                src="../assets/sys.png" alt="">
              <h2>Systems</h2>
              <div class="inner-card-body">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim laboriosam sunt labore accusantium
                  tenetur distinctio pariatur perferendis cupiditate iure deleniti! Tempore, suscipit maiores ipsam
                  ullam omnis eligendi totam commodi aliquam!</p>

              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-12">
          <div class="swiper-slide">
            <div class="service-card">
              <img class="card-image"
                src="../assets/mobile.png" alt="">
              <h2>Mobile App</h2>
              <div class="inner-card-body">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim laboriosam sunt labore accusantium
                  tenetur distinctio pariatur perferendis cupiditate iure deleniti! Tempore, suscipit maiores ipsam
                  ullam omnis eligendi totam commodi aliquam!</p>

              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-12">
          <div class="swiper-slide">
            <div class="service-card">
              <img class="card-image"
                src="../assets/web.png" alt="">
              <h2>Web App</h2>
              <div class="inner-card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim laboriosam sunt labore accusantium
                  tenetur distinctio pariatur perferendis cupiditate iure deleniti! Tempore, suscipit maiores ipsam
                  ullam omnis eligendi totam commodi aliquam!</p>
              </div>
            </div>
          </div>
        </div>
      </div>





    </div>
  </section>
 

</template>
    
    
<script>


export default {
  data: () => ({

  }),
  components: {

  },
  setup() {
    return {

    };
  },
};
</script>




<style lang="scss">
.title{
  position: relative;
  z-index: 1;
  span{
    height: 20px;
    width: 100%;
    background-color: #58fb9e;
    opacity: 0.5;
    position: absolute;
    top: 20%;
  
    z-index: 0  ;
  }
}
.card-image{
  width: 100%;
  border-radius: 100%;
}
#services-2 {
 
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 150px;
  padding-bottom: 150px;
 .title{
  h1{font-family: 'Solitreo', cursive;
    padding-bottom: 50px;
    font-size: 45px;
    font-weight: 600;
    z-index: 1;
    position: relative;
  @media (max-width:700px) {
    padding-left: 5px;
    padding-right: 5px;
    font-size: 35px;
    text-align: center;
    z-index: 1;
  
  }
  }
 }
  }

  .swiper-slide {
        text-align: center;
        border-radius: 25px;
        width: 18rem !important;
        padding: 25px;
        height: 320px;
        background-color: #3A8891;
        overflow-y: hidden;
        position: relative;
        color: #e5e5e5;
        @media (max-width:700px) {
          margin-top: 20px;
          margin-left: 30px;
        }

        .service-card {
          position: relative;

          transition: transform 250ms;
        }

        &:hover {
          .service-card {
            transform: translateY(-229px);

          }
        }

      }

 
</style>
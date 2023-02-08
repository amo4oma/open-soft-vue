<template>
    <section id="products" class="products">
  
      <div class="title">
        <h1>Our Products</h1>
    
  
      </div>
  
  
      <div class="container swiper">
        <div class="row">
          <div class="col-lg-3 col-sm-12">
          
              <div class="products-card">
                <img class="card-image"
                  src="../assets/erp.png" alt="">
                <h2>Education ERP System</h2>
                <div class="inner-card-body">
  
                  <p>It assists institutes to manage all administrative and academic tasks in a single integrated system. Vidyalaya School ERP provides access to appropriate information and functions to all members of the school community, including school Management Administrators, Teaching & Non-Teaching Staff, Students, and Parents.</p>
  
                </div>
              </div>
     
          </div>
          <div class="col-lg-3 col-sm-12">
          
              <div class="products-card">
                <img class="card-image"
                  src="../assets/myservies.png" alt="">
                <h2>My Services Mobile App</h2>
                <div class="inner-card-body">
  
                  <p>Mobile App that help users to order any Services any time just in few clicks, also helps all workers to get jobs easily</p>
  
                </div>
              </div>
         
          </div>
          <div class="col-lg-3 col-sm-12">
          
              <div class="products-card">
                <img class="card-image"
                  src="../assets/prentsControl.png" alt="">
                <h2>Parents Control App</h2>
                <div class="inner-card-body">
  
                  <p>high-quality Parents control app that can track child location, Block websites and app, make reports and more</p>
  
                </div>
              </div>
         
          </div>
          <div class="col-lg-3 col-sm-12">
          
              <div class="products-card">
                <img class="card-image"
                  src="../assets/educationApp.png" alt="">
                <h2>Education Tracking App</h2>
                <div class="inner-card-body">
                  <p>Ta mobile app that help students and parents get updates about the student status, such as Attendance, Financial status, classes updates, news, and more</p>
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
  .products{
    height: 100vh;
    padding-top: 150px;
    text-align: center;
    padding-bottom: 50px;
    @media (max-width:700px) {
        height: 300vh;
    }
    .title{
      h1{
        font-family: 'Solitreo', cursive;
        padding-bottom: 50px;
        font-size: 40px;
        font-weight: 600;
        
      } 
    }
  }
 .products-card{
 width: 100%;
 background-color: #F0EEED;
 height: 100%;
 display: flex;
 flex-wrap: wrap;
 align-items: center;
 justify-content: space-around;
 color: #332C39;
 font-family: 'IBM Plex Mono', monospace;
 img{
    width: 250px;
 }
 text-align: center;
 .inner-card-body{
    color: #332C39;
    text-align: center;
 }
 
 }
  
 
  
  
   
  </style>
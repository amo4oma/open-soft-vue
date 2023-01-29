<template>
 
 <nav class="navbar navbar-expand-lg fixed-top" ref="headRef">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img class="logo" src="../assets/nav-logo.png" alt=""></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
 
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
      vueOnScroll() {
      
        const refs = this.$refs.headRef; // assign the reference in variable
        window.addEventListener("scroll", () => {
          var curr = window.pageYOffset;
          if (curr > 1900) {
            refs.classList.add("scrolled");
            refs.classList.remove("scrollDown");
            console.log(curr)
          } else {
            refs.classList.add("scrollDown");
            refs.classList.remove("scrolled");
            console.log(curr)
          }
          if (curr === 0) {
            refs.classList.remove("scrollDown");
            refs.classList.remove("scrolled");

          }
           
        });
      },
    },
    mounted() {
      // run the function when the component's mount
      this.vueOnScroll();
    }
  }
 
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,700;1,200;1,400;1,700&family=Open+Sans:wght@400;600;700&display=swap');
nav{
    background-color: transparent;
 
padding-right:100px !important;
 
z-index: 5;
height: 100px;
font-family: 'IBM Plex Mono', monospace;
font-family: 'Open Sans', sans-serif;
transition: all 1s;
 
   
 
  
    }
    .logo{
        width: 200px;
        transition: all 1s;
    }
    .nav-item{
        margin-right: 40px;
         
    }
    .nav-link{
      color: #BE1522;
    }
    .scrolled{
  background-color: rgba($color: #E7E7E7, $alpha: 0.99);
  height: 50px;
  .logo{
    width:100px;
  }
}
</style>

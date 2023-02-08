<template>
      <section id="contact" class="contact">

<div class="container">
  <h1>Contact Us</h1>
  <div class="row">
    <div class="col-lg-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.9884635086337!2d44.1953096!3d15.322862099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1603db4a1e1f9857%3A0x79061fa025d89203!2sOpen%20Soft%20for%20Information%20Technology%20and%20Systems!5e0!3m2!1sen!2s!4v1673162908136!5m2!1sen!2s"
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="col-lg-6">
      <form action="">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Name</label>
          <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Name">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
          <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="+967-7">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Message<span
              class="material-symbols-outlined">
              mail
            </span></label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button class="read-more-btn">Send<span></span></button>
      </form>
    </div>
  </div>
</div>

</section>
<footer>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-sm-6">
                <img src="../assets/logo.png" alt="">
                <ul>
                    <li><a href="#">Home</a> </li>
                    <li><a href="#">About</a> </li>
                    <li><a href="#">Products</a> </li>
                    <li><a href="#">Contact</a> </li>
                </ul>
            </div>
            <div class="col-lg-3 col-sm-6 mt-5">
                <ul class="mt-5">
                    <li><a href="#">Email: info@opensoftye.com</a> </li>
                    <li><a href="#">Phone: +967-777512545</a> </li>
                    <li><a href="#">Address: 60 St. next to Alamarai'e, Sana'a, Yemen </a> </li>
                    <li><a href="#">Contact</a> </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
</template>

<style lang="scss">
iframe{
    width: 100%;
}
footer{
    background-color: #332C39;
    height: 100%;
    width: 100%;
    margin-top: 150px;
    img{
        width: 150px;
        margin-top: 30px;
    }
    li{
        color: #e5e5e5;
        list-style: none;
        margin-top: 5px;
        a{
            text-decoration: none;
            color: #e5e5e5;
        }
    }
}
.contact{
    height: 100%;
    margin-top: 150px;
}
form {

input,
textarea {
  background-color: #000;
  border: rgb(0, 190, 168) 1px solid !important;
  color: rgb(0, 190, 168);

  &::placeholder {
    color: rgb(0, 190, 168);
  }


}

button {
  background-color: rgb(0, 190, 168);
  color: #000;
  width: 150px;
  height: 30px;
  border-radius: 5px;

  &:hover {
    background-color: #5f0a00;
    color: #e5e5e5;

    span {
      background-color: #5f0a00;
      color: #fff;
    }
  }

  span {
    background-color: rgb(0, 190, 168);
    color: #000000;
  }
}
}
</style>
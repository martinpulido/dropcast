<template>
  <div id="app">
    <div id="site__bg"></div>
    <div class="main">

      <!-- Navigation component -->
      <navigation>
      </navigation>

      <!-- Site component -->
      <site>
      </site>

      <!-- Episodes component -->
      <episodes>
      </episodes>
      
    </div>
    
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <footer>
      <p class="footer__content">Dropcast is a template made by <a href="https://amie-chen.com">Amie Chen</a> exclusively for Codrops</p>
      <div class="logo footer__logo">
        <a href="https://tympanus.net/codrops/"><img src="./assets/images/logo-white.svg" alt="logo"/></a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  @import "https://use.fontawesome.com/releases/v5.0.6/css/all.css";
  @import "https://fonts.googleapis.com/css?family=Rufina:400,700|Source+Sans+Pro:200,300,400,600,700";
</style>

<style lang="scss">
  @import "src/assets/scss/variable.scss";
  @import "src/assets/scss/animation.scss";
  @import "src/assets/scss/base.scss";

  /* Small Devices, Tablets */
  @media only screen and (min-width : 1000px) {
    /* main page */
    body {
      position: relative;
    }
    
    footer {
      padding-left: 110px;
      margin-bottom: -1rem;
    }

    .main {
      display: flex;
      padding-left: 60px;
    }
  }
</style>

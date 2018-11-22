<template>
  <div id="app">
    <div id="site__bg"></div>
    <div class="main">

      <nav>
        <div class="logo nav__logo">
          <a href="index.html"><img src="assets/images/logo.svg" alt="logo"/></a>
        </div>
        <ul class="nav__list">
          <li class="nav__item"><a href="#">Episodes</a></li>
        </ul>
        <ul class="nav__social">
          <li><a href="#" class="nav_social__item"><i class="fab fa-google-play"></i></a></li>
          <li><a href="#" class="nav_social__item"><i class="fab fa-itunes-note"></i></a></li>
          <li><a href="#" class="nav_social__item"><i class="fas fa-rss-square"></i></a></li>
        </ul>
      </nav>
      
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

<style lang="scss">
  @import "src/assets/scss/variable.scss";
  @import "src/assets/scss/animation.scss";
  @import "src/assets/scss/base.scss";
  @import "src/assets/scss/site.scss";
</style>

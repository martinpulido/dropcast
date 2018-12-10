<template>
  <div id="app" class="app-container">

    <!-- Home component 
    <home></home>-->

    <router-view></router-view>

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

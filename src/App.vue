<template>
  <div id="app" class="app-container">

    <router-link :to="{name: 'episode-detail', params:{id: 1}}" style="display: inline-block; font-size: 1em; color: white; text-align: left; padding-left: 200px; position: relative; z-index: 2000;">Al 1</router-link>
    <router-link :to="{name: 'episode-detail', params:{id: 2}}" style="display: inline-block; font-size: 1em; color: white; text-align: left; padding-left: 200px; position: relative; z-index: 2000;">Al 2</router-link>
    <router-link :to="{name: 'episode-detail', params:{id: 3}}" style="display: inline-block; font-size: 1em; color: white; text-align: left; padding-left: 200px; position: relative; z-index: 2000;">Al 3</router-link>
    <router-link :to="{name: 'episode-detail', params:{id: 4}}" style="display: inline-block; font-size: 1em; color: white; text-align: left; padding-left: 200px; position: relative; z-index: 2000;">Al 4</router-link>

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

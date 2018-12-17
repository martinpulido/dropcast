<template>
  <nav>
    <div class="logo nav__logo">
      <router-link :to="{name: 'root'}">
        <img src="../assets/images/logo.svg" alt="Dropcast logo"/>
      </router-link>
    </div>
    <ul class="nav__list">
      <li class="nav__item"><router-link :to="{name: 'root'}">Episodes</router-link></li>
    </ul>
    <ul class="nav__social">
      <li v-for="(socialIcon, index) in socialIcons" v-bind:key="index">
        <a :href="socialIcon.url" class="nav_social__item"><i :class="socialIcon.icon"></i></a>
      </li>
    </ul>
    <router-link :to="{name: 'episode-detail', params:{id: 2}}">Ir al 2</router-link>
    <router-link :to="{name: 'episode-detail', params:{id: 3}}">Ir al 3</router-link>
  </nav>
</template>

<script>
export default {
  name: 'navigation',
  data(){
    return {
      socialIcons: [
        {url: '#', icon: 'fab fa-google-play'},
        {url: '#', icon: 'fab fa-itunes-note'},
        {url: '#', icon: 'fas fa-rss-square'}
      ]
    }
  }
}
</script>

<style lang="scss">
  // Import variable.scss (TODO: Import file globally)
  @import "src/assets/scss/variable.scss";
  
  // Now can add component styles or import SCSS file
  @import "src/assets/scss/nav.scss";

  // Add navigation mediaqueries from 'mediaqueries.scss' original file
  // TODO: Move this mq styles into 'nav.scss'
  // Or leave this styles here. (Nice example to import styles and write styles)

  /* Small Devices, Tablets */
  @media only screen and (min-width : 1000px) {
    /* main page */
    nav {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      flex-direction: column;
      width: 60px;
      transition: .5s;
    }
    /* nav */
    .nav__list {
      transform: rotate(90deg);
      transform-origin: 0px 150% 0px;
    }
    .nav__item {
      font-size: .8rem;
      letter-spacing: 2px;
      a {
        font-weight: 600;
      }
    }
    .nav__social {
      display: block;
    }
  }
</style>

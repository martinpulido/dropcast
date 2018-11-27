<template>
  <section class="site">
    <h1 class="site__title site__title--separator">{{title}}</h1>
    <p class="site__description">{{description}}</p>
  </section>
</template>

<script>
export default {
    name: 'site',
    data(){
      return {
        title: 'Dropcast',
        description: 'A podcast discussing the anything web related with the world’s experts'
      }
    }
}
</script>

<style lang="scss">
  // Import variable.scss (TODO: Import file globally)
  @import "src/assets/scss/variable.scss";

  // Now can add component styles or import SCSS file
  @import "src/assets/scss/site.scss";

  // Add navigation mediaqueries from 'mediaqueries.scss' original file
  // TODO: Move this mq styles into 'nav.scss'
  // Or leave this styles here. (Nice example to import styles and write styles)
  
  /* Custom, iPhone Retina */ 
  @media only screen and (min-width : 320px) {
    .page--detail {
      .site {
        padding-bottom: 5rem;
        padding-top: 5rem;
      }
    }
  }
  /* Small Devices, Tablets */
  @media only screen and (min-width : 1000px) {
    #site__bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      display: block;
    }
    .site {
      padding-top: 4rem;
      padding-left: 4rem;
      flex: 1;
    }

    /* page detail */
    .page--detail {
      flex-direction: row;
      .site {
        display: flex;
        padding: 0 0 0 60px;
      }
    }
    .site__secondary_title {
      display: block;
    }
  }
</style>

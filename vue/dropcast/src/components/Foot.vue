<template>
  <footer>
    <p class="footer__content">{{this.descriptionInit}} <a :href="this.authorLink">{{this.author}}</a> {{this.descriptionEnd}}</p>
    <div class="logo footer__logo">
      <a href="https://tympanus.net/codrops/"><img src="../assets/images/logo-white.svg" alt="logo"/></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'site',
  data(){
    return {
      author: 'Amie Chen',
      authorLink: 'https://amie-chen.com',
      descriptionInit: 'Dropcast is a template made by',
      descriptionEnd: 'exclusively for Codrops'
    }
  }
  /*,
  computed: {
    fullDescription(){
      return this.descriptionInit + ' <a href="' + this.authorLink + '">' + this.author + '</a> ' + this.descriptionEnd;
    }
  }
  */
}
</script>

<style lang="scss">
  // Import variable.scss (TODO: Import file globally)
  @import "src/assets/scss/variable.scss";

  // Footer styles from 'base.scss'
  footer {
    background-color: $darkGray;
    display: flex;
    padding: .5rem 2rem;
    font-size: 1rem;
    font-weight: 300;
    .footer__content {
      width: 60%;
    }
    .footer__logo {
      width: 40%;
      text-align: right;
      align-self: center;
      margin-top: 0.5rem 0 -0.5rem 0;
    }
  }

  // Add footer mediaqueries from 'mediaqueries.scss' original file
  /* Small Devices, Tablets */
  @media only screen and (min-width : 1000px) {
    footer {
      padding-left: 110px;
      margin-bottom: -1rem;
    }
  }
</style>

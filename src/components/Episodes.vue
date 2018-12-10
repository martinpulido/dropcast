<template>
  <section class="episodes" v-if="authors !== null">

    <article class="episode" v-for="(author, index) in authors" v-bind:key="index">
      <h2 class="episode__number" v-html="getLeadingZeroId(author.id)"></h2>
      <div class="episode__media">
        <a href="detail.html" class="episode__image__container">
          <img :src="getProfileImg(author.id)" :alt=author.full_name class="episode__image" />
        </a>
      </div>
      <div class="episode__detail">
        <router-link :to="{name: 'episode-detail', params:{id: author.id}}" class="episode__title"><h4>{{author.full_name}}</h4></router-link>
        <p class="episode__description">{{author.summary}}</p>
      </div>
    </article>

  </section>
  <section class="episodes" v-else>
    <span class="loading">Loading authors</span>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  name: 'authors-list',
  mounted(){
    this.getAuthors();
  },
  data(){
    return {
      index: null,
      authors: null
    }
  },
  methods: {
    getAuthors(){
      axios.get('https://martinpulido.github.io/dropcast/vue/dropcast/api/authors.json')
            .then((answer) => {
              this.authors = answer.data;
            })
    },
    getProfileImg(id){
      return require('../assets/images/photos/'+id+'_original.png');
    },
    getLeadingZeroId(id){
      let leadingZero = (id < 10)? '0'+id : id;
      return leadingZero;
    }
  }
}
</script>

<style lang="scss">
  // Import variable.scss (TODO: Import file globally)
  @import "src/assets/scss/variable.scss";

  // Now can add component styles or import SCSS file
  @import "src/assets/scss/episode.scss";

  // Add navigation mediaqueries from 'mediaqueries.scss' original file
  // TODO: Move this mq styles into 'nav.scss'
  // Or leave this styles here. (Nice example to import styles and write styles)
  
  /* Small Devices, Tablets */
  @media only screen and (min-width : 1000px) {
    /* episodes */
    .episodes {
      display: flex;
      flex-wrap: wrap;
      margin: 160px 0 0 50px;
      max-width: 800px;
    }
    .episode {
      flex-direction: column;
      max-width: 220px;
      margin-right: 2rem;
      margin-bottom: 3rem;
      &:hover {
        .episode__detail:before {
          display: none;
        }
      }
    }
    .episode__number {
      display: block;
    }
    .episode__media {
      width: 100%;
      height: 294px;
      max-width: 200px;
    }
    .episode__detail {
      width: 100%;
    }
    .episode__description {
      font-size: 1rem;
      font-weight: 300;
    }
  }
</style>

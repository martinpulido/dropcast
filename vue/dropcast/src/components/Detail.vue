<template>
  <div class="page--detail">
    
    <!-- Navigation component -->
    <navigation>
    </navigation>

    <section class="site">
      <div id="site__bg"></div>
      <div class="left">
        <label for="" class="site__label">Episode #{{episodeDetail.id}}</label>
        <h1 class="site__title site__title--separator">{{episodeDetail.full_name}}</h1>
      </div>
      <div class="right">
        <img :src="getProfileImg(episodeDetail.id)" :alt=episodeDetail.full_name class="episode__image" />
      </div>
    </section>
    
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'episode-detail',
  mounted(){
    this.id = this.$route.params.id;
    this.getEpisodeData(this.id);
  },
  data(){
    return {
      id: null,
      episodeDetail: null
    }
  },
  methods: {
    getEpisodeData(id){
      console.log('episode id: ' + id);
      axios.get('https://martinpulido.github.io/dropcast/vue/dropcast/api/authors.json')
            .then((answer) => {
              let episodes = answer.data;
              episodes.forEach(episode => {
                if(parseInt(episode.id) === parseInt(id)){
                  this.episodeDetail = episode;
                  console.log(this.episodeDetail);
                }
              });
              
            })

    },
    getProfileImg(id){
      return require('../assets/images/photos/'+id+'_original.png');
    }
  }
}
</script>

<style lang="scss">
  // Import variable.scss (TODO: Import file globally)
  @import "src/assets/scss/variable.scss";

  // Now can add component styles or import SCSS file
  @import "src/assets/scss/site.scss";

  // Add detail/site mediaqueries from 'mediaqueries.scss' original file
  // TODO: Move this mq styles into 'site.scss'
  // Or leave this styles here. (Nice example to import styles and write styles)

  .page--detail {
    .site__title {
      margin-top: 0;
    }
  }

  /* Custom, iPhone Retina */ 
  @media only screen and (min-width : 320px) {
    .page--detail {
      .site {
        padding-bottom: 5rem;
        padding-top: 5rem;
      }
    }
    .left {
      .site__title.site__title--separator:after {
        display: none;
      }
    }
    .right {
      .episode__image {
        width: 100px;
        float: left;
        margin: 1.5rem 1rem 0 0;
        border-radius: 2px;
      }
      .playBtn {
        display: none;
      }
    }
  }

  /* Small Devices, Tablets */
  @media only screen and (min-width : 1000px) {
    /* page detail */
    .page--detail {
      flex-direction: row;
      .site {
        display: flex;
        padding: 0 0 0 60px;
      }
    }

    .left,
    .right {
      width: 50%;
    }

    .left {
      padding-left: 5rem;
      padding-top: 5rem;
      display: flex;
      flex-direction: column;
      .site__title.site__title--separator:after {
        display: block;
        width: 100px;
      }
      .episode__date {
        padding: 1rem 0 2rem 0;
        color: $purple;
        font-weight: 500;
        font-size: 1rem;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      background-color: $gray;
      position: relative;
      .episode__image {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: .1;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        width: 100%;
        margin: 0;
        float: none;
        object-fit: cover;
      }
      .site__description {
        color: $darkGray;
        font-weight: 500;
        font-size: 1rem;
        margin: 0 5rem auto 5rem;
      }
      .site__playbar {
        margin: 5rem 3rem 0 3rem;
      }
      .site__navigation {
        margin: 2rem 0;
      }
    }
  }
</style>

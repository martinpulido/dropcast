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
        <!--img :src="getProfileImg(episodeDetail.id)" :alt=episodeDetail.full_name class="episode__image" / -->
        <img src="../assets/images/photos/1_original.png" alt="" class="episode__image">
        <div class="audio-player site__playbar">
          <div class="loading">
            <div class="spinner"></div>
          </div>
          <button class="play-pause-btn play"></button>
          <div class="controls">
            <span class="current-time">0:00</span>
            <div class="slider" data-direction="horizontal">
              <div class="progress">
                <div class="pin" id="progress-pin" data-method="rewind"></div>
              </div>
            </div>
            <span class="total-time">0:00</span>
          </div>

          <audio preload="true">
            <source src="assets/audio/example.ogg" type="audio/ogg" />
            <source src="assets/audio/example.mp3" type="audio/mpeg">
          </audio>
        </div>
        <h4 class="site__secondary_title">Show Notes</h4>
        <p class="site__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <a href="#">industry's standard</a> dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the <a href="#">1960s</a> with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make <a href="#">a type specimen book</a>. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div class="site__navigation">
          <!-- toggle on the previous as needed -->
          <a href="#" class="site__navigation_items site__navigation_items--left hidden">
            <label for="">Previous Episode</label>
            <h4>Dylan Perry</h4>
          </a>
          <a href="#" class="site__navigation_items site__navigation_items--right">
            <label for="">Next Episode</label>
            <h4>Dylan Perry</h4>
          </a>
        </div>
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
      axios.get('https://martinpulido.github.io/dropcast/api/authors.json')
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
        height: 100%;
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
      position: relative;
      flex-direction: row;
      min-height: 100%;
      .site {
        display: flex;
        padding: 0 0 0 60px;
        min-height: 100%;
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

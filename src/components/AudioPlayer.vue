<template>
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

    <audio preload="true" v-if="audiofiles !== null" >
      <!-- source :src="getFilePath(audio.file)" /-->
      <source v-for="(audio, index) in audiofiles" v-bind:key="index" :src="getFilePath(audio.file)" :type=audio.type  />
    </audio>
  </div>
</template>

<script>
  //import Player from './assets/js/player.js';
  export default {
    props: ['audiofiles'],
    mounted(){
      console.log('ln: ' + this.audiofiles[0].file);
      console.log(this.getFilePath(this.audiofiles[0].file));
    },
    methods: {
      getFilePath(name){
        //console.log('Nombre archivo: ' + name);
        return require('../assets/audio/'+name);
      }
    }
  }
</script>

<style lang="scss">
  // Import variable.scss (TODO: Import file globally)
  @import "src/assets/scss/variable.scss";

  // Now can add component styles or import SCSS file
  @import "src/assets/scss/audioplayer.scss";

  // Add audioplayer mediaqueries from 'mediaqueries.scss' original file
  // TODO: Move this mq styles into 'audioplayer.scss'
  // Or leave this styles here. (Nice example to import styles and write styles)
  /* Custom, iPhone Retina */ 
  @media only screen and (min-width : 320px) {
    .right {
      .playBtn {
        display: none;
      }
    }
  }

  /* Small Devices, Tablets */
  @media only screen and (min-width : 1000px) {
    /* audio player */
    .site__playbar {
      background: white;
      box-shadow: 0 2px 10px 0 rgba(0,0,0,0.10);
    }

    .audio-player {
      position: inherit;
      background-color: white;
      margin-right: 5rem;
      border-radius: 4px;
    }
  }

</style>

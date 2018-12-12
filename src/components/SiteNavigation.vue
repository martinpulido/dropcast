<template>

  <div class="site__navigation">
    <!-- toggle on the previous as needed -->
    <a href="#" class="site__navigation_items site__navigation_items--left" :class="[(prevEpisode == null)? 'hidden' : '']">
      <span class="subtitle">{{this.previousText}}</span>
      <h4 class="title">Anterior</h4>
    </a>
    <a href="#" class="site__navigation_items site__navigation_items--right" :class="[(nextEpisode == null)? 'hidden' : '']">
      <span class="subtitle">{{this.nextText}}</span>
      <h4 class="title">Siguiente </h4>
    </a>
  </div>

</template>

<script>
  export default {
    name: 'site-navigation',
    props: ['prevEpisode', 'nextEpisode'],
    mounted() {
      
    },
    data(){
      return {
        previousText: 'Previous Episode',
        nextText: 'Next Episode',
        prev: null,
        next: null
      }
    }
  }
</script>

<style lang="scss">
  
</style>



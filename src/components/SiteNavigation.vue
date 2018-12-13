<template>

  <div class="site__navigation">
    
    <router-link :to="{name: 'episode-detail', params:{id: prevEpisode.id}}" class="site__navigation_items site__navigation_items--left" :class="[(prevEpisode == null)? 'hidden' : '']">
      <span class="subtitle">{{this.previousText}}</span>
      <h4 class="title" v-html="prevEpisode.full_name"></h4>
    </router-link>
    
    <router-link :to="{name: 'episode-detail', params:{id: nextEpisode.id}}" class="site__navigation_items site__navigation_items--right" :class="[(nextEpisode == null)? 'hidden' : '']">
      <span class="subtitle">{{this.nextText}}</span>
      <h4 class="title" v-html="nextEpisode.full_name"></h4>
    </router-link>
  </div>

</template>

<script>
  export default {
    name: 'site-navigation',
    props: ['prevEpisode', 'nextEpisode'],
    data(){
      return {
        previousText: 'Previous Episode',
        nextText: 'Next Episode'
      }
    }
  }
</script>

<style lang="scss">
  
</style>



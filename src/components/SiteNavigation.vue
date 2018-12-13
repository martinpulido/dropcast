<template>

  <div class="site__navigation">
    <div v-if="prevEpisode !== null">
      <router-link :to="{name: 'episode-detail', params:{id: prevEpisode.id}}" class="site__navigation_items site__navigation_items--left" :class="[(prevEpisode == null)? 'hidden' : '']">
        <span class="subtitle">{{this.previousText}}</span>
        <h4 class="title" v-html="prevEpisode.full_name"></h4>
      </router-link>
    </div>
    <div v-else></div>
    
    <div v-if="nextEpisode !== null">
      <router-link :to="{name: 'episode-detail', params:{id: nextEpisode.id}}" class="site__navigation_items site__navigation_items--right" :class="[(nextEpisode == null)? 'hidden' : '']">
        <span class="subtitle">{{this.nextText}}</span>
        <h4 class="title" v-html="nextEpisode.full_name"></h4>
      </router-link>
    </div>
    <div v-else></div>
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



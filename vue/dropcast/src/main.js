import Vue from 'vue'
import App from './App.vue'
import Navigation from './components/Navigation.vue'
import Site from './components/Site.vue'
import Episodes from './components/Episodes.vue'

Vue.component('navigation', Navigation);
Vue.component('site', Site);
Vue.component('episodes', Episodes);

new Vue({
  el: '#app',
  render: h => h(App)
})

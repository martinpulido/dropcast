import Vue from 'vue'
import App from './App.vue'
import Navigation from './components/Navigation.vue'
import Site from './components/Site.vue'

Vue.component('navigation', Navigation);
Vue.component('site', Site);

new Vue({
  el: '#app',
  render: h => h(App)
})

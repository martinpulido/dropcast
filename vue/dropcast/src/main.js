import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue';
import Navigation from './components/Navigation.vue'
import Site from './components/Site.vue'
import Foot from './components/Foot.vue'
import Episodes from './components/Episodes.vue'

Vue.component('home', Home);
Vue.component('navigation', Navigation);
Vue.component('site', Site);
Vue.component('foot', Foot);
Vue.component('episodes', Episodes);

new Vue({
  el: '#app',
  render: h => h(App)
})

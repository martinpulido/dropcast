import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'
import Navigation from './components/Navigation.vue'
import Site from './components/Site.vue'
import Foot from './components/Foot.vue'
import Episodes from './components/Episodes.vue'

Vue.use(VueRouter);

const routes = [
  {path: '/', name: 'root', component: Home},
  {path: '/home', name: 'home', component: Home},
  {path: '/episode/:id', name: 'episode-detail', component: Detail}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.component('home', Home);
Vue.component('detail', Detail);
Vue.component('navigation', Navigation);
Vue.component('site', Site);
Vue.component('foot', Foot);
Vue.component('episodes', Episodes);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

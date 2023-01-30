import Vue from 'vue'
import App from './App.vue'
//import VModal from 'vue-js-modal'
import VueRouter from 'vue-router'
//import VueSession from 'vue-session';
//import VueResource from 'vue-resource';
import Bootstrap from'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.css'
import Routes from './routes';

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(Bootstrap)
Vue.use(VueRouter);
//Vue.use(VueResource);
//Vue.use(VueSession);
//Vue.use(VModal);
const router=new VueRouter({
  routes: Routes,
  mode:'history'
});
new Vue({
  render: h => h(App),
  router: router

}).$mount('#app')

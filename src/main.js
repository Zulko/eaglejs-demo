// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import Home from './Home'

import Eagle from 'eagle.js'
import 'eagle.js/dist/eagle.css'

import slideshows from './slideshows/slideshows.js'
/* eslint-disable no-new */

Vue.use(Eagle)
Vue.use(Router)
Vue.config.productionTip = false

var routes = []
slideshows.list.forEach(function (slideshow) {
  routes.push({
    path: '/' + slideshow.infos.path,
    component: slideshow
  })
})
routes.push({ path: '*', component: Home })

var router = new Router({
  routes
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

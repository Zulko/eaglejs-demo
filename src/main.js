import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import Home from './Home'

import Eagle, { Options, Presenter, CodeBlock, CodeComment, Toggle, RadioButton, Timer, TriggeredMessage, Modal, ImageSlide } from 'eagle.js'
import hljs from 'highlight.js'
import 'animate.css/animate.compat.css'

import slideshows from './slideshows/slideshows.js'
/* eslint-disable no-new */

Vue.use(Eagle)
Vue.use(Router)
Vue.config.productionTip = false
Options.hljs = hljs
Eagle.use(Presenter)
Eagle.use(CodeBlock)
Eagle.use(CodeComment)
Eagle.use(Toggle)
Eagle.use(RadioButton)
Eagle.use(Timer)
Eagle.use(TriggeredMessage)
Eagle.use(Modal)
Eagle.use(ImageSlide)

const routes = []
slideshows.list.forEach(function (slideshow) {
  routes.push({
    path: '/' + slideshow.infos.path,
    component: slideshow
  })
})
routes.push({ path: '*', component: Home })

const router = new Router({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h('App'),
  components: { App }
})

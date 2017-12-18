import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const mota = () => import('@/views/mota')
const pixilearn = () => import('@/views/pixilearn')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mota',
      name: 'mota',
      component: mota
    },{
      path: '/pixilearn',
      name: 'pixilearn',
      component: pixilearn
    }
  ]
})

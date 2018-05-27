import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import targetmap from '@/view/targetmap'
import safecontrol from '@/view/safecontrol'
import home from '@/view/home'

Vue.use(Router)


export default new Router({
  routes: [
      {
          path: '/targetmap',
          name: 'targetmap',
          component: targetmap
      },
      {
        path: '/safecontrol',
        name: 'safecontrol',
        component: safecontrol
      },
      {
        path: '/home',
        name: 'home',
        component: home
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
import Tab1 from '@/components/tabs/tab1.vue'
import Tab2 from '@/components/tabs/tab2.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', redirect: '/index'},
    { path: '/index', component: HelloWorld },
    { path: '/Left', component: Left },
    {
      path: '/Right',
      component: Right,
      redirect: '/Right/Tab1',
      children: [
        { path: 'Tab1', component: Tab1 },
        { path: 'Tab2', component: Tab2 }
      ]
    }
  ]
})
/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/page/login'
import manage from '@/page/manage'
import home from '@/page/home'

Vue.use(Router)

// const HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld')))

export default new Router({
  routes: [
    {
      path: '/',
      //  name: 'HelloWorld',
      component: login
    },
    {
      path: '/manage',
      component: manage,
      name: '',
      children: [
        {
          path: '',
          component: home,
          meta:[]
        }
      ]
    }
  ]
})

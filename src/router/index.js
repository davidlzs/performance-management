/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/page/login'

Vue.use(Router)

// const HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld')))

export default new Router({
  routes: [
    {
      path: '/',
      //  name: 'HelloWorld',
      component: login
    }
  ]
})

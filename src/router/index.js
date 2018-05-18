import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/pages/login'], resolve)
    },
    {
      path: '/',
      name: 'layout',
      component: resolve => require(['@/pages/layout'], resolve),
      children: [{
        name: 'firstpage',
        path: 'firstpage',
        component: resolve => require(['@/pages/firstpage/showPage'], resolve),
        meta: {
          requireAuth: true
        }

      }]
    },
    {
      path: '/401',
      component: resolve => require(['@/pages/errorPage/401'], resolve),
    },
    {
      path: '/403',
      component: resolve => require(['@/pages/errorPage/403'], resolve),
    },
    {
      path: '/404',
      component: resolve => require(['@/pages/errorPage/404'], resolve),
    },
    {
      path: '/500',
      component: resolve => require(['@/pages/errorPage/500'], resolve),
    },
    { path: '*', redirect: '/404' }
  ]
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)){
    console.log(to)
    console.log(from)
    next()
    // if(!getToken()){
    //   next({
    //     path: '/login',
    //     query: {redirect: to.fullPath}
    //   })
    // }else{
      // if (!store.getters.name) {
      //   store.dispatch('GetUserInfo').then(() => {
      //     next()
      //   })
      //     .catch(() => {
      //       store.dispatch('LogOut').then(() => {
      //         next({ path: '/login' })
      //       })
      //     })
      // } else {
      //   next()
      // }
    //}
  }else{
    next()
  }
})

export default router

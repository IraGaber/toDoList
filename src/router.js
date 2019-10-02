import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
<<<<<<< HEAD
import signIn from './components/signIn.vue'

=======
>>>>>>> 6902caacae1a38f1596f16194fb91eb110a4755f

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
<<<<<<< HEAD
    {
      path: '/login',
      name: 'login',
      component: signIn
    },
=======
>>>>>>> 6902caacae1a38f1596f16194fb91eb110a4755f
  ]
})

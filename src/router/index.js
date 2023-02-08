import { createRouter, createWebHistory } from 'vue-router'
import Banner from '../views/Banner.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Banner
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Banner.vue')
},
{
  path: '/services',
  name: 'SectionTwo',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/SectionTwo.vue')
 
},
{
  path: '/products',
  name: 'SectionTwo',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/SectionTwo.vue')
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

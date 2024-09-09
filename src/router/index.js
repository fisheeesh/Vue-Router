import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobsView from '@/views/jobs/JobsView.vue'
import JobDetail from '@/views/jobs/JobDetail.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path : '/jobs',
    name : 'jobs',
    component : JobsView
  },
  //dynamic route
  {
    path : '/jobDetail/:id',
    name : 'jobDetail',
    component : JobDetail,
    props : true
  },
  //redirect
  {
    path : '/all-jobs',
    redirect : '/jobs'
  },
  //catchAll
  {
    path :'/:catchAll(.*)',
    component : NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

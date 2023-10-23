import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyCreate from '../components/MyCreate.vue'
import MyEdit from '../components/MyEdit.vue'
import MyShow from '../components/MyShow.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
{
    path: '/create',
    name: 'create',
    component: MyCreate
},
{
    path: '/edit',
    name: 'edit',
    component: MyEdit
},
{
    path: '/show',
    name: 'show',
    component: MyShow
},

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

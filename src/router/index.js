import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,Navbar,Footer
  },
  {
    path: '/allProducts',
    name: 'allProducts',
    component: () => import( '../views/AllProducts.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/singleProduct',
    name: 'singleProduct',
    component: () => import('../views/SingleProduct.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

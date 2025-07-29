import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Terms from '@/views/Terms.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 
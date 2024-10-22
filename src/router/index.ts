import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PrivacyPolicy from '../components/PrivacyPolicy.vue'
import LegalNotice from '../components/LegalNotice.vue'
import CookiePolicy from '../components/CookiePolicy.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/privacy-policy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy
    },
    {
      path: '/legal-notice',
      name: 'LegalNotice',
      component: LegalNotice
    },
    {
      path: '/cookie-policy',
      name: 'CookiePolicy',
      component: CookiePolicy
    }
  ]
})

export default router
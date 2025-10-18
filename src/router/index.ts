import { createRouter, createWebHistory } from 'vue-router'

// Detect browser language for initial redirect
const detectBrowserLanguage = (): string => {
  if (typeof window !== 'undefined') {
    const browserLang = navigator.language || navigator.languages?.[0]
    if (browserLang?.startsWith('id')) {
      return 'id'
    }
  }
  return 'en'
}

// Get stored language preference or detect from browser
const getInitialLocale = (): string => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('locale')
    if (stored && ['en', 'id'].includes(stored)) {
      return stored
    }
  }
  return detectBrowserLanguage()
}

// Import components
const Home = () => import('@/views/Home.vue')
const PricingPage = () => import('@/views/PricingPage.vue')
const Terms = () => import('@/views/Terms.vue')
const PrivacyPolicy = () => import('@/views/PrivacyPolicy.vue')

// Routes without language prefix for internal use
const baseRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: PricingPage
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

// Create routes with language prefixes
const createLocalizedRoutes = (locale: string) => {
  return baseRoutes.map(route => ({
    ...route,
    path: `/${locale}${route.path === '/' ? '' : route.path}`,
    name: `${locale}${route.name}`,
    meta: {
      locale,
      baseName: route.name
    }
  }))
}

const routes = [
  // Root redirect to default language
  {
    path: '/',
    redirect: () => {
      const locale = getInitialLocale()
      return `/${locale}`
    }
  },
  // Language-specific routes
  ...createLocalizedRoutes('en'),
  ...createLocalizedRoutes('id'),
  // Catch all for invalid routes
  {
    path: '/:pathMatch(.*)*',
    redirect: () => {
      const locale = getInitialLocale()
      return `/${locale}`
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: to.hash }
    } else {
      return { top: 0 }
    }
  }
})

// Navigation guard to handle locale
router.beforeEach((to, _from, next) => {
  const locale = to.meta.locale as string || getInitialLocale()
  
  // Store locale for i18n to use
  if (typeof window !== 'undefined') {
    localStorage.setItem('locale', locale)
  }
  
  next()
})

export default router
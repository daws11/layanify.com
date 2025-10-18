import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'

export function useLocale() {
  const { locale, t } = useI18n()
  const router = useRouter()
  const route = useRoute()

  const currentLocale = computed(() => locale.value)

  const setLocale = (newLocale: string) => {
    if (newLocale === locale.value) return

    // Update i18n locale
    locale.value = newLocale
    
    // Store in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale)
    }

    // Navigate to the same page with new locale
    const currentBaseName = route.meta.baseName as string
    
    if (currentBaseName) {
      // Find the corresponding route for the new locale
      const newRouteName = `${newLocale}${currentBaseName}`
      const newRoute = router.resolve({ name: newRouteName })
      
      if (newRoute.matched.length > 0) {
        router.push({ name: newRouteName, query: route.query, hash: route.hash })
      }
    }
  }

  const getLocalizedPath = (path: string, targetLocale?: string) => {
    const target = targetLocale || locale.value
    
    // Remove existing locale prefix if present
    const cleanPath = path.replace(/^\/(en|id)/, '')
    
    // Add new locale prefix
    if (cleanPath === '/') {
      return `/${target}`
    }
    
    return `/${target}${cleanPath}`
  }

  const switchLanguage = (targetLocale: string) => {
    // Prevent unnecessary navigation if already on the target locale
    if (targetLocale === locale.value) return
    
    // Update i18n locale immediately for better UX
    locale.value = targetLocale
    
    // Store in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', targetLocale)
    }

    // Navigate to the same page with new locale
    const currentBaseName = route.meta.baseName as string
    
    if (currentBaseName) {
      // Find the corresponding route for the new locale
      const newRouteName = `${targetLocale}${currentBaseName}`
      const newRoute = router.resolve({ name: newRouteName })
      
      if (newRoute.matched.length > 0) {
        // Use replace to avoid adding to history stack
        router.replace({ name: newRouteName, query: route.query, hash: route.hash })
      }
    }
  }

  return {
    currentLocale,
    setLocale,
    getLocalizedPath,
    switchLanguage,
    t
  }
}
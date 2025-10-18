import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import id from './locales/id.json'

// Detect browser language
const detectBrowserLanguage = (): string => {
  if (typeof window !== 'undefined') {
    const browserLang = navigator.language || navigator.languages?.[0]
    // Check if Indonesian language is detected
    if (browserLang?.startsWith('id')) {
      return 'id'
    }
  }
  return 'en' // Default to English
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

const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  availableLocales: ['en', 'id'],
  messages: {
    en,
    id
  },
  globalInjection: true
})

export default i18n
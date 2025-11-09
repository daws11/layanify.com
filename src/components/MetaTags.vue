<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { locale } = useI18n()

const metaTags = computed(() => {
  const baseTitle = 'Layanify - AI Customer Service'
  const title = locale.value === 'id' 
    ? 'Layanify - Layanan Pelanggan AI'
    : baseTitle
  
  const description = locale.value === 'id'
    ? 'Otomatisasi layanan pelanggan WhatsApp & Instagram, tangani pemesanan, dan jawab FAQ 24/7. Semua dengan paket bayar sesuai penggunaan. Mulai gratis.'
    : 'Automate WhatsApp & Instagram customer service, handle bookings, and answer FAQs 24/7. All with a pay-as-you-go plan. Start free.'

  const keywords = locale.value === 'id'
    ? 'AI customer service, otomasi WhatsApp, chatbot Instagram, layanan pelanggan 24/7, booking otomatis, Layanify'
    : 'AI customer service, WhatsApp automation, Instagram chatbot, 24/7 customer support, automated booking, Layanify'

  const currentPath = route.path
  const canonicalUrl = `https://layanify.com${currentPath}`
  
  const alternateUrls = {
    en: `https://layanify.com/en${currentPath.replace(/^\/(en|id)/, '')}`,
    id: `https://layanify.com/id${currentPath.replace(/^\/(en|id)/, '')}`
  }

  return {
    title,
    description,
    keywords,
    canonicalUrl,
    alternateUrls,
    locale: locale.value,
    currentPath
  }
})
</script>

<template>
  <div>
    <!-- Primary Meta Tags -->
    <title>{{ metaTags.title }}</title>
    <meta name="description" :content="metaTags.description" />
    <meta name="keywords" :content="metaTags.keywords" />
    <meta name="author" content="Layanify" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" :content="metaTags.canonicalUrl" />
    <meta property="og:title" :content="metaTags.title" />
    <meta property="og:description" :content="metaTags.description" />
    <meta property="og:image" content="https://layanify.com/layanify-dark.jpg" />
    <meta property="og:locale" :content="metaTags.locale === 'id' ? 'id_ID' : 'en_US'" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" :content="metaTags.canonicalUrl" />
    <meta property="twitter:title" :content="metaTags.title" />
    <meta property="twitter:description" :content="metaTags.description" />
    <meta property="twitter:image" content="https://layanify.com/layanify-dark.jpg" />
    
    <!-- Canonical URL -->
    <link rel="canonical" :href="metaTags.canonicalUrl" />
    
    <!-- Alternate Language Links -->
    <link rel="alternate" :href="metaTags.alternateUrls.en" hreflang="en" />
    <link rel="alternate" :href="metaTags.alternateUrls.id" hreflang="id" />
    <link rel="alternate" :href="metaTags.canonicalUrl" :hreflang="metaTags.locale" />
    <link rel="alternate" href="https://layanify.com" hreflang="x-default" />
    
    <!-- Additional Meta Tags -->
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="language" :content="metaTags.locale" />
    
    <!-- Structured Data -->
    <component :is="'script'" type="application/ld+json">
      {{ JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Layanify",
        "description": metaTags.description,
        "url": "https://layanify.com",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0.05",
          "priceCurrency": "USD"
        },
        "author": {
          "@type": "Organization",
          "name": "Layanify"
        }
      }) }}
    </component>
    <component :is="'script'" type="application/ld+json">
      {{ JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Layanify",
        "url": "https://layanify.com",
        "logo": "https://layanify.com/layanify-dark.jpg"
      }) }}
    </component>
  </div>
</template>
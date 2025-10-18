<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import MetaTags from '@/components/MetaTags.vue'

const route = useRoute()
const { locale } = useI18n()

// Update i18n locale based on route
onMounted(() => {
  const routeLocale = route.meta.locale as string
  if (routeLocale && locale.value !== routeLocale) {
    locale.value = routeLocale
  }
})

// Watch for route changes
watch(() => route.meta.locale as string, (newLocale) => {
  if (newLocale && locale.value !== newLocale) {
    locale.value = newLocale
  }
})
</script>

<template>
  <MetaTags />
  <router-view />
</template>
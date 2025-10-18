<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '@/composables/useLocale'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Globe } from 'lucide-vue-next'

const { currentLocale, switchLanguage, t } = useLocale()

const languages = [
  { code: 'en', name: t('language_switcher.english'), flag: '🇺🇸' },
  { code: 'id', name: t('language_switcher.indonesian'), flag: '🇮🇩' }
]

const currentLanguage = computed(() => 
  languages.find(lang => lang.code === currentLocale.value)
)

const handleLanguageChange = (locale: string) => {
  switchLanguage(locale)
}
</script>

<template>
  <div class="flex items-center gap-2">
    <Globe class="w-4 h-4 text-muted-foreground" />
    <Select :model-value="currentLocale" @update:model-value="handleLanguageChange">
      <SelectTrigger class="w-[140px] h-9">
        <SelectValue>
          <div class="flex items-center gap-2">
            <span class="text-lg">{{ currentLanguage?.flag }}</span>
            <span class="text-sm">{{ currentLanguage?.name }}</span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem 
          v-for="language in languages" 
          :key="language.code" 
          :value="language.code"
          class="cursor-pointer"
        >
          <div class="flex items-center gap-2">
            <span class="text-lg">{{ language.flag }}</span>
            <span>{{ language.name }}</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
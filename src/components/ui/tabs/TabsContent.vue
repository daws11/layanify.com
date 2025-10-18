<script setup lang="ts">
import { inject, computed } from 'vue'

interface TabsContextValue {
  modelValue: string
}

const props = defineProps<{
  value: string
}>()

const tabs = inject<TabsContextValue>('tabs')

const isActive = computed(() => tabs?.modelValue === props.value)
</script>

<template>
  <div v-if="isActive" class="mt-2">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { inject, computed } from 'vue'

interface TabsContextValue {
  modelValue: string
  updateValue: (value: string) => void
}

const props = defineProps<{
  value: string
}>()

const tabs = inject<TabsContextValue>('tabs')

const isActive = computed(() => tabs?.modelValue === props.value)

const handleClick = () => {
  if (tabs) {
    tabs.updateValue(props.value)
  }
}
</script>

<template>
  <button
    :class="[
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
      isActive ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:bg-background/50'
    ]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
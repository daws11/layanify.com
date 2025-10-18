<script setup lang="ts">
import { inject } from 'vue'

interface TabsContextValue {
  modelValue: string
}

inject<TabsContextValue>('tabs')
</script>

<template>
  <div class="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
    <slot />
  </div>
</template>
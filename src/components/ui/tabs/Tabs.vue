<script setup lang="ts">
import { provide, ref, watch } from 'vue'

interface TabsContextValue {
  modelValue: string
  updateValue: (value: string) => void
}

const props = defineProps<{
  modelValue?: string
  defaultValue?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const modelValue = ref(props.modelValue || props.defaultValue || '')

watch(modelValue, (newValue) => {
  emit('update:modelValue', newValue)
})

const updateValue = (value: string) => {
  modelValue.value = value
}

provide<TabsContextValue>('tabs', {
  get modelValue() { return modelValue.value },
  updateValue
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
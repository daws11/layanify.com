<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  modelValue?: number[]
  defaultValue?: number[]
  min?: number
  max?: number
  step?: number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: number[]]
}>()

const internalValue = ref(props.modelValue || props.defaultValue || [0])
const isDragging = ref(false)
const sliderRef = ref<HTMLElement>()

const percentage = computed(() => {
  const [value] = internalValue.value
  const min = props.min || 0
  const max = props.max || 100
  return ((value - min) / (max - min)) * 100
})

const updateValue = (clientX: number) => {
  if (!sliderRef.value) return

  const rect = sliderRef.value.getBoundingClientRect()
  const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
  const min = props.min || 0
  const max = props.max || 100
  const step = props.step || 1
  
  const rawValue = min + percentage * (max - min)
  const steppedValue = Math.round(rawValue / step) * step
  const clampedValue = Math.max(min, Math.min(max, steppedValue))
  
  internalValue.value = [clampedValue]
  emit('update:modelValue', [clampedValue])
}

const handleMouseDown = (e: MouseEvent) => {
  isDragging.value = true
  updateValue(e.clientX)
}

const handleMouseMove = (e: MouseEvent) => {
  if (isDragging.value) {
    updateValue(e.clientX)
  }
}

const handleMouseUp = () => {
  isDragging.value = false
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
})
</script>

<template>
  <div
    ref="sliderRef"
    class="relative flex h-5 w-full touch-none select-none items-center"
    @mousedown="handleMouseDown"
  >
    <div class="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <div
        class="absolute h-full bg-primary"
        :style="{ width: `${percentage}%` }"
      />
    </div>
    <div
      class="absolute left-1/2 top-1/2 block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      :style="{ left: `${percentage}%`, transform: 'translate(-50%, -50%)' }"
    />
  </div>
</template>
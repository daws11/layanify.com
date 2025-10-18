<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

const props = defineProps<{
  value: number;
  duration?: number;
  format?: (value: number) => string;
}>();

const displayValue = ref(0);
const isAnimating = ref(false);

const defaultFormat = (value: number) => {
  return value.toLocaleString('id-ID');
};

const formatValue = props.format || defaultFormat;

const animateValue = () => {
  if (isAnimating.value) return;
  
  isAnimating.value = true;
  const startValue = displayValue.value;
  const endValue = props.value;
  const duration = props.duration || 1000;
  const startTime = Date.now();
  
  const animate = () => {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
    
    displayValue.value = currentValue;
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      isAnimating.value = false;
    }
  };
  
  requestAnimationFrame(animate);
};

watch(() => props.value, () => {
  animateValue();
});

onMounted(() => {
  animateValue();
});
</script>

<template>
  <span>{{ formatValue(displayValue) }}</span>
</template>
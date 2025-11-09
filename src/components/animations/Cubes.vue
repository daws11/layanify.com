<script setup lang="ts">
import { computed } from "vue";

type Cube = {
  leftPercent: number;
  topPercent: number;
  sizePx: number;
  delaySec: number;
  durationSec: number;
  opacity: number;
  initialRotateDeg: number;
};

const props = withDefaults(
  defineProps<{
    count?: number;
  }>(),
  {
    count: 12,
  }
);

const cubes = computed<Cube[]>(() => {
  const items: Cube[] = [];
  for (let i = 0; i < props.count; i++) {
    items.push({
      leftPercent: 5 + Math.random() * 90, // keep inside container
      topPercent: 5 + Math.random() * 90,
      sizePx: Math.round(10 + Math.random() * 12), // 10-22px
      delaySec: +(Math.random() * 2).toFixed(2), // 0-2s
      durationSec: +(3 + Math.random() * 4).toFixed(2), // 3-7s
      opacity: +(0.25 + Math.random() * 0.35).toFixed(2), // 0.25-0.6
      initialRotateDeg: Math.round(Math.random() * 360),
    });
  }
  return items;
});
</script>

<template>
  <div class="relative w-full h-full">
    <span
      v-for="(cube, idx) in cubes"
      :key="idx"
      class="cube"
      :style="{
        left: cube.leftPercent + '%',
        top: cube.topPercent + '%',
        width: cube.sizePx + 'px',
        height: cube.sizePx + 'px',
        opacity: String(cube.opacity),
        animationDelay: cube.delaySec + 's',
        // We use a css var to pass duration cleanly to CSS
        '--cube-duration': cube.durationSec + 's',
        '--cube-rot': cube.initialRotateDeg + 'deg',
      } as any"
    />
  </div>
  <!-- Note: parent container should control overall size using width/height classes -->
</template>

<style scoped>
.cube {
  position: absolute;
  border-radius: 3px;
  background-color: hsl(var(--primary) / 0.12);
  border: 1px solid hsl(var(--primary) / 0.36);
  box-shadow: 0 1px 2px hsl(var(--primary) / 0.18), inset 0 0 0 1px hsl(var(--primary) / 0.1);
  will-change: transform, opacity;
  animation-name: cube-float;
  animation-duration: var(--cube-duration, 4s);
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes cube-float {
  0% {
    transform: translateY(0) scale(1) rotate(var(--cube-rot, 0deg));
    filter: saturate(1);
  }
  100% {
    transform: translateY(-24px) scale(1.05) rotate(calc(var(--cube-rot, 0deg) + 10deg));
    filter: saturate(1.1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .cube {
    animation: none !important;
  }
}
</style>



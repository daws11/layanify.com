<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { ref, onMounted, computed } from "vue";
import { useLocale } from "@/composables/useLocale";
import { trackEvent } from "@/lib/utils";
import Cubes from "@/components/animations/Cubes.vue";
const mode = useColorMode();

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-vue-next";

const { t } = useLocale();

// Hero titles that will rotate on each refresh
const heroTitles = computed(() => [
  {
    title: t('hero.titles.title1'),
    gradient: t('hero.titles.gradient1')
  },
  {
    title: t('hero.titles.title2'),
    gradient: t('hero.titles.gradient2')
  },
  {
    title: t('hero.titles.title3'),
    gradient: t('hero.titles.gradient3')
  },
  {
    title: t('hero.titles.title4'),
    gradient: t('hero.titles.gradient4')
  }
]);

// Select a random title on component mount
const currentTitle = ref(heroTitles.value[0]);

onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  const variant = params.get('v'); // A | B
  if (variant === 'A') {
    currentTitle.value = heroTitles.value[0];
  } else if (variant === 'B') {
    currentTitle.value = heroTitles.value[1];
  } else {
    const randomIndex = Math.floor(Math.random() * heroTitles.value.length);
    currentTitle.value = heroTitles.value[randomIndex];
  }
});

const onPrimaryCtaClick = () => {
  const params = new URLSearchParams(window.location.search);
  const variant = params.get('v') || 'random';
  trackEvent('cta_click', { location: 'hero', variant });
};
</script>

<template>
  <section class="container">
    <div
      class="lg:max-w-screen-xl mx-auto py-20 md:py-32 relative"
    >
      <!-- Grid container with 2 columns on large screens -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        <!-- Left Column: Text Content -->
        <div class="space-y-6 relative z-10">
          <!-- Social Proof Badge -->
          <div class="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground">
            <CheckCircle class="w-4 h-4 text-green-500" />
            <span>{{ t('hero.trusted_by') }}</span>
          </div>

          <!-- Title -->
          <div class="text-center lg:text-left">
            <h1 class="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              {{ currentTitle.title }}
              <span
                class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
                >{{ currentTitle.gradient }}
              </span>
            </h1>
          </div>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button class="font-bold group/arrow bg-green-600 hover:bg-green-700" @click="onPrimaryCtaClick">
              {{ t('hero.start_free') }}
              <ArrowRight
                class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform"
              />
            </Button>

            <Button
              as-child
              variant="secondary"
              class="font-bold"
            >
              <a href="#pricing">{{ t('hero.see_pricing') }}</a>
            </Button>
          </div>

          <!-- Risk reversal subtext -->
          <p class="text-sm text-muted-foreground text-center lg:text-left">
            {{ t('how_it_works.setup_benefits') }}
          </p>
        </div>

        <!-- Right Column: Demo Image -->
        <div class="relative group">
          <!-- gradient shadow -->
          <div
            class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation"
          ></div>

          <img
            class="w-full rounded-lg relative leading-none flex items-center border border-t-2 border-t-primary/30 img-border-animation"
            :src="
              mode == 'light' ? 'layanify-light.jpg' : 'layanify-dark.jpg'
            "
            alt="AI dashboard handling customer messages automatically"
            fetchpriority="high"
            width="1200"
            height="675"
          />

          <!-- gradient effect img -->
          <div
            class="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"
          ></div>
        </div>
      </div>

      <!-- Left cubes ornament (hidden on mobile) -->
      <div class="pointer-events-none absolute top-0 left-0 hidden lg:block z-0">
        <Cubes class="w-[380px] h-[380px] xl:w-[420px] xl:h-[420px] 2xl:w-[480px] 2xl:h-[480px] opacity-80" :count="18" />
      </div>

      <!-- Right cubes ornament (hidden on mobile) -->
      <div class="pointer-events-none absolute top-0 right-0 hidden lg:block z-0">
        <Cubes class="w-[380px] h-[380px] xl:w-[420px] xl:h-[420px] 2xl:w-[480px] 2xl:h-[480px] opacity-80" :count="18" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.img-shadow-animation {
  animation-name: img-shadow-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

.img-border-animation {
  animation-name: img-border-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

@keyframes img-shadow-animation {
  from {
    opacity: 0.5;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes img-border-animation {
  from {
    @apply border-t-primary/10;
  }

  to {
    @apply border-t-primary/60;
  }
}
</style>

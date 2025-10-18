<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { ref, onMounted, computed } from "vue";
import { useLocale } from "@/composables/useLocale";
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
  const randomIndex = Math.floor(Math.random() * heroTitles.value.length);
  currentTitle.value = heroTitles.value[randomIndex];
});
</script>

<template>
  <section class="container">
    <div
      class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32"
    >
      <div class="text-center space-y-8">
        <!-- Social Proof Badge -->
        <div class="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <CheckCircle class="w-4 h-4 text-green-500" />
          <span>{{ t('hero.trusted_by') }}</span>
        </div>

        <div
          class="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold"
        >
          <h1>
            {{ currentTitle.title }}
            <span
              class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
              >{{ currentTitle.gradient }}
            </span>
          </h1>
        </div>

        <p class="max-w-screen-sm mx-auto text-xl text-muted-foreground">
          {{ t('hero.description') }}
        </p>

        <div class="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
          <Button class="w-5/6 md:w-auto font-bold group/arrow bg-green-600 hover:bg-green-700">
            {{ t('hero.start_free') }}
            <ArrowRight
              class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform"
            />
          </Button>

          <Button
            as-child
            variant="secondary"
            class="w-5/6 md:w-auto font-bold"
          >
            <a href="#pricing">{{ t('hero.see_pricing') }}</a>
          </Button>
        </div>
      </div>

      <div class="relative group mt-14">
        <!-- gradient shadow -->
        <div
          class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation"
        ></div>

        <img
          class="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-t-primary/30 img-border-animation"
          :src="
            mode == 'light' ? 'layanify-light.jpg' : 'layanify-dark.jpg'
          "
          alt="AI dashboard handling customer messages automatically"
        />

        <!-- gradient effect img -->
        <div
          class="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"
        ></div>
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

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useLocale } from "@/composables/useLocale";
import { trackEvent } from "@/lib/utils";
import DashboardPreview from "@/components/DashboardPreview.vue";
import PhoneMockup from "@/components/PhoneMockup.vue";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-vue-next";

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

// Store the selected title index (not the title object itself)
const selectedTitleIndex = ref(0);

// Computed property that derives the current title from the index
// This ensures reactivity when language changes
const currentTitle = computed(() => heroTitles.value[selectedTitleIndex.value]);

onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  const variant = params.get('v'); // A | B
  if (variant === 'A') {
    selectedTitleIndex.value = 0;
  } else if (variant === 'B') {
    selectedTitleIndex.value = 1;
  } else {
    selectedTitleIndex.value = Math.floor(Math.random() * heroTitles.value.length);
  }
});

const onPrimaryCtaClick = () => {
  const params = new URLSearchParams(window.location.search);
  const variant = params.get('v') || 'random';
  trackEvent('cta_click', { location: 'hero', variant });
};
</script>

<template>
  <section class="container relative overflow-hidden">
    <div class="max-w-screen-xl mx-auto pt-20 pb-16 md:pt-32 md:pb-24">
      <!-- Grid container -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <!-- Left Column: Text Content -->
        <div class="space-y-8 relative z-10 text-center lg:text-left">
          <!-- Social Proof Badge -->
          <div class="animate-in fade-in slide-in-from-bottom-4 duration-700 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 backdrop-blur-sm border border-border text-sm text-muted-foreground">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>{{ t('hero.trusted_by') }}</span>
          </div>

          <!-- Title -->
          <div class="space-y-6">
            <h1 class="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-balance">
              {{ currentTitle.title }}
              <span class="text-transparent bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text">
                {{ currentTitle.gradient }}
              </span>
            </h1>
            <p class="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 text-balance">
              {{ t('hero.description') }}
            </p>
          </div>

          <!-- CTAs -->
          <div class="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <Button 
              size="lg" 
              class="font-semibold text-base px-8 h-12 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:scale-105" 
              @click="onPrimaryCtaClick"
            >
              {{ t('hero.start_free') }}
              <ArrowRight class="w-4 h-4 ml-2" />
            </Button>

            <Button
              as-child
              variant="ghost"
              size="lg"
              class="font-semibold text-base h-12"
            >
              <a href="#pricing">{{ t('hero.see_pricing') }}</a>
            </Button>
          </div>

          <!-- Risk reversal subtext -->
          <div class="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
            <div class="flex items-center gap-1.5">
              <CheckCircle2 class="w-4 h-4 text-green-500" />
              <span>No credit card</span>
            </div>
            <div class="flex items-center gap-1.5">
              <CheckCircle2 class="w-4 h-4 text-green-500" />
              <span>Free Foreverl</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Preview (Phone on mobile, Dashboard on desktop) -->
        <div class="relative group perspective-1000 animate-in fade-in zoom-in-95 duration-1000 delay-200">
          
          <!-- Phone Mockup for Mobile/Tablet (< lg) -->
          <div class="lg:hidden">
            <PhoneMockup />
          </div>

          <!-- Dashboard Preview for Desktop (>= lg) -->
          <div class="hidden lg:block">
            <!-- Glow effect -->
            <div class="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            
            <div class="relative rounded-2xl shadow-premium overflow-hidden bg-card border border-border/50 transition-transform duration-500 hover:scale-[1.01] hover:rotate-y-2">
              <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10"></div>
              
              <!-- Dashboard Component -->
              <div class="aspect-[16/9] w-full bg-muted/10">
                <DashboardPreview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
.rotate-y-2 {
  transform: rotateY(-2deg);
}
</style>


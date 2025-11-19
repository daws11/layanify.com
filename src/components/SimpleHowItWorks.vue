<script setup lang="ts">
import { MessageCircle, Upload, CheckCircle2 } from "lucide-vue-next";
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    titleKey: "how_it_works.steps.0.title",
    descriptionKey: "how_it_works.steps.0.description"
  },
  {
    icon: Upload,
    number: "02", 
    titleKey: "how_it_works.steps.1.title",
    descriptionKey: "how_it_works.steps.1.description"
  },
  {
    icon: CheckCircle2,
    number: "03",
    titleKey: "how_it_works.steps.2.title",
    descriptionKey: "how_it_works.steps.2.description"
  }
];
</script>

<template>
  <section class="container py-20 md:py-32 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-3xl -z-10"></div>

    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-20">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-balance">
          {{ t('how_it_works.title') }}
          <span class="text-transparent bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text">
            {{ t('how_it_works.title_highlight') }}
          </span>
        </h2>
        <p class="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
          {{ t('how_it_works.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <!-- Connecting Line (Desktop) -->
        <div class="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -z-10"></div>

        <div
          v-for="{ icon, number, titleKey, descriptionKey } in steps"
          :key="number"
          class="group relative pt-8"
        >
          <!-- Step Number & Icon -->
          <div class="flex flex-col items-center mb-6">
            <div class="w-16 h-16 rounded-2xl bg-background border border-border shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <component :is="icon" class="w-8 h-8 text-primary" />
              <div class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-muted-foreground border border-background">
                {{ number }}
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="text-center px-4">
            <h3 class="font-bold text-xl mb-3 tracking-tight">{{ t(titleKey) }}</h3>
            <p class="text-muted-foreground leading-relaxed">{{ t(descriptionKey) }}</p>
          </div>
        </div>
      </div>

      <div class="mt-20 text-center">
        <div class="inline-flex flex-col sm:flex-row items-center gap-4 bg-secondary/30 rounded-2xl p-6 border border-border/50 backdrop-blur-sm">
          <div class="flex items-center gap-2 text-lg font-semibold text-foreground">
            <CheckCircle2 class="w-5 h-5 text-green-500" />
            {{ t('how_it_works.setup_time') }}
          </div>
          <div class="hidden sm:block w-px h-6 bg-border"></div>
          <p class="text-muted-foreground">
            {{ t('how_it_works.setup_benefits') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
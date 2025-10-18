<script setup lang="ts">
import { MessageCircle, Upload, CheckCircle } from "lucide-vue-next";
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();

const steps = [
  {
    icon: MessageCircle,
    number: "1",
    titleKey: "how_it_works.steps.0.title",
    descriptionKey: "how_it_works.steps.0.description"
  },
  {
    icon: Upload,
    number: "2", 
    titleKey: "how_it_works.steps.1.title",
    descriptionKey: "how_it_works.steps.1.description"
  },
  {
    icon: CheckCircle,
    number: "3",
    titleKey: "how_it_works.steps.2.title",
    descriptionKey: "how_it_works.steps.2.description"
  }
];
</script>

<template>
  <section class="container py-16 sm:py-24">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ t('how_it_works.title') }}
          <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
            {{ t('how_it_works.title_highlight') }}
          </span>
        </h2>
        <p class="text-lg text-muted-foreground">
          {{ t('how_it_works.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="{ icon, number, titleKey, descriptionKey } in steps"
          :key="number"
          class="relative"
        >
          <!-- Step Number -->
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg z-10">
            {{ number }}
          </div>

          <!-- Step Content -->
          <div class="bg-background rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow h-full pt-12">
            <div class="bg-primary/10 p-3 rounded-lg w-fit mb-4">
              <component :is="icon" class="w-8 h-8 text-primary" />
            </div>
            <h3 class="font-bold text-xl mb-3">{{ t(titleKey) }}</h3>
            <p class="text-muted-foreground">{{ t(descriptionKey) }}</p>
          </div>

          <!-- Connector Line (for desktop) -->
          <div 
            v-if="number !== '3'" 
            class="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30"
            style="transform: translateY(-50%);"
          ></div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
          <p class="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
            {{ t('how_it_works.setup_time') }}
          </p>
          <p class="text-green-700 dark:text-green-300">
            {{ t('how_it_works.setup_benefits') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
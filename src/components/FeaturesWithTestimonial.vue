<script setup lang="ts">
import { Calendar, Brain, Star, Quote } from "lucide-vue-next";
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();

const features = [
  {
    icon: Calendar,
    titleKey: "features.booking.title",
    descriptionKey: "features.booking.description",
    benefitKey: "features.booking.benefit"
  },
  {
    icon: Brain,
    titleKey: "features.memory.title",
    descriptionKey: "features.memory.description",
    benefitKey: "features.memory.benefit"
  }
];

const testimonial = {
  quoteKey: "testimonials.content",
  authorKey: "testimonials.author",
  businessKey: "testimonials.business",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Made&backgroundColor=b6e3f4,c0aede,d1d4f9",
  resultKey: "testimonials.result"
};
</script>

<template>
  <section class="container py-16 sm:py-24">
    <div class="max-w-6xl mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ t('features.title') }}
          <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
            {{ t('features.title_highlight') }}
          </span>
        </h2>
        <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
          {{ t('features.subtitle') }}
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div
          v-for="{ icon, titleKey, descriptionKey, benefitKey } in features"
          :key="titleKey"
          class="bg-background rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-all duration-200"
        >
          <div class="flex items-start gap-4">
            <div class="bg-primary/10 p-3 rounded-lg">
              <component :is="icon" class="w-8 h-8 text-primary" />
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-xl mb-3">{{ t(titleKey) }}</h3>
              <p class="text-muted-foreground mb-4">{{ t(descriptionKey) }}</p>
              <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
                <p class="text-sm font-semibold text-green-800 dark:text-green-200">
                  {{ t(benefitKey) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonial Section -->
      <div class="bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-2xl p-8 border border-primary/20">
        <div class="flex flex-col lg:flex-row items-center gap-8">
          <!-- Quote Content -->
          <div class="flex-1">
            <Quote class="w-8 h-8 text-primary mb-4" />
            <blockquote class="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
              "{{ t(testimonial.quoteKey) }}"
            </blockquote>
            
            <div class="flex items-center gap-4 mb-4">
              <img 
                :src="testimonial.avatar" 
                :alt="t(testimonial.authorKey)"
                class="w-12 h-12 rounded-full"
              />
              <div>
                <p class="font-semibold">{{ t(testimonial.authorKey) }}</p>
                <p class="text-muted-foreground">{{ t(testimonial.businessKey) }}</p>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <div class="flex">
                <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <span class="font-bold text-green-600">{{ t(testimonial.resultKey) }}</span>
            </div>
          </div>

          <!-- Visual Element -->
          <div class="lg:w-1/3">
            <div class="bg-background rounded-lg p-6 border border-border shadow-sm">
              <div class="text-center">
                <div class="text-3xl font-bold text-primary mb-2">{{ t('features.stats.availability') }}</div>
                <p class="text-muted-foreground">{{ t('features.stats.service') }}</p>
              </div>
              <div class="mt-4 space-y-2">
                <div class="flex justify-between text-sm">
                  <span>{{ t('features.stats.response_time') }}</span>
                  <span class="font-semibold">{{ t('features.stats.response_value') }}</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span>{{ t('features.stats.accuracy') }}</span>
                  <span class="font-semibold">{{ t('features.stats.accuracy_value') }}</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span>{{ t('features.stats.languages') }}</span>
                  <span class="font-semibold">{{ t('features.stats.languages_value') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Live Chat Widget Notice -->
      <div class="mt-8 text-center">
        <p class="text-sm text-muted-foreground">
          <span class="inline-flex items-center gap-1">
            <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            {{ t('features.live_chat_notice') }}
          </span>
        </p>
      </div>
    </div>
  </section>
</template>
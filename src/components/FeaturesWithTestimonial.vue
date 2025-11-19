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
  <section class="container py-20 md:py-32">
    <div class="max-w-6xl mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-20">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-balance">
          {{ t('features.title') }}
          <span class="text-transparent bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text">
            {{ t('features.title_highlight') }}
          </span>
        </h2>
        <p class="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
          {{ t('features.subtitle') }}
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
        <div
          v-for="{ icon, titleKey, descriptionKey, benefitKey } in features"
          :key="titleKey"
          class="group bg-card rounded-2xl p-8 border border-border/50 hover:border-border transition-all duration-300"
        >
          <div class="flex items-start gap-6">
            <div class="bg-primary/10 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <component :is="icon" class="w-8 h-8 text-primary" />
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-2xl mb-3 tracking-tight">{{ t(titleKey) }}</h3>
              <p class="text-muted-foreground mb-6 leading-relaxed">{{ t(descriptionKey) }}</p>
              <div class="inline-flex items-center gap-2 bg-secondary/50 rounded-lg px-3 py-1.5 text-sm font-medium text-secondary-foreground">
                <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                {{ t(benefitKey) }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonial Section -->
      <div class="relative rounded-3xl overflow-hidden border border-border/50 bg-secondary/20 p-8 md:p-12">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <!-- Quote Content -->
          <div class="flex-1 space-y-8">
            <Quote class="w-10 h-10 text-primary/20" />
            <blockquote class="text-2xl md:text-3xl font-medium leading-relaxed tracking-tight text-balance">
              "{{ t(testimonial.quoteKey) }}"
            </blockquote>
            
            <div class="flex items-center gap-4">
              <img 
                :src="testimonial.avatar" 
                :alt="t(testimonial.authorKey)"
                class="w-12 h-12 rounded-full border-2 border-background"
              />
              <div>
                <p class="font-semibold text-lg">{{ t(testimonial.authorKey) }}</p>
                <p class="text-muted-foreground">{{ t(testimonial.businessKey) }}</p>
              </div>
            </div>
          </div>

          <!-- Visual Element -->
          <div class="lg:w-[380px] w-full">
            <div class="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <div class="flex items-center justify-between mb-6">
                <div class="flex gap-1">
                  <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
                <span class="font-bold text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded text-sm">{{ t(testimonial.resultKey) }}</span>
              </div>
              
              <div class="space-y-4">
                <div class="flex justify-between items-center py-2 border-b border-border/50">
                  <span class="text-muted-foreground">{{ t('features.stats.response_time') }}</span>
                  <span class="font-mono font-semibold">{{ t('features.stats.response_value') }}</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b border-border/50">
                  <span class="text-muted-foreground">{{ t('features.stats.accuracy') }}</span>
                  <span class="font-mono font-semibold">{{ t('features.stats.accuracy_value') }}</span>
                </div>
                <div class="flex justify-between items-center py-2">
                  <span class="text-muted-foreground">{{ t('features.stats.languages') }}</span>
                  <span class="font-mono font-semibold">{{ t('features.stats.languages_value') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Live Chat Widget Notice -->
      <div class="mt-12 text-center">
        <p class="text-sm text-muted-foreground">
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {{ t('features.live_chat_notice') }}
          </span>
        </p>
      </div>
    </div>
  </section>
</template>
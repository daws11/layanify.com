<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, TrendingUp } from "lucide-vue-next";
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();
</script>

<template>
  <section class="container py-16 sm:py-24 bg-gradient-to-br from-primary/10 to-purple-500/10">
    <div class="max-w-4xl mx-auto text-center">
      <!-- Main CTA Content -->
      <div class="mb-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ t('cta.title') }}
          <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
            {{ t('cta.title_highlight') }}
          </span>
        </h2>
        
        <p class="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {{ t('cta.subtitle') }}
        </p>
      </div>

      <!-- Social Proof Numbers -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div class="bg-background rounded-lg p-4 border border-border">
          <Users class="w-6 h-6 text-primary mx-auto mb-2" />
          <div class="text-2xl font-bold">{{ t('cta.stats.businesses') }}</div>
          <div class="text-sm text-muted-foreground">{{ t('cta.stats.businesses_label') }}</div>
        </div>
        
        <div class="bg-background rounded-lg p-4 border border-border">
          <Clock class="w-6 h-6 text-primary mx-auto mb-2" />
          <div class="text-2xl font-bold">{{ t('cta.stats.hours') }}</div>
          <div class="text-sm text-muted-foreground">{{ t('cta.stats.hours_label') }}</div>
        </div>
        
        <div class="bg-background rounded-lg p-4 border border-border">
          <TrendingUp class="w-6 h-6 text-primary mx-auto mb-2" />
          <div class="text-2xl font-bold">{{ t('cta.stats.bookings') }}</div>
          <div class="text-sm text-muted-foreground">{{ t('cta.stats.bookings_label') }}</div>
        </div>
      </div>

      <!-- Primary CTA Button -->
      <div class="mb-6">
        <Button size="lg" class="text-lg px-8 py-6 bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 group">
          {{ t('cta.button') }}
          <ArrowRight 
            class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
          />
        </Button>
      </div>

      <!-- Risk Reversal Elements -->
      <div class="space-y-2 text-sm text-muted-foreground">
        <p v-for="benefit in t('cta.benefits').split('•')" :key="benefit">
          ✓ {{ benefit.trim() }}
        </p>
      </div>

      <!-- Urgency Element -->
      <div class="mt-8 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800 max-w-md mx-auto">
        <p class="text-sm font-semibold text-yellow-800 dark:text-yellow-200">
          {{ t('cta.urgency') }}
        </p>
      </div>
    </div>
  </section>
</template>
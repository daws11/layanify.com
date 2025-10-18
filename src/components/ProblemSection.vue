<script setup lang="ts">
import { Clock, MessageCircle, Users, TrendingDown } from "lucide-vue-next";
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();

const painPoints = [
  {
    icon: Clock,
    titleKey: "problem.points.0",
    descriptionKey: "problem.points.1"
  },
  {
    icon: TrendingDown,
    titleKey: "problem.points.2",
    descriptionKey: "problem.points.3"
  },
  {
    icon: MessageCircle,
    titleKey: "problem.points.4",
    descriptionKey: "problem.points.5"
  },
  {
    icon: Users,
    titleKey: "problem.points.6",
    descriptionKey: "problem.points.7"
  }
];
</script>

<template>
  <section class="container py-16 sm:py-24 bg-muted/30">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ t('problem.title') }}
          <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
            {{ t('problem.title_highlight') }}
          </span>
        </h2>
        <p class="text-lg text-muted-foreground">
          {{ t('problem.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="{ icon, titleKey, descriptionKey } in painPoints"
          :key="titleKey"
          class="bg-background rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
        >
          <div class="flex items-start gap-4">
            <div class="bg-red-100 dark:bg-red-900/20 p-2 rounded-lg">
              <component :is="icon" class="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h3 class="font-semibold text-lg mb-2">{{ t(titleKey) }}</h3>
              <p class="text-muted-foreground">{{ t(descriptionKey) }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 text-center">
        <p class="text-lg font-medium text-muted-foreground">
          {{ t('problem.cta_question') }}
        </p>
      </div>
    </div>
  </section>
</template>
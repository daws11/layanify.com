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
  <section class="container py-20 md:py-32">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-balance">
          {{ t('problem.title') }}
          <span class="text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text">
            {{ t('problem.title_highlight') }}
          </span>
        </h2>
        <p class="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
          {{ t('problem.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <div
          v-for="{ icon, titleKey, descriptionKey } in painPoints"
          :key="titleKey"
          class="group bg-card hover:bg-secondary/50 rounded-2xl p-8 border border-border/50 transition-all duration-300 hover:border-border"
        >
          <div class="flex items-start gap-6">
            <div class="bg-secondary group-hover:bg-background p-3 rounded-xl transition-colors">
              <component :is="icon" class="w-6 h-6 text-foreground/80" />
            </div>
            <div>
              <h3 class="font-semibold text-xl mb-3 tracking-tight">{{ t(titleKey) }}</h3>
              <p class="text-muted-foreground leading-relaxed">{{ t(descriptionKey) }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <p class="text-lg font-medium text-muted-foreground">
          {{ t('problem.cta_question') }}
        </p>
      </div>
    </div>
  </section>
</template>
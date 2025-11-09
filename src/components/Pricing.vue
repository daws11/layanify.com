<script setup lang="ts">
import { ref, computed } from 'vue';
import { useLocale } from "@/composables/useLocale";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, TrendingUp, Calculator, TrendingDown } from "lucide-vue-next";
import AnimatedNumber from "@/components/AnimatedNumber.vue";
import { trackEvent } from "@/lib/utils";

const { t } = useLocale();

enum PopularPlan {
  NO = 0,
  YES = 1,
}

type Plan = {
  title: string;
  popular: number;
  price: string;
  period: string;
  description: string;
  buttonText: string;
  benefitList: string[];
  buttonVariant?: string;
  highlight?: string;
  billedAnnually?: boolean;
  saveBadge?: string;
};



// Selected tab for pricing view
const activeTab = ref('monthly');

// Base monthly subscription plans
const baseMonthlyPlans = computed<Plan[]>(() => [
  {
    title: t('pricing.plans.starter.title'),
    popular: 0,
    price: t('pricing.plans.starter.price'),
    period: t('pricing.plans.starter.period'),
    description: t('pricing.plans.starter.description'),
    buttonText: t('pricing.plans.starter.button'),
    benefitList: [
      t('pricing.plans.starter.benefits.0'),
      t('pricing.plans.starter.benefits.1'),
      t('pricing.plans.starter.benefits.2'),
      t('pricing.plans.starter.benefits.3'),
    ],
    buttonVariant: "outline",
  },
  {
    title: t('pricing.plans.business.title'),
    popular: 1,
    price: t('pricing.plans.business.price'),
    period: t('pricing.plans.business.period'),
    description: t('pricing.plans.business.description'),
    buttonText: t('pricing.plans.business.button'),
    benefitList: [
      t('pricing.plans.business.benefits.0'),
      t('pricing.plans.business.benefits.1'),
      t('pricing.plans.business.benefits.2'),
      t('pricing.plans.business.benefits.3'),
      t('pricing.plans.business.benefits.4'),
    ],
    highlight: t('pricing.plans.business.highlight'),
  },
  {
    title: t('pricing.plans.pro.title'),
    popular: 0,
    price: t('pricing.plans.pro.price'),
    period: t('pricing.plans.pro.period'),
    description: t('pricing.plans.pro.description'),
    buttonText: t('pricing.plans.pro.button'),
    benefitList: [
      t('pricing.plans.pro.benefits.0'),
      t('pricing.plans.pro.benefits.1'),
      t('pricing.plans.pro.benefits.2'),
      t('pricing.plans.pro.benefits.3'),
      t('pricing.plans.pro.benefits.4'),
    ],
    buttonVariant: "outline",
  },
]);

// Compute display price for yearly (20% off, shown as per-month price billed annually)
function computeDiscountedPrice(price: string): string {
  if (!price) return price;
  // Examples: "Free", "Rp 199K", "Rp 699K", "Rp 0"
  const freeLike = /free/i.test(price) || /gratis/i.test(price);
  if (freeLike) return price;
  const match = price.match(/(\d+)\s*K/i);
  if (match) {
    const baseK = parseInt(match[1], 10);
    const discountedK = Math.round(baseK * 0.8);
    return price.replace(/(\d+)\s*K/i, `${discountedK}K`);
  }
  const numeric = price.match(/(\d[\d.]*)/);
  if (numeric) {
    const num = parseFloat(numeric[1].replace(/\./g, ''));
    const discounted = Math.round(num * 0.8);
    return price.replace(/(\d[\d.]*)/, discounted.toString());
  }
  return price;
}

const monthlyPlans = computed<Plan[]>(() => {
  return baseMonthlyPlans.value.map((p) => {
    if (activeTab.value !== 'yearly') return p;
    return {
      ...p,
      price: computeDiscountedPrice(p.price),
      period: p.period, // keep '/month'
      billedAnnually: true,
      saveBadge: 'Save 20%'
    };
  });
});

// Pay-as-you-go plans
const paygPlans = computed<Plan[]>(() => [
  {
    title: t('pricing.plans.flex.title'),
    popular: 1,
    price: t('pricing.plans.flex.price'),
    period: t('pricing.plans.flex.period'),
    description: t('pricing.plans.flex.description'),
    buttonText: t('pricing.plans.flex.button'),
    benefitList: [
      t('pricing.plans.flex.benefits.0'),
      t('pricing.plans.flex.benefits.1'),
      t('pricing.plans.flex.benefits.2'),
      t('pricing.plans.flex.benefits.3'),
    ],
    highlight: t('pricing.plans.flex.highlight'),
  },
]);

// Track tab switches
const onTabChange = (value: string) => {
  trackEvent('pricing_tab_change', { tab: value });
};

// ROI Calculator
const dailyMessages = ref([27]); // Default 27 messages/day (800/month)
const monthlyMessages = computed(() => dailyMessages.value[0] * 30);

const adminCost = computed(() => 2500000); // Fixed admin cost
const competitorCost = computed(() => 1499000); // Fixed competitor cost





// Feature comparison table
const featureTable = computed(() => [
  {
    feature: t('pricing.table.features.reply_credits'),
    starter: t('pricing.table.starter.reply_credits'),
    flex: t('pricing.table.flex.reply_credits'),
    business: t('pricing.table.business.reply_credits'),
    pro: t('pricing.table.pro.reply_credits')
  },
  {
    feature: t('pricing.table.features.cost_per_credit'),
    starter: t('pricing.table.starter.cost_per_credit'),
    flex: t('pricing.table.flex.cost_per_credit'),
    business: t('pricing.table.business.cost_per_credit'),
    pro: t('pricing.table.pro.cost_per_credit')
  },
  {
    feature: t('pricing.table.features.no_watermark'),
    starter: t('pricing.table.starter.no_watermark'),
    flex: t('pricing.table.flex.no_watermark'),
    business: t('pricing.table.business.no_watermark'),
    pro: t('pricing.table.pro.no_watermark')
  },
  {
    feature: t('pricing.table.features.ai_persona_pdf'),
    starter: t('pricing.table.starter.ai_persona_pdf'),
    flex: t('pricing.table.flex.ai_persona_pdf'),
    business: t('pricing.table.business.ai_persona_pdf'),
    pro: t('pricing.table.pro.ai_persona_pdf')
  },
  {
    feature: t('pricing.table.features.ai_persona_website'),
    starter: t('pricing.table.starter.ai_persona_website'),
    flex: t('pricing.table.flex.ai_persona_website'),
    business: t('pricing.table.business.ai_persona_website'),
    pro: t('pricing.table.pro.ai_persona_website')
  },
  {
    feature: t('pricing.table.features.analytics'),
    starter: t('pricing.table.starter.analytics'),
    flex: t('pricing.table.flex.analytics'),
    business: t('pricing.table.business.analytics'),
    pro: t('pricing.table.pro.analytics')
  },
  {
    feature: t('pricing.table.features.api_integration'),
    starter: t('pricing.table.starter.api_integration'),
    flex: t('pricing.table.flex.api_integration'),
    business: t('pricing.table.business.api_integration'),
    pro: t('pricing.table.pro.api_integration')
  },
  {
    feature: t('pricing.table.features.support'),
    starter: t('pricing.table.starter.support'),
    flex: t('pricing.table.flex.support'),
    business: t('pricing.table.business.support'),
    pro: t('pricing.table.pro.support')
  }
]);

// JSON-LD Product/Service schema built from i18n copy
const normalizePriceForJsonLd = (price: string): number => {
  if (!price) return 0;
  if (/free|gratis/i.test(price)) return 0;
  const kMatch = price.match(/(\d+)\s*K/i);
  if (kMatch) return parseInt(kMatch[1], 10) * 1000;
  const num = price.match(/(\d[\d.]*)/);
  if (num) return parseInt(num[1].replace(/\./g, ''), 10);
  return 0;
};

const productJsonLd = computed(() => {
  const plans = [
    {
      name: t('pricing.plans.starter.title') as string,
      description: t('pricing.plans.starter.description') as string,
      price: normalizePriceForJsonLd(t('pricing.plans.starter.price') as string),
    },
    {
      name: t('pricing.plans.business.title') as string,
      description: t('pricing.plans.business.description') as string,
      price: normalizePriceForJsonLd(t('pricing.plans.business.price') as string),
    },
    {
      name: t('pricing.plans.pro.title') as string,
      description: t('pricing.plans.pro.description') as string,
      price: normalizePriceForJsonLd(t('pricing.plans.pro.price') as string),
    },
    {
      name: t('pricing.plans.flex.title') as string,
      description: t('pricing.plans.flex.description') as string,
      price: normalizePriceForJsonLd(t('pricing.plans.flex.price') as string),
    },
  ];
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Layanify Plans",
    "brand": {
      "@type": "Brand",
      "name": "Layanify"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pricing Plans",
      "itemListElement": plans.map(p => ({
        "@type": "Offer",
        "name": p.name,
        "description": p.description,
        "priceCurrency": "IDR",
        "price": p.price
      }))
    }
  };
});
</script>

<template>
  <section id="pricing" class="container py-24 sm:py-32">
    <div class="max-w-6xl mx-auto">
      <!-- Hero Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          {{ t('pricing.title') }}
          <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
            {{ t('pricing.title_highlight') }}
          </span>
        </h1>
        <p class="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          {{ t('pricing.subtitle') }}
        </p>
      </div>

      <!-- Pricing Toggle -->
      <div class="max-w-4xl mx-auto mb-16">
        <Tabs v-model="activeTab" class="w-full" @update:modelValue="onTabChange">
          <TabsList class="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="monthly" class="text-base font-medium">{{ t('pricing.monthly_subscription') }}</TabsTrigger>
            <TabsTrigger value="yearly" class="text-base font-medium">Yearly (Save 20%)</TabsTrigger>
            <TabsTrigger value="payg" class="text-base font-medium">{{ t('pricing.pay_as_you_go') }}</TabsTrigger>
          </TabsList>

          <!-- Monthly Plans -->
          <TabsContent value="monthly" class="mt-0">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card
                v-for="plan in monthlyPlans"
                :key="plan.title"
                :class="{
                  'drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.05] relative overflow-hidden transition-all duration-300 hover:scale-[1.02]': plan.popular === PopularPlan.YES,
                  'bg-card border-border hover:shadow-lg transition-all duration-300': plan.popular === PopularPlan.NO
                }"
              >
                <!-- Popular Badge -->
                <div v-if="plan.popular === PopularPlan.YES" class="absolute top-0 right-0 bg-gradient-to-l from-primary to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                  {{ plan.highlight }}
                </div>
                <div v-if="plan.billedAnnually" class="absolute top-0 left-0 text-xs font-bold px-3 py-1 rounded-br-lg z-10 bg-green-600 text-white">
                  {{ plan.saveBadge }}
                </div>

                <CardHeader>
                  <CardTitle class="pb-2 text-xl">
                    {{ plan.title }}
                  </CardTitle>
                  <CardDescription class="pb-4 text-base">{{ plan.description }}</CardDescription>
                  
                  <!-- Price Display -->
                  <div class="space-y-2">
                    <div class="flex items-baseline gap-2">
                      <span class="text-4xl font-bold">{{ plan.price }}</span>
                      <span class="text-lg text-muted-foreground">{{ plan.period }}</span>
                    </div>
                    <div v-if="plan.billedAnnually" class="text-xs text-green-700 dark:text-green-300 font-medium">
                      Billed annually
                    </div>
                  </div>
                </CardHeader>

                <CardContent class="flex">
                  <ul class="space-y-3 w-full">
                    <li
                      v-for="benefit in plan.benefitList"
                      :key="benefit"
                      class="flex items-start text-base"
                    >
                      <Check class="text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{{ benefit }}</span>
                    </li>
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    :variant="plan.buttonVariant === 'outline' ? 'outline' : (plan.popular === PopularPlan.NO ? 'secondary' : 'default')"
                    class="w-full text-base py-3"
                    :class="{ 'bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90': plan.popular === PopularPlan.YES }"
                  >
                    {{ plan.buttonText }}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <!-- Yearly Plans (same grid; monthlyPlans marks billedAnnually and discounted) -->
          <TabsContent value="yearly" class="mt-0">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card
                v-for="plan in monthlyPlans"
                :key="plan.title"
                :class="{
                  'drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.05] relative overflow-hidden transition-all duration-300 hover:scale-[1.02]': plan.popular === PopularPlan.YES,
                  'bg-card border-border hover:shadow-lg transition-all duration-300': plan.popular === PopularPlan.NO
                }"
              >
                <!-- Popular Badge -->
                <div v-if="plan.popular === PopularPlan.YES" class="absolute top-0 right-0 bg-gradient-to-l from-primary to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                  {{ plan.highlight }}
                </div>
                <div v-if="plan.billedAnnually" class="absolute top-0 left-0 text-xs font-bold px-3 py-1 rounded-br-lg z-10 bg-green-600 text-white">
                  {{ plan.saveBadge }}
                </div>

                <CardHeader>
                  <CardTitle class="pb-2 text-xl">
                    {{ plan.title }}
                  </CardTitle>
                  <CardDescription class="pb-4 text-base">{{ plan.description }}</CardDescription>
                  
                  <!-- Price Display -->
                  <div class="space-y-2">
                    <div class="flex items-baseline gap-2">
                      <span class="text-4xl font-bold">{{ plan.price }}</span>
                      <span class="text-lg text-muted-foreground">{{ plan.period }}</span>
                    </div>
                    <div v-if="plan.billedAnnually" class="text-xs text-green-700 dark:text-green-300 font-medium">
                      Billed annually
                    </div>
                  </div>
                </CardHeader>

                <CardContent class="flex">
                  <ul class="space-y-3 w-full">
                    <li
                      v-for="benefit in plan.benefitList"
                      :key="benefit"
                      class="flex items-start text-base"
                    >
                      <Check class="text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{{ benefit }}</span>
                    </li>
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    :variant="plan.buttonVariant === 'outline' ? 'outline' : (plan.popular === PopularPlan.NO ? 'secondary' : 'default')"
                    class="w-full text-base py-3"
                    :class="{ 'bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90': plan.popular === PopularPlan.YES }"
                  >
                    {{ plan.buttonText }}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <!-- Pay-as-you-go Plans -->
          <TabsContent value="payg" class="mt-0">
            <div class="max-w-md mx-auto">
              <Card
                v-for="plan in paygPlans"
                :key="plan.title"
                class="drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary relative overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              >
                <!-- Popular Badge -->
                <div v-if="plan.popular === PopularPlan.YES" class="absolute top-0 right-0 bg-gradient-to-l from-primary to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                  {{ plan.highlight }}
                </div>

                <CardHeader>
                  <CardTitle class="pb-2 text-xl">
                    {{ plan.title }}
                  </CardTitle>
                  <CardDescription class="pb-4 text-base">{{ plan.description }}</CardDescription>
                  
                  <!-- Price Display -->
                  <div class="space-y-2">
                    <div class="flex items-baseline gap-2">
                      <span class="text-4xl font-bold">{{ plan.price }}</span>
                      <!-- <span class="text-lg text-muted-foreground">{{ plan.period }}</span> -->
                    </div>
                    <p class="text-sm text-muted-foreground">Rp 500 /credit</p>
                  </div>
                </CardHeader>

                <CardContent class="flex">
                  <ul class="space-y-3 w-full">
                    <li
                      v-for="benefit in plan.benefitList"
                      :key="benefit"
                      class="flex items-start text-base"
                    >
                      <Check class="text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{{ benefit }}</span>
                    </li>
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    class="w-full bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-base py-3"
                  >
                    {{ plan.buttonText }}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <!-- ROI Calculator - Only shown on Pay-as-you-go tab -->
      <section v-if="activeTab === 'payg'" class="container py-16 bg-muted/30 -mx-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <Calculator class="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
              {{ t('pricing.calculator.title') }}
              <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                {{ t('pricing.calculator.title_highlight') }}
              </span>
            </h2>
            <p class="text-muted-foreground">
              {{ t('pricing.calculator.subtitle') }}
            </p>
          </div>

          <div class="bg-background rounded-lg p-8 border border-border shadow-sm">
            <div class="mb-8">
              <label class="text-lg font-semibold mb-4 block">
                {{ t('pricing.calculator.question') }}
              </label>
              <div class="px-4">
                <Slider
                  v-model="dailyMessages"
                  :max="150"
                  :min="10"
                  :step="1"
                  class="w-full"
                  @update:modelValue="() => trackEvent('roi_slider_change', { daily: dailyMessages[0] })"
                />
                <div class="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>10</span>
                  <span class="font-bold text-primary">{{ dailyMessages[0] }} {{ t('pricing.calculator.messages_per_day') }}</span>
                  <span>150</span>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 border border-red-200 dark:border-red-800 transition-all duration-300 hover:shadow-md">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-lg font-semibold text-red-800 dark:text-red-200">{{ t('pricing.calculator_labels.manual_admin') }}</h3>
                  <TrendingDown class="w-5 h-5 text-red-500" />
                </div>
                <p class="text-2xl font-bold text-red-600 dark:text-red-400">
                  Rp <AnimatedNumber :value="adminCost" /> /mo
                </p>
                <p class="text-sm text-red-700 dark:text-red-300 mt-1">
                  {{ t('pricing.calculator_labels.admin_salary') }}
                </p>
              </div>

              <div class="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800 transition-all duration-300 hover:shadow-md">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-lg font-semibold text-orange-800 dark:text-orange-200">{{ t('pricing.calculator_labels.competitors') }}</h3>
                  <TrendingDown class="w-5 h-5 text-orange-500" />
                </div>
                <p class="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  Rp <AnimatedNumber :value="competitorCost" /> /mo
                </p>
                <p class="text-sm text-orange-700 dark:text-orange-300 mt-1">
                  {{ t('pricing.calculator_labels.fixed_cost') }}
                </p>
              </div>

              <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800 transition-all duration-300 hover:shadow-md">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-lg font-semibold text-green-800 dark:text-green-200">{{ t('pricing.calculator_labels.our_flex') }}</h3>
                  <TrendingUp class="w-5 h-5 text-green-500" />
                </div>
                <p class="text-2xl font-bold text-green-600 dark:text-green-400">
                  Only <span class="text-3xl">Rp <AnimatedNumber :value="monthlyMessages * 500" /></span> /mo
                </p>
                <p class="text-lg font-bold text-green-700 dark:text-green-300 mt-1">
                  {{ t('pricing.calculator_labels.you_save') }} <AnimatedNumber :value="Math.round(((adminCost - (monthlyMessages * 500)) / adminCost) * 100)" />%!)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Feature Comparison Table -->
      <section class="container py-16 -mx-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            {{ t('pricing.comparison.title') }}
            <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              {{ t('pricing.comparison.title_highlight') }}
            </span>
          </h2>
          <p class="text-lg text-muted-foreground">
            {{ t('pricing.comparison.subtitle') }}
          </p>
          </div>

          <div class="bg-background rounded-lg border border-border shadow-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow class="bg-muted/50">
                  <TableHead class="w-[200px] font-semibold">Feature</TableHead>
                  <TableHead class="text-center font-semibold">
                    <div>
                      <div class="font-normal">{{ t('pricing.plans.starter.title') }}</div>
                      <div class="text-xs text-muted-foreground">{{ t('pricing.plans.starter.price') }}</div>
                    </div>
                  </TableHead>
                  <TableHead class="text-center font-semibold">
                    <div>
                      <div class="font-normal">{{ t('pricing.plans.flex.title') }}</div>
                      <div class="text-xs text-muted-foreground">{{ t('pricing.pay_as_you_go') }}</div>
                    </div>
                  </TableHead>
                  <TableHead class="text-center font-semibold bg-primary/10">
                    <div>
                      <div class="font-normal">{{ t('pricing.plans.business.title') }}</div>
                      <div class="text-xs text-primary">{{ t('pricing.plans.business.highlight') }}</div>
                    </div>
                  </TableHead>
                  <TableHead class="text-center font-semibold">
                    <div>
                      <div class="font-normal">{{ t('pricing.plans.pro.title') }}</div>
                      <div class="text-xs text-muted-foreground">Enterprise</div>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow v-for="(row, index) in featureTable" :key="index" class="border-b hover:bg-muted/30 transition-colors">
                  <TableCell class="font-medium">{{ row.feature }}</TableCell>
                  <TableCell class="text-center">
                    <span :class="{ 'font-bold': row.starter === '50' || row.starter === '1' }">{{ row.starter }}</span>
                  </TableCell>
                  <TableCell class="text-center">
                    <span :class="{ 'font-bold text-primary': row.flex === 'Top-up' }">{{ row.flex }}</span>
                  </TableCell>
                  <TableCell class="text-center font-semibold">{{ row.business }}</TableCell>
                  <TableCell class="text-center">
                    <span :class="{ 'font-bold text-primary': row.pro === 'Unlimited' || row.pro === '✅' }">{{ row.pro }}</span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="container py-16 -mx-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            {{ t('pricing.cta.title') }}
            <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              {{ t('pricing.cta.title_highlight') }}
            </span>
          </h2>
          <p class="text-xl text-muted-foreground mb-8">
            {{ t('pricing.cta.subtitle') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" class="text-lg px-8 py-6 bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90">
              {{ t('pricing.cta.button') }}
            </Button>
          </div>
          <p class="text-sm text-muted-foreground mt-4">
            {{ t('pricing.cta.benefits') }}
          </p>
        </div>
      </section>
    </div>
  </section>
  <!-- JSON-LD for Product/Service -->
  <component :is="'script'" type="application/ld+json">
    {{ JSON.stringify(productJsonLd) }}
  </component>
</template>

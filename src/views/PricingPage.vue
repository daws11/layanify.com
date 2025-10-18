<script setup lang="ts">
import { ref, computed } from 'vue';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, TrendingUp, Calculator, TrendingDown } from "lucide-vue-next";
import PricingFAQ from "@/components/PricingFAQ.vue";
import AnimatedNumber from "@/components/AnimatedNumber.vue";
import LiveChatWidget from "@/components/LiveChatWidget.vue";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: string;
  period: string;
  description: string;
  buttonText: string;
  benefitList: string[];
  buttonVariant?: string;
  highlight?: string;
}

// Monthly subscription plans
const monthlyPlans: PlanProps[] = [
  {
    title: "Starter",
    popular: 0,
    price: "FREE",
    period: "Forever",
    description: "Perfect for micro businesses and trials just starting with AI automation.",
    buttonText: "Start Free",
    benefitList: [
      "50 Reply Credits/month",
      "1 WhatsApp Number",
      "Basic AI Persona",
      "Watermark 'Powered by...'",
    ],
    buttonVariant: "outline",
  },
  {
    title: "Business",
    popular: 1,
    price: "Rp 199k",
    period: "/mo",
    description: "Best value for growing SMEs and online stores.",
    buttonText: "Start Now",
    benefitList: [
      "800 Reply Credits/month",
      "All Starter features",
      "No Watermark",
      "3 AI Personas (Website/PDF)",
      "Basic Analytics Reports",
    ],
    highlight: "MOST POPULAR",
  },
  {
    title: "Pro",
    popular: 0,
    price: "Rp 799k",
    period: "/mo",
    description: "For large-scale businesses with integration and custom needs.",
    buttonText: "Start Now",
    benefitList: [
      "4,000 Reply Credits/month",
      "All Business features",
      "API & CRM Integration",
      "Multi-Agent & Multi-Number",
      "Priority Support & SLA",
    ],
    buttonVariant: "outline",
  },
];

// Pay-as-you-go plans
const paygPlans: PlanProps[] = [
  {
    title: "Flex",
    popular: 1,
    price: "Rp 0",
    period: "/mo",
    description: "For seasonal businesses that don't like monthly commitments.",
    buttonText: "Start Now (Top-up)",
    benefitList: [
      "No Monthly Fees",
      "Pay per Reply Credit (Rp 500)",
      "Same features as Starter",
      "Minimum top-up Rp 50,000",
    ],
    highlight: "PAY-AS-YOU-GO",
  },
];

// Active tab for pricing toggle
const activeTab = ref('monthly');

// ROI Calculator
const dailyMessages = ref([27]); // Default 27 messages/day (800/month)
const monthlyMessages = computed(() => dailyMessages.value[0] * 30);

const adminCost = computed(() => 2500000); // Fixed admin cost
const competitorCost = computed(() => 500000); // Fixed competitor cost





// Feature comparison table
const featureTable = [
  {
    feature: "Reply Credits / month",
    starter: "50",
    flex: "Top-up",
    business: "800",
    pro: "4,000"
  },
  {
    feature: "Cost per Credit",
    starter: "-",
    flex: "Rp 500",
    business: "Rp 350",
    pro: "Rp 300"
  },
  {
    feature: "No Watermark",
    starter: "❌",
    flex: "❌",
    business: "✅",
    pro: "✅"
  },
  {
    feature: "AI Persona (from PDF)",
    starter: "1",
    flex: "1",
    business: "3",
    pro: "Unlimited"
  },
  {
    feature: "AI Persona (from Website)",
    starter: "❌",
    flex: "❌",
    business: "✅",
    pro: "✅"
  },
  {
    feature: "Analytics Reports",
    starter: "Basic",
    flex: "Basic",
    business: "Complete",
    pro: "Custom"
  },
  {
    feature: "API Integration",
    starter: "❌",
    flex: "❌",
    business: "❌",
    pro: "✅"
  },
  {
    feature: "Support",
    starter: "Community",
    flex: "Community",
    business: "Priority",
    pro: "SLA"
  }
];
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="container py-16 sm:py-24">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Flexible Pricing That
          <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
            Fits Your Needs
          </span>
        </h1>
        <p class="text-xl text-muted-foreground mb-8">
          Pay when you have customers, not when it's quiet. Choose affordable monthly plans or pay-as-you-go with no commitments.
        </p>
      </div>
    </section>

    <!-- Pricing Toggle -->
    <section class="container pb-12">
      <div class="max-w-4xl mx-auto">
        <Tabs v-model="activeTab" class="w-full">
          <TabsList class="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="monthly" class="text-base font-medium">Monthly Subscription</TabsTrigger>
            <TabsTrigger value="payg" class="text-base font-medium">Pay-as-you-go</TabsTrigger>
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

                <CardHeader>
                  <div class="flex items-center justify-between">
                    <CardTitle class="pb-2 text-xl">
                      {{ plan.title }}
                    </CardTitle>
                  </div>
                  <CardDescription class="pb-4 text-base">{{ plan.description }}</CardDescription>
                  
                  <!-- Price Display -->
                  <div class="space-y-2">
                    <div class="flex items-baseline gap-2">
                      <span class="text-4xl font-bold">{{ plan.price }}</span>
                      <span class="text-lg text-muted-foreground">{{ plan.period }}</span>
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
                      <span class="text-lg text-muted-foreground">{{ plan.period }}</span>
                    </div>
                    <p class="text-sm text-muted-foreground">Rp 500 per Reply Credit</p>
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
    </section>

    <!-- ROI Calculator - Only shown on Pay-as-you-go tab -->
    <section v-if="activeTab === 'payg'" class="container py-16 bg-muted/30">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <Calculator class="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Your Savings
            <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              Calculator
            </span>
          </h2>
          <p class="text-muted-foreground">
            See how much you can save with our Flex plan
          </p>
        </div>

        <div class="bg-background rounded-lg p-8 border border-border shadow-sm">
          <div class="mb-8">
            <label class="text-lg font-semibold mb-4 block">
              How many messages do you receive per day on average?
            </label>
            <div class="px-4">
              <Slider
                v-model="dailyMessages"
                :max="500"
                :min="10"
                :step="1"
                class="w-full"
              />
              <div class="flex justify-between text-sm text-muted-foreground mt-2">
                <span>10</span>
                <span class="font-bold text-primary">{{ dailyMessages[0] }} messages/day</span>
                <span>500</span>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 border border-red-200 dark:border-red-800 transition-all duration-300 hover:shadow-md">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-semibold text-red-800 dark:text-red-200">Manual Admin Cost</h3>
                <TrendingDown class="w-5 h-5 text-red-500" />
              </div>
              <p class="text-2xl font-bold text-red-600 dark:text-red-400">
                Rp <AnimatedNumber :value="adminCost" /> /mo
              </p>
              <p class="text-sm text-red-700 dark:text-red-300 mt-1">
                (1 Admin Salary)
              </p>
            </div>

            <div class="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800 transition-all duration-300 hover:shadow-md">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-semibold text-orange-800 dark:text-orange-200">Competitors (Other SaaS)</h3>
                <TrendingDown class="w-5 h-5 text-orange-500" />
              </div>
              <p class="text-2xl font-bold text-orange-600 dark:text-orange-400">
                Rp <AnimatedNumber :value="competitorCost" /> /mo
              </p>
              <p class="text-sm text-orange-700 dark:text-orange-300 mt-1">
                (Fixed Cost)
              </p>
            </div>

            <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800 transition-all duration-300 hover:shadow-md">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-semibold text-green-800 dark:text-green-200">Our 'Flex' Plan</h3>
                <TrendingUp class="w-5 h-5 text-green-500" />
              </div>
              <p class="text-2xl font-bold text-green-600 dark:text-green-400">
                Only <span class="text-3xl">Rp <AnimatedNumber :value="monthlyMessages * 500" /></span> /mo
              </p>
              <p class="text-lg font-bold text-green-700 dark:text-green-300 mt-1">
                (You Save <AnimatedNumber :value="Math.round(((adminCost - (monthlyMessages * 500)) / adminCost) * 100)" />%!)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Comparison Table -->
    <section class="container py-16">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Complete Feature
            <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              Comparison
            </span>
          </h2>
          <p class="text-lg text-muted-foreground">
            Compare all plans and choose the one that best suits your business needs
          </p>
        </div>

        <div class="bg-background rounded-lg border border-border shadow-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow class="bg-muted/50">
                <TableHead class="w-[200px] font-semibold">Feature</TableHead>
                <TableHead class="text-center font-semibold">
                  <div>
                    <div class="font-normal">Starter</div>
                    <div class="text-xs text-muted-foreground">Free</div>
                  </div>
                </TableHead>
                <TableHead class="text-center font-semibold">
                  <div>
                    <div class="font-normal">Flex</div>
                    <div class="text-xs text-muted-foreground">Pay-as-you-go</div>
                  </div>
                </TableHead>
                <TableHead class="text-center font-semibold bg-primary/10">
                  <div>
                    <div class="font-normal">Business</div>
                    <div class="text-xs text-primary">Popular</div>
                  </div>
                </TableHead>
                <TableHead class="text-center font-semibold">
                  <div>
                    <div class="font-normal">Pro</div>
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

    <!-- FAQ Section -->
    <section class="container py-16 bg-muted/30">
      <PricingFAQ />
    </section>

    <!-- CTA Section -->
    <section class="container py-16">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Started?
          <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
            Save Time Today
          </span>
        </h2>
        <p class="text-xl text-muted-foreground mb-8">
          Join 50+ businesses that have improved their customer service efficiency by up to 80%.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" class="text-lg px-8 py-6 bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90">
            Start Now
          </Button>
          <Button size="lg" variant="outline" class="text-lg px-8 py-6">
            Schedule Demo
          </Button>
        </div>
        <p class="text-sm text-muted-foreground mt-4">
          ✓ No credit card required ✓ Ready in 5 minutes ✓ Cancel anytime
        </p>
      </div>
    </section>
    
    <!-- Live Chat Widget -->
    <LiveChatWidget />
  </div>
</template>
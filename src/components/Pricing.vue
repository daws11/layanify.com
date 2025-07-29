<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Check, Star, Zap, Clock, Users, TrendingUp } from "lucide-vue-next";
import { ref, onMounted, onUnmounted } from 'vue';

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  originalPrice: string;
  discountedPrice: string;
  discountPercentage: number;
  description: string;
  buttonText: string;
  benefitList: string[];
  buttonVariant?: string;
  highlight?: string;
  badge?: string;
  savings?: string;
}

const plans: PlanProps[] = [
  {
    title: "Community",
    popular: 0,
    originalPrice: "Gratis",
    discountedPrice: "Gratis Selamanya",
    discountPercentage: 0,
    description: "Akses penuh kode sumber, dokumentasi lengkap, forum komunitas, update rutin.",
    buttonText: "Download Sekarang",
    benefitList: [
      "Akses penuh kode sumber",
      "Dokumentasi lengkap",
      "Forum komunitas",
      "Update rutin",
    ],
    buttonVariant: "outline",
  },
  {
    title: "UMKM Pro",
    popular: 1,
    originalPrice: "Rp 299.000",
    discountedPrice: "Rp 199.000",
    discountPercentage: 33,
    description: "Hosting terkelola, bantuan verifikasi Meta, 1 nomor WhatsApp, 500 pesan template/bulan, top-up credit API.",
    buttonText: "Aktifkan Sekarang!",
    benefitList: [
      "Hosting terkelola",
      "Bantuan verifikasi Meta",
      "1 nomor WhatsApp",
      "500 pesan template/bulan",
      "Top-up credit API",
    ],
    highlight: "POPULER",
    badge: "Hemat 33%",
    savings: "",
  },
  {
    title: "Enterprise",
    popular: 0,
    originalPrice: "Custom",
    discountedPrice: "Custom",
    discountPercentage: 0,
    description: "Multi-channel support, integrasi custom, dedicated engineer, unlimited pesan, on-premise support.",
    buttonText: "Konsultasi Gratis",
    benefitList: [
      "Multi-channel support",
      "Integrasi custom",
      "Dedicated engineer",
      "Unlimited pesan",
      "On-premise support",
    ],
    buttonVariant: "outline",
  },
];

// Countdown Timer Logic
const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});

let timer: NodeJS.Timeout | null = null;

const getNextResetDate = () => {
  // Set start date to July 29, 2025
  const startDate = new Date(2025, 6, 29); // Month is 0-indexed, so 6 = July
  const now = new Date();
  
  // Calculate how many weeks have passed since start date
  const timeDiff = now.getTime() - startDate.getTime();
  const weeksPassed = Math.floor(timeDiff / (7 * 24 * 60 * 60 * 1000));
  
  // Calculate next reset date (7 days from the last reset)
  const nextReset = new Date(startDate.getTime() + (weeksPassed + 1) * 7 * 24 * 60 * 60 * 1000);
  
  return nextReset;
};

const updateCountdown = () => {
  const now = new Date();
  const targetDate = getNextResetDate();
  const timeLeft = targetDate.getTime() - now.getTime();

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdown.value = { days, hours, minutes, seconds };
  } else {
    countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
};

onMounted(() => {
  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});
</script>

<template>
  <section class="container py-24 sm:py-32">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Pricing
    </h2>
    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Transparan &
      <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
        Tanpa Kejutan
      </span>
    </h2>

    <!-- Marketing Banner -->
    <div class="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-6 mb-8 text-center">
      <div class="flex items-center justify-center gap-3 mb-2">
        <Clock class="w-5 h-5" />
        <span class="font-bold text-lg">PROMO TERBATAS!</span>
        <Zap class="w-5 h-5" />
      </div>
      <p class="text-sm opacity-90 mb-3">Diskon 33% untuk UMKM Pro - Berakhir dalam:</p>
      
      <!-- Countdown Timer -->
      <div class="flex justify-center gap-4 mb-2">
        <div class="bg-white/20 rounded-lg p-2 min-w-[60px]">
          <div class="text-2xl font-bold">{{ countdown.days }}</div>
          <div class="text-xs opacity-80">Hari</div>
        </div>
        <div class="bg-white/20 rounded-lg p-2 min-w-[60px]">
          <div class="text-2xl font-bold">{{ countdown.hours.toString().padStart(2, '0') }}</div>
          <div class="text-xs opacity-80">Jam</div>
        </div>
        <div class="bg-white/20 rounded-lg p-2 min-w-[60px]">
          <div class="text-2xl font-bold">{{ countdown.minutes.toString().padStart(2, '0') }}</div>
          <div class="text-xs opacity-80">Menit</div>
        </div>
        <div class="bg-white/20 rounded-lg p-2 min-w-[60px]">
          <div class="text-2xl font-bold">{{ countdown.seconds.toString().padStart(2, '0') }}</div>
          <div class="text-xs opacity-80">Detik</div>
        </div>
      </div>
    </div>

    <!-- Social Proof -->
    <div class="flex items-center justify-center gap-6 mb-8 text-center">
      <div class="flex items-center gap-2">
        <Users class="w-5 h-5 text-primary" />
        <span class="text-sm text-muted-foreground">500+ UMKM Aktif</span>
      </div>
      <div class="flex items-center gap-2">
        <Star class="w-5 h-5 text-yellow-500" />
        <span class="text-sm text-muted-foreground">4.9/5 Rating</span>
      </div>
      <div class="flex items-center gap-2">
        <TrendingUp class="w-5 h-5 text-green-500" />
        <span class="text-sm text-muted-foreground">75% Hemat Biaya</span>
      </div>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 mt-10">
      <Card
        v-for="plan in plans"
        :key="plan.title"
        :class="{
          'drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1] relative overflow-hidden': plan.popular === PopularPlan.YES,
        }"
      >
        <!-- Discount Badge for Popular Plan -->
        <div v-if="plan.popular === PopularPlan.YES" class="absolute top-0 right-0 bg-gradient-to-l from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
          {{ plan.badge }}
        </div>

        <CardHeader>
          <div class="flex items-center justify-between">
            <CardTitle class="pb-2">
              {{ plan.title }}
            </CardTitle>
            <span v-if="plan.highlight" class="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full ml-2">{{ plan.highlight }}</span>
          </div>
          <CardDescription class="pb-4">{{ plan.description }}</CardDescription>
          
          <!-- Price Display -->
          <div class="space-y-2">
            <div v-if="plan.discountPercentage > 0" class="flex items-center gap-2">
              <span class="text-3xl font-bold text-green-600">{{ plan.discountedPrice }}</span>
              <span class="text-lg text-muted-foreground line-through">{{ plan.originalPrice }}</span>
              <span class="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
                -{{ plan.discountPercentage }}%
              </span>
            </div>
            <div v-else>
              <span class="text-3xl font-bold">{{ plan.discountedPrice }}</span>
            </div>
            
            <!-- Savings Info -->
            <div v-if="plan.savings" class="text-sm text-green-600 font-semibold">
              {{ plan.savings }}
            </div>
            
            <!-- Per Month Text -->
            <div class="text-sm text-muted-foreground">
              {{ plan.title === "Community" ? "" : "/ bulan" }}
            </div>
          </div>
        </CardHeader>

        <CardContent class="flex">
          <ul class="space-y-3 w-full">
            <li
              v-for="benefit in plan.benefitList"
              :key="benefit"
              class="flex items-center text-base"
            >
              <Check class="text-primary mr-2" />
              <span>{{ benefit }}</span>
            </li>
          </ul>
        </CardContent>

        <CardFooter>
          <Button
            :variant="plan.buttonVariant === 'outline' ? 'outline' : (plan.popular === PopularPlan.NO ? 'secondary' : 'default')"
            class="w-full"
            :class="{ 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600': plan.popular === PopularPlan.YES }"
          >
            {{ plan.buttonText }}
          </Button>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>

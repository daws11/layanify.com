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

import { Check } from "lucide-vue-next";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: string;
  description: string;
  buttonText: string;
  benefitList: string[];
  buttonVariant?: string;
  highlight?: string;
}

const plans: PlanProps[] = [
  {
    title: "Community",
    popular: 0,
    price: "Gratis Selamanya",
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
    price: "Rp 299rb/bulan",
    description: "Hosting terkelola, bantuan verifikasi Meta, 1 nomor WhatsApp, 500 pesan template/bulan, top-up credit API.",
    buttonText: "Coba Gratis 14 Hari",
    benefitList: [
      "Hosting terkelola",
      "Bantuan verifikasi Meta",
      "1 nomor WhatsApp",
      "500 pesan template/bulan",
      "Top-up credit API",
    ],
    highlight: "POPULER",
  },
  {
    title: "Enterprise",
    popular: 0,
    price: "Custom",
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

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 mt-10">
      <Card
        v-for="plan in plans"
        :key="plan.title"
        :class="{
          'drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]': plan.popular === PopularPlan.YES,
        }"
      >
        <CardHeader>
          <div class="flex items-center justify-between">
            <CardTitle class="pb-2">
              {{ plan.title }}
            </CardTitle>
            <span v-if="plan.highlight" class="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full ml-2">{{ plan.highlight }}</span>
          </div>
          <CardDescription class="pb-4">{{ plan.description }}</CardDescription>
          <div>
            <span class="text-3xl font-bold">{{ plan.price }}</span>
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
          >
            {{ plan.buttonText }}
          </Button>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>

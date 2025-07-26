<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Sparkle,
  Tag,
  Paintbrush,
  Blocks,
  LineChart,
  Wallet,
} from "lucide-vue-next";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "blocks",
    title: "Transparansi",
    description:
      "Tak ada biaya tersembunyi. Lakukan hosting sendiri atau pilih layanan cloud kami.",
  },
  {
    icon: "lineChart",
    title: "Hemat Hingga 75% Biaya",
    description:
      "Hemat hingga 75% biaya dibandingkan dengan solusi lain. Tanpa biaya tersembunyi.",
  },
  {
    icon: "wallet",
    title: "API Whatsapp Resmi",
    description:
      "Kami adalah platform yang memiliki API Whatsapp resmi dari Meta, sehingga Anda dapat mengintegrasikan dengan mudah.",
  },
  {
    icon: "sparkle",
    title: "100% Open Source",
    description:
      "Kami adalah platform open source yang memiliki soure code terbuka dan dapat diubah sesuai kebutuhan Anda.",
  },
];

const iconMap: Record<
  string,
  | typeof Sparkle
  | typeof Tag
  | typeof Paintbrush
  | typeof Blocks
  | typeof LineChart
  | typeof Wallet
> = {
  sparkle: Sparkle,
  tag: Tag,
  paintbrush: Paintbrush,
  blocks: Blocks,
  lineChart: LineChart,
  wallet: Wallet,
};
</script>

<template>
  <section
    id="benefits"
    class="container py-24 sm:py-32"
  >
    <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
      <div>
        <h2 class="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Solusi Sesuai 
          <span
            class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
            >Kebutuhan & Budget
          </span> Anda
        </h2>
        <!-- <p class="text-xl text-muted-foreground mb-8">
          Platform CRM Open Source pertama yang mengintegrasikan AI Agent WhatsApp resmi Meta. 
          Kelola percakapan, otomatisasi respons, dan tingkatkan penjualan - Gratis! Tanpa Biaya Tersembunyi.
        </p> -->
      </div>

      <div class="grid lg:grid-cols-2 gap-4 w-full">
        <Card
          v-for="({ icon, title, description }, index) in benefitList"
          :key="title"
          class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all delay-75 group/number"
        >
          <CardHeader>
            <div class="flex justify-between">
              <component
                class="size-8 mb-6 text-primary"
                :is="iconMap[icon]"
              />

              <span
                class="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30"
                >0{{ index + 1 }}</span
              >
            </div>

            <CardTitle>{{ title }}</CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

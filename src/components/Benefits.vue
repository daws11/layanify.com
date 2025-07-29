<script setup lang="ts">
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
    class="container py-16 sm:py-24"
  >
    <div class="grid lg:grid-cols-2 place-items-center lg:gap-16">
      <div class="text-center lg:text-left">
        <h2 class="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

        <h2 class="text-2xl md:text-4xl font-bold mb-4">
          Solusi Sesuai 
          <span
            class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
            >Kebutuhan & Budget
          </span> Anda
        </h2>
      </div>

      <!-- Mobile-optimized layout -->
      <div class="w-full space-y-6 lg:space-y-4">
        <div
          v-for="({ icon, title, description }, index) in benefitList"
          :key="title"
          class="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all duration-200"
        >
          <!-- Icon with number background -->
          <div class="relative flex-shrink-0">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <component
                class="w-6 h-6 text-primary"
                :is="iconMap[icon]"
              />
            </div>
            <span
              class="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white text-xs rounded-full flex items-center justify-center font-bold"
            >
              {{ index + 1 }}
            </span>
          </div>

          <!-- Content -->
          <div class="flex-1 min-w-0">
            <h3 class="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
              {{ title }}
            </h3>
            <p class="text-muted-foreground text-sm leading-relaxed">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

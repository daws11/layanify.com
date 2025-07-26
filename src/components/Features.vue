<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Paintbrush,
  MessageCircle,
  TabletSmartphone,
  BadgeCheck,
  Goal,
  PictureInPicture,
  MousePointerClick,
  Newspaper,
} from "lucide-vue-next";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "tabletSmartphone",
    title: "Dual Deployment",
    description:
      "Lakukan hosting sendiri atau pilih layanan cloud kami, sesuai dengan kebutuhan Anda.",
  },
  {
    icon: "badgeCheck",
    title: "API Whatsapp Resmi",
    description:
      "Kami adalah platform yang memiliki API Whatsapp resmi dari Meta, sehingga Anda dapat mengintegrasikan dengan mudah.",
  },
  {
    icon: "goal",
    title: "Top-up API Credit",
    description:
      "Bayar biaya API Meta langsung di dashboard, tanpa biaya tersembunyi.",
  },
  {
    icon: "pictureInPicture",
    title: "Modular Design",
    description:
      "Modular design membuat pengembangan lebih mudah dan fleksibel.",
  },
  {
    icon: "mousePointerClick",
    title: "UMKM Analytics",
    description:
      "Dashboard khusus kebutuhan UMKM, cocok untuk bisnis kecil dan menengah.",
  },
  {
    icon: "newspaper",
    title: "Community-Based",
    description:
      "Kami adalah platform yang memiliki komunitas yang aktif dan membantu dalam pengembangan.",
  },
];

const iconMap: Record<
  string,
  | typeof TabletSmartphone
  | typeof BadgeCheck
  | typeof Goal
  | typeof PictureInPicture
  | typeof Paintbrush
  | typeof MousePointerClick
  | typeof MessageCircle
  | typeof Newspaper
> = {
  tabletSmartphone: TabletSmartphone,
  badgeCheck: BadgeCheck,
  goal: Goal,
  pictureInPicture: PictureInPicture,
  paintbrush: Paintbrush,
  mousePointerClick: MousePointerClick,
  messageCircle: MessageCircle,
  newspaper: Newspaper,
};
</script>

<template>
  <section
    id="features"
    class="container py-24 sm:py-32"
  >
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Features
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Platform CRM yang 
      <span
        class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
        >Berbeda
      </span> 
      dari Yang Lain
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Kami platform Whatsapp CRM open source pertama yang mengintegrasikan AI Agent WhatsApp resmi Meta. 
      Kelola percakapan, otomatisasi respons, dan tingkatkan penjualan - Gratis! Tanpa Biaya Tersembunyi.
    </h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="{ icon, title, description } in featureList"
        :key="title"
      >
        <Card class="h-full bg-background border-0 shadow-none">
          <CardHeader class="flex justify-center items-center">
            <div
              class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4"
            >
              <component
                :is="iconMap[icon]"
                class="size-6 text-primary"
              />
            </div>

            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground text-center">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped></style>

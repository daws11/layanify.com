<script setup lang="ts">
import {
  TabletSmartphone,
  BadgeCheck,
  Goal,
  PictureInPicture,
  Paintbrush,
  MousePointerClick,
  MessageCircle,
  Newspaper,
} from "lucide-vue-next";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeatureProps[] = [
  {
    icon: "tabletSmartphone",
    title: "Responsive Design",
    description:
      "Desain yang responsif dan mudah digunakan di berbagai perangkat.",
  },
  {
    icon: "badgeCheck",
    title: "Meta API Integration",
    description:
      "Integrasi langsung dengan API Meta untuk WhatsApp Business.",
  },
  {
    icon: "goal",
    title: "Goal Tracking",
    description:
      "Lacak tujuan bisnis Anda dengan mudah dan real-time.",
  },
  {
    icon: "messageCircle",
    title: "Auto Reply",
    description:
      "Balas otomatis dengan AI yang cerdas dan kontekstual.",
  },
  {
    icon: "paintbrush",
    title: "Customizable",
    description:
      "Kustomisasi sesuai kebutuhan bisnis Anda.",
  },
  {
    icon: "tabletSmartphone",
    title: "Direct Payment",
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
    class="container py-16 sm:py-24"
  >
    <div class="text-center mb-12">
      <h2 class="text-lg text-primary mb-2 tracking-wider">
        Features
      </h2>

      <h2 class="text-2xl md:text-4xl font-bold mb-4">
        Platform CRM yang 
        <span
          class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
          >Berbeda
        </span> 
        dari Yang Lain
      </h2>

      <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
        Kami platform Whatsapp CRM open source pertama yang mengintegrasikan AI Agent WhatsApp resmi Meta. 
        Kelola percakapan, otomatisasi respons, dan tingkatkan penjualan - Gratis! Tanpa Biaya Tersembunyi.
      </p>
    </div>

    <!-- Mobile-optimized grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="{ icon, title, description } in featureList"
        :key="title"
        class="group p-6 rounded-xl hover:bg-muted/50 transition-all duration-200 border border-transparent hover:border-primary/20"
      >
        <!-- Icon -->
        <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <component
            :is="iconMap[icon]"
            class="w-6 h-6 text-primary"
          />
        </div>

        <!-- Content -->
        <h3 class="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
          {{ title }}
        </h3>
        <p class="text-muted-foreground text-sm leading-relaxed">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped></style>

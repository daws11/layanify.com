<script setup lang="ts">
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Self-Hosted",
    description:
      "Lakukan hosting sendiri atau pilih layanan cloud kami, sesuai dengan kebutuhan Anda.",
    pro: 0,
  },
  {
    title: "Cloud Managed",
    description:
      "Hosting + maintenance oleh tim kami, dengan harga yang sangat terjangkau.",
    pro: 1,
  },
  {
    title: "Meta Verification",
    description: "Verifikasi akun Whatsapp resmi Meta, untuk memastikan kredensial yang valid.",
    pro: 1,
  },
  {
    title: "Priority Support",
    description: "Dukungan teknis 24 jam via komunitas, untuk memastikan Anda mendapatkan solusi yang terbaik.",
    pro: 1,
  },
];
</script>

<template>
  <section
    id="services"
    class="container py-24 sm:py-32"
  >
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Services
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Tingkatkan 
      <span
        class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
          >Penjualan Anda
      </span>
      , hemat biaya hingga 75%
    </h2>
    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Menjawab chat pelanggan secara otomatis 24/7 dengan cepat, tepat & akurat. Meningkatkan kepuasan pelanggan dan efisiensi bisnis hingga 75%.
    </h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

    <div
      class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto"
    >
      <div
        v-for="{ title, description, pro } in serviceList"
        :key="title"
      >
        <Card class="bg-muted/60 dark:bg-card h-full relative">
          <CardHeader>
            <CardTitle>{{ title }}</CardTitle>
            <CardDescription>{{ description }}</CardDescription>
          </CardHeader>
          <Badge
            v-if="pro === ProService.YES"
            variant="secondary"
            class="absolute -top-2 -right-3"
            >PRO</Badge
          >
        </Card>
      </div>
    </div>
  </section>
</template>

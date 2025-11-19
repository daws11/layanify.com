<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();

import {
  Crown,
  Vegan,
  Ghost,
  Puzzle,
  Squirrel,
  Cookie,
  Drama,
} from "lucide-vue-next";

interface sponsorsProps {
  icon: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: "crown",
    name: "Acmebrand",
  },
  {
    icon: "vegan",
    name: "Acmelogo",
  },
  {
    icon: "ghost",
    name: "Acmesponsor",
  },
  {
    icon: "puzzle",
    name: "Acmeipsum",
  },
  {
    icon: "squirrel",
    name: "Acme",
  },
  {
    icon: "cookie",
    name: "Accmee",
  },
  {
    icon: "drama",
    name: "Acmetech",
  },
];

const iconMap: Record<
  string,
  | typeof Crown
  | typeof Vegan
  | typeof Ghost
  | typeof Puzzle
  | typeof Squirrel
  | typeof Cookie
  | typeof Drama
> = {
  crown: Crown,
  vegan: Vegan,
  ghost: Ghost,
  puzzle: Puzzle,
  squirrel: Squirrel,
  cookie: Cookie,
  drama: Drama,
};
</script>

<template>
  <section
    id="sponsors"
    class="container py-12 md:py-20"
  >
    <h2 class="text-lg font-medium text-center mb-10 text-muted-foreground tracking-wide uppercase opacity-70">
      {{ t('hero.trusted_by') }}
    </h2>

    <div class="mx-auto max-w-5xl">
      <Marquee
        class="gap-[4rem]"
        :pauseOnHover="true"
        :fade="true"
        innerClassName="gap-[4rem]"
      >
        <div
          v-for="{ icon, name } in sponsors"
          :key="name"
        >
          <div class="flex items-center text-xl font-semibold text-muted-foreground/50 hover:text-foreground transition-colors duration-300 grayscale hover:grayscale-0 cursor-default">
            <component
              :is="iconMap[icon]"
              class="mr-2 w-6 h-6"
              stroke-width="2.5"
            />
            {{ name }}
          </div>
        </div>
      </Marquee>
    </div>
  </section>
</template>

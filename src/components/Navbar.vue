<script lang="ts" setup>
import { ref, computed } from "vue";
import { useLocale } from "@/composables/useLocale";

import { useColorMode } from "@vueuse/core";
const mode = useColorMode();
mode.value = "dark";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Menu } from "lucide-vue-next";

import ToggleTheme from "./ToggleTheme.vue";
import LanguageSwitcher from "./LanguageSwitcher.vue";

const { t, getLocalizedPath } = useLocale();

interface RouteProps {
  href: string;
  labelKey: string;
}

interface FeatureProps {
  titleKey: string;
  descriptionKey: string;
}

const routeList: RouteProps[] = [
  {
    href: "/pricing",
    labelKey: "navigation.pricing",
  },
  {
    href: "#simple-how-it-works",
    labelKey: "navigation.how_it_works",
  },
  {
    href: "#features-testimonial",
    labelKey: "navigation.testimonials",
  },
  {
    href: "#faq",
    labelKey: "navigation.faq",
  }
];

const featureList: FeatureProps[] = [
  {
    titleKey: "navigation.customer_service",
    descriptionKey: "navigation.customer_service_desc",
  },
  {
    titleKey: "navigation.smart_booking",
    descriptionKey: "navigation.smart_booking_desc",
  },
  {
    titleKey: "navigation.pay_as_you_go",
    descriptionKey: "navigation.pay_as_you_go_desc",
  },
];

const isOpen = ref<boolean>(false);

// Computed properties for localized routes
const localizedRouteList = computed(() => 
  routeList.map(route => ({
    ...route,
    href: route.href.startsWith('#') ? route.href : getLocalizedPath(route.href),
    label: t(route.labelKey)
  }))
);

const localizedFeatureList = computed(() => 
  featureList.map(feature => ({
    title: t(feature.titleKey),
    description: t(feature.descriptionKey)
  }))
);
</script>

<template>
  <header
    class="sticky top-4 z-40 w-full max-w-screen-xl mx-auto"
  >
    <div class="mx-4 rounded-2xl border border-white/10 bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-sm px-4 py-3 flex justify-between items-center transition-all duration-300 hover:shadow-md">
      <router-link
        :to="getLocalizedPath('/')"
        class="font-bold text-lg flex items-center gap-2"
      >
        <div class="bg-gradient-to-tr from-green-600 to-emerald-400 rounded-lg p-1.5">
          <img
            src="../assets/logo.png"
            alt="Logo"
            class="w-6 h-6 invert brightness-0"
          />
        </div>
        <span class="hidden sm:inline tracking-tight">{{ t('navigation.logo') }}</span>
      </router-link>

      <!-- Mobile -->
      <div class="flex items-center xl:hidden">
        <Sheet v-model:open="isOpen">
          <SheetTrigger as-child>
            <Button variant="ghost" size="icon" class="hover:bg-transparent">
              <Menu class="w-6 h-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            class="flex flex-col justify-between w-[300px] sm:w-[400px]"
          >
            <div>
              <SheetHeader class="mb-8 text-left">
                <SheetTitle class="flex items-center gap-2">
                  <div class="bg-gradient-to-tr from-green-600 to-emerald-400 rounded-lg p-1.5">
                    <img
                      src="../assets/logo.png"
                      alt="Logo"
                      class="w-6 h-6 invert brightness-0"
                    />
                  </div>
                  {{ t('navigation.logo') }}
                </SheetTitle>
              </SheetHeader>

              <div class="flex flex-col gap-2">
                <Button
                  v-for="{ href, label } in localizedRouteList"
                  :key="href"
                  as-child
                  variant="ghost"
                  class="justify-start text-base font-medium h-12"
                >
                  <a
                    @click="isOpen = false"
                    :href="href"
                    v-if="href.startsWith('#')"
                  >
                    {{ label }}
                  </a>
                  <router-link
                    :to="href"
                    @click="isOpen = false"
                    v-else
                  >
                    {{ label }}
                  </router-link>
                </Button>
              </div>
            </div>

            <SheetFooter class="flex-col sm:flex-col justify-start items-start gap-4">
              <Separator />
              <div class="flex items-center justify-between w-full">
                <LanguageSwitcher />
                <ToggleTheme />
              </div>
              <Button class="w-full bg-primary font-semibold" as-child>
                 <a href="#hero">{{ t('navigation.sign_up_free') }}</a>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <!-- Desktop -->
      <NavigationMenu class="hidden xl:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger class="bg-transparent text-sm font-medium">
              {{ t('navigation.features') }}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div class="grid w-[600px] grid-cols-2 gap-5 p-4">
                <div class="relative overflow-hidden rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none select-none">
                  <div class="mb-2 mt-4 text-lg font-medium">
                    Layanify AI
                  </div>
                  <p class="text-sm leading-tight text-muted-foreground">
                    Automate your customer service and bookings with the power of AI.
                  </p>
                </div>
                <ul class="flex flex-col gap-2">
                  <li
                    v-for="{ title, description } in localizedFeatureList"
                    :key="title"
                    class="rounded-md p-3 text-sm hover:bg-muted transition-colors"
                  >
                    <p class="mb-1 font-semibold leading-none text-foreground">
                      {{ title }}
                    </p>
                    <p class="line-clamp-2 text-muted-foreground text-xs">
                      {{ description }}
                    </p>
                  </li>
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem v-for="{ href, label } in localizedRouteList" :key="href">
            <NavigationMenuLink asChild>
              <Button
                as-child
                variant="ghost"
                class="justify-start text-sm font-medium bg-transparent hover:bg-secondary/50"
              >
                <a :href="href" v-if="href.startsWith('#')">
                  {{ label }}
                </a>
                <router-link :to="href" v-else>
                  {{ label }}
                </router-link>
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div class="hidden xl:flex items-center gap-4">
        <LanguageSwitcher />
        <ToggleTheme />

        <Button
          as-child
          size="sm"
          class="bg-primary hover:bg-primary/90 font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-105"
        >
          <a href="#hero">
            {{ t('navigation.sign_up_free') }}
          </a>
        </Button>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Removed custom shadow classes as we use tailwind utilities now */
</style>

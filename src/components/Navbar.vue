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

import { ChevronsDown, Menu } from "lucide-vue-next";

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
    :class="{
      'shadow-light': mode === 'light',
      'shadow-dark': mode === 'dark',
      'w-full max-w-screen-xl top-0 mx-auto sticky border z-40 rounded-none sm:rounded-2xl flex justify-between items-center px-3 sm:px-4 py-2 bg-card/80 backdrop-blur supports-backdrop-blur:bg-card/60 shadow-md': true,
    }"
  >
    <router-link
      :to="getLocalizedPath('/')"
      class="font-bold text-lg flex items-center"
    >
      <img
        src="../assets/logo.png"
        alt="Logo"
        class=" mt-2 w-9 h-9 mr-2 "
      />
      <span class="hidden sm:inline">{{ t('navigation.logo') }}</span></router-link
    >
    <!-- Mobile -->
    <div class="flex items-center xl:hidden">
      <Sheet v-model:open="isOpen">
        <SheetTrigger as-child>
          <Menu
            @click="isOpen = true"
            class="cursor-pointer"
          />
        </SheetTrigger>

        <SheetContent
          side="left"
          class="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card"
        >
          <div>
            <SheetHeader class="mb-4 ml-4">
              <SheetTitle class="flex items-center">
                <router-link
                  :to="getLocalizedPath('/')"
                  class="flex items-center"
                >
                  <ChevronsDown
                    class="bg-gradient-to-tr from-primary/70 via-primary to-primary/70 rounded-lg size-9 mr-2 border text-white"
                  />
                  {{ t('navigation.logo') }}
                </router-link>
              </SheetTitle>
            </SheetHeader>

            <div class="flex flex-col gap-2">
              <Button
                v-for="{ href, label } in localizedRouteList"
                :key="href"
                as-child
                variant="ghost"
                class="justify-start text-base"
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

          <SheetFooter class="flex-col sm:flex-col justify-start items-start">
            <Separator class="mb-2" />

            <LanguageSwitcher />
            <ToggleTheme />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>

    <!-- Desktop -->
    <NavigationMenu class="hidden xl:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger class="bg-card text-sm xl:text-base">
            {{ t('navigation.features') }}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div class="grid w-[600px] grid-cols-2 gap-5 p-4">
              <img
                src="https://www.radix-vue.com/logo.svg"
                alt="Beach"
                class="h-full w-full rounded-md object-cover"
              />
              <ul class="flex flex-col gap-2">
                <li
                  v-for="{ title, description } in localizedFeatureList"
                  :key="title"
                  class="rounded-md p-3 text-sm hover:bg-muted"
                >
                  <p class="mb-1 font-semibold leading-none text-foreground">
                    {{ title }}
                  </p>
                  <p class="line-clamp-2 text-muted-foreground">
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
              class="justify-start text-sm xl:text-base"
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

    <div class="hidden xl:flex items-center gap-2 sm:gap-3 lg:gap-4">
      <LanguageSwitcher />
      <ToggleTheme />

      <Button
        as-child
        size="sm"
        class="bg-green-600 hover:bg-green-700"
      >
        <a href="#hero">
          {{ t('navigation.sign_up_free') }}
        </a>
      </Button>
    </div>
  </header>
</template>

<style scoped>
.shadow-light {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.085);
}

.shadow-dark {
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.141);
}
</style>

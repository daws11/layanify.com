<script setup lang="ts">
import Separator from "./ui/separator/Separator.vue";
import { useLocale } from "@/composables/useLocale";

const { t, getLocalizedPath } = useLocale();
</script>

<template>
  <footer
    id="footer"
    class="container py-24 pb-16 sm:py-32 sm:pb-24"
  >
    <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
      <div
        class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8"
      >
        <div class="col-span-full xl:col-span-2">
          <router-link
            :to="getLocalizedPath('/')"
            class="flex font-bold items-center"
          >
            <img
              src="../assets/logo.png"
              alt="Logo"
              class="w-9 h-9 mr-2"
            />
            <h3 class="text-2xl">{{ t('footer.logo') }}</h3>
          </router-link>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">{{ t('footer.contact') }}</h3>
          <div>
            <a
              href="#"
              class="opacity-60 hover:opacity-100"
            >
              {{ t('footer.github') }}
            </a>
          </div>

          <div>
            <a
              href="#"
              class="opacity-60 hover:opacity-100"
            >
              {{ t('footer.twitter') }}
            </a>
          </div>

          <div>
            <a
              href="#"
              class="opacity-60 hover:opacity-100"
            >
              {{ t('footer.instagram') }}
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">{{ t('footer.platforms') }}</h3>
          <div>
            <a
              href="#"
              class="opacity-60 hover:opacity-100"
            >
              {{ t('footer.ios') }}
            </a>
          </div>

          <div>
            <a
              href="#"
              class="opacity-60 hover:opacity-100"
            >
              {{ t('footer.android') }}
            </a>
          </div>

          <div>
            <a
              href="#"
              class="opacity-60 hover:opacity-100"
            >
              {{ t('footer.web') }}
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">{{ t('footer.help') }}</h3>
          <div>
            <a
              href="#"
              class="opacity-60 hover:opacity-100"
            >
              {{ t('footer.contact_us') }}
            </a>
          </div>

          <div>
            <a
              href="#faq"
              class="opacity-60 hover:opacity-100"
            >
              {{ t('footer.faq') }}
            </a>
          </div>

          <div>
            <router-link
              :to="getLocalizedPath('/terms')"
              class="opacity-60 hover:opacity-100"
            >
              {{ t('footer.terms') }}
            </router-link>
          </div>

          <div>
            <router-link
              :to="getLocalizedPath('/privacy-policy')"
              class="opacity-60 hover:opacity-100"
            >
              {{ t('footer.privacy_policy') }}
            </router-link>
          </div>

          <div>
            <a
              href="#"
              class="opacity-60 hover:opacity-100"
            >
              {{ t('footer.feedback') }}
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">{{ t('footer.socials') }}</h3>
          <div>
            <a
              href="#"
              class="opacity-60 hover:opacity-100"
            >
              {{ t('footer.twitch') }}
            </a>
          </div>

          <div>
            <a
              href="#"
              class="opacity-60 hover:opacity-100"
            >
              {{ t('footer.discord') }}
            </a>
          </div>

          <div>
            <a
              href="#"
              class="opacity-60 hover:opacity-100"
            >
              {{ t('footer.dribbble') }}
            </a>
          </div>
        </div>
      </div>

      <Separator class="my-6" />
      <section className="">
        <h3 class="">
          {{ t('footer.copyright') }}
        </h3>
      </section>
    </div>
  </footer>
</template>

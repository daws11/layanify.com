<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, MessageCircle, ExternalLink } from "lucide-vue-next";
</script>

<template>
  <section
    id="community"
    class="py-12"
  >
    <hr />
    <div class="container py-20 sm:py-20">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Section Title -->
        <h2 class="text-3xl md:text-5xl font-bold mb-6">
          Berkolaborasi di 
          <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
            Komunitas Open Source
          </span>
        </h2>

  

        <!-- Description -->
        <p class="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Bergabung dengan 850+ developer & pelaku UMKM. Berbagi template workflow, 
          kustomisasi kode, dan dapatkan dukungan real-time!
        </p>

        <!-- Social Media Icons -->
        <div class="flex justify-center items-center gap-6 mb-8">
          <a 
            href="https://instagram.com/layanify" 
            target="_blank" 
            class="p-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:scale-110 transition-transform duration-200"
            aria-label="Follow us on Instagram"
          >
            <Instagram class="w-6 h-6" />
          </a>
          
          <a 
            href="https://x.com/layanify" 
            target="_blank" 
            class="p-3 bg-black text-white rounded-full hover:scale-110 transition-transform duration-200"
            aria-label="Follow us on X (Twitter)"
          >
            <Twitter class="w-6 h-6" />
          </a>
          
          <a 
            href="https://t.me/layanify" 
            target="_blank" 
            class="p-3 bg-blue-500 text-white rounded-full hover:scale-110 transition-transform duration-200"
            aria-label="Join our Telegram channel"
          >
            <MessageCircle class="w-6 h-6" />
          </a>
        </div>

        <!-- Action Button -->
        <Button 
          as-child 
          class="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-8 py-3 text-lg font-semibold"
        >
          <a
            href="http://community.layanify.com/"
            target="_blank"
            class="flex items-center gap-2"
          >
            Bergabung Sekarang!
            <ExternalLink class="w-5 h-5" />
          </a>
        </Button>
      </div>
    </div>
    <hr />
  </section>
</template>

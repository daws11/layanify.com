<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from "vue";
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import ProblemSection from "@/components/ProblemSection.vue";
import SimpleHowItWorks from "@/components/SimpleHowItWorks.vue";
import FeaturesWithTestimonial from "@/components/FeaturesWithTestimonial.vue";
import Sponsors from "@/components/Sponsors.vue";
import Pricing from "@/components/Pricing.vue";
import SimplifiedFAQ from "@/components/SimplifiedFAQ.vue";
import FinalCTA from "@/components/FinalCTA.vue";
import Footer from "@/components/Footer.vue";

const showChat = ref(false);
const LiveChatAsync = defineAsyncComponent(() =>
  import("@/components/LiveChatWidget.vue")
);

onMounted(() => {
  let revealed = false;
  const reveal = () => {
    if (revealed) return;
    revealed = true;
    showChat.value = true;
    window.removeEventListener("scroll", onScroll, { capture: true } as any);
    window.removeEventListener("mousemove", reveal, { capture: true } as any);
    window.removeEventListener("click", reveal, { capture: true } as any);
  };
  const onScroll = () => {
    if (window.scrollY > 200) {
      reveal();
    }
  };
  // Idle fallback
  setTimeout(reveal, 3000);
  window.addEventListener("scroll", onScroll, { passive: true, capture: true });
  window.addEventListener("mousemove", reveal, { passive: true, capture: true });
  window.addEventListener("click", reveal, { capture: true });
});
</script>

<template>
  <Navbar />
  <Hero id="hero" />
  <ProblemSection />
  <SimpleHowItWorks id="simple-how-it-works" />
  <FeaturesWithTestimonial id="features-testimonial" />
  <Sponsors />
  <Pricing />
  <SimplifiedFAQ />
  <FinalCTA />
  <Footer />
  <component v-if="showChat" :is="LiveChatAsync" />
</template>
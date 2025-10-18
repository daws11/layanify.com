<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import ProblemSection from "@/components/ProblemSection.vue";
import SimpleHowItWorks from "@/components/SimpleHowItWorks.vue";
import FeaturesWithTestimonial from "@/components/FeaturesWithTestimonial.vue";
import Pricing from "@/components/Pricing.vue";
import SimplifiedFAQ from "@/components/SimplifiedFAQ.vue";
import FinalCTA from "@/components/FinalCTA.vue";
import Footer from "@/components/Footer.vue";
import LiveChatWidget from "@/components/LiveChatWidget.vue";
</script>

<template>
  <Navbar />
  <Hero id="hero" />
  <ProblemSection />
  <SimpleHowItWorks id="simple-how-it-works" />
  <FeaturesWithTestimonial id="features-testimonial" />
  <Pricing />
  <SimplifiedFAQ />
  <FinalCTA />
  <Footer />
  <LiveChatWidget />
</template>
<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { MessageCircle } from "lucide-vue-next";

const faqs = [
  {
    question: "What are 'Reply Credits'?",
    answer: "One (1) Reply Credit is used each time our AI replies to a message from your customer. Incoming messages from customers are not counted. Simple and fair."
  },
  {
    question: "What happens if I run out of monthly credits?",
    answer: "No worries! If your 'Business' or 'Pro' plan credits run out, we'll automatically use overage rates (e.g., Rp 350/credit for 'Business') to keep your service running. You can also top-up additional credits anytime."
  },
  {
    question: "What's the difference between 'Flex' and 'Starter' plans?",
    answer: "The 'Starter' plan gives you 50 free credits/month but stops when exhausted. The 'Flex' plan has no free credits, but you can top-up any amount (starting from Rp 50,000) and credits won't expire as long as you're active."
  },
  {
    question: "Can I change plans midway?",
    answer: "Absolutely. You can upgrade or downgrade your plan anytime. Our system will automatically calculate prorated adjustments."
  }
];
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
        Pricing
        <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
          FAQ
        </span>
      </h2>
      <p class="text-lg text-muted-foreground">
        Everything you need to know about our pricing
      </p>
    </div>

    <Accordion type="single" collapsible class="AccordionRoot mb-10">
      <AccordionItem v-for="(faq, index) in faqs" :key="index" :value="`item-${index + 1}`">
        <AccordionTrigger class="text-left">
          {{ faq.question }}
        </AccordionTrigger>
        <AccordionContent class="text-base">
          {{ faq.answer }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    <div class="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center max-w-xl mx-auto mt-10">
      <MessageCircle class="w-8 h-8 text-primary mx-auto mb-4" />
      <h3 class="text-2xl font-bold mb-2">Still Have Questions?</h3>
      <p class="mb-4">Our support team is ready to help you choose the right plan</p>
      <Button size="lg" class="font-bold">
        Chat with Support
      </Button>
    </div>
  </div>
</template>
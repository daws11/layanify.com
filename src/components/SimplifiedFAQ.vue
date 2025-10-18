<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { MessageCircle } from "lucide-vue-next";
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();

const faqs = [
  {
    questionKey: "faq.q1.question",
    answerKey: "faq.q1.answer"
  },
  {
    questionKey: "faq.q2.question",
    answerKey: "faq.q2.answer"
  },
  {
    questionKey: "faq.q3.question",
    answerKey: "faq.q3.answer"
  },
  {
    questionKey: "faq.q4.question",
    answerKey: "faq.q4.answer"
  },
  {
    questionKey: "faq.q5.question",
    answerKey: "faq.q5.answer"
  },
  {
    questionKey: "faq.q6.question",
    answerKey: "faq.q6.answer"
  },
  {
    questionKey: "faq.q7.question",
    answerKey: "faq.q7.answer"
  },
  {
    questionKey: "faq.q8.question",
    answerKey: "faq.q8.answer"
  },
  {
    questionKey: "faq.q9.question",
    answerKey: "faq.q9.answer"
  }
];
</script>

<template>
  <section id="faq" class="container py-24 sm:py-32">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
          {{ t('faq.title') }}
          <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
            {{ t('faq.title_highlight') }}
          </span>
        </h2>
        <p class="text-lg text-muted-foreground">
          {{ t('faq.subtitle') }}
        </p>
      </div>

      <Accordion type="single" collapsible class="AccordionRoot mb-10">
        <AccordionItem v-for="(faq, index) in faqs" :key="index" :value="`item-${index + 1}`">
          <AccordionTrigger class="text-left">
            {{ t(faq.questionKey) }}
          </AccordionTrigger>
          <AccordionContent class="text-base">
            {{ t(faq.answerKey) }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div class="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center max-w-xl mx-auto mt-10">
        <MessageCircle class="w-8 h-8 text-primary mx-auto mb-4" />
        <h3 class="text-2xl font-bold mb-2">{{ t('faq.support.title') }}</h3>
        <p class="mb-4">{{ t('faq.support.description') }}</p>
        <Button size="lg" class="font-bold">
          {{ t('faq.support.button') }}
        </Button>
      </div>
    </div>
  </section>
</template>
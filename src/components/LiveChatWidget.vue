<script setup lang="ts">
import { ref } from 'vue';
import { MessageCircle, X, Send, Minimize2, Maximize2 } from 'lucide-vue-next';

const isOpen = ref(false);
const isMinimized = ref(false);
const message = ref('');
const messages = ref([
  {
    type: 'bot',
    text: 'Hi! I\'m the AI assistant. Want to see how I can help your business handle customer inquiries 24/7?'
  }
]);

const sampleResponses = [
  "I can handle booking inquiries automatically.",
  "I can answer FAQ about your services.",
  "I work 24/7, even when you're sleeping!",
  "I respond in under 5 seconds.",
  "I can handle both Indonesian and English."
];

const sendMessage = () => {
  if (!message.value.trim()) return;
  
  messages.value.push({
    type: 'user',
    text: message.value
  });
  
  // Simulate AI response
  setTimeout(() => {
    const randomResponse = sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
    messages.value.push({
      type: 'bot',
      text: randomResponse
    });
  }, 1000);
  
  message.value = '';
};

const toggleChat = () => {
  isOpen.value = !isOpen.value;
  isMinimized.value = false;
};

const toggleMinimize = () => {
  isMinimized.value = !isMinimized.value;
};
</script>

<template>
  <div class="fixed bottom-4 right-4 z-50">
    <!-- Chat Widget -->
    <div 
      v-if="isOpen" 
      class="bg-background border border-border rounded-lg shadow-lg w-80 h-96 flex flex-col"
      :class="{ 'h-12': isMinimized }"
    >
      <!-- Header -->
      <div class="bg-primary text-primary-foreground p-3 rounded-t-lg flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span class="font-semibold text-sm">AI Assistant</span>
        </div>
        <div class="flex items-center gap-2">
          <button @click="toggleMinimize" class="hover:bg-primary/80 p-1 rounded">
            <Minimize2 v-if="!isMinimized" class="w-4 h-4" />
            <Maximize2 v-else class="w-4 h-4" />
          </button>
          <button @click="toggleChat" class="hover:bg-primary/80 p-1 rounded">
            <X class="w-4 h-4" />
          </button>
        </div>
      </div>

      <!-- Messages -->
      <div v-if="!isMinimized" class="flex-1 overflow-y-auto p-3 space-y-3">
        <div
          v-for="(msg, index) in messages"
          :key="index"
          class="flex"
          :class="{ 'justify-end': msg.type === 'user' }"
        >
          <div
            class="max-w-[70%] p-2 rounded-lg text-sm"
            :class="{
              'bg-muted': msg.type === 'bot',
              'bg-primary text-primary-foreground': msg.type === 'user'
            }"
          >
            {{ msg.text }}
          </div>
        </div>
      </div>

      <!-- Input -->
      <div v-if="!isMinimized" class="p-3 border-t border-border">
        <div class="flex gap-2">
          <input
            v-model="message"
            @keyup.enter="sendMessage"
            type="text"
            placeholder="Ask me anything..."
            class="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            @click="sendMessage"
            class="bg-primary text-primary-foreground p-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            <Send class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>

    <!-- Chat Button -->
    <button
      v-if="!isOpen"
      @click="toggleChat"
      class="bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-200 group"
    >
      <MessageCircle class="w-6 h-6 group-hover:scale-110 transition-transform" />
    </button>
  </div>
</template>
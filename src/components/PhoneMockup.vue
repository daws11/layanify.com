<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { Sparkles, CheckCircle2, Phone, Wifi, Battery } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';

const { tm } = useI18n();

interface ConversationMessage {
  customer: string;
  aiResponse: string;
}

// Get chat messages from i18n
const messageConversations = computed<ConversationMessage[]>(() => {
  const messages = tm('chat_messages.conversations') as any;
  return Array.isArray(messages) ? messages : [];
});

const currentConversationIndex = ref(0);
const showTyping = ref(false);
const showCustomerMessage = ref(false);
const showAiResponse = ref(false);

const resetMessageAnimation = () => {
  showCustomerMessage.value = false;
  showTyping.value = false;
  showAiResponse.value = false;
};

const startMessageLoop = () => {
  // Show customer message
  setTimeout(() => {
    showCustomerMessage.value = true;
  }, 1000);

  // Show typing indicator
  setTimeout(() => {
    showTyping.value = true;
  }, 2000);

  // Show AI response
  setTimeout(() => {
    showTyping.value = false;
    showAiResponse.value = true;
  }, 3500);

  // Reset and move to next conversation
  setTimeout(() => {
    resetMessageAnimation();
    currentConversationIndex.value = (currentConversationIndex.value + 1) % messageConversations.value.length;
    startMessageLoop();
  }, 6000);
};

onMounted(() => {
  startMessageLoop();
});
</script>

<template>
  <div class="w-full max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto">
    <!-- Phone Frame -->
    <div class="relative bg-gray-900 rounded-[2rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl border-4 sm:border-8 border-gray-800">
      <!-- Notch -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-5 sm:h-7 bg-gray-900 rounded-b-2xl sm:rounded-b-3xl z-10"></div>
      
      <!-- Screen -->
      <div class="relative bg-white dark:bg-zinc-950 rounded-[1.75rem] sm:rounded-[2.5rem] overflow-hidden shadow-inner aspect-[9/19.5]">
        
        <!-- Status Bar -->
        <div class="absolute top-0 left-0 right-0 h-9 sm:h-11 bg-gradient-to-b from-green-600 to-green-500 px-4 sm:px-6 flex items-center justify-between text-white z-20">
          <div class="text-[10px] sm:text-xs font-medium pt-1.5 sm:pt-2">9:41</div>
          <div class="flex items-center gap-0.5 sm:gap-1 pt-1.5 sm:pt-2">
            <Wifi class="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            <Phone class="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            <Battery class="w-3.5 sm:w-4 h-3.5 sm:h-4" />
          </div>
        </div>

        <!-- WhatsApp Header -->
        <div class="absolute top-9 sm:top-11 left-0 right-0 h-12 sm:h-14 bg-green-600 px-3 sm:px-4 flex items-center gap-2 sm:gap-3 text-white z-20 shadow-md">
          <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-green-600 to-emerald-400 flex items-center justify-center flex-shrink-0 border-2 border-white/20 p-1.5 sm:p-2">
            <img
              src="../assets/logo.png"
              alt="Layanify"
              class="w-full h-full invert brightness-0"
            />
          </div>
          <div class="flex-1 min-w-0">
            <div class="font-semibold text-xs sm:text-sm">Layanify</div>
            <div class="text-[10px] sm:text-xs text-green-100 flex items-center gap-1">
              <div class="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-green-300 animate-pulse"></div>
              <span>online</span>
            </div>
          </div>
          <div class="flex gap-3 sm:gap-4">
            <svg class="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"/>
            </svg>
          </div>
        </div>

        <!-- Chat Background -->
        <div class="absolute inset-0 top-[84px] sm:top-[100px] bg-[#e5ddd5] dark:bg-zinc-900" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjxwYXRoIGQ9Ik0wIDUwIEw1MCA1MCBMNTAgMTAwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjAzIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI3BhdHRlcm4pIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+');"></div>

        <!-- Messages Container -->
        <div class="absolute inset-0 top-[84px] sm:top-[100px] bottom-12 sm:bottom-14 overflow-y-auto px-3 sm:px-4 py-2 sm:py-3 space-y-2 sm:space-y-3">
          
          <!-- Date Badge -->
          <div class="flex justify-center mb-3 sm:mb-4">
            <div class="bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-sm">
              <span class="text-[9px] sm:text-[10px] text-gray-600 dark:text-gray-400">TODAY</span>
            </div>
          </div>

          <!-- Customer Message -->
          <Transition name="whatsapp-message">
            <div v-if="showCustomerMessage" class="flex justify-end">
              <div class="bg-[#dcf8c6] dark:bg-green-900/40 rounded-lg rounded-tr-none px-2 sm:px-3 py-1.5 sm:py-2 max-w-[75%] shadow-sm">
                <p class="text-[11px] sm:text-[13px] text-gray-900 dark:text-gray-100 leading-relaxed">
                  {{ messageConversations[currentConversationIndex].customer }}
                </p>
                <div class="flex items-center justify-end gap-0.5 sm:gap-1 mt-0.5 sm:mt-1">
                  <span class="text-[9px] sm:text-[10px] text-gray-600 dark:text-gray-400">
                    {{ new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) }}
                  </span>
                  <CheckCircle2 class="w-2.5 sm:w-3 h-2.5 sm:h-3 text-blue-500" />
                </div>
              </div>
            </div>
          </Transition>

          <!-- AI Typing Indicator -->
          <Transition name="whatsapp-message">
            <div v-if="showTyping && !showAiResponse" class="flex justify-start">
              <div class="bg-white dark:bg-zinc-800 rounded-lg rounded-tl-none px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 shadow-sm">
                <div class="flex gap-0.5 sm:gap-1">
                  <div class="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0s;"></div>
                  <div class="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
                  <div class="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.4s;"></div>
                </div>
              </div>
            </div>
          </Transition>

          <!-- AI Response -->
          <Transition name="whatsapp-message">
            <div v-if="showAiResponse" class="flex justify-start items-start gap-1.5 sm:gap-2">
              <div class="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center flex-shrink-0 shadow-md">
                <Sparkles class="w-3 sm:w-4 h-3 sm:h-4 text-white" />
              </div>
              <div class="bg-white dark:bg-zinc-800 rounded-lg rounded-tl-none px-2 sm:px-3 py-1.5 sm:py-2 max-w-[70%] shadow-sm">
                <p class="text-[11px] sm:text-[13px] text-gray-900 dark:text-gray-100 leading-relaxed">
                  {{ messageConversations[currentConversationIndex].aiResponse }}
                </p>
                <div class="flex items-center justify-start gap-0.5 sm:gap-1 mt-0.5 sm:mt-1">
                  <span class="text-[9px] sm:text-[10px] text-gray-600 dark:text-gray-400">
                    {{ new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) }}
                  </span>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Input Bar -->
        <div class="absolute bottom-0 left-0 right-0 h-12 sm:h-14 bg-white dark:bg-zinc-900 px-2 sm:px-3 flex items-center gap-1.5 sm:gap-2 border-t border-gray-200 dark:border-zinc-800">
          <div class="flex-1 bg-gray-100 dark:bg-zinc-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2">
            <svg class="w-4 sm:w-5 h-4 sm:h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
            </svg>
            <div class="flex-1 h-1.5 sm:h-2 bg-gray-300 dark:bg-zinc-700 rounded"></div>
          </div>
          <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-600 flex items-center justify-center">
            <svg class="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Phone buttons -->
      <div class="absolute right-0 top-1/4 w-0.5 sm:w-1 h-12 sm:h-16 bg-gray-800 rounded-l"></div>
      <div class="absolute left-0 top-1/3 w-0.5 sm:w-1 h-10 sm:h-12 bg-gray-800 rounded-r"></div>
      <div class="absolute left-0 top-1/2 w-0.5 sm:w-1 h-10 sm:h-12 bg-gray-800 rounded-r"></div>
    </div>
  </div>
</template>

<style scoped>
/* WhatsApp-style message transitions */
.whatsapp-message-enter-active {
  animation: whatsapp-slide-in 0.3s ease-out;
}

.whatsapp-message-leave-active {
  animation: whatsapp-slide-out 0.2s ease-in;
}

@keyframes whatsapp-slide-in {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes whatsapp-slide-out {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
}
</style>

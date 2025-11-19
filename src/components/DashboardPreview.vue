<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { BarChart3, Users, DollarSign, Search, Bell, CheckCircle2, MessageSquare, Sparkles } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';

const { tm } = useI18n();
const isLoaded = ref(false);

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
const currentMessageIndex = ref(0);
const showTyping = ref(false);
const showCustomerMessage = ref(false);
const showAiResponse = ref(false);

let animationInterval: number | null = null;

const resetMessageAnimation = () => {
  showCustomerMessage.value = false;
  showTyping.value = false;
  showAiResponse.value = false;
  currentMessageIndex.value = 0;
};

const startMessageLoop = () => {
  // Show first customer message
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

  // Show second customer message if exists
  setTimeout(() => {
    currentMessageIndex.value = 1;
    showCustomerMessage.value = true;
  }, 4500);

  // Show second typing indicator
  setTimeout(() => {
    showTyping.value = true;
  }, 5500);

  // Show second AI response
  setTimeout(() => {
    showTyping.value = false;
    showAiResponse.value = true;
  }, 6500);

  // Reset and move to next conversation
  setTimeout(() => {
    resetMessageAnimation();
    currentConversationIndex.value = (currentConversationIndex.value + 1) % messageConversations.value.length;
    startMessageLoop();
  }, 8000);
};

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);

  // Start the message animation loop
  startMessageLoop();
});

onBeforeUnmount(() => {
  if (animationInterval) {
    clearInterval(animationInterval);
  }
});
</script>

<template>
  <div class="w-full h-full bg-card rounded-xl border border-border/50 shadow-2xl overflow-hidden flex flex-col text-card-foreground select-none relative">
    
    <!-- Top Bar -->
    <div class="h-10 sm:h-12 border-b border-border/50 flex items-center px-2 sm:px-4 justify-between bg-muted/20 backdrop-blur-sm">
      <div class="flex items-center gap-1.5 sm:gap-2">
        <div class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500/80"></div>
        <div class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80"></div>
        <div class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500/80"></div>
      </div>
      <div class="flex items-center gap-2 sm:gap-3 opacity-50">
        <div class="w-24 sm:w-32 h-5 sm:h-6 rounded-md bg-muted/50 hidden md:flex items-center px-2 gap-2">
          <Search class="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-50" />
          <div class="h-2 w-12 sm:w-16 bg-foreground/10 rounded-sm"></div>
        </div>
        <Bell class="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-tr from-green-500 to-emerald-400"></div>
      </div>
    </div>

    <div class="flex flex-1 overflow-hidden">
      <!-- Sidebar -->
      <div class="w-12 sm:w-16 md:w-48 border-r border-border/50 bg-muted/10 flex flex-col p-2 sm:p-3 gap-2 backdrop-blur-sm">
        <!-- Brand Logo -->
        <div class="h-8 w-full flex items-center gap-2 mb-2 sm:mb-4 px-1 sm:px-2">
          <div class="w-5 h-5 sm:w-6 sm:h-6 rounded bg-gradient-to-tr from-green-600 to-emerald-400 flex items-center justify-center flex-shrink-0 p-1">
            <img
              src="../assets/logo.png"
              alt="Layanify"
              class="w-full h-full invert brightness-0"
            />
          </div>
          <div class="hidden md:block text-xs font-bold tracking-tight">Layanify</div>
        </div>
        
        <div class="space-y-1">
          <div v-for="i in 4" :key="i" 
            class="h-7 sm:h-8 w-full rounded-md flex items-center gap-2 sm:gap-3 px-1 sm:px-2 transition-colors duration-300"
            :class="{'bg-primary/10 text-primary': i === 3, 'hover:bg-muted/50': i !== 3}"
          >
            <component :is="[BarChart3, Users, MessageSquare, DollarSign][i-1]" class="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" :class="{'text-primary': i === 3, 'opacity-50': i !== 3}" />
            <div class="h-3 w-20 rounded-sm hidden md:block" :class="i === 3 ? 'bg-primary/20' : 'bg-foreground/10'"></div>
          </div>
        </div>
        
        <div class="mt-auto">
           <div class="h-7 sm:h-8 w-full rounded-md flex items-center gap-2 sm:gap-3 px-1 sm:px-2">
            <div class="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-foreground/20 flex-shrink-0"></div>
            <div class="h-3 w-16 rounded-sm bg-foreground/10 hidden md:block"></div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex-1 p-2 sm:p-4 md:p-6 overflow-hidden relative bg-gradient-to-br from-transparent to-primary/5 flex items-center justify-center">
        <!-- Chat Conversation Area -->
        <div class="rounded-lg border border-border/50 bg-card/50 backdrop-blur-md p-3 sm:p-4 md:p-6 w-full max-w-2xl relative overflow-hidden animate-in fade-in slide-in-from-bottom duration-700">
          <div class="flex justify-between items-center mb-2 sm:mb-3 pb-2 border-b border-border/30">
            <div class="flex items-center gap-1.5 sm:gap-2">
              <div class="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-green-600 to-emerald-400 flex items-center justify-center flex-shrink-0 p-1">
                <img
                  src="../assets/logo.png"
                  alt="Layanify"
                  class="w-full h-full invert brightness-0"
                />
              </div>
              <div class="flex flex-col">
                <div class="text-xs sm:text-sm font-semibold">Layanify</div>
                <div class="text-[10px] sm:text-xs text-muted-foreground flex items-center gap-1">
                  <div class="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>online</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Chat Messages -->
          <div class="space-y-2 sm:space-y-3 md:space-y-4 min-h-[160px] sm:min-h-[180px] md:min-h-[200px] overflow-hidden relative">
            <!-- Customer Message -->
            <Transition name="whatsapp-message">
              <div v-if="showCustomerMessage" class="flex justify-end">
                <div class="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/20 rounded-tl-lg sm:rounded-tl-xl rounded-tr-lg sm:rounded-tr-xl rounded-bl-lg sm:rounded-bl-xl px-2 sm:px-3 py-1.5 sm:py-2 max-w-[75%] sm:max-w-[70%] shadow-sm">
                  <p class="text-[10px] sm:text-xs text-foreground leading-relaxed">{{ messageConversations[currentConversationIndex].customer }}</p>
                  <div class="flex items-center justify-end gap-0.5 sm:gap-1 mt-0.5 sm:mt-1">
                    <span class="text-[7px] sm:text-[8px] text-muted-foreground">{{ new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) }}</span>
                    <CheckCircle2 class="w-2 h-2 sm:w-2.5 sm:h-2.5 text-green-500" />
                  </div>
                </div>
              </div>
            </Transition>

            <!-- AI Typing Indicator -->
            <Transition name="whatsapp-message">
              <div v-if="showTyping && !showAiResponse" class="flex justify-start">
                <div class="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/20 rounded-tl-lg sm:rounded-tl-xl rounded-tr-lg sm:rounded-tr-xl rounded-br-lg sm:rounded-br-xl px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2 shadow-sm">
                  <Sparkles class="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary flex-shrink-0" />
                  <div class="flex gap-0.5 sm:gap-1">
                    <div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary/60 rounded-full" style="animation: typing-dots 1.4s infinite 0s;"></div>
                    <div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary/60 rounded-full" style="animation: typing-dots 1.4s infinite 0.2s;"></div>
                    <div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary/60 rounded-full" style="animation: typing-dots 1.4s infinite 0.4s;"></div>
                  </div>
                </div>
              </div>
            </Transition>

            <!-- AI Response -->
            <Transition name="whatsapp-message">
              <div v-if="showAiResponse" class="flex justify-start">
                <div class="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/20 rounded-tl-lg sm:rounded-tl-xl rounded-tr-lg sm:rounded-tr-xl rounded-br-lg sm:rounded-br-xl px-2 sm:px-3 py-1.5 sm:py-2 max-w-[85%] sm:max-w-[80%] shadow-sm">
                  <div class="flex items-start gap-1.5 sm:gap-2">
                    <Sparkles class="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary mt-0.5 flex-shrink-0" />
                    <div class="flex-1">
                      <p class="text-[10px] sm:text-xs text-foreground leading-relaxed">{{ messageConversations[currentConversationIndex].aiResponse }}</p>
                      <div class="flex items-center justify-start gap-0.5 sm:gap-1 mt-0.5 sm:mt-1">
                        <span class="text-[7px] sm:text-[8px] text-muted-foreground">{{ new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>

            <!-- Background pattern (WhatsApp-style) -->
            <div class="absolute inset-0 -z-10 opacity-5">
              <div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px);"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes grow-up {
  from { height: 0; opacity: 0; }
}

.animate-typing {
  animation: typing 2s steps(20, end) forwards;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

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

/* Typing dots animation */
@keyframes typing-dots {
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.6;
  }
  30% {
    transform: translateY(-4px);
    opacity: 1;
  }
}
</style>

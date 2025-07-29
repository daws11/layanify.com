<script setup lang="ts">
import { Server, UserCog, Zap, BarChart2, FileCheck2, CheckCircle } from 'lucide-vue-next';

const timeline = [
  { day: "Hari 1-2", title: "Setup & Verifikasi", desc: "Persiapan dokumen bisnis", icon: FileCheck2 },
  { day: "Hari 3-4", title: "Konfigurasi AI", desc: "Bangun alur percakapan", icon: UserCog },
  { day: "Hari 5", title: "Uji Coba", desc: "Test ke nomor internal", icon: Zap },
  { day: "Hari 7+", title: "Go Live!", desc: "Monitor & optimasi", icon: BarChart2 },
];
</script>

<template>
  <section class="container py-16 sm:py-24">
    <div class="text-center mb-12">
      <div class="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-base tracking-wider mb-4">
        Cara Kerja
      </div>
      <h2 class="text-2xl md:text-5xl font-bold text-center leading-tight mb-4">
        Transformasikan Layanan Pelanggan dalam anda
        <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">4 Langkah Simpel</span>
      </h2>
    </div>

    <!-- Steps - Mobile optimized -->
    <div class="space-y-8 mb-16 max-w-6xl mx-auto px-4 lg:px-16 xl:px-24">
      <!-- Step 1 -->
      <div class="group">
        <div class="flex items-start gap-4 mb-6">
          <div class="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-lg flex-shrink-0">
            <Server class="w-6 h-6" />
          </div>
          <div class="flex-1">
            <span class="text-primary font-bold text-lg">Langkah 1</span>
            <h3 class="text-xl md:text-2xl font-bold mt-1">Pilih Mode Deployment</h3>
          </div>
        </div>
        
        <div class="space-y-4 ml-16 lg:ml-20 xl:ml-24">
          <div class="bg-background rounded-lg p-4 border border-primary/20">
            <h4 class="font-bold text-primary mb-2">🚀 Self-Hosted (Gratis)</h4>
            <p class="text-sm text-muted-foreground">Unduh kode sumber dari GitHub, deploy di server pribadi. Full kontrol data! Dokumentasi lengkap tersedia untuk AWS, DigitalOcean, atau lokal server.</p>
          </div>
          
          <div class="bg-primary/10 rounded-lg p-4 border border-primary/30">
            <h4 class="font-bold text-primary mb-2">⚡ Cloud Managed (Pro)</h4>
            <p class="text-sm text-muted-foreground">Kami handle semua: server, maintenance, security patch. Cukup fokus pada bisnis Anda. Mulai dengan 14 hari trial gratis!</p>
          </div>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="group">
        <div class="flex items-start gap-4 mb-6">
          <div class="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-lg flex-shrink-0">
            <FileCheck2 class="w-6 h-6" />
          </div>
          <div class="flex-1">
            <span class="text-green-600 font-bold text-lg">Langkah 2</span>
            <h3 class="text-xl md:text-2xl font-bold mt-1">Verifikasi Akun Meta</h3>
          </div>
        </div>
        
        <div class="ml-16 lg:ml-20 xl:ml-24">
          <p class="text-muted-foreground mb-4">Kami bantu navigasi proses kompleks verifikasi WhatsApp Business API:</p>
          
          <div class="space-y-3 mb-4">
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span class="text-sm">Persiapan dokumen bisnis (SIUP/NIB)</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span class="text-sm">Pembuatan Facebook Business Manager</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span class="text-sm">Submit verifikasi profil ke Meta</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span class="text-sm">Pemantauan status real-time</span>
            </div>
          </div>
          
          <div class="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
            <p class="text-sm font-semibold text-green-700">⏱️ Rata-rata selesai dalam 3-5 hari kerja.</p>
          </div>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="group">
        <div class="flex items-start gap-4 mb-6">
          <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-lg flex-shrink-0">
            <UserCog class="w-6 h-6" />
          </div>
          <div class="flex-1">
            <span class="text-blue-600 font-bold text-lg">Langkah 3</span>
            <h3 class="text-xl md:text-2xl font-bold mt-1">Bangun AI Agent Anda</h3>
          </div>
        </div>
        
        <div class="ml-16 lg:ml-20 xl:ml-24">
          <div class="grid grid-cols-1 gap-3">
            <div class="bg-background rounded-lg p-3 border border-blue-200">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-lg">💬</span>
                <span class="font-semibold text-sm">Template Siap Pakai</span>
              </div>
              <p class="text-xs text-muted-foreground">50+ template komunitas: CS e-commerce, booking jadwal, FAQ produk</p>
            </div>
            
            <div class="bg-background rounded-lg p-3 border border-blue-200">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-lg">⚡</span>
                <span class="font-semibold text-sm">Integrasi Real-Time</span>
              </div>
              <p class="text-xs text-muted-foreground">Terhubung ke WhatsApp API dalam 1 klik</p>
            </div>
            
            <div class="bg-background rounded-lg p-3 border border-blue-200">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-lg">🧠</span>
                <span class="font-semibold text-sm">AI Training</span>
              </div>
              <p class="text-xs text-muted-foreground">Upload data produk/layanan untuk respons lebih akurat</p>
            </div>
            
            <div class="bg-background rounded-lg p-3 border border-blue-200">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-lg">📊</span>
                <span class="font-semibold text-sm">Multi-Channel</span>
              </div>
              <p class="text-xs text-muted-foreground">Tambahkan email/SMS dalam alur yang sama</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="group">
        <div class="flex items-start gap-4 mb-6">
          <div class="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-lg flex-shrink-0">
            <BarChart2 class="w-6 h-6" />
          </div>
          <div class="flex-1">
            <span class="text-purple-600 font-bold text-lg">Langkah 4</span>
            <h3 class="text-xl md:text-2xl font-bold mt-1">Go Live & Optimasi</h3>
          </div>
        </div>
        
        <div class="ml-16 lg:ml-20 xl:ml-24 space-y-4">
          <div class="bg-background rounded-lg p-4 border border-purple-200">
            <h4 class="font-bold text-purple-700 mb-2 flex items-center gap-2">
              <span>🚀</span>
              Launch
            </h4>
            <p class="text-sm text-muted-foreground">Aktifkan AI Agent dengan satu klik. Pelanggan mulai terima respons instan!</p>
          </div>
          
          <div class="bg-background rounded-lg p-4 border border-purple-200">
            <h4 class="font-bold text-purple-700 mb-2 flex items-center gap-2">
              <span>📈</span>
              Monitoring Lanjutan
            </h4>
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                <span class="text-xs">Analisis sentimen percakapan</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                <span class="text-xs">Pelacakan metrik CSAT & respon time</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                <span class="text-xs">Alert untuk pesan gagal/missed</span>
              </div>
            </div>
          </div>
          
          <div class="bg-purple-500/10 rounded-lg p-4 border border-purple-300">
            <h4 class="font-bold text-purple-700 mb-2 flex items-center gap-2">
              <span>🔄</span>
              Continuous Improvement
            </h4>
            <p class="text-sm text-muted-foreground">Komunitas berbagi template baru tiap minggu!</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Timeline Visual - Mobile optimized -->
    <div class="my-16">
      <div class="text-center mb-8">
        <h3 class="text-2xl font-bold mb-2">Timeline Implementasi</h3>
        <p class="text-muted-foreground">Estimasi waktu dari setup hingga Go Live</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="item in timeline" :key="item.day" class="text-center p-4 rounded-lg hover:bg-muted/50 transition-all duration-200">
          <div class="bg-primary/90 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-3 shadow-lg">
            <component :is="item.icon" class="w-6 h-6" />
          </div>
          <div class="font-bold text-lg mb-1 text-primary">{{ item.day }}</div>
          <div class="text-base font-semibold mb-1">{{ item.title }}</div>
          <div class="text-muted-foreground text-sm">{{ item.desc }}</div>
        </div>
      </div>
    </div>

    <!-- Testimonial Quote - Mobile optimized -->
    <div class="mt-16 text-center">
      <div class="bg-muted/50 rounded-2xl p-6 max-w-4xl mx-auto">
        <blockquote class="italic text-xl md:text-2xl mb-4 text-primary font-semibold leading-relaxed">
          <CheckCircle class="inline-block w-6 h-6 mr-2 align-middle text-green-500" />
        "Dari registrasi sampai live hanya 5 hari! AI Agent kami sekarang handle 80% pertanyaan pelanggan."
      </blockquote>
        <div>
          <div class="font-semibold text-primary text-lg">Omar Dhani</div>
          <div class="text-muted-foreground">Pemilik UMKM Nusa Rent</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Smooth transitions */
.transition-all {
  transition: all 0.3s ease;
}
</style>

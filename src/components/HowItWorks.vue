<script setup lang="ts">
import { Server, UserCog, Zap, BarChart2, ArrowRight, FileCheck2 } from 'lucide-vue-next';

const HowItWorksList = [
  {
    badge: "1",
    title: "Pilih Mode Deployment",
    desc: `<strong>Self-Hosted (Gratis):</strong> Unduh kode sumber dari GitHub, deploy di server pribadi. Full kontrol data! Dokumentasi lengkap tersedia untuk AWS, DigitalOcean, atau lokal server.<br><br><strong>Cloud Managed (Pro):</strong> Kami handle semua: server, maintenance, security patch. Cukup fokus pada bisnis Anda. Mulai dengan 14 hari trial gratis!`,
    image: "roboto.png",
    imageDesc: `Ilustrasi:  - Kiri: Developer deploy di server sendiri  - Kanan: Tim Layanify mengelola cloud`,
    imageLeft: true,
    icon: Server,
  },
  {
    badge: "2",
    title: "Verifikasi Akun Meta",
    desc: `Kami bantu navigasi proses kompleks verifikasi WhatsApp Business API:<ul><li>Persiapan dokumen bisnis (SIUP/NIB)</li><li>Pembuatan Facebook Business Manager</li><li>Submit verifikasi profil ke Meta</li><li>Pemantauan status real-time</li></ul>Rata-rata selesai dalam 3-5 hari kerja. Garansi uang kembali jika gagal!`,
    image: "runner.png",
    imageDesc: `Ilustrasi:  Dokumen → Ikon centang hijau besar  + Progress bar verifikasi`,
    imageLeft: false,
    icon: FileCheck2,
  },
  {
    badge: "3",
    title: "Bangun AI Agent Anda",
    desc: `Gunakan drag-n-drop builder tanpa coding:<div class='grid grid-cols-1 md:grid-cols-2 gap-2 mt-2'><div><strong>💬 Template Siap Pakai</strong><br>50+ template komunitas: CS e-commerce, booking jadwal, FAQ produk</div><div><strong>⚡ Integrasi Real-Time</strong><br>Terhubung ke WhatsApp API dalam 1 klik</div><div><strong>🧠 AI Training</strong><br>Upload data produk/layanan untuk respons lebih akurat</div><div><strong>📊 Multi-Channel</strong><br>Tambahkan email/SMS dalam alur yang sama</div></div>`,
    image: "pacheco.png",
    imageDesc: `Ilustrasi:  Antarmuka drag-n-drop dengan node:  [Pesan Masuk] → [Cek Database] → [Balas Otomatis]`,
    imageLeft: true,
    icon: UserCog,
  },
  {
    badge: "4",
    title: "Go Live & Optimasi",
    desc: `<strong>🚀 Launch:</strong> Aktifkan AI Agent dengan satu klik. Pelanggan mulai terima respons instan!<br><br><strong>📈 Monitoring Lanjutan:</strong><ul><li>Analisis sentimen percakapan</li><li>Pelacakan metrik CSAT & respon time</li><li>Alert untuk pesan gagal/missed</li></ul><strong>🔄 Continuous Improvement:</strong>  Komunitas berbagi template baru tiap minggu!`,
    image: "gamestation.png",
    imageDesc: `Ilustrasi:  Dashboard dengan:  - Grafik kepuasan pelanggan  - Notifikasi "Pesan Terkirim: 98%"  - Tombol "Upgrade Workflow"`,
    imageLeft: false,
    icon: BarChart2,
  },
];

const timeline = [
  { day: "Hari 1-2", title: "Setup & Verifikasi", desc: "Persiapan dokumen bisnis", icon: FileCheck2 },
  { day: "Hari 3-4", title: "Konfigurasi AI", desc: "Bangun alur percakapan", icon: UserCog },
  { day: "Hari 5", title: "Uji Coba", desc: "Test ke nomor internal", icon: Zap },
  { day: "Hari 7+", title: "Go Live!", desc: "Monitor & optimasi", icon: BarChart2 },
];
</script>

<template>
  <section class="container py-24 sm:py-32">
    <div class="text-center mb-12">
      <div class="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-base tracking-wider mb-2">
        Cara Kerja
      </div>
      <h2 class="text-3xl md:text-5xl font-bold text-center leading-tight mb-2">
        Transformasi Layanan Pelanggan dalam
        <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">4 Langkah Simpel</span>
      </h2>
      <p class="text-muted-foreground text-lg md:text-xl mt-2 max-w-2xl mx-auto">
        Ikuti proses mudah berikut untuk mengaktifkan AI Agent WhatsApp bisnis Anda.
      </p>
    </div>

    <div class="space-y-20">
      <div v-for="step in HowItWorksList" :key="step.badge" class="flex flex-col md:flex-row items-center gap-8 md:gap-16" :class="{ 'md:flex-row-reverse': !step.imageLeft }">
        <div class="w-full md:w-1/2 flex flex-col items-start md:items-{{ step.imageLeft ? 'start' : 'end' }} px-2 md:px-0">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-2xl shadow-md">
              <component :is="step.icon" class="w-6 h-6" />
            </div>
            <span class="text-primary font-bold text-lg">Langkah {{ step.badge }}</span>
          </div>
          <h3 class="text-2xl md:text-3xl font-bold mb-2 leading-snug">{{ step.title }}</h3>
          <div class="mt-1 text-base md:text-lg text-muted-foreground" v-html="step.desc"></div>
          <div class="mt-4 text-xs text-muted-foreground whitespace-pre-line italic">
            <strong>Gambaran:</strong> {{ step.imageDesc }}
          </div>
        </div>
        <div class="w-full md:w-1/2 flex justify-center py-6">
          <div class="relative w-full max-w-xs md:max-w-md">
            <img :src="step.image" :alt="step.title" class="rounded-xl shadow-lg border border-primary/20 object-cover w-full" />
            <div class="absolute -bottom-4 right-4 bg-primary/80 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow">
              <ArrowRight class="w-4 h-4" />
              Ilustrasi
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Timeline Visual -->
    <div class="my-20">
      <div class="text-center mb-8">
        <h3 class="text-2xl font-bold mb-2">Timeline Implementasi</h3>
        <p class="text-muted-foreground">Estimasi waktu dari setup hingga Go Live</p>
      </div>
      <div class="flex flex-col md:flex-row justify-center items-center gap-8">
        <div v-for="item in timeline" :key="item.day" class="flex flex-col items-center bg-background border rounded-2xl shadow p-6 min-w-[160px] max-w-xs">
          <div class="bg-primary/90 text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-xl mb-2 shadow">
            <component :is="item.icon" class="w-7 h-7" />
          </div>
          <div class="font-bold text-lg mb-1">{{ item.day }}</div>
          <div class="text-primary font-semibold mb-1">{{ item.title }}</div>
          <div class="text-muted-foreground text-sm text-center">{{ item.desc }}</div>
        </div>
      </div>
    </div>

    <!-- Testimonial Quote -->
    <div class="mt-20 flex flex-col items-center">
      <blockquote class="italic text-2xl md:text-3xl text-center max-w-2xl mb-4 text-primary font-semibold leading-relaxed">
        <CheckCircle class="inline-block w-7 h-7 mr-2 align-middle text-green-500" />
        "Dari registrasi sampai live hanya 5 hari! AI Agent kami sekarang handle 80% pertanyaan pelanggan."
      </blockquote>
      <div class="font-semibold text-primary text-lg">Omar Dhani, Pemilik UMKM Nusa Rent</div>
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 768px) {
  .step-row {
    flex-direction: row;
  }
  .step-row-reverse {
    flex-direction: row-reverse;
  }
}
</style>

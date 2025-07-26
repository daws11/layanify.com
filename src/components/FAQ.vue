<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
</script>

<template>
  <section id="faq" class="container md:w-[700px] py-24 sm:py-32">
    <div class="text-center mb-8">
      <div class="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-base tracking-wider mb-2">
        FAQ
      </div>
      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Semua Yang Perlu Anda Tahu
        <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
          Sebelum Memulai
        </span>
      </h2>
    </div>

    <Accordion type="single" collapsible class="AccordionRoot mb-10">
      <AccordionItem value="item-1">
        <AccordionTrigger>1. Apakah benar kode sumber sepenuhnya terbuka?</AccordionTrigger>
        <AccordionContent>
          <b>Ya, 100% open source di GitHub!</b> Anda bisa:
          <ul class="list-disc ml-6 my-2">
            <li>Akses penuh kode frontend (Next.js) & backend (Node.js)</li>
            <li>Modifikasi sesuai kebutuhan bisnis</li>
            <li>Kontribusi ke proyek utama</li>
          </ul>
          Hanya repository internal (integrasi proprietary) yang privat.<br>
          <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text font-semibold">Lisensi: MIT License</span> → Bebas digunakan bahkan untuk komersial!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>2. Bagaimana jaminan tidak kena banned WhatsApp?</AccordionTrigger>
        <AccordionContent>
          Kami menggunakan <b>WhatsApp Cloud API resmi dari Meta</b>:
          <ul class="list-disc ml-6 my-2">
            <li>Semua nomor melalui proses verifikasi legal</li>
            <li>Template pesan diapprove Meta sebelum dikirim</li>
            <li>Sistem anti-spam otomatis (max 20 pesan/menit)</li>
          </ul>
          Riwayat kepatuhan 99.8% dari 1.200+ pengguna aktif.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>3. Selain langganan, ada biaya lain?</AccordionTrigger>
        <AccordionContent>
          Hanya 2 biaya transparan:
          <ol class="list-decimal ml-6 my-2">
            <li><b>Paket Layanify</b> (jika pilih cloud managed): Rp 299rb/bulan</li>
            <li><b>Biaya penggunaan WhatsApp API</b> (dibayar ke Meta):
              <ul class="list-disc ml-6">
                <li>Utility: Rp 367/pesan</li>
                <li>Marketing: Rp 597/pesan</li>
              </ul>
            </li>
          </ol>
          <i>Tidak ada setup fee, biaya tersembunyi, atau komisi!</i>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>4. Apa syarat teknis hosting mandiri?</AccordionTrigger>
        <AccordionContent>
          Minimal spesifikasi server:
          <ul class="list-disc ml-6 my-2">
            <li>CPU: 2 core (disarankan 4 core)</li>
            <li>RAM: 2 GB (disarankan 4 GB)</li>
            <li>Storage: 20 GB</li>
            <li>OS: Ubuntu 22.04 / Debian 11</li>
          </ul>
          Kami sediakan:
          <ul class="list-disc ml-6 my-2">
            <li>Docker compose file</li>
            <li>Script instalasi 1-klik</li>
            <li>Panduan troubleshooting</li>
          </ul>
          <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text font-semibold">Dokumentasi lengkap di GitHub Wiki</span>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>5. Bisakah integrasi dengan tools lain?</AccordionTrigger>
        <AccordionContent>
          <b>Bisa! Kami dukung:</b>
          <ul class="list-disc ml-6 my-2">
            <li>E-commerce: Tokopedia, Shopee, WooCommerce</li>
            <li>CRM: HubSpot, Zoho</li>
            <li>Payment: Midtrans, Xendit</li>
            <li>Database: MySQL, PostgreSQL, MongoDB</li>
          </ul>
          Caranya:
          <ol class="list-decimal ml-6 my-2">
            <li>Gunakan webhook</li>
            <li>Pakai plugin komunitas</li>
            <li>Request custom integration (enterprise)</li>
          </ol>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>6. Bahasa apa yang didukung AI Agent?</AccordionTrigger>
        <AccordionContent>
          Saat ini fokus pada <b>Bahasa Indonesia</b> dengan fitur:
          <ul class="list-disc ml-6 my-2">
            <li>NLP khusus logika percakapan lokal</li>
            <li>Pemahaman slang (e.g., "gpp", "mantul")</li>
            <li>Support multi-bahasa terbatas (Inggris sederhana)</li>
          </ul>
          <i>Roadmap Q4 2025: Jawa, Sunda, Batak</i>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>7. Berapa lama verifikasi akun Meta?</AccordionTrigger>
        <AccordionContent>
          Rata-rata <b>3-7 hari kerja</b>, tergantung kompleksitas bisnis:
          <ul class="list-disc ml-6 my-2">
            <li>UMUK mikro: 1-3 hari (hanya butuh NIB)</li>
            <li>PT/CV: 4-7 hari (butuh SIUP, NPWP, dll)</li>
          </ul>
          Tim kami akan:
          <ul class="list-disc ml-6 my-2">
            <li>Pantau status real-time</li>
            <li>Revisi dokumen jika ditolak</li>
            <li>Garansi sampai akun aktif!</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>8. Ada batasan pengiriman pesan?</AccordionTrigger>
        <AccordionContent>
          Bergantung pada <b>tier akun Meta</b> Anda:
          <ul class="list-disc ml-6 my-2">
            <li>Tier 1: 1.000 pesan/hari</li>
            <li>Tier 2: 10.000 pesan/hari</li>
            <li>Tier 3: 100.000+ pesan/hari</li>
          </ul>
          Kami bantu naik tier dengan:
          <ul class="list-disc ml-6 my-2">
            <li>Optimasi kualitas pesan</li>
            <li>Pelaporan aktivitas rutin</li>
            <li>Verifikasi bisnis lengkap</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger>9. Siapa pemilik data pelanggan?</AccordionTrigger>
        <AccordionContent>
          <b>Anda 100% pemilik data!</b>
          <ul class="list-disc ml-6 my-2">
            <li>Untuk self-hosted: Data sepenuhnya di server Anda</li>
            <li>Untuk cloud managed: Kami gunakan <i>zero-knowledge encryption</i></li>
            <li>Ekspor data anytime (format CSV/JSON)</li>
          </ul>
          Kami <u>tidak pernah</u> jual atau analisis data untuk iklan!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-10">
        <AccordionTrigger>10. Dukungan teknis seperti apa?</AccordionTrigger>
        <AccordionContent>
          Berbasis paket:
          <ul class="list-disc ml-6 my-2">
            <li><b>Community</b>: Forum Discord (respons 24-48 jam)</li>
            <li><b>UMKM Pro</b>: Email/Tiket (respons &lt; 8 jam kerja)</li>
            <li><b>Enterprise</b>: Dedicated WA/Slack (respons &lt; 1 jam)</li>
          </ul>
          <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text font-semibold">97% masalah teratasi dalam 1 interaksi!</span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    <div class="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center max-w-xl mx-auto mt-10">
      <h3 class="text-2xl font-bold mb-2">Masih Ada Pertanyaan Teknis?</h3>
      <p class="mb-4">Tim engineer kami siap membantu via
        <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text font-semibold">Konsultasi Gratis 30 Menit</span>
      </p>
      <Button size="lg" class="font-bold">Jadwalkan Sekarang</Button>
    </div>
  </section>
</template>

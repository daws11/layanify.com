<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  FileText, 
  Database, 
  Users, 
  Lock,
  Globe,
  Mail,
  Calendar,
  Eye,
  Edit,
  Trash2,
  Download,
  Ban,
  Cookie,
  Baby,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Building2,
  Server,
  Bell,
  Settings
} from "lucide-vue-next";
</script>

<template>
  <Navbar />
  
  <section class="container py-16 sm:py-24">
    <div class="max-w-6xl mx-auto px-4">
      <!-- HEADER -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Privacy Policy 
          <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
            Layanify
          </span>
        </h1>
        
        <div class="space-y-2 text-muted-foreground max-w-2xl mx-auto">
          <p class="text-lg flex items-center justify-center gap-2">
            <Calendar class="w-5 h-5" />
            Terakhir diperbarui: 30 Juli 2025
          </p>
          <p class="text-lg flex items-center justify-center gap-2">
            <Users class="w-5 h-5" />
            Berlaku untuk: Pengguna layanify.com, app.layanify.com, docs.layanify.com, community.layanify.com
          </p>
        </div>
      </div>

      <!-- 1. PENGUMPULAN DATA -->
      <Card class="mb-8 group hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle class="text-2xl flex items-center gap-3">
            <Badge variant="secondary" class="text-xs px-3 py-1">1</Badge>
            <div class="flex items-center gap-2">
              <Database class="w-6 h-6 text-primary" />
              PENGUMPULAN DATA
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText class="w-5 h-5 text-primary" />
              1.1 Data yang Kami Kumpulkan
            </h3>
            
            <div class="overflow-x-auto">
              <table class="w-full border-collapse border border-border">
                <thead>
                  <tr class="bg-muted">
                    <th class="border border-border p-3 text-left">Kategori Data</th>
                    <th class="border border-border p-3 text-left">Contoh</th>
                    <th class="border border-border p-3 text-left">Tujuan Pengumpulan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-border p-3">Data Identitas</td>
                    <td class="border border-border p-3">Nama, email, nomor telepon</td>
                    <td class="border border-border p-3">Verifikasi akun, notifikasi</td>
                  </tr>
                  <tr class="bg-muted/50">
                    <td class="border border-border p-3">Data Bisnis</td>
                    <td class="border border-border p-3">SIUP, NPWP, NIB</td>
                    <td class="border border-border p-3">Verifikasi WhatsApp Business API</td>
                  </tr>
                  <tr>
                    <td class="border border-border p-3">Data Operasional</td>
                    <td class="border border-border p-3">Log chat, template pesan, metadata</td>
                    <td class="border border-border p-3">Penyediaan layanan inti</td>
                  </tr>
                  <tr class="bg-muted/50">
                    <td class="border border-border p-3">Data Pembayaran</td>
                    <td class="border border-border p-3">Riwayat transaksi, metode pembayaran</td>
                    <td class="border border-border p-3">Pengelolaan layanan berbayar</td>
                  </tr>
                  <tr>
                    <td class="border border-border p-3">Data Teknis</td>
                    <td class="border border-border p-3">IP address, tipe perangkat, cookies</td>
                    <td class="border border-border p-3">Keamanan & analitik</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
              <Server class="w-5 h-5 text-primary" />
              1.2 Sumber Pengumpulan
            </h3>
            <ul class="space-y-3 text-muted-foreground">
              <li class="flex items-start gap-3">
                <CheckCircle class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong class="text-foreground">Langsung dari Anda</strong>: Saat registrasi, konfigurasi AI Agent, top-up credit</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong class="text-foreground">Otomatis</strong>: Melalui cookies dan log server</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong class="text-foreground">Pihak Ketiga</strong>: Meta (WhatsApp API), penyedia pembayaran (Midtrans/Xendit)</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <!-- 2. PENGGUNAAN DATA -->
      <Card class="mb-8 group hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle class="text-2xl flex items-center gap-3">
            <Badge variant="secondary" class="text-xs px-3 py-1">2</Badge>
            <div class="flex items-center gap-2">
              <Settings class="w-6 h-6 text-primary" />
              PENGGUNAAN DATA
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
              <CheckCircle class="w-5 h-5 text-primary" />
              2.1 Tujuan Utama
            </h3>
            <ul class="space-y-3 text-muted-foreground">
              <li class="flex items-start gap-3">
                <CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Menyediakan dan memelihara layanan CRM</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Memfasilitasi integrasi WhatsApp Business API</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Memproses pembayaran dan top-up credit</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Mematuhi kewajiban hukum (UU PDP No. 27/2022)</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
              <Bell class="w-5 h-5 text-primary" />
              2.2 Tujuan Sekunder
            </h3>
            <ul class="space-y-3 text-muted-foreground">
              <li class="flex items-start gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Meningkatkan kualitas produk (analitik anonim)</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Mengirim pembaruan fitur & promosi (hanya dengan persetujuan)</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <!-- 3. BERBAGI DATA -->
      <Card class="mb-8 group hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle class="text-2xl flex items-center gap-3">
            <Badge variant="secondary" class="text-xs px-3 py-1">3</Badge>
            <div class="flex items-center gap-2">
              <Users class="w-6 h-6 text-primary" />
              BERBAGI DATA
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
              <Globe class="w-5 h-5 text-primary" />
              3.1 Dengan Pihak Ketiga
            </h3>
            
            <div class="overflow-x-auto">
              <table class="w-full border-collapse border border-border">
                <thead>
                  <tr class="bg-muted">
                    <th class="border border-border p-3 text-left">Penerima</th>
                    <th class="border border-border p-3 text-left">Jenis Data</th>
                    <th class="border border-border p-3 text-left">Tujuan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-border p-3 font-semibold">Meta Platforms Inc.</td>
                    <td class="border border-border p-3">Nomor telepon, template pesan</td>
                    <td class="border border-border p-3">Integrasi WhatsApp Business API</td>
                  </tr>
                  <tr class="bg-muted/50">
                    <td class="border border-border p-3 font-semibold">Penyedia Pembayaran</td>
                    <td class="border border-border p-3">Informasi transaksi</td>
                    <td class="border border-border p-3">Verifikasi pembayaran</td>
                  </tr>
                  <tr>
                    <td class="border border-border p-3 font-semibold">Layanan Cloud (AWS)</td>
                    <td class="border border-border p-3">Data terenkripsi</td>
                    <td class="border border-border p-3">Hosting infrastruktur</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle class="w-5 h-5 text-primary" />
              3.2 Dalam Situasi Khusus
            </h3>
            <ul class="space-y-3 text-muted-foreground">
              <li class="flex items-start gap-3">
                <AlertTriangle class="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span><strong class="text-foreground">Penegakan Hukum</strong>: Jika diminta otoritas berdasarkan UU KUHAP</span>
              </li>
              <li class="flex items-start gap-3">
                <AlertTriangle class="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span><strong class="text-foreground">Perlindungan Hak</strong>: Untuk investigasi pelanggaran ToS atau DMCA takedown</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <!-- 4. TRANSFER DATA INTERNASIONAL -->
      <Card class="mb-8 group hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle class="text-2xl flex items-center gap-3">
            <Badge variant="secondary" class="text-xs px-3 py-1">4</Badge>
            <div class="flex items-center gap-2">
              <Globe class="w-6 h-6 text-primary" />
              TRANSFER DATA INTERNASIONAL
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <p class="text-muted-foreground leading-relaxed">
            Data dapat ditransfer ke luar Indonesia (terutama AS untuk integrasi Meta API).
          </p>
          
          <div class="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 class="font-semibold text-blue-800 dark:text-blue-200 mb-4">Perlindungan transfer:</h3>
            <ul class="space-y-3 text-muted-foreground">
              <li class="flex items-start gap-3">
                <Shield class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong class="text-foreground">Standard Contractual Clauses</strong> (UE)</span>
              </li>
              <li class="flex items-start gap-3">
                <Lock class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong class="text-foreground">Enkripsi AES-256</strong> selama transit dan penyimpanan</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong class="text-foreground">Certification ISO 27001</strong> untuk infrastruktur AWS</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <!-- 5. KEAMANAN DATA -->
      <Card class="mb-8 group hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle class="text-2xl flex items-center gap-3">
            <Badge variant="secondary" class="text-xs px-3 py-1">5</Badge>
            <div class="flex items-center gap-2">
              <Lock class="w-6 h-6 text-primary" />
              KEAMANAN DATA
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-6 border rounded-xl bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <h3 class="font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
                <Shield class="w-5 h-5" />
                5.1 Teknis
              </h3>
              <ul class="space-y-2 text-sm text-muted-foreground">
                <li>• Enkripsi end-to-end untuk data sensitif</li>
                <li>• Audit keamanan berkala oleh independen pihak ketiga</li>
                <li>• Autentikasi dua faktor opsional</li>
              </ul>
            </div>
            
            <div class="p-6 border rounded-xl bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <h3 class="font-semibold text-blue-800 dark:text-blue-200 mb-4 flex items-center gap-2">
                <Building2 class="w-5 h-5" />
                5.2 Organisasional
              </h3>
              <ul class="space-y-2 text-sm text-muted-foreground">
                <li>• Pelatihan GDPR & UU PDP untuk staf</li>
                <li>• Akses data berdasarkan prinsip least privilege</li>
                <li>• Notifikasi wajib ke BSSN dalam 72 jam jika terjadi kebocoran data</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <!-- 6. HAK PENGGUNA -->
      <Card class="mb-8 group hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle class="text-2xl flex items-center gap-3">
            <Badge variant="secondary" class="text-xs px-3 py-1">6</Badge>
            <div class="flex items-center gap-2">
              <Users class="w-6 h-6 text-primary" />
              HAK PENGGUNA
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <p class="text-muted-foreground leading-relaxed">
            Sesuai <strong>UU PDP No. 27/2022</strong> dan <strong>GDPR</strong>, Anda berhak:
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="p-4 border rounded-lg bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <div class="flex items-center gap-2 mb-2">
                <Eye class="w-5 h-5 text-green-600" />
                <span class="font-semibold">Akses</span>
              </div>
              <p class="text-sm text-muted-foreground">Meminta salinan data pribadi Anda</p>
            </div>
            
            <div class="p-4 border rounded-lg bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <div class="flex items-center gap-2 mb-2">
                <Edit class="w-5 h-5 text-blue-600" />
                <span class="font-semibold">Koreksi</span>
              </div>
              <p class="text-sm text-muted-foreground">Memperbarui data yang tidak akurat</p>
            </div>
            
            <div class="p-4 border rounded-lg bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
              <div class="flex items-center gap-2 mb-2">
                <Trash2 class="w-5 h-5 text-red-600" />
                <span class="font-semibold">Penghapusan</span>
              </div>
              <p class="text-sm text-muted-foreground">Menghapus data ("Hak untuk Dilupakan")</p>
            </div>
            
            <div class="p-4 border rounded-lg bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
              <div class="flex items-center gap-2 mb-2">
                <Download class="w-5 h-5 text-purple-600" />
                <span class="font-semibold">Portabilitas</span>
              </div>
              <p class="text-sm text-muted-foreground">Menerima data dalam format terstruktur</p>
            </div>
            
            <div class="p-4 border rounded-lg bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
              <div class="flex items-center gap-2 mb-2">
                <Ban class="w-5 h-5 text-yellow-600" />
                <span class="font-semibold">Keberatan</span>
              </div>
              <p class="text-sm text-muted-foreground">Menolak pemrosesan untuk pemasaran langsung</p>
            </div>
          </div>
          
          <div class="p-4 bg-muted rounded-lg border">
            <p class="text-center">
              <strong>Eksekusi Hak</strong>: Kirim permintaan ke 
              <a href="mailto:dpo@layanify.com" class="text-primary hover:underline">dpo@layanify.com</a>
            </p>
          </div>
        </CardContent>
      </Card>

      <!-- 7. PENYIMPANAN DATA -->
      <Card class="mb-8 group hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle class="text-2xl flex items-center gap-3">
            <Badge variant="secondary" class="text-xs px-3 py-1">7</Badge>
            <div class="flex items-center gap-2">
              <Database class="w-6 h-6 text-primary" />
              PENYIMPANAN DATA
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead>
                <tr class="bg-muted">
                  <th class="border border-border p-3 text-left">Jenis Data</th>
                  <th class="border border-border p-3 text-left">Periode Penyimpanan</th>
                  <th class="border border-border p-3 text-left">Dasar Hukum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-border p-3">Data akun</td>
                  <td class="border border-border p-3">Selama akun aktif + 1 tahun</td>
                  <td class="border border-border p-3">UU PDP Pasal 35</td>
                </tr>
                <tr class="bg-muted/50">
                  <td class="border border-border p-3">Data bisnis (SIUP/NPWP)</td>
                  <td class="border border-border p-3">5 tahun setelah akun dinonaktifkan</td>
                  <td class="border border-border p-3">Peraturan Dirjen Pajak No. PER-02/PJ/2019</td>
                </tr>
                <tr>
                  <td class="border border-border p-3">Log aktivitas</td>
                  <td class="border border-border p-3">6 bulan</td>
                  <td class="border border-border p-3">UU ITE No. 11/2008</td>
                </tr>
                <tr class="bg-muted/50">
                  <td class="border border-border p-3">Data anonim</td>
                  <td class="border border-border p-3">Tanpa batas waktu</td>
                  <td class="border border-border p-3">Kepmenkominfo No. 20/2016</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <!-- 8. COOKIES & PELACAKAN -->
      <Card class="mb-8 group hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle class="text-2xl flex items-center gap-3">
            <Badge variant="secondary" class="text-xs px-3 py-1">8</Badge>
            <div class="flex items-center gap-2">
              <Cookie class="w-6 h-6 text-primary" />
              COOKIES & PELACAKAN
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
              <Settings class="w-5 h-5 text-primary" />
              8.1 Jenis Cookies
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="p-4 border rounded-lg bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                <div class="flex items-center gap-2 mb-2">
                  <CheckCircle class="w-5 h-5 text-green-600" />
                  <span class="font-semibold">Esensial</span>
                </div>
                <p class="text-sm text-muted-foreground">Autentikasi sesi (wajib untuk fungsi aplikasi)</p>
              </div>
              
              <div class="p-4 border rounded-lg bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                <div class="flex items-center gap-2 mb-2">
                  <Settings class="w-5 h-5 text-blue-600" />
                  <span class="font-semibold">Preferensi</span>
                </div>
                <p class="text-sm text-muted-foreground">Tema antarmuka, pengaturan bahasa</p>
              </div>
              
              <div class="p-4 border rounded-lg bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
                <div class="flex items-center gap-2 mb-2">
                  <Eye class="w-5 h-5 text-purple-600" />
                  <span class="font-semibold">Analitik</span>
                </div>
                <p class="text-sm text-muted-foreground">Google Analytics (anonim, tanpa pelacakan silang)</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
              <Ban class="w-5 h-5 text-primary" />
              8.2 Kontrol Pengguna
            </h3>
            <ul class="space-y-3 text-muted-foreground">
              <li class="flex items-start gap-3">
                <CheckCircle class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Kelola preferensi via dashboard pengguna</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Blokir cookies melalui pengaturan browser</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Opsi penolakan global di: <strong>layanify.com/cookie-settings</strong></span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <!-- 9. KEBIJAKAN KHUSUS ANAK -->
      <Card class="mb-8 group hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle class="text-2xl flex items-center gap-3">
            <Badge variant="secondary" class="text-xs px-3 py-1">9</Badge>
            <div class="flex items-center gap-2">
              <Baby class="w-6 h-6 text-primary" />
              KEBIJAKAN KHUSUS ANAK
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <div class="p-6 bg-yellow-50 dark:bg-yellow-950/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
            <ul class="space-y-3 text-muted-foreground">
              <li class="flex items-start gap-3">
                <AlertTriangle class="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span>Layanan tidak ditujukan untuk pengguna di bawah <strong>13 tahun</strong></span>
              </li>
              <li class="flex items-start gap-3">
                <AlertTriangle class="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span>Jika anak di bawah 13 tahun terdaftar tanpa izin wali:</span>
              </li>
              <li class="flex items-start gap-3 ml-8">
                <span class="text-yellow-600">•</span>
                <span>Akun akan dinonaktifkan</span>
              </li>
              <li class="flex items-start gap-3 ml-8">
                <span class="text-yellow-600">•</span>
                <span>Data akan dihapus sesuai GDPR Article 8</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <!-- 10. PERUBAHAN KEBIJAKAN -->
      <Card class="mb-8 group hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle class="text-2xl flex items-center gap-3">
            <Badge variant="secondary" class="text-xs px-3 py-1">10</Badge>
            <div class="flex items-center gap-2">
              <RefreshCw class="w-6 h-6 text-primary" />
              PERUBAHAN KEBIJAKAN
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <div class="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <ul class="space-y-3 text-muted-foreground">
              <li class="flex items-start gap-3">
                <Bell class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Pemberitahuan perubahan akan dikirim 30 hari sebelumnya via email</span>
              </li>
              <li class="flex items-start gap-3">
                <FileText class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Arsip versi sebelumnya tersedia di <strong>docs.layanify.com/privacy-archive</strong></span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <!-- 11. KONTAK & PENGADUAN -->
      <Card class="mb-8 group hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle class="text-2xl flex items-center gap-3">
            <Badge variant="secondary" class="text-xs px-3 py-1">11</Badge>
            <div class="flex items-center gap-2">
              <Mail class="w-6 h-6 text-primary" />
              KONTAK & PENGADUAN
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-6 border rounded-xl bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <h3 class="font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
                <Users class="w-5 h-5" />
                Data Protection Officer (DPO):
              </h3>
              <div class="space-y-2 text-sm text-muted-foreground">
                <p class="flex items-center gap-2">
                  <Mail class="w-4 h-4" />
                  <a href="mailto:dpo@layanify.com" class="text-primary hover:underline">dpo@layanify.com</a>
                </p>
                <p class="flex items-center gap-2">
                  <Building2 class="w-4 h-4" />
                  <span>PT. Layanify Teknologi Indonesia, Jl. Gatot Subroto Kav. 21, Jakarta Selatan 12930</span>
                </p>
              </div>
            </div>
            
            <div class="p-6 border rounded-xl bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <h3 class="font-semibold text-blue-800 dark:text-blue-200 mb-4 flex items-center gap-2">
                <Shield class="w-5 h-5" />
                Pengaduan Regulasi:
              </h3>
              <div class="space-y-2 text-sm text-muted-foreground">
                <p>• Otoritas Indonesia: Komisi Perlindungan Data Pribadi (KPDP)</p>
                <p>• Otoritas UE: Kantor Perlindungan Data Irlandia</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <!-- LAMPIRAN: DASAR HUKUM -->
      <Card class="mb-8 group hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle class="text-2xl flex items-center gap-3">
            <Badge variant="secondary" class="text-xs px-3 py-1">LAMPIRAN</Badge>
            <div class="flex items-center gap-2">
              <FileText class="w-6 h-6 text-primary" />
              DASAR HUKUM
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
                <Building2 class="w-5 h-5 text-primary" />
                Nasional:
              </h3>
              <ul class="space-y-2 text-sm text-muted-foreground">
                <li>• UU No. 11/2008 tentang Informasi dan Transaksi Elektronik</li>
                <li>• UU No. 27/2022 tentang Perlindungan Data Pribadi</li>
                <li>• Peraturan Menteri Kominfo No. 20/2016 tentang Perlindungan Data Pribadi</li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
                <Globe class="w-5 h-5 text-primary" />
                Internasional:
              </h3>
              <ul class="space-y-2 text-sm text-muted-foreground">
                <li>• GDPR (Regulasi UE 2016/679)</li>
                <li>• CCPA (California Civil Code § 1798.100)</li>
                <li>• WhatsApp Business Data Processing Terms</li>
              </ul>
            </div>
          </div>
          
          <div class="p-6 bg-muted rounded-xl border">
            <p class="text-center text-sm text-muted-foreground">
              Kebijakan privasi ini memastikan kepatuhan terhadap:<br>
              • Prinsip <strong>Privacy by Design</strong> (ISO 27701)<br>
              • Sertifikasi <strong>TRUSTe</strong> untuk transfer data global<br>
              • Panduan <strong>BSSN</strong> untuk keamanan data nasional
            </p>
          </div>
          
          <div class="p-6 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800">
            <h3 class="font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
              <CheckCircle class="w-5 h-5" />
              Catatan Penting:
            </h3>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li>• Kami <strong>tidak pernah</strong> menjual data pengguna</li>
              <li>• Analitik hanya menggunakan data agregat anonim</li>
              <li>• Akses data oleh karyawan diaudit secara berkala</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
  
  <Footer />
</template>

<style scoped>
.container {
  @apply max-w-7xl mx-auto;
}
</style> 
<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  FileText, 
  Gavel, 
  MessageSquare, 
  Scale, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Building2,
  Globe,
  Mail,
  Calendar,
  Users,
  Lock,
  RefreshCw
} from "lucide-vue-next";
</script>

<template>
  <Navbar />
  
  <section class="container py-16 sm:py-24">
    <div class="max-w-4xl mx-auto px-4">
      <!-- HEADER -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Terms and Conditions 
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
            Berlaku untuk: Pengguna Layanify (layanify.com, app.layanify.com, docs.layanify.com, community.layanify.com)
          </p>
        </div>
      </div>

      <!-- 1. PENERIMAAN SYARAT -->
      <Card class="mb-8 group hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle class="text-2xl flex items-center gap-3">
            <Badge variant="secondary" class="text-xs px-3 py-1">1</Badge>
            <div class="flex items-center gap-2">
              <Shield class="w-6 h-6 text-primary" />
              PENERIMAAN SYARAT
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <p class="text-muted-foreground leading-relaxed">
            Dengan mengakses atau menggunakan layanan Layanify, Anda menyetujui:
          </p>
          
          <ul class="space-y-4 text-muted-foreground">
            <li class="flex items-start gap-3">
              <CheckCircle class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span>Terikat secara hukum oleh dokumen ini</span>
            </li>
            <li class="flex items-start gap-3">
              <CheckCircle class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span>Mematuhi semua hukum yang berlaku di Indonesia dan internasional</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <!-- 2. LISENSI OPEN SOURCE -->
      <Card class="mb-8 group hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle class="text-2xl flex items-center gap-3">
            <Badge variant="secondary" class="text-xs px-3 py-1">2</Badge>
            <div class="flex items-center gap-2">
              <FileText class="w-6 h-6 text-primary" />
              LISENSI OPEN SOURCE
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText class="w-5 h-5 text-primary" />
              2.1 Hak Penggunaan Kode Sumber
            </h3>
            <p class="text-muted-foreground mb-4 leading-relaxed">
              Kode sumber Layanify dilisensikan di bawah MIT License.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="p-6 border rounded-xl bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                <h4 class="font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
                  <CheckCircle class="w-5 h-5" />
                  Anda diperbolehkan:
                </h4>
                <ul class="space-y-2 text-sm text-muted-foreground">
                  <li>• Menggunakan, menyalin, memodifikasi, dan mendistribusikan kode untuk kepentingan pribadi/komersial</li>
                  <li>• Hosting mandiri di server sendiri</li>
                </ul>
              </div>
              
              <div class="p-6 border rounded-xl bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
                <h4 class="font-semibold text-red-800 dark:text-red-200 mb-3 flex items-center gap-2">
                  <XCircle class="w-5 h-5" />
                  Anda dilarang:
                </h4>
                <ul class="space-y-2 text-sm text-muted-foreground">
                  <li>• Menghapus atribut lisensi MIT atau pemberitahuan hak cipta asli</li>
                  <li>• Mengklaim kepemilikan eksklusif atas kode inti Layanify</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
              <Lock class="w-5 h-5 text-primary" />
              2.2 Batasan Copyleft
            </h3>
            <p class="text-muted-foreground leading-relaxed">
              Integrasi komponen eksternal (contoh: n8n, WhatsApp API) tunduk pada lisensi masing-masing (e.g., GPLv3, Apache 2.0).
            </p>
            <p class="text-muted-foreground mt-2 leading-relaxed">
              Modifikasi kode berlisensi copyleft wajib dirilis di bawah lisensi yang sama.
            </p>
          </div>
        </CardContent>
      </Card>

      <!-- 3. LARANGAN PENJUALAN KEMBALI ILEGAL -->
      <Card class="mb-8 group hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle class="text-2xl flex items-center gap-3">
            <Badge variant="secondary" class="text-xs px-3 py-1">3</Badge>
            <div class="flex items-center gap-2">
              <Gavel class="w-6 h-6 text-primary" />
              LARANGAN PENJUALAN KEMBALI ILEGAL
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
              <Users class="w-5 h-5 text-primary" />
              3.1 Untuk Pengguna Umum
            </h3>
            <p class="text-muted-foreground mb-4 leading-relaxed">
              Dilarang menjual kembali kode sumber Layanify sebagai produk proprietary tanpa modifikasi signifikan.
            </p>
            
            <div class="p-6 bg-yellow-50 dark:bg-yellow-950/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
              <h4 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">Pelanggaran dianggap pelanggaran hak cipta berdasarkan:</h4>
              <ul class="space-y-2 text-sm text-muted-foreground">
                <li>• UU Hak Cipta No. 28/2014 (Indonesia)</li>
                <li>• Digital Millennium Copyright Act (DMCA) (AS)</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
              <Building2 class="w-5 h-5 text-primary" />
              3.2 Untuk Penyedia Layanan Managed Hosting
            </h3>
            <p class="text-muted-foreground mb-4 leading-relaxed">
              Jika menawarkan Layanify sebagai layanan berbayar (managed hosting), Anda wajib:
            </p>
            
            <ul class="space-y-3 text-muted-foreground">
              <li class="flex items-start gap-3">
                <CheckCircle class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Jelas menyatakan bahwa layanan berbasis open source Layanify</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Menyertakan tautan ke repositori GitHub resmi (github.com/layanify)</span>
              </li>
              <li class="flex items-start gap-3">
                <XCircle class="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span>Tidak meniru branding "Layanify" untuk menipu pengguna</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <!-- 4. KEWAJIBAN PENGGUNA -->
      <Card class="mb-8 group hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle class="text-2xl flex items-center gap-3">
            <Badge variant="secondary" class="text-xs px-3 py-1">4</Badge>
            <div class="flex items-center gap-2">
              <MessageSquare class="w-6 h-6 text-primary" />
              KEWAJIBAN PENGGUNA
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
              <Shield class="w-5 h-5 text-primary" />
              4.1 Kepatuhan Meta API
            </h3>
            <p class="text-muted-foreground mb-4 leading-relaxed">
              Pengguna bertanggung jawab penuh atas:
            </p>
            
            <ul class="space-y-3 text-muted-foreground">
              <li class="flex items-start gap-3">
                <CheckCircle class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Verifikasi akun Developer Meta sesuai kebijakan WhatsApp Business</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Pembayaran biaya per pesan ke Meta sesuai wilayah (contoh: Rp 367/pesan untuk Indonesia)</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle class="w-5 h-5 text-primary" />
              4.2 Larangan Penyalahgunaan
            </h3>
            <p class="text-muted-foreground mb-4 leading-relaxed">
              Dilarang keras:
            </p>
            
            <ul class="space-y-3 text-muted-foreground">
              <li class="flex items-start gap-3">
                <XCircle class="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span>Menggunakan Layanify untuk spam, penipuan, atau pelanggaran UU ITE No. 11/2008</span>
              </li>
              <li class="flex items-start gap-3">
                <XCircle class="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span>Membobol enkripsi atau menyebarkan malware melalui platform</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <!-- 5. SANKSI HUKUM -->
      <Card class="mb-8 group hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle class="text-2xl flex items-center gap-3">
            <Badge variant="secondary" class="text-xs px-3 py-1">5</Badge>
            <div class="flex items-center gap-2">
              <Scale class="w-6 h-6 text-primary" />
              SANKSI HUKUM
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-6 border rounded-xl bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
              <h3 class="font-semibold text-red-800 dark:text-red-200 mb-4 flex items-center gap-2">
                <Building2 class="w-5 h-5" />
                5.1 Nasional (Indonesia)
              </h3>
              <p class="text-sm text-muted-foreground mb-3">Pelanggar lisensi open source dikenakan sanksi:</p>
              <ul class="space-y-2 text-sm text-muted-foreground">
                <li>• Pidana penjara hingga 4 tahun (Pasal 72 UU Hak Cipta)</li>
                <li>• Denda hingga Rp 1 miliar</li>
                <li>• Penjualan ilegal layanan berpotensi melanggar UU Perlindungan Konsumen No. 8/1999</li>
              </ul>
            </div>
            
            <div class="p-6 border rounded-xl bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
              <h3 class="font-semibold text-purple-800 dark:text-purple-200 mb-4 flex items-center gap-2">
                <Globe class="w-5 h-5" />
                5.2 Internasional
              </h3>
              <p class="text-sm text-muted-foreground mb-3">Pelanggaran DMCA (AS) berakibat:</p>
              <ul class="space-y-2 text-sm text-muted-foreground">
                <li>• Penghapusan konten dari platform digital</li>
                <li>• Gugatan perdata dengan ganti rugi hingga $150,000</li>
                <li>• Pelanggaran GDPR (UE) untuk data pengguna bisa didenda 4% dari pendapatan global</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <!-- 6. KEPEMILIKAN DATA -->
      <Card class="mb-8 group hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle class="text-2xl flex items-center gap-3">
            <Badge variant="secondary" class="text-xs px-3 py-1">6</Badge>
            <div class="flex items-center gap-2">
              <Lock class="w-6 h-6 text-primary" />
              KEPEMILIKAN DATA
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <div class="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <ul class="space-y-3 text-muted-foreground">
              <li class="flex items-start gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Data pelanggan (chat, kontak) sepenuhnya milik pengguna</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Layanify tidak menjual/menganalisis data untuk iklan</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <!-- 7. PERUBAHAN SYARAT -->
      <Card class="mb-8 group hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle class="text-2xl flex items-center gap-3">
            <Badge variant="secondary" class="text-xs px-3 py-1">7</Badge>
            <div class="flex items-center gap-2">
              <RefreshCw class="w-6 h-6 text-primary" />
              PERUBAHAN SYARAT
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <div class="p-6 bg-yellow-50 dark:bg-yellow-950/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
            <ul class="space-y-3 text-muted-foreground">
              <li class="flex items-start gap-3">
                <AlertTriangle class="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span>Layanify berhak memperbarui Terms and Conditions tanpa pemberitahuan sebelumnya</span>
              </li>
              <li class="flex items-start gap-3">
                <AlertTriangle class="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span>Versi terbaru selalu tersedia di layanify.com/terms</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <!-- 8. HUKUM YANG BERLAKU -->
      <Card class="mb-8 group hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle class="text-2xl flex items-center gap-3">
            <Badge variant="secondary" class="text-xs px-3 py-1">8</Badge>
            <div class="flex items-center gap-2">
              <Scale class="w-6 h-6 text-primary" />
              HUKUM YANG BERLAKU
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <p class="text-muted-foreground leading-relaxed">
            Syarat ini tunduk pada:
          </p>
          
          <ul class="space-y-3 text-muted-foreground">
            <li class="flex items-start gap-3">
              <CheckCircle class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span>Hukum Republik Indonesia untuk sengketa di wilayah Indonesia</span>
            </li>
            <li class="flex items-start gap-3">
              <CheckCircle class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span>UNCITRAL Arbitration Rules untuk sengketa internasional</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <!-- 9. KONTAK -->
      <Card class="mb-8 group hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle class="text-2xl flex items-center gap-3">
            <Badge variant="secondary" class="text-xs px-3 py-1">9</Badge>
            <div class="flex items-center gap-2">
              <Mail class="w-6 h-6 text-primary" />
              KONTAK
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
          <div class="text-center">
            <h3 class="font-semibold mb-4">Pertanyaan hukum:</h3>
            
            <div class="space-y-4">
              <div class="flex items-center justify-center gap-2">
                <Mail class="w-5 h-5 text-primary" />
                <a href="mailto:legal@layanify.com" class="text-primary hover:underline font-semibold">
                  legal@layanify.com
                </a>
              </div>
              
              <div class="flex items-center justify-center gap-2">
                <Building2 class="w-5 h-5 text-primary" />
                <span class="text-muted-foreground">
                  PT. Layanify Teknologi Indonesia, Jakarta Selatan, DKI Jakarta
                </span>
              </div>
            </div>
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
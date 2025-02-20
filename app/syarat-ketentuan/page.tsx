import { Card, CardContent } from "@/components/ui/card";

export default function SyaratKetentuanPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Syarat & Ketentuan
        </h1>
        <p className="text-lg text-gray-600">
          Terakhir diperbarui: 20 Februari 2025
        </p>
      </header>

      <Card className="mb-8">
        <CardContent className="p-6 prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold mb-4">1. Penerimaan Syarat</h2>
          <p className="mb-4">
            Dengan mengakses dan menggunakan platform Akademi AI Agents
            ("Platform"), Anda menyetujui untuk terikat oleh Syarat & Ketentuan
            ini. Jika Anda tidak setuju dengan bagian apapun dari syarat ini,
            Anda tidak diperkenankan menggunakan Platform kami.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">2. Definisi</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              "Platform" mengacu pada website dan layanan Akademi AI Agents
            </li>
            <li>
              "Pengguna" adalah individu yang mengakses atau menggunakan
              Platform
            </li>
            <li>
              "Konten" mencakup materi pembelajaran, video, teks, dan media
              lainnya
            </li>
            <li>
              "Layanan" mengacu pada kursus, pelatihan, dan fitur yang
              disediakan
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            3. Pendaftaran dan Akun
          </h2>
          <h3 className="text-xl font-semibold mb-2">3.1 Persyaratan Akun</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Usia minimal 18 tahun</li>
            <li>Informasi yang akurat dan lengkap</li>
            <li>Menjaga kerahasiaan kredensial akun</li>
            <li>Bertanggung jawab atas semua aktivitas akun</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">3.2 Pembatalan Akun</h3>
          <p className="mb-4">
            Kami berhak menangguhkan atau menghentikan akun yang melanggar
            syarat & ketentuan ini.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            4. Layanan dan Pembayaran
          </h2>
          <h3 className="text-xl font-semibold mb-2">
            4.1 Biaya dan Pembayaran
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Harga tercantum dalam mata uang Rupiah</li>
            <li>Pembayaran dilakukan di muka</li>
            <li>Metode pembayaran yang diterima</li>
            <li>Kebijakan pengembalian dana</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">4.2 Perubahan Layanan</h3>
          <p className="mb-4">
            Kami berhak mengubah, memodifikasi, atau menghentikan layanan kapan
            saja.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            5. Hak Kekayaan Intelektual
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Seluruh konten adalah milik Akademi AI Agents</li>
            <li>Lisensi terbatas untuk penggunaan personal</li>
            <li>Larangan reproduksi atau distribusi tanpa izin</li>
            <li>Penghormatan terhadap hak cipta</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            6. Batasan Penggunaan
          </h2>
          <p className="mb-4">Pengguna dilarang:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Melanggar hukum atau peraturan</li>
            <li>Menyalahgunakan Platform</li>
            <li>Mengganggu keamanan sistem</li>
            <li>Membagikan kredensial akun</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">7. Penafian</h2>
          <p className="mb-4">
            Platform disediakan "sebagaimana adanya" tanpa jaminan apapun. Kami
            tidak bertanggung jawab atas kerugian yang timbul dari penggunaan
            Platform.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            8. Batasan Tanggung Jawab
          </h2>
          <p className="mb-4">
            Akademi AI Agents tidak bertanggung jawab atas kerugian langsung,
            tidak langsung, insidental, atau konsekuensial yang timbul dari
            penggunaan Platform.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">9. Perubahan Syarat</h2>
          <p className="mb-4">
            Kami berhak mengubah Syarat & Ketentuan ini kapan saja. Perubahan
            akan efektif setelah diposting di Platform.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            10. Hukum yang Berlaku
          </h2>
          <p className="mb-4">
            Syarat & Ketentuan ini diatur oleh hukum Republik Indonesia. Setiap
            sengketa akan diselesaikan di pengadilan yang berwenang di Jakarta.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">11. Hubungi Kami</h2>
          <p className="mb-4">
            Untuk pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi:
          </p>
          <p>
            Email: legal@akademi-ai-agents.com
            <br />
            Telepon: +62 812 3456 7890
            <br />
            Alamat: Gedung Tech Hub, Lantai 12, Jl. Teknologi No. 123, Jakarta
            Selatan, 12345, Indonesia
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

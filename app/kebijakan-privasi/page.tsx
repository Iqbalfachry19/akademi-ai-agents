import { Card, CardContent } from "@/components/ui/card";

export default function KebijakanPrivasiPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Kebijakan Privasi
        </h1>
        <p className="text-lg text-gray-600">
          Terakhir diperbarui: 20 Februari 2025
        </p>
      </header>

      <Card className="mb-8">
        <CardContent className="p-6 prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold mb-4">1. Pendahuluan</h2>
          <p className="mb-4">
            Akademi AI Agents ("kami", "kita", atau "Akademi") berkomitmen untuk
            melindungi privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana
            kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi
            informasi pribadi Anda saat Anda menggunakan layanan kami.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            2. Informasi yang Kami Kumpulkan
          </h2>
          <h3 className="text-xl font-semibold mb-2">
            2.1 Informasi yang Anda Berikan
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Informasi pendaftaran (nama, email, nomor telepon)</li>
            <li>Informasi profil</li>
            <li>Informasi pembayaran</li>
            <li>Konten yang Anda unggah atau posting</li>
            <li>Komunikasi dengan kami</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            2.2 Informasi yang Dikumpulkan Secara Otomatis
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Data penggunaan dan analytics</li>
            <li>Informasi perangkat dan browser</li>
            <li>Cookies dan teknologi pelacakan serupa</li>
            <li>Log server</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            3. Penggunaan Informasi
          </h2>
          <p className="mb-4">
            Kami menggunakan informasi yang dikumpulkan untuk:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Menyediakan dan mengelola layanan kami</li>
            <li>Personalisasi pengalaman pembelajaran</li>
            <li>Komunikasi dengan pengguna</li>
            <li>Peningkatan layanan</li>
            <li>Kepatuhan hukum</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">4. Berbagi Informasi</h2>
          <p className="mb-4">Kami dapat membagikan informasi Anda dengan:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Penyedia layanan pihak ketiga</li>
            <li>Mitra bisnis</li>
            <li>Otoritas hukum jika diwajibkan</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">5. Keamanan Data</h2>
          <p className="mb-4">
            Kami mengimplementasikan langkah-langkah keamanan yang sesuai untuk
            melindungi informasi pribadi Anda, termasuk:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Enkripsi data sensitif</li>
            <li>Firewall dan sistem keamanan</li>
            <li>Akses terbatas ke data pribadi</li>
            <li>Pemantauan keamanan regular</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">6. Hak Pengguna</h2>
          <p className="mb-4">Anda memiliki hak untuk:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Mengakses informasi pribadi Anda</li>
            <li>Memperbarui atau mengoreksi informasi Anda</li>
            <li>Meminta penghapusan data</li>
            <li>Menolak pemrosesan data</li>
            <li>Menarik persetujuan</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            7. Perubahan Kebijakan
          </h2>
          <p className="mb-4">
            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu.
            Perubahan signifikan akan diberitahukan melalui email atau
            pemberitahuan di platform kami.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">8. Hubungi Kami</h2>
          <p className="mb-4">
            Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan
            hubungi kami di:
          </p>
          <p className="mb-4">
            Email: privacy@akademi-ai-agents.com
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

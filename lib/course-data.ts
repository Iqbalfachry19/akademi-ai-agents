export type QuizQuestion = {
  question: string
  options: string[]
  correctAnswer: string
}

export type SyllabusItem = {
  title: string
  topics: string[]
}

export type CourseData = {
  [key: string]: {
    title: string
    syllabus: SyllabusItem[]
    quiz: QuizQuestion[]
  }
}

export const courseData: CourseData = {
  "dasar-dasar-ai-agents": {
    title: "Dasar-dasar AI Agents",
    syllabus: [
      {
        title: "Pengenalan AI Agents",
        topics: ["Definisi AI Agents", "Sejarah dan perkembangan AI Agents", "Jenis-jenis AI Agents"],
      },
      {
        title: "Arsitektur AI Agents",
        topics: ["Komponen utama AI Agents", "Sensor dan aktuator", "Pemrosesan informasi dalam AI Agents"],
      },
      {
        title: "Algoritma Dasar AI Agents",
        topics: ["Algoritma pencarian", "Pembelajaran mesin untuk AI Agents", "Pengambilan keputusan dalam AI Agents"],
      },
      {
        title: "Implementasi AI Agents",
        topics: [
          "Pemrograman AI Agents sederhana",
          "Pengujian dan evaluasi AI Agents",
          "Studi kasus implementasi AI Agents",
        ],
      },
    ],
    quiz: [
      {
        question: "Apa yang dimaksud dengan AI Agents?",
        options: [
          "Program komputer yang dapat berpikir seperti manusia",
          "Sistem yang dapat merasakan lingkungannya dan mengambil tindakan",
          "Robot dengan kecerdasan buatan",
          "Algoritma machine learning",
        ],
        correctAnswer: "Sistem yang dapat merasakan lingkungannya dan mengambil tindakan",
      },
      {
        question: "Komponen utama dari arsitektur AI Agents adalah:",
        options: [
          "CPU, RAM, dan GPU",
          "Sensor, aktuator, dan prosesor",
          "Database, API, dan user interface",
          "Kamera, mikrofon, dan speaker",
        ],
        correctAnswer: "Sensor, aktuator, dan prosesor",
      },
    ],
  },
  "optimasi-kinerja-ai-agents": {
    title: "Optimasi Kinerja AI Agents",
    syllabus: [
      {
        title: "Analisis Kinerja AI Agents",
        topics: ["Metrik evaluasi kinerja", "Identifikasi bottleneck dalam AI Agents", "Tools untuk analisis kinerja"],
      },
      {
        title: "Teknik Optimasi",
        topics: ["Optimasi algoritma", "Paralelisasi dan distribusi tugas", "Caching dan memoization"],
      },
      {
        title: "Optimasi Hardware",
        topics: ["Pemilihan hardware yang tepat", "Optimasi penggunaan GPU", "Distributed computing untuk AI Agents"],
      },
      {
        title: "Studi Kasus Optimasi",
        topics: ["Optimasi chatbot AI", "Peningkatan kinerja sistem rekomendasi", "Optimasi agen game AI"],
      },
    ],
    quiz: [
      {
        question: "Apa yang dimaksud dengan bottleneck dalam konteks AI Agents?",
        options: [
          "Bagian leher botol",
          "Titik di mana kinerja sistem terhambat",
          "Algoritma yang paling cepat",
          "Jenis hardware AI",
        ],
        correctAnswer: "Titik di mana kinerja sistem terhambat",
      },
      {
        question: "Teknik apa yang digunakan untuk menyimpan hasil komputasi untuk penggunaan di masa depan?",
        options: ["Paralelisasi", "Distributed computing", "Caching", "GPU optimization"],
        correctAnswer: "Caching",
      },
    ],
  },
  "menggunakan-elizaos-framework": {
    title: "Menggunakan ElizaOS Framework",
    syllabus: [
      {
        title: "Pengenalan ElizaOS",
        topics: [
          "Apa itu ElizaOS Framework",
          "Sejarah dan perkembangan ElizaOS",
          "Keunggulan ElizaOS dalam pengembangan AI Agents",
        ],
      },
      {
        title: "Arsitektur ElizaOS",
        topics: ["Komponen utama ElizaOS", "Integrasi dengan AI Agents", "Sistem plugin dan ekstensi"],
      },
      {
        title: "Pengembangan dengan ElizaOS",
        topics: [
          "Setup lingkungan pengembangan",
          "Membuat AI Agent pertama dengan ElizaOS",
          "Best practices dalam penggunaan ElizaOS",
        ],
      },
      {
        title: "Studi Kasus dan Proyek",
        topics: [
          "Implementasi chatbot dengan ElizaOS",
          "Sistem rekomendasi menggunakan ElizaOS",
          "Integrasi ElizaOS dengan platform lain",
        ],
      },
    ],
    quiz: [
      {
        question: "Apa keunggulan utama ElizaOS Framework?",
        options: [
          "Hanya berfungsi untuk chatbot",
          "Mudah diintegrasikan dengan berbagai jenis AI Agents",
          "Hanya berjalan di sistem operasi tertentu",
          "Tidak memerlukan coding",
        ],
        correctAnswer: "Mudah diintegrasikan dengan berbagai jenis AI Agents",
      },
      {
        question: "Fitur apa yang memungkinkan ElizaOS untuk diperluas fungsionalitasnya?",
        options: ["Sistem operasi", "Bahasa pemrograman khusus", "Sistem plugin dan ekstensi", "Hardware khusus"],
        correctAnswer: "Sistem plugin dan ekstensi",
      },
    ],
  },
  // Tambahkan data untuk kursus lainnya di sini
}


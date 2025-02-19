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
  "ai-agents-deployment": {
    title: "AI Agents Deployment",
    syllabus: [
      {
        title: "Persiapan Deployment",
        topics: [
          "Memahami lingkungan produksi",
          "Konfigurasi dan manajemen dependensi",
          "Keamanan dan privasi dalam deployment AI Agents",
        ],
      },
      {
        title: "Metode Deployment",
        topics: [
          "Deployment on-premise",
          "Cloud deployment (AWS, Google Cloud, Azure)",
          "Containerization dengan Docker",
        ],
      },
      {
        title: "Monitoring dan Maintenance",
        topics: ["Logging dan tracing", "Pemantauan kinerja AI Agents", "Strategi update dan rollback"],
      },
      {
        title: "Skalabilitas dan High Availability",
        topics: ["Load balancing untuk AI Agents", "Auto-scaling strategies", "Disaster recovery dan backup"],
      },
    ],
    quiz: [
      {
        question: "Apa keuntungan utama menggunakan containerization dalam deployment AI Agents?",
        options: [
          "Mengurangi biaya hardware",
          "Meningkatkan kecepatan AI",
          "Konsistensi lingkungan dan portabilitas",
          "Menghilangkan kebutuhan untuk coding",
        ],
        correctAnswer: "Konsistensi lingkungan dan portabilitas",
      },
      {
        question: "Teknik apa yang digunakan untuk mendistribusikan beban kerja di antara beberapa instance AI Agents?",
        options: ["Load balancing", "Caching", "Encryption", "Virtualization"],
        correctAnswer: "Load balancing",
      },
    ],
  },
  "dasar-dasar-data-science": {
    title: "Dasar-dasar Data Science",
    syllabus: [
      {
        title: "Pengenalan Data Science",
        topics: [
          "Definisi dan ruang lingkup Data Science",
          "Peran Data Scientist dalam industri",
          "Siklus hidup proyek Data Science",
        ],
      },
      {
        title: "Pengumpulan dan Persiapan Data",
        topics: ["Sumber-sumber data", "Teknik scraping dan ekstraksi data", "Data cleaning dan preprocessing"],
      },
      {
        title: "Analisis Eksploratori Data (EDA)",
        topics: ["Visualisasi data dengan Python", "Statistik deskriptif", "Identifikasi pola dan anomali"],
      },
      {
        title: "Dasar-dasar Machine Learning",
        topics: [
          "Supervised vs Unsupervised Learning",
          "Algoritma klasifikasi dan regresi dasar",
          "Evaluasi model machine learning",
        ],
      },
    ],
    quiz: [
      {
        question: "Apa yang dimaksud dengan Data Cleaning?",
        options: [
          "Menghapus semua data",
          "Membersihkan database secara fisik",
          "Proses mendeteksi dan memperbaiki atau menghapus data yang tidak akurat",
          "Mengenkripsi data sensitif",
        ],
        correctAnswer: "Proses mendeteksi dan memperbaiki atau menghapus data yang tidak akurat",
      },
      {
        question: "Manakah dari berikut ini yang merupakan contoh dari Unsupervised Learning?",
        options: ["Regresi linear", "Klasifikasi email spam", "Clustering K-means", "Prediksi harga rumah"],
        correctAnswer: "Clustering K-means",
      },
    ],
  },
  "machine-learning-fundamental": {
    title: "Machine Learning Fundamental",
    syllabus: [
      {
        title: "Dasar-dasar Machine Learning",
        topics: [
          "Definisi dan tipe-tipe machine learning",
          "Supervised, unsupervised, dan reinforcement learning",
          "Bias dan varians dalam machine learning",
        ],
      },
      {
        title: "Algoritma Supervised Learning",
        topics: ["Regresi linear dan logistik", "Decision trees dan random forests", "Support Vector Machines (SVM)"],
      },
      {
        title: "Algoritma Unsupervised Learning",
        topics: ["Clustering (K-means, hierarchical)", "Dimensionality reduction (PCA)", "Anomaly detection"],
      },
      {
        title: "Evaluasi dan Optimasi Model",
        topics: [
          "Metrics evaluasi (accuracy, precision, recall, F1-score)",
          "Cross-validation",
          "Hyperparameter tuning",
        ],
      },
    ],
    quiz: [
      {
        question: "Apa perbedaan utama antara supervised dan unsupervised learning?",
        options: [
          "Supervised learning lebih cepat",
          "Unsupervised learning memerlukan lebih banyak data",
          "Supervised learning menggunakan data berlabel, unsupervised tidak",
          "Unsupervised learning selalu lebih akurat",
        ],
        correctAnswer: "Supervised learning menggunakan data berlabel, unsupervised tidak",
      },
      {
        question: "Teknik apa yang digunakan untuk mengurangi overfitting dalam model machine learning?",
        options: [
          "Meningkatkan kompleksitas model",
          "Mengurangi jumlah data training",
          "Cross-validation",
          "Mengabaikan outlier",
        ],
        correctAnswer: "Cross-validation",
      },
    ],
  },
  "deep-learning-neural-networks": {
    title: "Deep Learning dan Neural Networks",
    syllabus: [
      {
        title: "Pengenalan Deep Learning",
        topics: [
          "Sejarah dan perkembangan deep learning",
          "Perbedaan machine learning dan deep learning",
          "Aplikasi deep learning di dunia nyata",
        ],
      },
      {
        title: "Arsitektur Neural Networks",
        topics: [
          "Neuron dan activation functions",
          "Feedforward neural networks",
          "Convolutional Neural Networks (CNN)",
          "Recurrent Neural Networks (RNN)",
        ],
      },
      {
        title: "Training Deep Neural Networks",
        topics: ["Backpropagation", "Optimizers (SGD, Adam, RMSprop)", "Regularization techniques"],
      },
      {
        title: "Advanced Topics",
        topics: [
          "Transfer learning",
          "Generative Adversarial Networks (GANs)",
          "Reinforcement learning dengan deep learning",
        ],
      },
    ],
    quiz: [
      {
        question: "Apa keunggulan utama Convolutional Neural Networks (CNN)?",
        options: [
          "Sangat efektif untuk data sekuensial",
          "Memerlukan sedikit data training",
          "Sangat baik dalam memproses data gambar",
          "Tidak memerlukan GPU untuk training",
        ],
        correctAnswer: "Sangat baik dalam memproses data gambar",
      },
      {
        question: "Apa fungsi utama dari activation function dalam neural network?",
        options: [
          "Mempercepat proses training",
          "Mengurangi jumlah parameter",
          "Memperkenalkan non-linearitas ke dalam model",
          "Mencegah overfitting",
        ],
        correctAnswer: "Memperkenalkan non-linearitas ke dalam model",
      },
    ],
  },
  "large-language-models": {
    title: "Large Language Models (LLM)",
    syllabus: [
      {
        title: "Pengenalan Large Language Models",
        topics: [
          "Definisi dan karakteristik LLM",
          "Sejarah dan evolusi model bahasa",
          "Perbandingan LLM dengan model NLP tradisional",
        ],
      },
      {
        title: "Arsitektur dan Training LLM",
        topics: [
          "Transformer architecture",
          "Teknik pre-training dan fine-tuning",
          "Challenges dalam training LLM (komputasi, data, etika)",
        ],
      },
      {
        title: "Aplikasi LLM",
        topics: [
          "Natural Language Processing tasks",
          "Text generation dan summarization",
          "Question answering dan chatbots",
        ],
      },
      {
        title: "Etika dan Tantangan LLM",
        topics: ["Bias dalam LLM", "Privasi dan keamanan data", "Implikasi sosial dan ekonomi dari LLM"],
      },
    ],
    quiz: [
      {
        question: "Apa komponen kunci dari arsitektur Transformer yang digunakan dalam LLM?",
        options: ["Convolutional layers", "Recurrent layers", "Self-attention mechanism", "Pooling layers"],
        correctAnswer: "Self-attention mechanism",
      },
      {
        question: "Apa yang dimaksud dengan 'fine-tuning' dalam konteks LLM?",
        options: [
          "Membuat model dari awal",
          "Melatih model pada task spesifik setelah pre-training",
          "Mengurangi ukuran model",
          "Mengoptimasi kecepatan inferensi",
        ],
        correctAnswer: "Melatih model pada task spesifik setelah pre-training",
      },
    ],
  },
  "generative-ai": {
    title: "Generative AI",
    syllabus: [
      {
        title: "Pengenalan Generative AI",
        topics: [
          "Definisi dan konsep dasar Generative AI",
          "Perbedaan dengan AI tradisional",
          "Aplikasi Generative AI di berbagai bidang",
        ],
      },
      {
        title: "Arsitektur Model Generatif",
        topics: [
          "Generative Adversarial Networks (GANs)",
          "Variational Autoencoders (VAEs)",
          "Transformer-based generative models",
        ],
      },
      {
        title: "Aplikasi Generative AI",
        topics: [
          "Image generation dan manipulation",
          "Text-to-image generation",
          "Music dan audio generation",
          "Video synthesis",
        ],
      },
      {
        title: "Etika dan Tantangan Generative AI",
        topics: [
          "Deepfakes dan implikasinya",
          "Hak cipta dan kepemilikan konten yang dihasilkan AI",
          "Bias dan fairness dalam model generatif",
        ],
      },
    ],
    quiz: [
      {
        question: "Apa perbedaan utama antara GANs dan VAEs?",
        options: [
          "GANs menggunakan encoder-decoder, VAEs menggunakan discriminator",
          "GANs berfokus pada rekonstruksi, VAEs pada generasi",
          "GANs menggunakan adversarial training, VAEs menggunakan variational inference",
          "GANs hanya untuk gambar, VAEs untuk teks",
        ],
        correctAnswer: "GANs menggunakan adversarial training, VAEs menggunakan variational inference",
      },
      {
        question: "Apa yang dimaksud dengan 'deepfake'?",
        options: [
          "Teknik kompresi video yang dalam",
          "AI yang sangat pintar",
          "Konten media sintetis yang dimanipulasi atau dibuat oleh AI",
          "Metode enkripsi data yang kuat",
        ],
        correctAnswer: "Konten media sintetis yang dimanipulasi atau dibuat oleh AI",
      },
    ],
  },
  "dasar-dasar-python": {
    title: "Dasar-dasar Python",
    syllabus: [
      {
        title: "Pengenalan Python",
        topics: ["Sejarah dan filosofi Python", "Instalasi Python dan setup lingkungan", "Python interpreter dan IDE"],
      },
      {
        title: "Dasar-dasar Pemrograman Python",
        topics: ["Variabel dan tipe data", "Operator dan ekspresi", "Control flow (if, for, while)"],
      },
      {
        title: "Struktur Data di Python",
        topics: ["List, tuple, dan dictionary", "Set dan frozenset", "List comprehension"],
      },
      {
        title: "Fungsi dan Modularitas",
        topics: ["Definisi dan pemanggilan fungsi", "Parameter dan return value", "Modules dan packages"],
      },
    ],
    quiz: [
      {
        question: "Apa perbedaan antara list dan tuple di Python?",
        options: [
          "List menggunakan () dan tuple menggunakan []",
          "List bisa diubah (mutable), tuple tidak bisa diubah (immutable)",
          "List hanya untuk angka, tuple untuk string",
          "Tidak ada perbedaan",
        ],
        correctAnswer: "List bisa diubah (mutable), tuple tidak bisa diubah (immutable)",
      },
      {
        question: "Apa fungsi dari keyword 'def' di Python?",
        options: [
          "Untuk mendefinisikan variabel",
          "Untuk membuat loop",
          "Untuk mendefinisikan fungsi",
          "Untuk mengimpor modul",
        ],
        correctAnswer: "Untuk mendefinisikan fungsi",
      },
    ],
  },
  "physical-ai": {
    title: "Physical AI",
    syllabus: [
      {
        title: "Pengenalan Physical AI",
        topics: [
          "Definisi dan ruang lingkup Physical AI",
          "Integrasi AI dengan sistem fisik",
          "Aplikasi Physical AI di industri",
        ],
      },
      {
        title: "Sensor dan Aktuator",
        topics: [
          "Jenis-jenis sensor dalam Physical AI",
          "Aktuator dan kontrol sistem",
          "Integrasi sensor dan aktuator dengan AI",
        ],
      },
      {
        title: "Robotika dan AI",
        topics: ["Dasar-dasar robotika", "Machine learning untuk kontrol robot", "Computer vision dalam robotika"],
      },
      {
        title: "IoT dan Edge Computing",
        topics: [
          "Konsep Internet of Things (IoT)",
          "Edge AI dan komputasi terdistribusi",
          "Keamanan dalam sistem Physical AI",
        ],
      },
    ],
    quiz: [
      {
        question: "Apa yang dimaksud dengan Edge AI?",
        options: [
          "AI yang hanya bekerja di cloud",
          "AI yang dijalankan pada perangkat lokal, dekat dengan sumber data",
          "AI khusus untuk editing gambar",
          "Teknologi AI terbaru",
        ],
        correctAnswer: "AI yang dijalankan pada perangkat lokal, dekat dengan sumber data",
      },
      {
        question: "Mengapa integrasi sensor penting dalam Physical AI?",
        options: [
          "Hanya untuk estetika",
          "Untuk mengumpulkan data dari lingkungan fisik",
          "Tidak penting dalam Physical AI",
          "Hanya untuk meningkatkan harga produk",
        ],
        correctAnswer: "Untuk mengumpulkan data dari lingkungan fisik",
      },
    ],
  },
}


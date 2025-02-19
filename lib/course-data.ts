export type QuizQuestion = {
  question: string
  options: string[]
  correctAnswer: string
}

export type SyllabusItem = {
  title: string
  topics: string[]
  videoUrl: string
  quiz: QuizQuestion[]
}

export type CourseData = {
  [key: string]: {
    title: string
    syllabus: SyllabusItem[]
  }
}

export const courseData: CourseData = {
  "dasar-dasar-ai-agents": {
    title: "Dasar-dasar AI Agents",
    syllabus: [
      {
        title: "Pengenalan AI Agents",
        topics: ["Definisi AI Agents", "Sejarah dan perkembangan AI Agents", "Jenis-jenis AI Agents"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
            question: "Manakah yang bukan merupakan jenis AI Agent?",
            options: ["Reactive Agents", "Goal-Based Agents", "Utility-Based Agents", "Emotion-Based Agents"],
            correctAnswer: "Emotion-Based Agents",
          },
        ],
      },
      {
        title: "Arsitektur AI Agents",
        topics: ["Komponen utama AI Agents", "Sensor dan aktuator", "Pemrosesan informasi dalam AI Agents"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
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
      {
        title: "Algoritma Dasar AI Agents",
        topics: ["Algoritma pencarian", "Pembelajaran mesin untuk AI Agents", "Pengambilan keputusan dalam AI Agents"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Apa tujuan utama dari algoritma pencarian dalam AI Agents?",
            options: [
              "Untuk menemukan data yang hilang",
              "Untuk mengoptimalkan penggunaan memori",
              "Untuk menemukan solusi optimal atau yang mendekati optimal untuk suatu masalah",
              "Untuk mempercepat proses komputasi",
            ],
            correctAnswer: "Untuk menemukan solusi optimal atau yang mendekati optimal untuk suatu masalah",
          },
        ],
      },
      {
        title: "Implementasi AI Agents",
        topics: [
          "Pemrograman AI Agents sederhana",
          "Pengujian dan evaluasi AI Agents",
          "Studi kasus implementasi AI Agents",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Mengapa pengujian penting dalam implementasi AI Agents?",
            options: [
              "Untuk memastikan agent terlihat menarik",
              "Untuk memverifikasi bahwa agent berperilaku sesuai yang diharapkan",
              "Untuk meningkatkan kecepatan agent",
              "Hanya formalitas dalam pengembangan",
            ],
            correctAnswer: "Untuk memverifikasi bahwa agent berperilaku sesuai yang diharapkan",
          },
        ],
      },
    ],
  },
  "optimasi-kinerja-ai-agents": {
    title: "Optimasi Kinerja AI Agents",
    syllabus: [
      {
        title: "Analisis Kinerja AI Agents",
        topics: ["Metrik evaluasi kinerja", "Identifikasi bottleneck dalam AI Agents", "Tools untuk analisis kinerja"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
        ],
      },
      {
        title: "Teknik Optimasi",
        topics: ["Optimasi algoritma", "Paralelisasi dan distribusi tugas", "Caching dan memoization"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Teknik apa yang digunakan untuk menyimpan hasil komputasi untuk penggunaan di masa depan?",
            options: ["Paralelisasi", "Distributed computing", "Caching", "GPU optimization"],
            correctAnswer: "Caching",
          },
        ],
      },
      {
        title: "Optimasi Hardware",
        topics: ["Pemilihan hardware yang tepat", "Optimasi penggunaan GPU", "Distributed computing untuk AI Agents"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Mengapa GPU sering digunakan dalam AI?",
            options: [
              "Karena lebih murah",
              "Karena dapat melakukan komputasi paralel yang efisien",
              "Karena mengonsumsi lebih sedikit daya",
              "Karena lebih mudah diprogram",
            ],
            correctAnswer: "Karena dapat melakukan komputasi paralel yang efisien",
          },
        ],
      },
      {
        title: "Studi Kasus Optimasi",
        topics: ["Optimasi chatbot AI", "Peningkatan kinerja sistem rekomendasi", "Optimasi agen game AI"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Apa tantangan umum dalam optimasi chatbot AI?",
            options: [
              "Membuat chatbot berbicara lebih cepat",
              "Meningkatkan akurasi dan relevansi respons",
              "Menambah jumlah emoji yang digunakan",
              "Membuat chatbot menggunakan suara manusia",
            ],
            correctAnswer: "Meningkatkan akurasi dan relevansi respons",
          },
        ],
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
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
        ],
      },
      {
        title: "Arsitektur ElizaOS",
        topics: ["Komponen utama ElizaOS", "Integrasi dengan AI Agents", "Sistem plugin dan ekstensi"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Fitur apa yang memungkinkan ElizaOS untuk diperluas fungsionalitasnya?",
            options: ["Sistem operasi", "Bahasa pemrograman khusus", "Sistem plugin dan ekstensi", "Hardware khusus"],
            correctAnswer: "Sistem plugin dan ekstensi",
          },
        ],
      },
      {
        title: "Pengembangan dengan ElizaOS",
        topics: [
          "Setup lingkungan pengembangan",
          "Membuat AI Agent pertama dengan ElizaOS",
          "Best practices dalam penggunaan ElizaOS",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Apa langkah pertama dalam membuat AI Agent dengan ElizaOS?",
            options: [
              "Menulis kode kompleks",
              "Menyiapkan lingkungan pengembangan",
              "Meluncurkan agent ke produksi",
              "Membeli lisensi ElizaOS",
            ],
            correctAnswer: "Menyiapkan lingkungan pengembangan",
          },
        ],
      },
      {
        title: "Studi Kasus dan Proyek",
        topics: [
          "Implementasi chatbot dengan ElizaOS",
          "Sistem rekomendasi menggunakan ElizaOS",
          "Integrasi ElizaOS dengan platform lain",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Mengapa ElizaOS cocok untuk implementasi chatbot?",
            options: [
              "Karena hanya bisa membuat chatbot",
              "Karena menyediakan fitur NLP yang kuat",
              "Karena tidak memerlukan coding",
              "Karena lebih murah dari framework lain",
            ],
            correctAnswer: "Karena menyediakan fitur NLP yang kuat",
          },
        ],
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
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Mengapa memahami lingkungan produksi penting dalam deployment AI Agents?",
            options: [
              "Agar agent terlihat lebih menarik",
              "Untuk memastikan kompatibilitas dan kinerja optimal",
              "Hanya formalitas dalam proses deployment",
              "Tidak penting dalam deployment",
            ],
            correctAnswer: "Untuk memastikan kompatibilitas dan kinerja optimal",
          },
        ],
      },
      {
        title: "Metode Deployment",
        topics: [
          "Deployment on-premise",
          "Cloud deployment (AWS, Google Cloud, Azure)",
          "Containerization dengan Docker",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
        ],
      },
      {
        title: "Monitoring dan Maintenance",
        topics: ["Logging dan tracing", "Pemantauan kinerja AI Agents", "Strategi update dan rollback"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Mengapa logging penting dalam maintenance AI Agents?",
            options: [
              "Untuk menghemat ruang penyimpanan",
              "Untuk melacak dan mendiagnosis masalah",
              "Hanya untuk memenuhi regulasi",
              "Tidak penting dalam maintenance",
            ],
            correctAnswer: "Untuk melacak dan mendiagnosis masalah",
          },
        ],
      },
      {
        title: "Skalabilitas dan High Availability",
        topics: ["Load balancing untuk AI Agents", "Auto-scaling strategies", "Disaster recovery dan backup"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question:
              "Teknik apa yang digunakan untuk mendistribusikan beban kerja di antara beberapa instance AI Agents?",
            options: ["Load balancing", "Caching", "Encryption", "Virtualization"],
            correctAnswer: "Load balancing",
          },
        ],
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
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Apa yang dimaksud dengan Data Science?",
            options: [
              "Ilmu tentang database",
              "Studi tentang spreadsheet",
              "Ekstraksi pengetahuan dan wawasan dari data",
              "Pemrograman komputer",
            ],
            correctAnswer: "Ekstraksi pengetahuan dan wawasan dari data",
          },
        ],
      },
      {
        title: "Pengumpulan dan Persiapan Data",
        topics: ["Sumber-sumber data", "Teknik scraping dan ekstraksi data", "Data cleaning dan preprocessing"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
        ],
      },
      {
        title: "Analisis Eksploratori Data (EDA)",
        topics: ["Visualisasi data dengan Python", "Statistik deskriptif", "Identifikasi pola dan anomali"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Apa tujuan utama dari Analisis Eksploratori Data (EDA)?",
            options: [
              "Untuk membuat data terlihat menarik",
              "Untuk memahami karakteristik data sebelum analisis formal",
              "Untuk menghapus data yang tidak diperlukan",
              "Untuk mengenkripsi data sensitif",
            ],
            correctAnswer: "Untuk memahami karakteristik data sebelum analisis formal",
          },
        ],
      },
      {
        title: "Dasar-dasar Machine Learning",
        topics: [
          "Supervised vs Unsupervised Learning",
          "Algoritma klasifikasi dan regresi dasar",
          "Evaluasi model machine learning",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Manakah dari berikut ini yang merupakan contoh dari Unsupervised Learning?",
            options: ["Regresi linear", "Klasifikasi email spam", "Clustering K-means", "Prediksi harga rumah"],
            correctAnswer: "Clustering K-means",
          },
        ],
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
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
        ],
      },
      {
        title: "Algoritma Supervised Learning",
        topics: ["Regresi linear dan logistik", "Decision trees dan random forests", "Support Vector Machines (SVM)"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Apa kegunaan utama dari algoritma regresi linear?",
            options: [
              "Untuk klasifikasi data",
              "Untuk memprediksi nilai numerik berdasarkan variabel input",
              "Untuk mengelompokkan data",
              "Untuk mengenkripsi data",
            ],
            correctAnswer: "Untuk memprediksi nilai numerik berdasarkan variabel input",
          },
        ],
      },
      {
        title: "Algoritma Unsupervised Learning",
        topics: ["Clustering (K-means, hierarchical)", "Dimensionality reduction (PCA)", "Anomaly detection"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Apa tujuan utama dari algoritma K-means?",
            options: [
              "Untuk memprediksi nilai",
              "Untuk mengelompokkan data ke dalam cluster",
              "Untuk mengklasifikasikan data",
              "Untuk mengurangi dimensi data",
            ],
            correctAnswer: "Untuk mengelompokkan data ke dalam cluster",
          },
        ],
      },
      {
        title: "Evaluasi dan Optimasi Model",
        topics: [
          "Metrics evaluasi (accuracy, precision, recall, F1-score)",
          "Cross-validation",
          "Hyperparameter tuning",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
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
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Apa perbedaan utama antara machine learning tradisional dan deep learning?",
            options: [
              "Deep learning selalu lebih cepat",
              "Deep learning dapat belajar fitur secara otomatis",
              "Machine learning lebih akurat",
              "Deep learning tidak memerlukan data",
            ],
            correctAnswer: "Deep learning dapat belajar fitur secara otomatis",
          },
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
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
        ],
      },
      {
        title: "Training Deep Neural Networks",
        topics: ["Backpropagation", "Optimizers (SGD, Adam, RMSprop)", "Regularization techniques"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
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
      {
        title: "Advanced Topics",
        topics: [
          "Transfer learning",
          "Generative Adversarial Networks (GANs)",
          "Reinforcement learning dengan deep learning",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Apa keuntungan utama dari transfer learning?",
            options: [
              "Mengurangi kebutuhan data training",
              "Meningkatkan kecepatan inferensi",
              "Mengurangi ukuran model",
              "Meningkatkan interpretabilitas model",
            ],
            correctAnswer: "Mengurangi kebutuhan data training",
          },
        ],
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
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Apa yang membedakan Large Language Models dari model NLP tradisional?",
            options: [
              "LLM selalu lebih kecil ukurannya",
              "LLM hanya bisa digunakan untuk terjemahan",
              "LLM memiliki kemampuan generalisasi yang lebih baik",
              "LLM hanya bisa dijalankan di cloud",
            ],
            correctAnswer: "LLM memiliki kemampuan generalisasi yang lebih baik",
          },
        ],
      },
      {
        title: "Arsitektur dan Training LLM",
        topics: [
          "Transformer architecture",
          "Teknik pre-training dan fine-tuning",
          "Challenges dalam training LLM (komputasi, data, etika)",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Apa komponen kunci dari arsitektur Transformer yang digunakan dalam LLM?",
            options: ["Convolutional layers", "Recurrent layers", "Self-attention mechanism", "Pooling layers"],
            correctAnswer: "Self-attention mechanism",
          },
        ],
      },
      {
        title: "Aplikasi LLM",
        topics: [
          "Natural Language Processing tasks",
          "Text generation dan summarization",
          "Question answering dan chatbots",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
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
      {
        title: "Etika dan Tantangan LLM",
        topics: ["Bias dalam LLM", "Privasi dan keamanan data", "Implikasi sosial dan ekonomi dari LLM"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Mengapa bias dalam LLM menjadi perhatian penting?",
            options: [
              "Karena bias membuat model lebih cepat",
              "Karena bias dapat memperkuat stereotip dan diskriminasi",
              "Karena bias meningkatkan akurasi model",
              "Karena bias mengurangi kebutuhan data training",
            ],
            correctAnswer: "Karena bias dapat memperkuat stereotip dan diskriminasi",
          },
        ],
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
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Apa yang membedakan Generative AI dari AI tradisional?",
            options: [
              "Generative AI hanya digunakan untuk gambar",
              "Generative AI dapat menciptakan konten baru",
              "Generative AI selalu lebih akurat",
              "Generative AI tidak memerlukan data training",
            ],
            correctAnswer: "Generative AI dapat menciptakan konten baru",
          },
        ],
      },
      {
        title: "Arsitektur Model Generatif",
        topics: [
          "Generative Adversarial Networks (GANs)",
          "Variational Autoencoders (VAEs)",
          "Transformer-based generative models",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Apa yang dimaksud dengan 'text-to-image generation'?",
            options: [
              "Mengubah gambar menjadi teks",
              "Membuat gambar berdasarkan deskripsi teks",
              "Menerjemahkan teks ke bahasa lain",
              "Mengekstrak teks dari gambar",
            ],
            correctAnswer: "Membuat gambar berdasarkan deskripsi teks",
          },
        ],
      },
      {
        title: "Etika dan Tantangan Generative AI",
        topics: [
          "Deepfakes dan implikasinya",
          "Hak cipta dan kepemilikan konten yang dihasilkan AI",
          "Bias dan fairness dalam model generatif",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
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
    ],
  },
  "dasar-dasar-python": {
    title: "Dasar-dasar Python",
    syllabus: [
      {
        title: "Pengenalan Python",
        topics: ["Sejarah dan filosofi Python", "Instalasi Python dan setup lingkungan", "Python interpreter dan IDE"],
        videoUrl: "https://www.youtube.com/embed/x7X9w_GIm1s",
        quiz: [
          {
            question: "Apa filosofi utama dari bahasa pemrograman Python?",
            options: [
              "Kecepatan eksekusi yang tinggi",
              "Sintaks yang kompleks",
              "Keterbacaan kode (readability)",
              "Hanya untuk pengembangan web",
            ],
            correctAnswer: "Keterbacaan kode (readability)",
          },
        ],
      },
      {
        title: "Dasar-dasar Pemrograman Python",
        topics: ["Variabel dan tipe data", "Operator dan ekspresi", "Control flow (if, for, while)"],
        videoUrl: "https://www.youtube.com/embed/poZtdyC24P4",
        quiz: [
          {
            question: "Manakah dari berikut ini yang bukan merupakan tipe data dasar di Python?",
            options: ["Integer", "Float", "String", "Array"],
            correctAnswer: "Array",
          },
        ],
      },
      {
        title: "Struktur Data di Python",
        topics: ["List, tuple, dan dictionary", "Set dan frozenset", "List comprehension"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
        ],
      },
      {
        title: "Fungsi dan Modularitas",
        topics: ["Definisi dan pemanggilan fungsi", "Parameter dan return value", "Modules dan packages"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
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
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Apa yang dimaksud dengan Physical AI?",
            options: [
              "AI yang hanya bekerja dengan data fisik",
              "Integrasi AI dengan sistem dan perangkat fisik",
              "AI yang memiliki bentuk fisik seperti robot",
              "Penggunaan AI untuk simulasi fisika",
            ],
            correctAnswer: "Integrasi AI dengan sistem dan perangkat fisik",
          },
        ],
      },
      {
        title: "Sensor dan Aktuator",
        topics: [
          "Jenis-jenis sensor dalam Physical AI",
          "Aktuator dan kontrol sistem",
          "Integrasi sensor dan aktuator dengan AI",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Apa fungsi utama dari aktuator dalam sistem Physical AI?",
            options: [
              "Mengumpulkan data dari lingkungan",
              "Memproses data",
              "Mengubah sinyal kontrol menjadi aksi fisik",
              "Menyimpan data",
            ],
            correctAnswer: "Mengubah sinyal kontrol menjadi aksi fisik",
          },
        ],
      },
      {
        title: "Robotika dan AI",
        topics: ["Dasar-dasar robotika", "Machine learning untuk kontrol robot", "Computer vision dalam robotika"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        quiz: [
          {
            question: "Bagaimana machine learning digunakan dalam kontrol robot?",
            options: [
              "Untuk menggantikan semua sensor robot",
              "Untuk meningkatkan kemampuan pengambilan keputusan dan adaptasi robot",
              "Hanya untuk mengoptimalkan konsumsi energi robot",
              "Untuk menghilangkan kebutuhan akan pemrograman manual",
            ],
            correctAnswer: "Untuk meningkatkan kemampuan pengambilan keputusan dan adaptasi robot",
          },
        ],
      },
      {
        title: "IoT dan Edge Computing",
        topics: [
          "Konsep Internet of Things (IoT)",
          "Edge AI dan komputasi terdistribusi",
          "Keamanan dalam sistem Physical AI",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
        ],
      },
    ],
  },
}


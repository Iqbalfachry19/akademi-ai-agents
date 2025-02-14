"use client";
import React, { useState } from "react";

interface SilabusItem {
  minggu: string;
  judul: string;
  deskripsi: string;
}

const silabus: SilabusItem[] = [
  {
    minggu: "1",
    judul: "Pengenalan Python dan Lingkungan Pengembangan",
    deskripsi:
      "Pelajari dasar-dasar Python, pengenalan bahasa, dan setup lingkungan pengembangan.",
  },
  {
    minggu: "2",
    judul: "Tipe Data, Variabel, dan Operasi Dasar",
    deskripsi:
      "Mengenal tipe data di Python, cara mendeklarasikan variabel, serta operasi dasar matematika dan pengolahan string.",
  },
  {
    minggu: "3",
    judul: "Struktur Kontrol (if, for, while) dan Fungsi",
    deskripsi:
      "Belajar tentang percabangan, perulangan, dan pembuatan fungsi untuk mengatur alur program di Python.",
  },
  {
    minggu: "4",
    judul: "List, Tuple, Dictionary, dan Set",
    deskripsi:
      "Pelajari berbagai struktur data koleksi yang ada di Python beserta cara penggunaannya.",
  },
  {
    minggu: "5",
    judul: "Pemrograman Berorientasi Objek dalam Python",
    deskripsi:
      "Mengenal konsep Object-Oriented Programming (OOP) dan cara penerapannya dalam Python.",
  },
  {
    minggu: "6",
    judul: "Pengenalan Modul Python untuk Data Science (NumPy, Pandas)",
    deskripsi:
      "Memahami penggunaan modul populer untuk Data Science seperti NumPy dan Pandas untuk pengolahan data.",
  },
];

const Silabus = () => {
  return (
    <section style={{ marginTop: "2rem" }}>
      <h2>Silabus</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {silabus.map((item) => (
          <li key={item.minggu} style={{ marginBottom: "1.5rem" }}>
            <h3>
              Minggu {item.minggu}: {item.judul}
            </h3>
            <p>{item.deskripsi}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

const VideoPembelajaran = () => {
  return (
    <section style={{ marginTop: "2rem" }}>
      <h2>Video Pembelajaran</h2>
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          title="Video Pembelajaran Python"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Ganti dengan URL video yang relevan
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </section>
  );
};

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");

  const correctAnswer = "9";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedOption === correctAnswer) {
      setFeedback("Jawaban benar!");
    } else {
      setFeedback("Jawaban salah, coba lagi.");
    }
  };

  return (
    <section style={{ marginTop: "2rem" }}>
      <h2>Quiz</h2>
      <form onSubmit={handleSubmit}>
        <p>
          Apa hasil dari perhitungan <strong>3 + 6</strong> di Python?
        </p>
        <div>
          <label>
            <input
              type="radio"
              name="quiz"
              value="9"
              checked={selectedOption === "9"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            9
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="quiz"
              value="36"
              checked={selectedOption === "36"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            36
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="quiz"
              value="Error"
              checked={selectedOption === "Error"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            Error
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="quiz"
              value="None"
              checked={selectedOption === "None"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            None
          </label>
        </div>
        <button type="submit" style={{ marginTop: "1rem" }}>
          Submit
        </button>
      </form>
      {feedback && <p style={{ marginTop: "1rem" }}>{feedback}</p>}
    </section>
  );
};

const activeStyle = {
  fontWeight: "bold",
  color: "#0070f3",
  borderBottom: "2px solid #0070f3",
};

export default function BelajarPage() {
  const [activeTab, setActiveTab] = useState<"silabus" | "video" | "quiz">(
    "silabus"
  );

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <header>
        <h1>Kursus Dasar-Dasar Python</h1>
        <p>
          Selamat datang di halaman pembelajaran dasar-dasar Python. Di sini,
          kamu akan mempelajari sintaks dasar, struktur data, kontrol alur,
          pemrograman berorientasi objek, dan modul untuk Data Science.
        </p>
      </header>
      <nav style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
        <button
          onClick={() => setActiveTab("silabus")}
          style={activeTab === "silabus" ? activeStyle : {}}
        >
          Silabus
        </button>
        <button
          onClick={() => setActiveTab("video")}
          style={activeTab === "video" ? activeStyle : {}}
        >
          Video
        </button>
        <button
          onClick={() => setActiveTab("quiz")}
          style={activeTab === "quiz" ? activeStyle : {}}
        >
          Quiz
        </button>
      </nav>
      <main>
        {activeTab === "silabus" && <Silabus />}
        {activeTab === "video" && <VideoPembelajaran />}
        {activeTab === "quiz" && <Quiz />}
      </main>
    </div>
  );
}

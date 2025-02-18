"use client";
import type React from "react";
import { useState } from "react";

interface SilabusItem {
  minggu: string;
  judul: string;
  deskripsi: string;
}

const silabus: SilabusItem[] = [
  {
    minggu: "1",
    judul: "Pengenalan AI Agents dan Aplikasinya",
    deskripsi:
      "Pengenalan konsep dasar AI Agents dan berbagai aplikasinya dalam dunia nyata.",
  },
  {
    minggu: "2",
    judul: "Arsitektur dan Komponen AI Agents",
    deskripsi:
      "Mempelajari arsitektur dasar dan komponen-komponen utama dalam AI Agents.",
  },
  {
    minggu: "3",
    judul: "Pemrograman AI Agents Sederhana",
    deskripsi:
      "Praktik pemrograman AI Agents sederhana menggunakan bahasa pemrograman Python.",
  },
  {
    minggu: "4",
    judul: "Studi Kasus dan Proyek Akhir",
    deskripsi:
      "Mengaplikasikan konsep yang dipelajari dalam studi kasus dan proyek akhir.",
  },
];

const Silabus = () => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Silabus</h2>
      <ul className="space-y-6">
        {silabus.map((item) => (
          <li key={item.minggu}>
            <h3 className="text-xl font-semibold">
              Minggu {item.minggu}: {item.judul}
            </h3>
            <p className="mt-2">{item.deskripsi}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

const VideoPembelajaran = () => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Video Pembelajaran</h2>
      <div className="relative pb-[56.25%] h-0">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          title="Video Pembelajaran"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Ganti dengan URL video yang relevan
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
};

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");

  const correctAnswer =
    "Entitas otonom yang dapat berinteraksi dengan lingkungannya";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedOption === correctAnswer) {
      setFeedback("Jawaban benar!");
    } else {
      setFeedback("Jawaban salah, coba lagi.");
    }
  };

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Quiz</h2>
      <form onSubmit={handleSubmit}>
        <p className="mb-4">Apa yang dimaksud dengan AI Agent?</p>
        <div className="space-y-2">
          {[
            "Program komputer yang dapat berpikir seperti manusia",
            "Entitas otonom yang dapat berinteraksi dengan lingkungannya",
            "Robot fisik dengan kecerdasan buatan",
            "Sistem pakar untuk pengambilan keputusan",
          ].map((option) => (
            <div key={option}>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="quiz"
                  value={option}
                  checked={selectedOption === option}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="mr-2"
                />
                {option}
              </label>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      {feedback && <p className="mt-4 font-semibold">{feedback}</p>}
    </section>
  );
};

export default function BelajarPage() {
  const [activeTab, setActiveTab] = useState<"silabus" | "video" | "quiz">(
    "silabus"
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header>
        <h1 className="text-3xl font-bold mb-4">
          Kursus Dasar-dasar AI Agents
        </h1>
        <p className="text-lg">
          Selamat datang di halaman pembelajaran Dasar-dasar AI Agents. Di sini,
          kamu akan mempelajari konsep dasar AI Agents, arsitekturnya, dan cara
          mengimplementasikan AI Agents sederhana.
        </p>
      </header>
      <nav className="mt-8 flex space-x-4">
        {["silabus", "video", "quiz"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "silabus" | "video" | "quiz")}
            className={`px-4 py-2 rounded ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>
      <main>
        {activeTab === "silabus" && <Silabus />}
        {activeTab === "video" && <VideoPembelajaran />}
        {activeTab === "quiz" && <Quiz />}
      </main>
    </div>
  );
}

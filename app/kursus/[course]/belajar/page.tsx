"use client";

import { useState, useEffect } from "react";
import { LearningStyleQuiz } from "@/components/learning-style-quiz";
import { UserProgress } from "@/components/user-progress";
import { AnimatedAvatar } from "@/components/animated-avatar";
import { PythonPlayground } from "@/components/python-playground";
import { LearningPreferences } from "@/components/learning-preferences";
import { AIAgentChat } from "@/components/ai-agent-chat";
import { Silabus } from "@/components/silabus";
import { VideoPembelajaran } from "@/components/video-pembelajaran";
import { Quiz } from "@/components/quiz";

export default function BelajarPage({
  params,
}: {
  params: { course: string };
}) {
  const [activeTab, setActiveTab] = useState<"silabus" | "video" | "quiz">(
    "silabus"
  );
  const [learningStyle, setLearningStyle] = useState<Record<
    string,
    string
  > | null>(null);
  const [userProgress, setUserProgress] = useState({
    points: 0,
    level: 1,
    badges: ["Pemula"],
    courseProgress: 0,
  });
  const [avatarEmotion, setAvatarEmotion] = useState<
    "happy" | "thinking" | "confused"
  >("happy");
  const [avatarSpeech, setAvatarSpeech] = useState(
    "Selamat datang di kursus ini!"
  );

  useEffect(() => {
    // Load learning style and progress from local storage or API
    const storedLearningStyle = localStorage.getItem("learningStyle");
    if (storedLearningStyle) {
      setLearningStyle(JSON.parse(storedLearningStyle));
    }
    // Similar logic for userProgress
  }, []);

  const handleLearningStyleComplete = (style: Record<string, string>) => {
    setLearningStyle(style);
    localStorage.setItem("learningStyle", JSON.stringify(style));
    setAvatarEmotion("happy");
    setAvatarSpeech(
      "Terima kasih! Sekarang saya dapat menyesuaikan pembelajaran untuk Anda."
    );
  };

  const handlePreferencesSave = (preferences: any) => {
    // Save preferences to local storage or API
    console.log("Preferences saved:", preferences);
    setAvatarEmotion("thinking");
    setAvatarSpeech(
      "Saya sedang menyesuaikan pengalaman belajar Anda berdasarkan preferensi yang baru."
    );
  };

  const handleTabChange = (tab: "silabus" | "video" | "quiz") => {
    setActiveTab(tab);
    switch (tab) {
      case "silabus":
        setAvatarEmotion("happy");
        setAvatarSpeech(
          "Mari kita lihat apa yang akan Anda pelajari dalam kursus ini!"
        );
        break;
      case "video":
        setAvatarEmotion("thinking");
        setAvatarSpeech(
          "Video pembelajaran akan membantu Anda memahami konsep dengan lebih baik."
        );
        break;
      case "quiz":
        setAvatarEmotion("confused");
        setAvatarSpeech(
          "Siap untuk menguji pengetahuan Anda? Jangan khawatir, ini akan menyenangkan!"
        );
        break;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header>
        <h1 className="text-3xl font-bold mb-4">
          Kursus {params.course.replace(/-/g, " ")}
        </h1>
        <p className="text-lg mb-4">
          Selamat datang di halaman pembelajaran. Di sini, kamu akan mempelajari
          konsep-konsep penting dalam {params.course.replace(/-/g, " ")}.
        </p>
      </header>

      {!learningStyle && (
        <LearningStyleQuiz onComplete={handleLearningStyleComplete} />
      )}

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="col-span-2">
          <nav className="flex space-x-4 mb-4">
            {["silabus", "video", "quiz"].map((tab) => (
              <button
                key={tab}
                onClick={() =>
                  handleTabChange(tab as "silabus" | "video" | "quiz")
                }
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
            {activeTab === "silabus" && <Silabus course={params.course} />}
            {activeTab === "video" && <VideoPembelajaran />}
            {activeTab === "quiz" && <Quiz course={params.course} />}
          </main>
        </div>
        <div>
          <UserProgress {...userProgress} />
          <AnimatedAvatar emotion={avatarEmotion} speech={avatarSpeech} />
          <LearningPreferences onSave={handlePreferencesSave} />
        </div>
      </div>

      <PythonPlayground />
      <AIAgentChat />
    </div>
  );
}

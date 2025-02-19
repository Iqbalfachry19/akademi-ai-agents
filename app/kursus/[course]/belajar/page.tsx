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
import { courseData } from "@/lib/course-data";

export default function BelajarPage({
  params,
}: {
  params: { course: string };
}) {
  const [activeSection, setActiveSection] = useState(0);
  const [activeContent, setActiveContent] = useState<"video" | "quiz">("video");
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

  const course = courseData[params.course];

  useEffect(() => {
    const storedLearningStyle = localStorage.getItem("learningStyle");
    if (storedLearningStyle) {
      setLearningStyle(JSON.parse(storedLearningStyle));
    }
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
    console.log("Preferences saved:", preferences);
    setAvatarEmotion("thinking");
    setAvatarSpeech(
      "Saya sedang menyesuaikan pengalaman belajar Anda berdasarkan preferensi yang baru."
    );
  };

  const handleSectionChange = (index: number) => {
    setActiveSection(index);
    setActiveContent("video");
    setAvatarEmotion("happy");
    setAvatarSpeech(
      `Mari kita pelajari tentang ${course.syllabus[index].title}!`
    );
  };

  const handleContentChange = (content: "video" | "quiz") => {
    setActiveContent(content);
    if (content === "video") {
      setAvatarEmotion("thinking");
      setAvatarSpeech(
        "Video pembelajaran akan membantu Anda memahami konsep dengan lebih baik."
      );
    } else {
      setAvatarEmotion("confused");
      setAvatarSpeech(
        "Siap untuk menguji pengetahuan Anda? Jangan khawatir, ini akan menyenangkan!"
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header>
        <h1 className="text-3xl font-bold mb-4">Kursus {course.title}</h1>
        <p className="text-lg mb-4">
          Selamat datang di halaman pembelajaran. Di sini, kamu akan mempelajari
          konsep-konsep penting dalam {course.title}.
        </p>
      </header>

      {!learningStyle && (
        <LearningStyleQuiz onComplete={handleLearningStyleComplete} />
      )}

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="col-span-2">
          <Silabus
            course={params.course}
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
          />
          <div className="mt-4">
            <nav className="flex space-x-4 mb-4">
              <button
                onClick={() => handleContentChange("video")}
                className={`px-4 py-2 rounded ${
                  activeContent === "video"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Video
              </button>
              <button
                onClick={() => handleContentChange("quiz")}
                className={`px-4 py-2 rounded ${
                  activeContent === "quiz"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Quiz
              </button>
            </nav>
            {activeContent === "video" && (
              <VideoPembelajaran
                videoUrl={course.syllabus[activeSection].videoUrl}
              />
            )}
            {activeContent === "quiz" && (
              <Quiz course={params.course} sectionIndex={activeSection} />
            )}
          </div>
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

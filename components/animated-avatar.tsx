"use client";

import { useState, useEffect } from "react";

type AnimatedAvatarProps = {
  emotion: "happy" | "thinking" | "confused";
  speech: string;
};

export function AnimatedAvatar({ emotion, speech }: AnimatedAvatarProps) {
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    if (speech && "speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(speech);
      utterance.lang = "id-ID"; // Set to Indonesian
      utterance.onstart = () => setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
      speechSynthesis.speak(utterance);
    }
  }, [speech]);

  const getEyeExpression = () => {
    switch (emotion) {
      case "happy":
        return (
          <>
            <path
              d="M15 20C15 22.7614 17.2386 25 20 25C22.7614 25 25 22.7614 25 20"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M55 20C55 22.7614 57.2386 25 60 25C62.7614 25 65 22.7614 65 20"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        );
      case "thinking":
        return (
          <>
            <circle cx="20" cy="20" r="5" fill="black" />
            <circle cx="60" cy="20" r="5" fill="black" />
            <path
              d="M35 45C35 45 40 50 45 50C50 50 55 45 55 45"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        );
      case "confused":
        return (
          <>
            <circle cx="20" cy="20" r="5" fill="black" />
            <circle cx="60" cy="20" r="5" fill="black" />
            <path
              d="M35 45C35 45 40 40 45 45C50 50 55 45 55 45"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-32 h-32">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={speaking ? "animate-pulse" : ""}
      >
        <circle
          cx="40"
          cy="40"
          r="38"
          fill="#FFD700"
          stroke="black"
          strokeWidth="2"
        />
        {getEyeExpression()}
      </svg>
      {speaking && (
        <div className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full animate-ping" />
      )}
    </div>
  );
}

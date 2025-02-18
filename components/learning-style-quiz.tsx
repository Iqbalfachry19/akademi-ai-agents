"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const questions = [
  {
    id: "visual-auditory",
    question: "Bagaimana Anda lebih suka menerima informasi baru?",
    options: [
      { value: "visual", label: "Melalui gambar, diagram, atau video" },
      { value: "auditory", label: "Melalui penjelasan lisan atau audio" },
    ],
  },
  {
    id: "theoretical-practical",
    question: "Bagaimana Anda lebih suka belajar konsep baru?",
    options: [
      { value: "theoretical", label: "Memahami teori terlebih dahulu" },
      { value: "practical", label: "Langsung mencoba dengan contoh praktis" },
    ],
  },
  {
    id: "solo-collaborative",
    question: "Bagaimana Anda lebih suka belajar?",
    options: [
      { value: "solo", label: "Belajar sendiri" },
      { value: "collaborative", label: "Belajar dalam kelompok atau diskusi" },
    ],
  },
];

export function LearningStyleQuiz({
  onComplete,
}: {
  onComplete: (style: Record<string, string>) => void;
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(answers);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Kuis Gaya Belajar</CardTitle>
        <CardDescription>
          Bantu kami memahami gaya belajar Anda agar kami dapat menyesuaikan
          pengalaman belajar Anda.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {questions.map((q) => (
            <div key={q.id} className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{q.question}</h3>
              <RadioGroup
                onValueChange={(value) =>
                  setAnswers((prev) => ({ ...prev, [q.id]: value }))
                }
                value={answers[q.id]}
              >
                {q.options.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <RadioGroupItem
                      value={option.value}
                      id={`${q.id}-${option.value}`}
                    />
                    <Label htmlFor={`${q.id}-${option.value}`}>
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}
        </form>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit}>Selesai</Button>
      </CardFooter>
    </Card>
  );
}

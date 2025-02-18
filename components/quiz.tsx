"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { courseData } from "../lib/course-data";

type QuizProps = {
  course: string;
};

export function Quiz({ course }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const courseInfo = courseData[course];

  if (!courseInfo || !courseInfo.quiz) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Quiz Tidak Tersedia</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Maaf, quiz untuk kursus ini belum tersedia.</p>
        </CardContent>
      </Card>
    );
  }

  const quizQuestions = courseInfo.quiz;

  const handleSubmit = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setQuizCompleted(true);
    }
  };

  if (quizCompleted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Quiz Selesai</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Selamat! Anda telah menyelesaikan quiz.</p>
          <p>
            Skor Anda: {score}/{quizQuestions.length}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quiz: {courseInfo.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-4">
          {quizQuestions[currentQuestion].question}
        </h3>
        <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
          {quizQuestions[currentQuestion].options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={option} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
        <Button onClick={handleSubmit} className="mt-4">
          {currentQuestion < quizQuestions.length - 1
            ? "Selanjutnya"
            : "Selesai"}
        </Button>
      </CardContent>
    </Card>
  );
}

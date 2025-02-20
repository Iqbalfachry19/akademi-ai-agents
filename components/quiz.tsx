"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { courseData } from "@/lib/course-data";

type QuizProps = {
  course: string;
  sectionIndex: number;
};

export function Quiz({ course, sectionIndex }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const courseInfo = courseData[course];

  if (!courseInfo || !courseInfo.syllabus[sectionIndex].quiz) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Quiz Tidak Tersedia</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Maaf, quiz untuk bagian ini belum tersedia.</p>
        </CardContent>
      </Card>
    );
  }

  const quizQuestions = courseInfo.syllabus[sectionIndex].quiz;

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
          <p>Selamat! Anda telah menyelesaikan quiz untuk bagian ini.</p>
          <p>
            Skor Anda: {score}/{quizQuestions.length}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="px-4 py-3 md:px-6 md:py-4">
        <CardTitle className="text-lg md:text-xl">
          Quiz: {courseInfo.syllabus[sectionIndex].title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 md:px-6">
        <h3 className="text-base md:text-lg font-semibold mb-4">
          {quizQuestions[currentQuestion].question}
        </h3>
        <RadioGroup
          value={selectedAnswer}
          onValueChange={setSelectedAnswer}
          className="space-y-2 md:space-y-3"
        >
          {quizQuestions[currentQuestion].options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={option} id={`option-${index}`} />
              <Label
                htmlFor={`option-${index}`}
                className="text-sm md:text-base"
              >
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
        <Button onClick={handleSubmit} className="mt-4 w-full md:w-auto">
          {currentQuestion < quizQuestions.length - 1
            ? "Selanjutnya"
            : "Selesai"}
        </Button>
      </CardContent>
    </Card>
  );
}

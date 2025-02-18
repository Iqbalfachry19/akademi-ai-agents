"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { registerForCourse } from "@/app/actions/register";

interface CourseRegistrationFormProps {
  courseName: string;
  experienceLabel?: string;
}

export function CourseRegistrationForm({
  courseName,
  experienceLabel = "Latar Belakang",
}: CourseRegistrationFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      course: courseName,
      experience: formData.get("experience") as string,
    };

    const result = await registerForCourse(data);

    if (result.success) {
      toast({
        title: "Pendaftaran Berhasil",
        description: `Anda telah berhasil mendaftar untuk kursus ${courseName}.`,
      });
      // Reset form
      event.currentTarget.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Pendaftaran Gagal",
        description: "Terjadi kesalahan saat mendaftar. Silakan coba lagi.",
      });
    }

    setIsLoading(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Nama</Label>
          <Input
            id="name"
            name="name"
            placeholder="Masukkan nama Anda"
            required
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Masukkan email Anda"
            type="email"
            required
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="experience">{experienceLabel}</Label>
          <Input
            id="experience"
            name="experience"
            placeholder={`Jelaskan ${experienceLabel.toLowerCase()} Anda`}
          />
        </div>
        <Button className="w-full" type="submit" disabled={isLoading}>
          {isLoading ? "Mendaftar..." : "Daftar Sekarang"}
        </Button>
      </div>
    </form>
  );
}

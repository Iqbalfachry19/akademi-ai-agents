"use server"

import { z } from "zod"
import { redirect } from "next/navigation"

const registerSchema = z.object({
  name: z.string().min(1, "Nama harus diisi"),
  email: z.string().email("Email tidak valid"),
  course: z.string().min(1, "Kursus harus dipilih"),
  experience: z.string().optional(),
})

type RegisterInput = z.infer<typeof registerSchema>

export async function registerForCourse(data: RegisterInput) {
  const result = registerSchema.safeParse(data)

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors }
  }

  // Here you would typically save the registration to a database
  // For this example, we'll just simulate a successful registration
  console.log("Registration received:", result.data)

  // Simulate an API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Redirect to the appropriate learning page based on the course
  const courseSlug = result.data.course.toLowerCase().replace(/ /g, "-")
  redirect(`/kursus/${courseSlug}/belajar`)
}


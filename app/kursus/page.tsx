import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Brain,
  Code,
  Zap,
  Server,
  Box,
  Database,
  BarChartIcon as ChartBar,
  Network,
  Bot,
  Sparkles,
  BotIcon as Robot,
} from "lucide-react"
import Link from "next/link"

const courses = [
  {
    title: "Dasar-dasar Python",
    description: "Pelajari fundamental bahasa pemrograman Python untuk AI dan Data Science.",
    icon: Code,
    level: "Pemula",
    duration: "6 minggu",
    link: "/kursus/dasar-dasar-python",
  },
  {
    title: "Dasar-dasar Data Science",
    description: "Pelajari konsep dasar dan alat-alat dalam Data Science.",
    icon: Database,
    level: "Pemula",
    duration: "8 minggu",
    link: "/kursus/dasar-dasar-data-science",
  },
  {
    title: "Machine Learning Fundamental",
    description: "Kuasai konsep dan algoritma dasar Machine Learning.",
    icon: ChartBar,
    level: "Menengah",
    duration: "10 minggu",
    link: "/kursus/machine-learning-fundamental",
  },
  {
    title: "Deep Learning dan Neural Networks",
    description: "Pelajari arsitektur dan aplikasi Deep Learning.",
    icon: Network,
    level: "Lanjutan",
    duration: "12 minggu",
    link: "/kursus/deep-learning-neural-networks",
  },
  {
    title: "Large Language Models (LLM)",
    description: "Pahami dan implementasikan Large Language Models.",
    icon: Bot,
    level: "Lanjutan",
    duration: "8 minggu",
    link: "/kursus/large-language-models",
  },
  {
    title: "Generative AI",
    description: "Eksplorasi teknik dan aplikasi Generative AI.",
    icon: Sparkles,
    level: "Lanjutan",
    duration: "10 minggu",
    link: "/kursus/generative-ai",
  },
  {
    title: "Dasar-dasar AI Agents",
    description: "Pelajari konsep dasar AI Agents dan cara kerjanya.",
    icon: Brain,
    level: "Pemula",
    duration: "4 minggu",
    link: "/kursus/dasar-dasar-ai-agents",
  },
  {
    title: "Optimasi Kinerja AI Agents dengan Zerepy",
    description: "Tingkatkan efisiensi dan kinerja AI Agents Anda menggunakan framework Zerepy.",
    icon: Zap,
    level: "Lanjutan",
    duration: "6 minggu",
    link: "/kursus/optimasi-kinerja-ai-agents",
  },
  {
    title: "Menggunakan ElizaOS Framework",
    description: "Pelajari cara mengembangkan AI Agents dengan ElizaOS Framework.",
    icon: Box,
    level: "Lanjutan",
    duration: "8 minggu",
    link: "/kursus/menggunakan-elizaos-framework",
  },
  {
    title: "AI Agents Deployment",
    description: "Kuasai teknik deployment AI Agents ke berbagai platform.",
    icon: Server,
    level: "Lanjutan",
    duration: "6 minggu",
    link: "/kursus/ai-agents-deployment",
  },
  {
    title: "Physical AI",
    description: "Eksplorasi penerapan AI dalam sistem fisik dan robotika.",
    icon: Robot,
    level: "Lanjutan",
    duration: "10 minggu",
    link: "/kursus/physical-ai",
  },
]

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Kursus AI dan Data Science</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <Card key={index}>
            <CardHeader>
              <course.icon className="w-10 h-10 mb-3" />
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">Tingkat: {course.level}</p>
              <p className="text-sm text-gray-500">Durasi: {course.duration}</p>
            </CardContent>
            <CardFooter>
              <Link href={course.link} className="w-full">
                <Button className="w-full">Lihat Detail</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}


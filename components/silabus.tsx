import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courseData, type SyllabusItem } from "../lib/course-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type SilabusProps = {
  course: string;
};

export function Silabus({ course }: SilabusProps) {
  const courseInfo = courseData[course];

  if (!courseInfo) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Silabus Tidak Ditemukan</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Maaf, silabus untuk kursus ini belum tersedia.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Silabus: {courseInfo.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {courseInfo.syllabus.map((item: SyllabusItem, index: number) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  {item.topics.map((topic: string, topicIndex: number) => (
                    <li key={topicIndex}>{topic}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}

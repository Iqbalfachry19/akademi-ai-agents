import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courseData, type SyllabusItem } from "@/lib/course-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type SilabusProps = {
  course: string;
  activeSection: number;
  onSectionChange: (index: number) => void;
};

export function Silabus({
  course,
  activeSection,
  onSectionChange,
}: SilabusProps) {
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
    <Card className="mb-4">
      <CardHeader className="px-4 py-3 md:px-6 md:py-4">
        <CardTitle className="text-lg md:text-xl">
          Silabus: {courseInfo.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 md:px-6">
        <Accordion type="single" collapsible className="w-full">
          {courseInfo.syllabus.map((item: SyllabusItem, index: number) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger
                onClick={() => onSectionChange(index)}
                className={`text-sm md:text-base ${
                  activeSection === index ? "font-bold text-blue-500" : ""
                }`}
              >
                {item.title}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-4 md:pl-5 space-y-1 md:space-y-2 text-sm md:text-base">
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

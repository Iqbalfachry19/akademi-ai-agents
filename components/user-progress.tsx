import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

type UserProgressProps = {
  points: number;
  level: number;
  badges: string[];
  courseProgress: number;
};

export function UserProgress({
  points,
  level,
  badges,
  courseProgress,
}: UserProgressProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress Belajar Anda</CardTitle>
        <CardDescription>
          Terus belajar untuk mendapatkan lebih banyak poin dan lencana!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium">Poin: {points}</p>
            <p className="text-sm font-medium">Level: {level}</p>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Progress Kursus:</p>
            <Progress value={courseProgress} className="w-full" />
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Lencana:</p>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <Badge key={badge} variant="secondary">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

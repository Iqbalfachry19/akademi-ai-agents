import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function VideoPembelajaran() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Video Pembelajaran</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
}

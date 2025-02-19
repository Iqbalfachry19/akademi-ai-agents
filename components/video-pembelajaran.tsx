import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type VideoPembelajaranProps = {
  videoUrl: string;
};

export function VideoPembelajaran({ videoUrl }: VideoPembelajaranProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Video Pembelajaran</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            src={videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
}

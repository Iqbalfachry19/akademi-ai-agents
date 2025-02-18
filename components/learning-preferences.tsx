"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type LearningPreferences = {
  language: string;
  detailedExplanations: boolean;
  audioEnabled: boolean;
};

export function LearningPreferences({
  onSave,
}: {
  onSave: (preferences: LearningPreferences) => void;
}) {
  const [preferences, setPreferences] = useState<LearningPreferences>({
    language: "id",
    detailedExplanations: false,
    audioEnabled: true,
  });

  const handleSave = () => {
    onSave(preferences);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferensi Pembelajaran</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="language">Bahasa</Label>
          <Select
            value={preferences.language}
            onValueChange={(value) =>
              setPreferences({ ...preferences, language: value })
            }
          >
            <SelectTrigger id="language">
              <SelectValue placeholder="Pilih bahasa" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="id">Bahasa Indonesia</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="detailed-explanations">Penjelasan Detail</Label>
          <Switch
            id="detailed-explanations"
            checked={preferences.detailedExplanations}
            onCheckedChange={(checked) =>
              setPreferences({ ...preferences, detailedExplanations: checked })
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="audio-enabled">Aktifkan Audio</Label>
          <Switch
            id="audio-enabled"
            checked={preferences.audioEnabled}
            onCheckedChange={(checked) =>
              setPreferences({ ...preferences, audioEnabled: checked })
            }
          />
        </div>
        <Button onClick={handleSave} className="w-full">
          Simpan Preferensi
        </Button>
      </CardContent>
    </Card>
  );
}

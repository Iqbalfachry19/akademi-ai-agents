"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PythonPlayground() {
  const [code, setCode] = useState("print('Hello, World!')");
  const [output, setOutput] = useState("");

  const runCode = async () => {
    try {
      const response = await fetch("/api/run-python", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });
      const result = await response.json();
      setOutput(result.output);
    } catch (error) {
      setOutput("Error: Tidak dapat menjalankan kode");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Python Playground</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Tulis kode Python di sini"
          className="font-mono"
          rows={10}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={runCode}>Jalankan Kode</Button>
        <div className="w-1/2 p-2 bg-gray-100 rounded">
          <pre>{output}</pre>
        </div>
      </CardFooter>
    </Card>
  );
}

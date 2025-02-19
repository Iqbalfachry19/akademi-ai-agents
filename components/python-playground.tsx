"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoaderIcon } from "lucide-react";

declare global {
  interface Window {
    loadPyodide: () => Promise<any>;
  }
}

export function PythonPlayground() {
  const [code, setCode] = useState("print('Hello, World!')");
  const [output, setOutput] = useState("");
  const [pyodide, setPyodide] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPyodide = async () => {
      setIsLoading(true);
      try {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/pyodide/v0.22.1/full/pyodide.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = async () => {
          const pyodideInstance = await window.loadPyodide();
          setPyodide(pyodideInstance);
          setIsLoading(false);
        };
      } catch (err) {
        console.error("Failed to load Pyodide:", err);
        setError("Failed to load Python environment. Please try again later.");
        setIsLoading(false);
      }
    };

    loadPyodide();
  }, []);

  const runCode = async () => {
    if (!pyodide) {
      setError("Python environment is not ready. Please wait and try again.");
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const result = await pyodide.runPythonAsync(code);
      setOutput(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
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
      <CardFooter className="flex flex-col items-start space-y-4">
        <Button onClick={runCode} disabled={isLoading || !pyodide}>
          {isLoading ? (
            <>
              <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
              Menjalankan...
            </>
          ) : (
            "Jalankan Kode"
          )}
        </Button>
        {error && <div className="text-red-500">{error}</div>}
        <div className="w-full p-2 bg-gray-100 rounded">
          <pre className="whitespace-pre-wrap">{output}</pre>
        </div>
      </CardFooter>
    </Card>
  );
}

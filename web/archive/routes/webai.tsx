import { useState } from "react";
import {
  checkCapabilities,
  createSession,
  promptModelStreaming,
} from "../utils/webaiApi";

export default function Index() {
  const [aiOutput, setAiOutput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function handlePrompt() {
    setLoading(true);
    setAiOutput("");

    try {
      const capabilities = await checkCapabilities();
      if (capabilities.available === "no") {
        throw new Error("AI model not available");
      }

      const session = await createSession();
      const result = await promptModelStreaming(
        session,
        "hi",
        (chunk) => setAiOutput((prev) => prev + chunk)
      );

      console.log("Final result:", result);
    } catch (err) {
      console.error("Error:", err);
      setAiOutput("An error occurred while fetching AI output.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen py-24 container mx-auto">
      <h1>AI Assistant</h1>
      <button onClick={handlePrompt} disabled={loading}>
        {loading ? "Loading..." : "Get AI Output"}
      </button>
      <div>
        <h2>AI Output:</h2>
        <pre>{aiOutput}</pre>
      </div>
    </div>
  );
}

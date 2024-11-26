import { useState } from "react";
import { json } from "@remix-run/node";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return json({ message: "Welcome to the Moderation Showcase!" });
};

// Utility function for AI moderation
async function moderateContent(content: string) {
  const flaggedWords = ["spam", "offensive", "banned"];
  const flagged = flaggedWords.some((word) => content.includes(word));

  if (flagged) {
    return { success: false, message: "Content flagged as inappropriate." };
  }

  return { success: true, message: "Content is acceptable." };
}

// Action to handle POST requests for moderation
export const action: ActionFunction = async ({ request }) => {
  try {
    const contentType = request.headers.get("Content-Type") || "";
    if (!contentType.includes("application/json")) {
      return json(
        { success: false, message: "Invalid Content-Type. Expected application/json." },
        { status: 400 }
      );
    }

    const { content } = await request.json();
    if (!content) {
      return json({ success: false, message: "Content is required." }, { status: 400 });
    }

    const result = await moderateContent(content);
    return json(result);
  } catch (error) {
    console.error("Error in moderation action:", error);
    return json(
      { success: false, message: "An error occurred during moderation." },
      { status: 500 }
    );
  }
};

// Frontend component
export default function Showcase() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    try {
      const res = await fetch("showcase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: e.target.value }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Server error.");
      }

      const data = await res.json();
      setResponse(data.message);
    } catch (error: any) {
      console.error("Error during moderation:", error);
      setResponse(error.message || "Failed to moderate content.");
    }
  };

  return (
    <div className="min-h-screen py-24 container mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Moderation Showcase</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter content to moderate"
      />
      <p>Response: {response}</p>
    </div>
  );
}

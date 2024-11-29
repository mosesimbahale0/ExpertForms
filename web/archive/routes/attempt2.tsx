// pages/Moderator.tsx

import { useState, useEffect } from "react";
import {
  checkCapabilities,
  createSession,
  promptModel,
} from "../utils/attempt2Api";

// import CopyToClipbooard from "~/components/CopyToClipboard";
import SuggestionsModal from "~/components/SuggestionsModal";

// interface SampleText {
//     harmful: string[];
//     acceptable: string[];
// }
//
// const harmfulTexts: SampleText = {
//     harmful: [
//         " I hate everything about this political party and anyone who supports it.",
//         " The revolution needs to happen now, or society is doomed.",
//         " Anyone who believes in socialism is clueless and ruining the world.",
//         " If things don't change, people will take matters into their own hands.",
//         " Vaccines cause more harm than good; it's all a government conspiracy.",
//         " You're such a worthless idiot. Just give up.",
//         " Oh sure, let's trust the system. That worked out great in history, didn't it?"
//     ],
//     acceptable: [
//         "This is a great product, and I would recommend it to anyone.",
//         "I'm having a wonderful day, and I'm excited for what the future holds.",
//         "The weather is beautiful today, and I'm enjoying a relaxing walk in the park.",
//         "I'm grateful for all the good things in my life.",
//         "I'm feeling happy and healthy.",
//         "I'm looking forward to spending time with my family and friends.",
//         "I'm excited about the opportunities that lie ahead.",
//         "I'm feeling optimistic about the future.",
//         "I'm grateful for my health and well-being.",
//         "I'm happy to be alive."
//     ]
// };

export default function Moderator() {
  const [isAvailable, setIsAvailable] = useState<string | null>(null);
  const [moderationResult, setModerationResult] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const checkGemini = async () => {
      try {
        const capabilities = await checkCapabilities();
        console.log("Gemini Nano capabilities:", capabilities);
        setIsAvailable(
          capabilities.available === "readily" ? "Available" : "Unavailable"
        );
      } catch (error) {
        console.error("Error checking Gemini availability:", error);
        setIsAvailable("Error");
      }
    };

    checkGemini();
  }, []);

  const handleModeration = async () => {
    if (isAvailable !== "Available") {
      setModerationResult("Gemini Nano is not available for moderation.");
      return;
    }

    try {
      setModerationResult("Moderation in progress...");
      const session = await createSession({
        systemPrompt: "Respond only in English.",
      });

      const prompt = `Check this content: "${content}". Respond only in English with "Yes the content is harmful or inappropriate" if the content is harmful or inappropriate, or "No it is acceptable" if it is acceptable.`;
      const result = await promptModel(session, prompt);

      // Map the model's response to moderation results
      if (result === "Yes") {
        setModerationResult("Content flagged as inappropriate.");
      } else if (result === "No") {
        setModerationResult("Content is acceptable.");
      } else {
        setModerationResult(
          "Unable to determine moderation status. Please refine the input."
        );
      }
    } catch (error: any) {
      if (error.message.includes("unsupported language")) {
        setModerationResult(
          "Error: The model attempted to use an unsupported language. Please ensure input is clear."
        );
      } else {
        setModerationResult("An error occurred during moderation.");
      }
    }
  };

  return (
    <>
      <section className="bg-primary text-text min-h-screen flex flex-col gap-6 items-center justify-center">
        <div className="min-h-screen py-24 container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Content Moderator</h1>
          <p className="text-lg mb-4">
            <strong>Gemini Nano Availability:</strong>{" "}
            {isAvailable || "Checking..."}
          </p>
          {isAvailable === "Unavailable" && (
            <div className="bg-yellow-100 text-yellow-800 p-4 rounded">
              <p>
                Gemini Nano is unavailable. Please ensure:
                <ul className="list-disc pl-5">
                  <li>You're using the latest version of Google Chrome.</li>
                  <li>
                    Gemini Nano is enabled in Chrome flags (
                    <code>chrome://flags</code>).
                  </li>
                  <li>Your device supports on-device AI.</li>
                  <li>You're not in Incognito or Guest mode.</li>
                </ul>
              </p>
            </div>
          )}

          <SuggestionsModal />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter content to moderate"
            className="bg-background w-full h-32 p-2 mt-4  border-b border-complementary hover:border-b-2 active:border-b-2  active:border-accent hover:border-accent focus:outline-none resize-y"
          />
          <button
            onClick={handleModeration}
            className=" bg-accent  hover:bg-complementary text-text   py-2 px-6 flex flex-row gap-2 justify-center items-center"
          >
            Submit for Moderation
          </button>
          {moderationResult && (
            <p className="mt-4">
              <strong>Moderation Result:</strong> {moderationResult}
            </p>
          )}
        </div>

        {/* <section className="">
                <div className="container mx-auto p-4">
                    <h2 className="text-2xl font-bold mb-4">Suggestions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {harmfulTexts.harmful.map((text, index) => (
                            <CopyToClipbooard key={index} content={text} />
                        ))}
                        {harmfulTexts.acceptable.map((text, index) => (
                            <CopyToClipbooard key={index + harmfulTexts.harmful.length} content={text} />
                        ))}
                    </div>

                </div>
            </section> */}
      </section>
    </>
  );
}

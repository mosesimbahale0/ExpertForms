// pages/Moderator.tsx

import { useState, useEffect } from "react";
import { checkCapabilities, createSession, promptModel } from "../utils/attempt2Api";
import SuggestionsModal from "~/components/SuggestionsModal";

export default function Moderator() {
    const [isAvailable, setIsAvailable] = useState<string | null>(null);
    const [moderationResult, setModerationResult] = useState<string>("");
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        const checkGemini = async () => {
            try {
                const capabilities = await checkCapabilities();
                console.log("Gemini Nano capabilities:", capabilities);
                setIsAvailable(capabilities.available === "readily" ? "Available" : "Unavailable");
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
                setModerationResult("Unable to determine moderation status. Please refine the input.");
            }
        } catch (error: any) {
            if (error.message.includes("unsupported language")) {
                setModerationResult("Error: The model attempted to use an unsupported language. Please ensure input is clear.");
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
                        <strong>Gemini Nano Availability:</strong> {isAvailable || "Checking..."}
                    </p>
                    {isAvailable === "Unavailable" && (
                        <div className="bg-yellow-100 text-yellow-800 p-4 rounded">
                            <p>
                                Gemini Nano is unavailable. Please ensure:
                                <ul className="list-disc pl-5">
                                    <li>You're using the latest version of Google Chrome.</li>
                                    <li>Gemini Nano is enabled in Chrome flags (<code>chrome://flags</code>).</li>
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

            </section>
        </>
    );
}

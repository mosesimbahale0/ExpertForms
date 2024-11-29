import { useState, useEffect } from "react";
import { checkCapabilities, createSession, promptModel } from "../utils/aiApi";

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
            const session = await createSession();
            const result = await promptModel(session, `Check this content: "${content}" for harmful or inappropriate content.`);

            // Update result based on model's response
            const flagged = result.toLowerCase().includes("inappropriate");
            setModerationResult(flagged ? "Content flagged as inappropriate." : "Content is acceptable.");
        } catch (error) {
            console.error("Moderation error:", error);
            setModerationResult("An error occurred during moderation.");
        }
    };

    return (
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
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter content to moderate"
                className="bg-background w-full h-32 p-2 mt-4 border border-b border-complementary hover:border-b-2 hover:border-accent focus:outline-none resize-y
 "
            />
            <button
                onClick={handleModeration}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Moderate
            </button>
            {moderationResult && (
                <p className="mt-4">
                    <strong>Moderation Result:</strong> {moderationResult}
                </p>
            )}
        </div>
    );
}

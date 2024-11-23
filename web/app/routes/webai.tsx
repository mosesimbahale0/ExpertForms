// Import necessary Remix functions
import { json } from "@remix-run/node"; // For server-side response handling
import { useSearchParams } from "@remix-run/react";
import { useState, useEffect } from "react";

// Loader function for Remix route
export const loader = async ({ request }: { request: Request }) => {
    const url = new URL(request.url);
    const prompt = url.searchParams.get("prompt");

    // Return a default response if prompt is missing, or throw a better error
    if (!prompt) {
        return json({ error: "Prompt is required" }, { status: 400 });
    }

    try {
        const response = await fetch("https://api.example.com/webai", { // Replace with actual Web AI API endpoint
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt }),
        });

        if (!response.ok) {
            throw new Response("Failed to get response from Web AI", { status: response.status });
        }

        const data = await response.json();
        return json({ response: data.response }); // Return JSON response using Remix's json() helper
    } catch (error) {
        console.error("Error in loader:", error);
        throw new Response("Internal Server Error", { status: 500 });
    }
};

// Custom Hook: useChromeWebAI
function useChromeWebAI(prompt: string) {
    const [response, setResponse] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const generateResponse = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const res = await fetch(`/webai?prompt=${encodeURIComponent(prompt)}`, { // Ensure proper API call
                method: "GET",
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to get response from Web AI");
            }

            const data = await res.json();
            setResponse(data.response);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return { response, isLoading, error, generateResponse };
}

// Main Component: WebAI
export default function WebAI() {
    const [prompt, setPrompt] = useState(""); // Manage prompt input state
    const { response, isLoading, error, generateResponse } = useChromeWebAI(prompt); // Use the custom hook for AI responses
    const [searchParams] = useSearchParams(); // Get URL query parameters
    const initialPrompt = searchParams.get("prompt") || ""; // Get the initial prompt from URL query

    useEffect(() => {
        setPrompt(initialPrompt); // Set prompt based on URL query param when component loads
    }, [initialPrompt]);

    return (
        <div className="py-24 min-h-screen mx-auto container ">
            <h1 className="text-3xl font-bold mb-4">Chrome Web AI</h1>

            {/* Textarea for prompt input */}
            <textarea
                className="w-full p-2 border border-gray-300 rounded mb-4"
                placeholder="Enter your prompt here"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />

            {/* Button to generate AI response */}
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={generateResponse}
                disabled={isLoading} // Disable button while loading
            >
                {isLoading ? "Generating..." : "Generate Response"}
            </button>

            {/* Display error message if there's an error */}
            {error && <p className="text-red-500 mt-2">{error}</p>}

            {/* Display the AI-generated response */}
            {response && (
                <div className="mt-4 border border-gray-300 p-2 rounded">
                    <pre>{response}</pre>
                </div>
            )}
        </div>
    );
}

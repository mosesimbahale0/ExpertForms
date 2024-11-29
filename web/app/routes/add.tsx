import { json, redirect } from "@remix-run/node";
import { useActionData, Form, useNavigation } from "@remix-run/react";
import { useEffect, useState } from "react";
import {
    checkCapabilities,
    createSession,
    promptModel,
} from "../utils/aiApi";
import SuggestionsModal from "~/components/SuggestionsModal";

// Define the Post type
interface Post {
    id: string;
    userId: string;
    title: string;
    content: string;
    coverImage: string;
    createdAt: string;
    updatedAt: string;
}



// Random images for blog - replace cdn uploads
const images: string[] = [
    `/Gemini_Generated_Image_1vm6kf1vm6kf1vm6.jpeg`,
    `/Gemini_Generated_Image_5zvdm65zvdm65zvd.jpeg`,
    `/Gemini_Generated_Image_9m5dgc9m5dgc9m5d.jpeg`,
    `/Gemini_Generated_Image_a0unkea0unkea0un.jpeg`,
    `/Gemini_Generated_Image_e1hrtqe1hrtqe1hr.jpeg`,
    `/Gemini_Generated_Image_g0leqeg0leqeg0le.jpeg`,
    `/Gemini_Generated_Image_hlysxmhlysxmhlys.jpeg`,
    `/Gemini_Generated_Image_ik724uik724uik72.jpeg`,
    `/Gemini_Generated_Image_t03c8nt03c8nt03c.jpeg`,
    `/Gemini_Generated_Image_tf72dwtf72dwtf72.jpeg`,
    `/Gemini_Generated_Image_tkiqw1tkiqw1tkiq.jpeg`,
    `/Gemini_Generated_Image_xi7swxi7swxi7swx.jpeg`,
];

// Helper to get a random image
const getRandomImage = (): string => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
};

// Server-side Action to handle form submission
export const action = async ({ request }: { request: Request }) => {
    try {
        console.log(`[LOG] Received POST request`);
        const formData = await request.formData();
        const title = formData.get("title");
        const content = formData.get("content");
        const userId = formData.get("userId");
        const coverImage = formData.get("coverImage");

        console.log(`[LOG] Extracted form data:`, {
            title,
            content,
            userId,
            coverImage,
        });

        if (!title || !content || !userId || !coverImage) {
            console.error(`[ERROR] Missing required fields`);
            return json({ error: "All fields are required." }, { status: 400 });
        }

        const postData = {
            userId,
            title,
            content,
            coverImage,
        };

        console.log(`[LOG] Sending POST request to backend with data:`, postData);

        const postResponse = await fetch(
            "https://expertformsspringservice.onrender.com/api/posts",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(postData),
            }
        );

        if (!postResponse.ok) {
            const errorText = await postResponse.text();
            console.error(
                `[ERROR] Backend responded with status ${postResponse.status}:`,
                errorText
            );
            throw new Error("Failed to create post.");
        }

        console.log(`[LOG] Post created successfully`);
        return redirect("/flex");


    } catch (error: any) {
        console.error(
            `[ERROR] Action handler encountered an error:`,
            error.message
        );
        return json(
            { error: error.message || "An unknown error occurred." },
            { status: 500 }
        );
    }
};

export default function CreatePost() {
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

    const handleModeration = async (title: string, content: string) => {
        if (isAvailable !== "Available") {
            setModerationResult("Gemini Nano is not available for moderation.");
            return false;
        }

        try {
            setModerationResult("Moderation in progress...");
            const session = await createSession({
                systemPrompt: "Respond only in English.",
            });

            const prompt = `Check this content: "${title} ${content}". Respond only in English with "Yes the content is harmful or inappropriate" if the content is harmful or inappropriate, or "No it is acceptable" if it is acceptable.`;
            const result = await promptModel(session, prompt);

            if (result === "Yes") {
                setModerationResult("Content flagged as inappropriate.");
                return false;
            } else if (result === "No") {
                setModerationResult("Content is acceptable.");
                return true;
            } else {
                setModerationResult(
                    "Unable to determine moderation status. Please refine the input."
                );
                return false;
            }
        } catch (error: any) {
            setModerationResult("An error occurred during moderation.");
            return false;
        }
    };

    const actionData = useActionData();
    const navigation = useNavigation();
    const [coolName, setCoolName] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [coverImage, setCoverImage] = useState<string>("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUserDetails = async () => {
            const storedUserId = window.localStorage.getItem("userId");
            const storedName = window.localStorage.getItem("coolName");

            if (storedUserId && storedName) {
                setUserId(storedUserId);
                setCoolName(storedName);
            } else {
                try {
                    const response = await fetch(
                        "https://expertformsspringservice.onrender.com/api/cool-names/generate",
                        {
                            method: "POST",
                            mode: "cors",
                            headers: { "Content-Type": "application/json" },
                        }
                    );

                    if (!response.ok) {
                        throw new Error(
                            `Failed to fetch cool name. Status: ${response.status}`
                        );
                    }
                    const data = await response.json();
                    const { id, name } = data;

                    window.localStorage.setItem("userId", id);
                    window.localStorage.setItem("coolName", name);
                    setUserId(id);
                    setCoolName(name);
                } catch (error) {
                    console.error(`[ERROR] Error fetching cool name:`, error);
                }
            }

            setCoverImage(getRandomImage());
            setIsLoading(false);
        };

        fetchUserDetails();
    }, []);

    const isSubmitting = navigation.state === "submitting";

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const title = (event.target as HTMLFormElement).title.value;
        const content = (event.target as HTMLFormElement).content.value;

        const isAcceptable = await handleModeration(title, content);

        if (!isAcceptable) {
            setModerationResult("Post not created due to inappropriate content. Please refine your input and try again ");
            return;
        }
        // Submit the form if content is acceptable
        event.target.submit();
        setModerationResult("");
        // Aletr
        alert("Post created successfully!");
    };

    const name = coolName;
    const initials = name
        ? name
            .split(" ")
            .map((n) => n[0].toUpperCase())
            .join("")
        : "A";

    return (
        <section className="bg-primary">
            <div className="min-h-screen py-24 container mx-auto ">
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

                {isLoading ? (
                    <div className="text-center">
                        <p className="text-lg">
                            Just a moment as we load your anonymous profile...
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="min-h-screen  container mx-auto">
                            <h1 className="text-3xl font-bold mb-4">Create a New Post</h1>
                            {coolName && (
                                <div className="mb-4 flex flex-row gap-4 items-center">
                                    <div className="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center shadow-lg text-text">
                                        <p className="text-xl">{initials}</p>
                                    </div>
                                    <p className="text-lg">
                                        Welcome, <strong>{coolName}</strong>!
                                    </p>
                                </div>
                            )}


                            <p className="text-xs flex flex-row gap-2 mb-2">
                                This Demo as of Nov 28th only works with
                                <span className="text-xs text-accent hover:underline">
                                    <a href="https://www.google.com/chrome/canary/" target="_blank" rel="noopener noreferrer">Chrome Canary.</a>
                                </span>
                                &

                                <span className="text-xs text-accent hover:underline">
                                    <a href="https://www.google.com/chrome/dev/?extra=devchannel" target="_blank" rel="noopener noreferrer">Chrome Dev channel.</a>
                                </span>
                            </p>


                            <p className="text-xs mb-4">
                                <strong>Gemini Nano Availability:</strong>{" "}
                                {isAvailable || "Checking..."}
                            </p>





                            <SuggestionsModal />
                            <Form method="post" className="" onSubmit={handleSubmit}>
                                <input type="hidden" name="userId" value={userId || ""} />
                                <input type="hidden" name="coverImage" value={coverImage} />
                                <div>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        required
                                        placeholder="Title"
                                        className="p-2 border-b border-complementary w-full bg-background focus:outline-none focus:border-b-2 text-lg placeholder-text-text3"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="content"
                                        id="content"
                                        required
                                        className="p-2 border-b border-complementary w-full bg-background focus:outline-none focus:border-b-2 min-h-40 max-h-40 h-40 text-xs placeholder-text-text3"
                                        placeholder="Add your content here"
                                    ></textarea>
                                </div>
                                {actionData?.error && (
                                    <div className="text-red-6000 font-medium">
                                        {actionData.error}
                                    </div>
                                )}
                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-accent hover:bg-complementary text-text px-6 py-3 rounded-full"
                                    >
                                        {isSubmitting ? "Creating..." : "Create Post"}
                                    </button>
                                </div>
                            </Form>


                            {moderationResult && (
                                <div className="p-6 fixed bottom-2 right-2 bg-background shadow-2xl text-success  flex flex-row gap-2 justify-center items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="2 4" stroke-dashoffset="6" d="M12 21c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><animate attributeName="stroke-dashoffset" dur="0.6s" repeatCount="indefinite" values="6;0" /></path><path stroke-dasharray="32" stroke-dashoffset="32" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.4s" values="32;0" /></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M12 16v-7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="10;0" /></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 8.5l3.5 3.5M12 8.5l-3.5 3.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0" /></path></g></svg>
                                    <p className=" text-center text-sm">
                                        <strong>Moderation Result:
                                        </strong>

                                        <div className=" text-text ">
                                            {moderationResult}
                                        </div>
                                    </p>
                                </div>
                            )}

                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

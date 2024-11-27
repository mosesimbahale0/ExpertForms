import { useFetcher } from "@remix-run/react";
import { useState, useRef, useEffect } from "react";

// Success, Errors types def
interface SuccessResponse {
    success: true;
    comment: any;
}

interface ErrorResponse {
    success: false;
    error: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;

export default function AddComment({
    postId,
    coolName,
}: {
    postId: string;
    coolName: string;
}) {
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === "submitting";
    const formRef = useRef<HTMLFormElement>(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Handle response from action
    useEffect(() => {
        if (fetcher.state === "idle" && fetcher.data) {
            if (fetcher.data.success) {
                formRef.current?.reset(); // Clear the form
                setIsSuccess(true); // Show success message
                setErrorMessage(null); // Clear any previous error
                // Hide success message after a few seconds
                setTimeout(() => setIsSuccess(false), 2000);
            } else if (fetcher.data.error) {
                setErrorMessage(fetcher.data.error); // Display error message
                setIsSuccess(false);
            }
        }
    }, [fetcher.state, fetcher.data]);

    // Get Name and make Initials

    const name = coolName;
    const initials = name
        ? name
            .split(" ")
            .map((n) => n[0].toUpperCase())
            .join("")
        : "A";

    return (
        <div>
            <fetcher.Form
                ref={formRef}
                method="post"
                className="flex flex-row flex-wrap gap-2 items-center text-text"
            >
                <div className="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center shadow-lg text-text">
                    <p className="text-xl">{initials}</p>
                </div>

                <input type="hidden" name="postId" value={postId} />
                <input type="hidden" name="sender" value={coolName} />

                <div className="flex flex-col">
                    <textarea
                        name="text"
                        placeholder={`Add your comment, ${coolName}`} // Concatenates static text with coolName
                        className="p-2 border-b border-accent w-full bg-background focus:outline-none focus:border-b-2 min-h-14 max-h-14 h-14 text-xs placeholder-text-text3"
                        required
                    ></textarea>
                </div>

                <div className="flex flex-row gap-2 items-center">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-accent hover:bg-complementary p-4  rounded-full text-text text-sm"
                    >
                        {isSubmitting ? "Submitting..." : "Submit Comment"}
                    </button>
                </div>
            </fetcher.Form>

            {/* Show success message */}
            {isSuccess && (
                <div className="fixed bottom-2 left-2 bg-background shadow-2xl text-success p-4 ">
                    <p className=" text-xs">Comment added successfully!</p>
                </div>
            )}

            {/* Show error message */}

            <div className="fixed bottom-2 left-2 bg-danger text-text p-2 ">
                {errorMessage && <p className="text-xs">{errorMessage}</p>}
            </div>
        </div>
    );
}

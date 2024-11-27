import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { useState, useEffect } from "react";
// import ComentSection from "~/components/ComentSection";
import AddComent from "~/components/comments/AddComent";
import Comments from "~/components/comments/Comments";


export const meta: MetaFunction = () => {
  return [
    { title: "ExpertForms" },
    { name: "description", content: "A collection of Tools for building Content Moderation Systems" },
  ];
};

// Define types
interface Post {
  id: string;
  userId: string;
  title: string;
  content: string;
  coverImage: string;
  createdAt: string;
  updatedAt: string;
}

interface Comment {
  id: string;
  postId: string;
  sender: string;
  text: string;
  replies: Reply[];
}

interface Reply {
  id: string;
  sender: string;
  text: string;
}

interface User {
  id: string;
  name: string; // Updated from 'username' to 'name'
}

interface LoaderData {
  post?: Post;
  comments?: Comment[];
  error?: string;
}

export async function loader({ params }: { params: { Id: string } }) {
  const { Id } = params;

  console.log("Loader called with params:", params);

  try {
    const [postRes, commentsRes] = await Promise.all([
      fetch(`https://expertformsspringservice.onrender.com/api/posts/${Id}`),
      fetch(`https://expertformsspringservice.onrender.com/api/comments/${Id}`),
    ]);
 
    console.log("Responses fetched", { postRes: postRes.ok, commentsRes: commentsRes.ok });

    if (!postRes.ok || !commentsRes.ok) {
      throw new Error("Failed to fetch post or comments");
    }

    const post: Post = await postRes.json();
    const comments: Comment[] = await commentsRes.json();

    console.log("Post and comments fetched successfully", { post, comments });

    return json({ post, comments });
  } catch (error: any) {
    console.error("Error fetching data:", error);
    return json({ error: "Could not load post details." }, { status: 500 });
  }
}



export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const text = formData.get("text");
  const postId = formData.get("postId");
  const sender = formData.get("sender") || "Anonymous";

  // Validate required fields
  if (typeof text !== "string" || text.trim() === "") {
    console.error("Comment text is missing or invalid.");
    return json({ error: "Comment text is required" }, { status: 400 });
  }

  if (typeof postId !== "string" || postId.trim() === "") {
    console.error("Post ID is missing or invalid.");
    return json({ error: "Post ID is required" }, { status: 400 });
  }

  try {
    const commentPayload = {
      text,
      postId,
      sender,
      replies: [],
    };

    // Send the request to the backend
    const response = await fetch(`https://expertformsspringservice.onrender.com/api/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Backend error: ${errorText}`);
      return json({ error: `Failed to add comment: ${errorText}` }, { status: response.status });
    }

    const createdComment = await response.json();
    return json({ success: true, comment: createdComment }, { status: 201 });
  } catch (error) {
    console.error("Error adding comment:", error);
    return json({ error: "An unexpected error occurred while adding the comment." }, { status: 500 });
  }
}




const SinglePost = () => {
  const { post, comments, error } = useLoaderData<LoaderData>();
  const [author, setAuthor] = useState<User | null>(null);
  const [authorLoading, setAuthorLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [coolName, setCoolName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [commentsList, setCommentsList] = useState<Comment[]>(comments || []); // Create a state for comments

  //  Poll after 5s 
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Polling for updates...");
      const fetchUpdatedComments = async () => {
        if (!post?.id) return; // Ensure post is defined

        try {
          const response = await fetch(`https://expertformsspringservice.onrender.com/api/comments/${post.id}`);
          if (!response.ok) {
            console.error("Error fetching updated comments:", response.statusText);
            return;
          }
          const updatedComments: Comment[] = await response.json();
          console.log("Updated comments:", updatedComments);

          // Compare with current comments and update only if there are changes
          if (JSON.stringify(commentsList) !== JSON.stringify(updatedComments)) {
            setCommentsList(updatedComments); // Update the comments state
          }
        } catch (error) {
          console.error("Error fetching updated comments:", error);
        }
      };
      fetchUpdatedComments();
    }, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId);
  }, [post?.id, commentsList]);



  console.log("useLoaderData output:", { post, comments, error });

  useEffect(() => {
    const fetchAuthor = async () => {
      if (!post?.userId) {
        console.log("No userId in post, skipping author fetch.");
        return;
      }

      console.log("Fetching author for userId:", post.userId);

      setAuthorLoading(true);
      try {
        const response = await fetch(`https://expertformsspringservice.onrender.com/api/cool-names/${post.userId}`);
        console.log("Author response status:", response.status);

        if (!response.ok) throw new Error("Failed to fetch author");

        const data: User = await response.json();
        console.log("Author fetched successfully:", data);

        setAuthor(data);
      } catch (err) {
        console.error("Error fetching author:", err);
      } finally {
        setAuthorLoading(false);
      }
    };

    fetchAuthor();
  }, [post?.userId]);

  if (error) {
    console.error("Rendering error message:", error);
    return <div>Error loading post: {error}</div>;
  }

  if (!post) {
    console.log("No post available, rendering not found.");
    return <div>Post not found</div>;
  }

  console.log("Rendering post:", post);


  // Get Initials
  const name = author?.name;
  const initials = name
    ? name
      .split(" ")
      .map((n) => n[0].toUpperCase())
      .join("")
    : "A";








  useEffect(() => {
    console.log(`[LOG] Component mounted`);

    const fetchUserDetails = async () => {
      const storedUserId = window.localStorage.getItem("userId");
      const storedName = window.localStorage.getItem("coolName");

      if (storedUserId && storedName) {
        console.log(`[LOG] Found existing data in localStorage:`, { storedUserId, storedName });
        setUserId(storedUserId);
        setCoolName(storedName);
      } else {
        console.log(`[LOG] Fetching new cool name`);
        try {
          const response = await fetch("https://expertformsspringservice.onrender.com/api/cool-names/generate", {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
          });

          if (!response.ok) {
            throw new Error(`Failed to fetch cool name. Status: ${response.status}`);
          }
          const data = await response.json();
          const { id, name } = data;
          console.log(`[LOG] Received cool name:`, { id, name });

          window.localStorage.setItem("userId", id);
          window.localStorage.setItem("coolName", name);
          setUserId(id);
          setCoolName(name);
        } catch (error) {
          console.error(`[ERROR] Error fetching cool name:`, error);
        }
      }

      setIsLoading(false);
    };

    fetchUserDetails();
  }, []);



  return (
    <>
      <section className="bg-primary text-text2">
        <section className="flex flex-col gap-6 min-h-screen items-center justify-center bg-primary py-24 container mx-auto">
          <div className="flex flex-col gap-6 text-left w-full">
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl font-medium text-text">{post.title}</h1>

              <div className="flex flex-row items-center gap-2">
                <div className="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center shadow-lg text-text">
                  <p className="text-xl">{initials}</p>
                </div>

                <p className="text-2xl">
                  {authorLoading ? "Loading author..." : author?.name || "Anonymous"}
                </p>
              </div>

              <div className="flex flex-row gap-2">
                <div className="flex flex-row gap-2 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="..." />
                  </svg>
                  <p className="text-xs">{comments?.length || 0} Comments</p>
                </div>
              </div>

              <img src={post.coverImage} alt={post.title} className="w-full h-64 object-cover" />
              <p className="text-sm">{post.content}</p>
            </div>

            <p className="text-xl font-medium text-text" style={{ fontFamily: "Space Grotesk" }}>
              Leave a comment below.
            </p>

            {/* <ComentSection comments={comments || []} /> */}


            <div className="flex flex-col gap-4 bg-secondary p-4 shadow-lg">
              {!isLoading && coolName ? (
                <AddComent postId={post.id} coolName={coolName} />
              ) : (
                <p>Loading comment form...</p>
              )}
              <Comments comments={commentsList} />
            </div>



          </div>
        </section>
      </section>
    </>
  );
};

export default SinglePost;

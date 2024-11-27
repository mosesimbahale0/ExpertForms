import AllPosts from "~/components/AllPosts";
import AddPost from "~/components/AddPost";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

interface Post {
  id: string;
  userId: string;
  title: string;
  content: string;
  coverImage: string;
  createdAt: string;
  updatedAt: string;
}

export async function loader() {
  try {
    // const response = await fetch(" http://localhost:9000/api/posts");
    const response = await fetch("https://expertformsspringservice.onrender.com/api/posts");
    if (!response.ok) {
      return json(
        { error: `Failed to fetch posts: ${response.statusText}` },
        { status: response.status }
      );
    }
    const posts: Post[] = await response.json();
    return json({ posts });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return json({ error: "Could not load posts." }, { status: 500 });
  }
}

interface LoaderData {
  posts?: Post[];
  error?: string;
}

export default function Flex() {
  const { posts, error } = useLoaderData<LoaderData>();

  if (error) {
    return (
      <section className="bg-primary text-text min-h-screen flex  flex-col gap-6 items-center justify-center ">
        <p className="text-xl text-red-600">{error}</p>
        <p className="text-xs text-text3">Probably a network error try refreshing the page. If the problem persists, please contact support.
        </p>
        <a href="/flex" className="text-accent hover:bg-accent hover:text-text justify-center items-center flex flex-row gap-2 p-4 " >

          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13.5A7.5 7.5 0 1 1 11.5 6H20m0 0l-3-3m3 3l-3 3" /></svg>
          Try again
        </a>

      </section>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <section className="bg-primary text-text min-h-screen flex items-center justify-center">
        <p className="text-xl">No posts available at the moment.</p>
        <AddPost />
      </section>
    );
  }

  return (
    <>
      <section className="bg-primary text-text">
        <div className="flex flex-col gap-8 min-h-screen   bg-primary py-20 container mx-auto ">
          <div className="flex flex-col gap-6 text-accent text-left w-full ">
            <p
              className="text-2xl font-medium "
              style={{ fontFamily: "Space Grotesk" }}
            ></p>

            <div className="flex flex-row gap-2  text-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17.06 13c-1.86 0-3.42 1.33-3.82 3.1c-.95-.41-1.82-.3-2.48-.01C10.35 14.31 8.79 13 6.94 13C4.77 13 3 14.79 3 17s1.77 4 3.94 4c2.06 0 3.74-1.62 3.9-3.68c.34-.24 1.23-.69 2.32.02c.18 2.05 1.84 3.66 3.9 3.66c2.17 0 3.94-1.79 3.94-4s-1.77-4-3.94-4M6.94 19.86c-1.56 0-2.81-1.28-2.81-2.86s1.26-2.86 2.81-2.86c1.56 0 2.81 1.28 2.81 2.86s-1.25 2.86-2.81 2.86m10.12 0c-1.56 0-2.81-1.28-2.81-2.86s1.25-2.86 2.81-2.86s2.82 1.28 2.82 2.86s-1.27 2.86-2.82 2.86M22 10.5H2V12h20zm-6.47-7.87c-.22-.49-.78-.75-1.31-.58L12 2.79l-2.23-.74l-.05-.01c-.53-.15-1.09.13-1.29.64L6 9h12l-2.44-6.32z"
                />
              </svg>
              <p
                className="text-2xl font-medium "
                style={{ fontFamily: "Space Grotesk" }}
              >
                ShadowWrite: A blog showcasing the Expert Forms project in
                action.
              </p>
            </div>

            <p className="text-sm text-text ">
              You can create a post anonymously. All posts & comments are
              proactively moderated by
              <a
                href="https://developer.chrome.com/docs/ai/built-in"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:underline text-accent "
              >
                {" "}
                Built In AI.{" "}
              </a>
            </p>
          </div>

          {/* All Posts */}
          <AllPosts posts={posts} />
          {/* Create Post FAB */}
          <AddPost />
        </div>
      </section>
    </>
  );
}

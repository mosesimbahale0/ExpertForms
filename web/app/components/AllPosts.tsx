import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { posts } from '../db/posts'; // Adjust the path to match your file structure

// Define the Post type
interface Post {
  post_id: number;
  user_id: number;
  title: string;
  content: string;
  cover_image: string;
  created_at: string;
}

// Loader function to provide posts data
export const loader: LoaderFunction = async () => {
  try {
    console.log("Posts being returned by the loader:", posts);
    if (!posts || !Array.isArray(posts)) {
      throw new Error("Posts data is not valid");
    }
    return posts; // Return the mock posts directly
  } catch (error) {
    console.error("Error in loader:", error);
    return []; // Return an empty array on failure
  }
};

// AllPosts component
export default function AllPosts() {
  const posts = useLoaderData<Post[]>(); // Fetch posts using the loader

  console.log("Posts data in component:", posts); // Log posts to verify data

  return (
    <div>
      <h1>All Posts</h1>
      <div className="posts-list">
        {/* Check if posts exist and render them */}
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.post_id} className="post-card">
              <img
                src={post.cover_image}
                alt={post.title}
                className="post-image"
              />
              <h2>{post.title}</h2>
              {/* Render HTML content safely */}
              <p dangerouslySetInnerHTML={{ __html: post.content }} />
              <p className="post-date">
                {new Date(post.created_at).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
}

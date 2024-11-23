import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

// Define the Post type
interface Post {
  post_id: number;
  user_id: number;
  title: string;
  content: string;
  cover_image: string;
  created_at: string;
}

// Sample posts array
const posts: Post[] = [
  {
    post_id: 1,
    user_id: 1,
    title: 'My first post',
    content: 'This is the content of my first post',
    cover_image: 'https://via.placeholder.com/150',
    created_at: '2023-10-27T10:00:00Z'
  },
  {
    post_id: 2,
    user_id: 2,
    title: 'My second post',
    content: 'This is the content of my second post',
    cover_image: 'https://via.placeholder.com/150',
    created_at: '2023-10-26T14:30:00Z'
  }
];

// Loader function to pass posts to the component
export const loader: LoaderFunction = async () => {
  // Always return an array of posts (even if empty)
  return posts;
}

export default function AllPosts() {
  // Use the loader data to get posts
  const data = useLoaderData<Post[]>();

  // Handle case where data is null or empty
  if (!data || data.length === 0) {
    return <div>No posts available</div>;
  }

  return (
    <div>
      {/* Map over the posts and display each one */}
      {data.map((post) => (
        <div key={post.post_id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <img src={post.cover_image} alt={post.title} />
        </div>
      ))}
    </div>
  );
}
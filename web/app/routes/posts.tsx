import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import fs from 'fs';
import path from 'path';

// Define the Post type
interface Post {
  post_id: number;
  user_id: number;
  title: string;
  content: string;
  cover_image: string;
  created_at: string;
}

// Loader to read posts from ~/db/post.json
export const loader: LoaderFunction = async () => {
  // Use import.meta.url to get the current file's URL and resolve the path
  const currentDir = path.dirname(new URL(import.meta.url).pathname);
  const filePath = path.join(currentDir, '../db/postDB.json'); // Adjust path according to your project structure
  
  // Read the file and parse JSON
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const posts: Post[] = JSON.parse(fileData);
  return posts;
};

export default function AllPosts() {
  const data = useLoaderData<Post[]>();

  if (!data || data.length === 0) {
    return <div>No posts available</div>;
  }

  return (
    <div className='flex flex-col gap-6 text-accent text-left w-full min-h-screen py-24'>
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

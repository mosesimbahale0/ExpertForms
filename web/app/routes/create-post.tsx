import { json, LoaderFunction, ActionFunction } from '@remix-run/node';
import { useActionData, redirect } from '@remix-run/react';
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

const getPostsFromJson = () => {
  const currentDir = path.dirname(new URL(import.meta.url).pathname); 
  const filePath = path.join(currentDir, '../db/postDB.json'); 
  const fileData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileData) as Post[];
};

// Loader: Optional, might be used to pre-load data
export const loader: LoaderFunction = async () => {
  return null; 
};

// Action: Handles the form submission to create a new post
export const action: ActionFunction = async ({ request }) => {
  const formData = new URLSearchParams(await request.text());
  const title = formData.get('title');
  const content = formData.get('content');
  const cover_image = formData.get('cover_image') || 'https://via.placeholder.com/150'; // Default image

  if (!title || !content) {
    return json({ error: 'Title and Content are required.' }, { status: 400 });
  }

  const posts = getPostsFromJson();

  // Create new post
  const newPost: Post = {
    post_id: posts.length + 1, // Simple ID logic (this should be unique in real applications)
    user_id: 1, // For simplicity, we're using a static user ID
    title,
    content,
    cover_image,
    created_at: new Date().toISOString(),
  };

  // Save to the file (append the new post)
  posts.push(newPost);
  
  // Correctly use path with import.meta.url for file write
  const currentDir = path.dirname(new URL(import.meta.url).pathname);
  const filePath = path.join(currentDir, '../db/posts.json');
  fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));

  return redirect('/posts'); // Redirect to the home page or another desired page after submission
};

// Create Post Form Component
export default function CreatePost() {
  const actionData = useActionData();
  
  return (
    <div className='min-h-screen py-24 container mx-auto'>
      <h1>Create a New Post</h1>
      <form method="post">
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" required />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea name="content" id="content" required></textarea>
        </div>
        <div>
          <label htmlFor="cover_image">Cover Image URL (Optional)</label>
          <input type="text" name="cover_image" id="cover_image" />
        </div>
        {actionData?.error && <div style={{ color: 'red' }}>{actionData.error}</div>}
        <div>
          <button type="submit">Create Post</button>
        </div>
      </form>
    </div>
  );
}

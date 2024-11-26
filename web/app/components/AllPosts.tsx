
import { Link } from '@remix-run/react';

// Define the Post type
interface Post {
  post_id: number;
  user_id: number;
  title: string;
  content: string;
  cover_image: string;
  created_at: string;
}

// Props interface for AllPosts
interface AllPostsProps {
  posts: Post[];
}

// Update the AllPosts component
export default function AllPosts({ posts }: AllPostsProps) {
  return (
    <div className='flex flex-col lg:flex-row flex-wrap text-accent text-left w-full'>
      {posts.map((post) => (
        <div key={post.post_id} className='w-full lg:w-1/4 text-text2 text-left'>
          <div className='p-2 transition duration-300 ease-in-out hover:bg-secondary hover:cursor-pointer hover:shadow-md'>
            <Link to={`/post/${post.post_id}`} className='hover:bg-secondary hover:cursor-pointer w-full flex flex-col'>
              <img src={post.cover_image} alt={post.title} className='w-full h-64 object-cover hover:scale-105 transition duration-300 ease-in-out' />
              <div className='flex flex-col gap-2 py-4'>
                <h2 className='text-xl font-medium text-text w-full truncate'>{post.title}</h2>
                <p className='w-full truncate text-xs'>{post.content}</p>
                <div className='flex flex-row gap-2'>
                  <div className='flex flex-row gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2" />
                    </svg>
                    <p className='text-xs'>19k Comments</p>
                  </div>
                  <div className='flex flex-row gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1024 1024">
                      <path fill="currentColor" d="..." />
                    </svg>
                    <p className='text-xs'>12k Reads</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}



import React from 'react'
import Replies from './Replies'

// Types
interface Comment {
  comment_id: number;
  user_id: number;
  content: string;
  created_at: string;
  replies: Reply[];
}

interface Reply {
  reply_id: number;
  comment_id: number;
  user_id: number;
  content: string;
  created_at: string;
}

const comments = [
  {
    comment_id: 1,
    user_id: 1,
    content: "This is a great project!",
    created_at: "2023-10-27T10:00:00Z",
    replies: [
      {
        reply_id: 1,
        user_id: 2,
        content: "I agree!",
        created_at: "2023-10-27T10:05:00Z",
      },
    ],
  },
  {
    comment_id: 2,
    user_id: 2,
    content: "This is amazing!",
    created_at: "2023-10-27T10:10:00Z",
    replies: [],
  },
  {
    comment_id: 3,
    user_id: 3,
    content: "This is cool!",
    created_at: "2023-10-27T10:15:00Z",
    replies: [],
  },
  {
    comment_id: 4,
    user_id: 1,
    content: "This is awesome!",
    created_at: "2023-10-27T10:20:00Z",
    replies: [],
  },

];
const replies = [{
  reply_id: 1,
  comment_id: 1,
  user_id: 2,
  content: "I agree!",
  created_at: "2023-10-27T10:05:00Z",
},
{
  reply_id: 2,
  comment_id: 1,
  user_id: 3,
  content: "This is so cool!",
  created_at: "2023-10-27T10:15:00Z",
},
{
  reply_id: 3,
  comment_id: 2,
  user_id: 1,
  content: "Thanks!",
  created_at: "2023-10-27T10:20:00Z",
},
{
  reply_id: 4,
  comment_id: 2,
  user_id: 4,
  content: "I love it!",
  created_at: "2023-10-27T10:25:00Z",
},
{
  reply_id: 5,
  comment_id: 3,
  user_id: 2,
  content: "This is awesome!",
  created_at: "2023-10-27T10:30:00Z",
},

];

export default function Comments() {
  return (
    <div className="flex flex-col gap-2 bg-secondary p-4">

      {comments.map((comment) => (
        <div key={comment.comment_id} className="flex flex-row gap-2">


          <div className="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center shadow-lg text-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.06 13c-1.86 0-3.42 1.33-3.82 3.1c-.95-.41-1.82-.3-2.48-.01C10.35 14.31 8.79 13 6.94 13C4.77 13 3 14.79 3 17s1.77 4 3.94 4c2.06 0 3.74-1.62 3.9-3.68c.34-.24 1.23-.69 2.32.02c.18 2.05 1.84 3.66 3.9 3.66c2.17 0 3.94-1.79 3.94-4s-1.77-4-3.94-4M6.94 19.86c-1.56 0-2.81-1.28-2.81-2.86s1.26-2.86 2.81-2.86c1.56 0 2.81 1.28 2.81 2.86s-1.25 2.86-2.81 2.86m10.12 0c-1.56 0-2.81-1.28-2.81-2.86s1.25-2.86 2.81-2.86s2.82 1.28 2.82 2.86s-1.27 2.86-2.82 2.86M22 10.5H2V12h20zm-6.47-7.87c-.22-.49-.78-.75-1.31-.58L12 2.79l-2.23-.74l-.05-.01c-.53-.15-1.09.13-1.29.64L6 9h12l-2.44-6.32z" /></svg>
          </div>

          <div className=' text-sm flex flex-col ga-2'>
            <p className='text-text'> Moses Imabale</p>

            <p>{comment.content}</p>

            <div className='flex flex-row gap-2 items-center'>
              <button className='hover:bg-accent hover:text-text px-4 py-2 rounded-full text-text text-xs'>Reply</button>
            </div>

            {comment.replies.length > 0 && (
              <div>
                {comment.replies.map((reply) => (
                  <Replies key={reply.reply_id} reply={reply} />
                ))}
              </div>
            )}




          </div>
        </div>
      ))}
    </div>
  )
}

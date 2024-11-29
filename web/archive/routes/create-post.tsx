import { json, redirect } from '@remix-run/node';
import { useActionData, Form, useNavigation } from '@remix-run/react';
import { useEffect, useState } from 'react';

// Define the Post type
interface Post {
  id: string; // ObjectId represented as a string
  userId: string; // User ID as a string
  title: string;
  content: string;
  coverImage: string;
  createdAt: string; // ISO string format for created timestamp
  updatedAt: string; // ISO string format for updated timestamp
}

// Random iages for blog - replace cdn uploads
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
}


// Server-side Action to handle form submission
export const action = async ({ request }: { request: Request }) => {
  try {
    console.log(`[LOG] Received POST request`);
    const formData = new URLSearchParams(await request.text());
    const title = formData.get('title');
    const content = formData.get('content');
    const userId = formData.get('userId');
    const coverImage = formData.get('coverImage');

    console.log(`[LOG] Extracted form data:`, { title, content, userId, coverImage });

    if (!title || !content || !userId || !coverImage) {
      console.error(`[ERROR] Missing required fields`);
      return json({ error: 'All fields are required.' }, { status: 400 });
    }

    const postData = {
      userId,
      title,
      content,
      coverImage,
    };

    console.log(`[LOG] Sending POST request to backend with data:`, postData);

    // const postResponse = await fetch('https://expertformsspringservice.onrender.com/api/posts', {
    const postResponse = await fetch('https://expertformsspringservice.onrender.com/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    });

    if (!postResponse.ok) {
      const errorText = await postResponse.text();
      console.error(`[ERROR] Backend responded with status ${postResponse.status}:`, errorText);
      throw new Error('Failed to create post.');
    }

    console.log(`[LOG] Post created successfully`);
    return redirect('/flex');
  } catch (error: any) {
    console.error(`[ERROR] Action handler encountered an error:`, error.message);
    return json({ error: error.message || 'An unknown error occurred.' }, { status: 500 });
  }
};

export default function CreatePost() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const [coolName, setCoolName] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [coverImage, setCoverImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(`[LOG] Component mounted`);

    const fetchUserDetails = async () => {
      const storedUserId = window.localStorage.getItem('userId');
      const storedName = window.localStorage.getItem('coolName');

      if (storedUserId && storedName) {
        console.log(`[LOG] Found existing data in localStorage:`, { storedUserId, storedName });
        setUserId(storedUserId);
        setCoolName(storedName);
      } else {
        console.log(`[LOG] Fetching new cool name`);
        try {
          // const response = await fetch('http://localhost:9000/api/cool-names/generate', {
          const response = await fetch('https://expertformsspringservice.onrender.com/api/cool-names/generate', {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
          });




          if (!response.ok) {
            throw new Error(`Failed to fetch cool name. Status: ${response.status}`);
          }
          const data = await response.json();
          const { id, name } = data;
          console.log(`[LOG] Received cool name:`, { id, name });

          window.localStorage.setItem('userId', id);
          window.localStorage.setItem('coolName', name);
          setUserId(id);
          setCoolName(name);
        } catch (error) {
          console.error(`[ERROR] Error fetching cool name:`, error);
        }
      }

      // Set a random cover image
      setCoverImage(getRandomImage());
      setIsLoading(false);
    };

    fetchUserDetails();
  }, []);




  const isSubmitting = navigation.state === 'submitting';


  // Get initials
  const name = coolName;
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0].toUpperCase())
        .join("")
    : "A";


  return (

    <section className='bg-primary'>
      <div className="min-h-screen py-24 container mx-auto ">
        {isLoading ? (
          <div className="text-center">
            <p className="text-lg">Just a moment as we load your anonymous profile...</p>
          </div>
        ) : (
          <>
            <div className="min-h-screen  container mx-auto">
              <h1 className="text-3xl font-bold mb-4">Create a New Post</h1>
              {coolName && (
                <div className="mb-4">
                  <div className="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center shadow-lg text-text">
                    <p className="text-xl">{initials}</p>
                  </div>

                 
                  <p className="text-lg">
                    Welcome,
                    
                    
                     <strong>{coolName}</strong>!
                  </p>
                </div>
              )}

              <Form method="post" className="" >
                <input type="hidden" name="userId" value={userId || ''} />
                <input type="hidden" name="coverImage" value={coverImage} />
                <div>

                  <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    placeholder="Title"
                    className="p-2 border-b border-complementary  w-full bg-background focus:outline-none focus:border-b-2   text-lg placeholder-text-text3"
                  />
                </div>
                <div>
                  <textarea
                    name="content"
                    id="content"
                    required
                    className="p-2 border-b border-complementary  w-full bg-background focus:outline-none focus:border-b-2  min-h-56 max-h-56 h-56 text-xs placeholder-text-text3" placeholder="Add your content here"
                  ></textarea>
                </div>
                {actionData?.error && (
                  <div className="text-red-600 font-medium">{actionData.error}</div>
                )}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-accent hover:bg-complementary text-text px-6 py-3 rounded-full"
                  >
                    {isSubmitting ? 'Creating...' : 'Create Post'}
                  </button>
                </div>
              </Form>


            </div>
          </>
        )}
      </div>

    </section>
  );
}

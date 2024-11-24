import type { MetaFunction } from "@remix-run/node";

import ComentSection from "~/components/ComentSection";


export const meta: MetaFunction = () => {
  return [
    { title: "ExpertForms" },
    { name: "description", content: "A collection of Tools for building Content Moderation Systems" },];
};



const post = {
  post_id: 1,
  user_id: 1,
  title: 'My first post',
  content: 'Fruitcake jujubes jelly beans croissant gummi bears biscuit. Oat cake dessert fruitcake carrot cake jelly-o biscuit. Tootsie roll marshmallow cotton candy icing cookie halvah tootsie roll cake. Tiramisu jelly chocolate shortbread powder. Donut icing donut biscuit pie biscuit soufflé jujubes jelly. Ice cream donut donut pastry icing candy lemon drops. Macaroon sweet roll tart sesame snaps marshmallow jelly chocolate cake jelly. Gingerbread cotton candy icing jujubes liquorice sesame snaps. Tiramisu wafer cake danish bear claw pudding sweet roll gummi bears pie. Soufflé tart sweet biscuit halvah toffee cake muffin. Bonbon candy canes bear claw gummies cupcake tiramisu. Apple pie jelly-o pie tootsie roll chupa chups icing chocolate bar macaroon. Sugar plum topping danish lollipop sugar plum chocolate cake. Shortbread chocolate cake muffin wafer biscuit cotton candy.',
  cover_image: "/Gemini_Generated_Image_tkiqw1tkiqw1tkiq.jpeg",
  created_at: '2023-10-27T10:00:00Z',
}

export default function singlePost() {
  return (
    <>
      <section className="bg-primary text-text2 " >
        <section className="flex flex-col gap-6 min-h-screen items-center justify-center bg-primary py-24 container mx-auto ">

          <div className="flex flex-col gap-6  text-left w-full">
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl font-medium text-text">{post.title}</h1>


              <div className=" flex flex-row items-center gap-2 ">
                <div className="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center shadow-lg text-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.06 13c-1.86 0-3.42 1.33-3.82 3.1c-.95-.41-1.82-.3-2.48-.01C10.35 14.31 8.79 13 6.94 13C4.77 13 3 14.79 3 17s1.77 4 3.94 4c2.06 0 3.74-1.62 3.9-3.68c.34-.24 1.23-.69 2.32.02c.18 2.05 1.84 3.66 3.9 3.66c2.17 0 3.94-1.79 3.94-4s-1.77-4-3.94-4M6.94 19.86c-1.56 0-2.81-1.28-2.81-2.86s1.26-2.86 2.81-2.86c1.56 0 2.81 1.28 2.81 2.86s-1.25 2.86-2.81 2.86m10.12 0c-1.56 0-2.81-1.28-2.81-2.86s1.25-2.86 2.81-2.86s2.82 1.28 2.82 2.86s-1.27 2.86-2.82 2.86M22 10.5H2V12h20zm-6.47-7.87c-.22-.49-.78-.75-1.31-.58L12 2.79l-2.23-.74l-.05-.01c-.53-.15-1.09.13-1.29.64L6 9h12l-2.44-6.32z" /></svg>
                </div>
                <p className="text-2xl" >
                  Moses Imbahale
                </p>
              </div>


              <div className='flex flex-row gap-2'>
                <div className=' flex flex-row gap-2 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2" /></svg>
                  <p className='text-xs'>
                    19k Comments
                  </p>
                </div>
                <div className=' flex flex-row gap-2 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32M404 553.5c0 4.1-3.2 7.5-7.1 7.5H211.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm0-140c0 4.1-3.2 7.5-7.1 7.5H211.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm416 140c0 4.1-3.2 7.5-7.1 7.5H627.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm0-140c0 4.1-3.2 7.5-7.1 7.5H627.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45z" /></svg>
                  <p className='text-xs'>
                    12k Reads
                  </p>
                </div>
              </div>

              <img src={post.cover_image} alt={post.title} className="w-full h-64 object-cover" />
              <p className="text-sm">{post.content}</p>
            </div>


            <p className="text-xl font-medium text-text "
              style={{ fontFamily: "Space Grotesk" }}
            >
              Leave a comment below.
            </p>

            <ComentSection />
          </div>


        </section>
      </section>
    </>
  )
}
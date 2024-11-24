/**
 * ****************************************************
 * LOGIC
 * 
 * A comment section (Chrome Built In AI)
 * Random Name Generator
 * 
 * 
 * 
 * ****************************************************
 */

import AllPosts from "~/components/AllPosts"
import CreatePost from "~/components/CreatePost"



export default function flex() {
  return (
    <>
      <section className="bg-primary text-text" >
        <div className="flex flex-col gap-8 min-h-screen   bg-primary py-20 container mx-auto ">



          <div className="flex flex-col gap-6 text-accent text-left w-full ">

            <p className="text-2xl font-medium "
              style={{ fontFamily: "Space Grotesk" }}
            >
            </p>



              <div className="flex flex-row gap-2  text-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.06 13c-1.86 0-3.42 1.33-3.82 3.1c-.95-.41-1.82-.3-2.48-.01C10.35 14.31 8.79 13 6.94 13C4.77 13 3 14.79 3 17s1.77 4 3.94 4c2.06 0 3.74-1.62 3.9-3.68c.34-.24 1.23-.69 2.32.02c.18 2.05 1.84 3.66 3.9 3.66c2.17 0 3.94-1.79 3.94-4s-1.77-4-3.94-4M6.94 19.86c-1.56 0-2.81-1.28-2.81-2.86s1.26-2.86 2.81-2.86c1.56 0 2.81 1.28 2.81 2.86s-1.25 2.86-2.81 2.86m10.12 0c-1.56 0-2.81-1.28-2.81-2.86s1.25-2.86 2.81-2.86s2.82 1.28 2.82 2.86s-1.27 2.86-2.82 2.86M22 10.5H2V12h20zm-6.47-7.87c-.22-.49-.78-.75-1.31-.58L12 2.79l-2.23-.74l-.05-.01c-.53-.15-1.09.13-1.29.64L6 9h12l-2.44-6.32z" /></svg>

                <p className="text-2xl font-medium "
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  ShadowWrite
                </p>

              </div>


              <p className="text-2xl font-medium text-text "
                style={{ fontFamily: "Space Grotesk" }}
              >
                <span className="text-text2"> A blog showcasing the Expert Forms project in action.  </span>
                Web AI for robust content moderation. Proactive, real-time protection.
              </p>





            <div className="bg-background  shadow-md   p-2 flex items-center space-x-2 text-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><path fill="none" d="M16 8a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8m4 13.875h-2.875v-8H13v2.25h1.875v5.75H12v2.25h8Z" /><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 6a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8m4 16.125h-8v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z" /></svg>
              <p className="text-xs">
                Thank you for your patience! The Showcase service is hosted on a free instance and might take up to a minute to start if it has been inactive. We apologize for any inconvenience caused.
              </p>
            </div>



          </div>

          {/* All Posts */}
          <AllPosts />


          {/* Create Post FAB */}

          <CreatePost />


        </div>
      </section>
    </>
  )
}

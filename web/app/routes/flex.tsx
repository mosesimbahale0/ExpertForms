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


export default function flex() {
  return (
    <>
      <section className="bg-primary text-text" >
        <div className="flex flex-col gap-2 min-h-screen   bg-primary py-24 container mx-auto p-1">



          <div className="flex flex-col gap-6 text-accent text-left w-full ">


            <div className="bg-background shadow-md   p-2 flex items-center space-x-2 text-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><path fill="none" d="M16 8a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8m4 13.875h-2.875v-8H13v2.25h1.875v5.75H12v2.25h8Z" /><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 6a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8m4 16.125h-8v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z" /></svg>
              <p className="text-xs">
                Thank you for your patience! This service is hosted on a free instance and might take up to a minute to start if it has been inactive. We apologize for any inconvenience.
              </p>
            </div>


            <p className="text-3xl font-medium "
              style={{ fontFamily: "Space Grotesk" }}
            >
              <span className="text-text"> A blog showcasing the Expert Forms project in action.  Leveraging the power of Web AI to build a robust and scalable content moderation system.
                : </span>
              Proactive content moderation in real time.
            </p>

            <p className="text-sm text-text3">  I dare you to try harass someone, post a comment with “bad” outcomes do your worst...    </p>


          </div>

          {/* All Posts */}
          <AllPosts />


          {/* Create Post FAB */}


        </div>
      </section>
    </>
  )
}

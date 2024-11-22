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
        <div className="flex flex-col gap-2 min-h-screen   bg-primary py-24 container mx-auto">

          <div className="flex flex-col gap-6 text-accent text-left w-full ">
            <p className="text-3xl font-medium "
              style={{ fontFamily: "Space Grotesk" }}
            >
              A blog showcasing the Expert Forms : Proactive content moderation in real time.
            </p>

            <p className="text-sm text-text3">  I dare you to try harass someone, post a comment with “bad” outcomes do your worst...    </p>
          </div>

          {/* All Posts */}
          {/* <AllPosts /> */}


          {/* Create Post FAB */}


        </div>
      </section>
    </>
  )
}

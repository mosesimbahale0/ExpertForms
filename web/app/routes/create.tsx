import { Link } from "@remix-run/react";

export default function Create() {
    return (
        <section className="bg-primary text-text" >
            <section className="flex flex-col gap-6 min-h-screen bg-primary py-20 container mx-auto ">
                <div className="flex flex-row gap-2  text-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 4v7h7v2h-7v7h-2v-7H4v-2h7V4z" /></svg>
                    <p className="text-2xl font-medium "
                        style={{ fontFamily: "Space Grotesk" }}
                    >
                        Create Post
                    </p>
                </div>


                <div>


                    <form>
                        <div className="flex flex-col gap-4">
                            <input type="text" placeholder="Title" className="p-2 border-b border-complementary  w-full bg-background focus:outline-none focus:border-b-2   text-lg placeholder-text-text3" />
                            <textarea className="p-2 border-b border-complementary  w-full bg-background focus:outline-none focus:border-b-2  min-h-56 max-h-56 h-56 text-xs placeholder-text-text3" placeholder="Add your content here" />

                            <div className="">
                                <button type="submit" className="bg-accent hover:bg-complementary text-text px-6 py-3 rounded-full">Create Post</button>
                            </div>

                        </div>
                    </form>

                </div>




            </section>
        </section>
    )
}
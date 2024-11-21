import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "ExpertForms" },
    { name: "description", content: "A collection of Tools for building Content Moderation Systems" },];
};



export default function Index() {


  return (

    <>
      <section className="bg-primary text-text" >



        <section className="flex flex-col min-h-screen items-center justify-center bg-primary py-20 container mx-auto ">

          <div className=" flex flex-col lg:flex-row  w-full">
            <div className="  w-full h-full lg:w-1/2 flex flex-col justify-center items-start gap-16  lg:py-16 lg:p-0 p-2 lg:pr-16 ">
              <div className=" w-full lg:max-w-4xl flex flex-col gap-6 justify-left items-start">

                <p className=" text-sm text-left text-text2">
                  Expert Forms: Build powerful content moderation systems with ease.

                </p>




                <p
                  className=" text-xl lg:text-3xl font-bold "
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  A proactive approach to content moderation and free speech for our communities.
                </p>



                <p className=" text-sm text-left text-text2">
                  A content moderation system that implements a proactive content moderation system, inspired by expert systems. By leveraging Web AI and rule-based decision-making, it identifies and addresses inappropriate or harmful content in real time. This project aims to reduce reliance on manual moderation while ensuring ethical, scalable, and efficient solutions.

                </p>




              </div>

              <div className="flex lg:flex-row flex-col gap-10 ">
                <Link
                  to="/flex"
                  className=" bg-accent hover:bg-complementary px-10 py-4 rounded-full text-text group inline-flex"
                >
                  Give it a try

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>


              </div>
            </div>

            <div className="  w-full h-full lg:w-1/2 flex flex-col justify-end items-center gap-2  lg:p-0 p-2">
              < img
                src="/Gemini_Generated_Image_tkiqw1tkiqw1tkiq.jpeg"
                alt="hero image"
                className=" w-full lg:w-4/5 h-auto"
              />


            </div>
          </div>

        </section>




        <section className="flex flex-col min-h-screen items-center justify-center bg-primary py-20 container mx-auto ">

          <div className=" flex flex-col lg:flex-row  w-full">
            <div className="  w-full h-full lg:w-1/2 flex flex-col justify-center items-start gap-16  lg:py-16 lg:p-0 p-2 lg:pr-16 ">
              <div className=" w-full lg:max-w-4xl flex flex-col gap-6 justify-left items-start">

                <p className=" text-sm text-left text-text2">
                  Expert Forms: Build powerful content moderation systems with ease.

                </p>




                <p
                  className=" text-xl lg:text-3xl font-bold "
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  A proactive approach to content moderation and free speech for our community
                </p>



                <p className=" text-sm text-left text-text2">
                  A content moderation system that implements a proactive content moderation system, inspired by expert systems. By leveraging Web AI and rule-based decision-making, it identifies and addresses inappropriate or harmful content in real time. This project aims to reduce reliance on manual moderation while ensuring ethical, scalable, and efficient solutions.

                </p>




              </div>

              <div className="flex lg:flex-row flex-col gap-10 ">
                <Link
                  to="/flex"
                  className=" bg-accent hover:bg-complementary px-10 py-4 rounded-full text-text group inline-flex"
                >
                  Give it a try

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>


              </div>
            </div>

            <div className="  w-full h-full lg:w-1/2 flex flex-col justify-center items-center gap-2  lg:p-0 p-2">
              carousel
            </div>
          </div>

        </section>




      </section>

    </>
  );
}


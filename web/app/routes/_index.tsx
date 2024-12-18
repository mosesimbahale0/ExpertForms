import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "ExpertForms" },
    {
      name: "description",
      content: "A collection of Tools for building Content Moderation Systems",
    },
  ];
};

//  Advantages
const advantages = [
  {
    title: "Increased Efficiency",
    description:
      "Automating the moderation process with AI significantly increases efficiency.  Human moderators can only review a limited number of posts per day, while AI can process thousands, freeing up human moderators to focus on more complex or nuanced cases. This leads to faster response times and improved overall content management.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <mask id="lineMdSpeedometerLoop0">
          <path
            fill="none"
            stroke="#fff"
            stroke-dasharray="48"
            stroke-dashoffset="48"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.64 19.36c-3.52 -3.51 -3.52 -9.21 0 -12.72c3.51 -3.52 9.21 -3.52 12.72 -0c3.52 3.51 3.52 9.21 0 12.72"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.6s"
              values="48;0"
            />
          </path>
          <g transform="rotate(-100 12 13)">
            <path d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z">
              <animate
                fill="freeze"
                attributeName="d"
                begin="0.4s"
                dur="0.2s"
                values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M17 13C17 15.7614 14.7614 18 12 18C9.23858 18 7 15.7614 7 13C7 10.2386 12 -2 12 -2C12 -2 17 10.2386 17 13Z"
              />
            </path>
            <path
              fill="#fff"
              d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z"
            >
              <animate
                fill="freeze"
                attributeName="d"
                begin="0.4s"
                dur="0.2s"
                values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M15 13C15 14.6568 13.6569 16 12 16C10.3431 16 9 14.6568 9 13C9 11.3431 12 2 12 2C12 2 15 11.3431 15 13Z"
              />
            </path>
            <animateTransform
              attributeName="transform"
              begin="0.4s"
              dur="6s"
              repeatCount="indefinite"
              type="rotate"
              values="-100 12 13;65 12 13;65 12 13;65 12 13;30 12 13;10 12 13;0 12 13;35 12 13;55 12 13;65 12 13;75 12 13;15 12 13;-20 12 13;-100 12 13"
            />
          </g>
        </mask>
        <rect
          width="24"
          height="24"
          fill="currentColor"
          mask="url(#lineMdSpeedometerLoop0)"
        />
      </svg>
    ),
  },
  {
    title: "Improved Accuracy",
    description:
      "AI-powered moderation offers significantly improved accuracy compared to traditional methods.  Human moderators are prone to errors and inconsistencies, while AI can analyze vast amounts of data to identify subtle indicators of harmful content with greater precision and consistency.  This leads to a more effective reduction in harmful content while minimizing the risk of false positives.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M4 20v-5h1v4h4v1zm11 0v-1h4v-4h1v5zM4 9V4h5v1H5v4zm15 0V5h-4V4h5v5zm-7 6q-1.237 0-2.119-.881T9 12t.881-2.119T12 9t2.119.881T15 12t-.881 2.119T12 15m0-1q.825 0 1.413-.587T14 12t-.587-1.412T12 10t-1.412.588T10 12t.588 1.413T12 14m0-2"
        />
      </svg>
    ),
  },
  {
    title: "Reduced Cost",
    description:
      "AI-powered moderation significantly reduces costs associated with manual content review.  By automating the process, businesses can eliminate the need for large teams of human moderators, saving on salaries, training, and management overhead.  This cost-effectiveness makes AI-powered moderation a particularly attractive option for organizations with limited budgets or those seeking to scale their content moderation efforts efficiently.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M6.05 8.05a7 7 0 0 0-.02 9.88c1.47-3.4 4.09-6.24 7.36-7.93A15.95 15.95 0 0 0 8 19.32c2.6 1.23 5.8.78 7.95-1.37C19.43 14.47 20 4 20 4S9.53 4.57 6.05 8.05"
        />
      </svg>
    ),
  },
  {
    title: "Improved Security",
    description:
      "AI-powered moderation enhances security by providing an additional layer of protection against malicious actors.  By automatically identifying and removing harmful content, AI reduces the risk of exposure to threats such as malware, phishing scams, and hate speech.  This proactive approach minimizes the potential for harm and helps create a safer online environment for all users.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5z"
        />
      </svg>
    ),
  },
];

export default function Index() {
  return (
    <>
      <section className="bg-primary text-text">
        <section className="flex flex-col min-h-screen items-center justify-center bg-primary py-20 container mx-auto ">
          <div className=" flex flex-col lg:flex-row  w-full">
            <div className="  w-full h-full lg:w-1/2 flex flex-col justify-center items-start gap-16  lg:py-20 lg:p-0 p-2 lg:pr-16 ">
              <div className=" w-full lg:max-w-4xl flex flex-col gap-6 justify-left items-start">
                <p className="text-sm text-left text-text2">
                  Expert Forms: Pioneering Online Safety Solutions.
                </p>
                <p
                  className="text-xl lg:text-4xl font-medium"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  Redefining Content Moderation with On-Device AI.
                </p>
                <p className="text-sm text-left text-text2">
                  Harness the power of AI to proactively detect and eliminate
                  harmful content, creating a safer and more engaging online
                  environment.
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
            <div className="  w-full h-full lg:w-1/2 flex flex-col justify-center items-start gap-16  lg:py-20 lg:p-0 p-2  ">
              <img
                src="/Gemini_Generated_Image_5zvdm65zvdm65zvd.jpeg"
                alt="hero image"
                className=" w-full  h-96 object-cover rounded-xl"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col min-h-screen items-center justify-center bg-primary  container mx-auto ">
          <div className=" flex flex-col lg:flex-row  w-full justify-center items-center">
            <div className="  w-full h-full lg:w-1/2 flex flex-col justify-center items-start gap-16  lg:py-20 lg:p-0 p-2 lg:pr-16 ">
              <div className=" w-full lg:max-w-4xl flex flex-col gap-6 justify-left items-start">
                <p
                  className=" text-xl lg:text-3xl font-bold "
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  Proactive Content Moderation: Harnessing the Power of Smart
                  Forms
                </p>
                <p className=" text-sm text-left text-text2">
                  In today's rapidly evolving digital landscape, social media
                  platforms and content providers face an ever-growing
                  challenge: combating harmful content. From hate speech and
                  violence to misinformation and cyberbullying, the
                  proliferation of harmful content poses a significant threat to
                  online safety and responsible communication.
                </p>
                <p className=" text-sm text-left text-text2">
                  Traditional content moderation approaches, often relying on
                  manual review and user reports, have proven to be reactive and
                  insufficient in addressing the sheer volume and sophistication
                  of harmful content. To effectively combat this pervasive
                  issue, a more proactive approach is needed.
                </p>
                <p className=" text-sm text-left text-text2">
                  Expert forms offer a powerful and innovative solution. By
                  leveraging the capabilities of on-device AI, Expert Forms
                  empowers platforms to proactively identify and mitigate
                  harmful content before it reaches users. This approach not
                  only enhances online safety but also streamlines the
                  moderation process, reducing costs and improving efficiency.
                  Expert Forms is more than just a tool; it's a comprehensive
                  solution designed to help build safer and more responsible
                  online communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col min-h-screen items-center justify-center bg-primary  container mx-auto py-16 ">
          <div className=" flex flex-col lg:flex-row  w-full justify-center items-center">
            <div className="  w-full h-full lg:w-1/2 flex flex-col justify-center items-start gap-16  lg:py-16 lg:p-0 p-2 lg:pr-16 ">
              <div className=" w-full lg:max-w-4xl flex flex-col gap-6 justify-left items-start">
                <p
                  className=" text-xl lg:text-3xl font-bold "
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  This approach offers several distinct advantages
                </p>

                {advantages.map((advantage) => (
                  <div
                    key={advantage.title}
                    className="flex flex-row gap-4 mt-10"
                  >
                    <div className="w-1/6">
                      <div className="w-20 h-20 rounded-full shadow-lg bg-secondary flex items-center justify-center text-accent">
                        {advantage.icon}
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 w-5/6 divide-y divide-tertiary">
                      <p className="font-medium text-3xl text-text">
                        {advantage.title}
                      </p>
                      <p className="text-xs text-left text-text2 pt-2">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* <section className="flex flex-col min-h-screen items-center justify-center bg-primary  container mx-auto ">
          <div className=" flex flex-col lg:flex-row  w-full justify-center items-center">
            <div className="  w-full h-full lg:w-1/2 flex flex-col justify-center items-start gap-16  lg:py-16 lg:p-0 p-2 lg:pr-16 ">
              <div className=" w-full lg:max-w-4xl flex flex-col gap-6 justify-left items-start">
                <p
                  className=" text-xl lg:text-3xl font-bold "
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  Share your feed back Anonymously
                </p>
                Reviews
              </div>
            </div>
          </div>
        </section> */}
      </section>
    </>
  );
}

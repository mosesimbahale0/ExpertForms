import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};



export default function Index() {


  return (

    <>
    <section className="bg-primary text-text" >
    <div className="flex flex-col min-h-screen items-center justify-center bg-primary py-20 container mx-auto">



      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-primary dark:text-gray-100">
            Remix V 2.13.1
          </h1>
          <div className="h-[144px] w-[434px]">
            <img
              src="/logo-light.png"
              alt="Remix"
              className="block w-full dark:hidden"
            />
            <img
              src="/logo-dark.png"
              alt="Remix"
              className="hidden w-full dark:block"
            />
          </div>
        </header>

        <div className="flex flex-row flex-wrap  gap-4 p-5">



          <Link to="/account" className="bg-slate-500 rounded-full p-4  px-8 text-sx">Account</Link>
          <Link to="/auth" className="bg-slate-500 rounded-full p-4  px-8 text-sx">SignIn</Link>
          <Link to="/redis" className="bg-slate-500  hover:bg-blue-800 rounded-full p-4  px-8 text-sx active:bg-green-500">Redis</Link>

          <Link to="/query" className="bg-slate-500 rounded-full p-4 px-8 text-sx">Query</Link>
          <Link to="/pagination" className="bg-slate-500 rounded-full p-4  px-8 text-sx">Pagination</Link>
          <Link to="/mutation" className="bg-slate-500 rounded-full p-4  px-8 text-sx">Mutation</Link>
          <Link to="/subscription" className="bg-slate-500 rounded-full p-4  px-8 text-sx">Subscription</Link>


          <Link to="/checkout" className="bg-slate-500 rounded-full p-4  px-8 text-sx">Paypal</Link>


          <Link to="/stt" className="bg-slate-500 rounded-full p-4 px-8 text-sx">Speech to Text</Link>
          <Link to="/tts" className="bg-slate-500 rounded-full p-4 px-8 text-sx">Text To Speech</Link>
          <Link to="/combined" className="bg-slate-500 rounded-full p-4 px-8 text-sx">Combined TTS & STT</Link>
          <Link to="/moderator" className="bg-slate-500 rounded-full p-4 px-8 text-sx">MODERATION</Link>

          <Link to="/vui" className="bg-slate-500 rounded-full p-4 px-8 text-sx">VUI</Link>


          <Link to="/voice-recorder" className="bg-slate-500 rounded-full p-4 px-8 text-sx">Voice recorder</Link>

          <Link to="/web-rtc" className="bg-slate-500 rounded-full p-4 px-8 text-sx">webRTC</Link>

          <Link to="/fastapi-subscription" className="bg-slate-500 rounded-full p-4 px-8 text-sx">FASTAPI SUBSCRIPTIONS</Link>

          <Link to="/autonomous-recorder" className="bg-slate-500 rounded-full p-4 px-8 text-sx">Autonomous Voice Recorder</Link>

          <Link to="/redis-voice-recorder" className="bg-slate-500 rounded-full p-4 px-8 text-sx">Redis Voice Recorder</Link>

          <Link to="/hands-off" className="bg-slate-500 rounded-full p-4 px-8 text-sx">Hands Off Voice Recorder</Link>

          <Link to="/custom-stt" className="bg-slate-500 rounded-full p-4 px-8 text-sx">Custom Speech To Text</Link>


          <Link to="/vad-ws" className="bg-slate-500 rounded-full p-4 px-8 text-sx">Voice Activity Detector Web  Sockets</Link>


          <Link to="/vad" className="bg-slate-500 rounded-full p-4 px-8 text-sx">Voice Activity Detector </Link>

          <Link to="/fawvr" className="bg-slate-500 rounded-full p-4 px-8 text-sx">FINAL AUTONOMOUS REDIS + WS VAD VOICE RECORDER  </Link>

        </div>

      </div>




    </div>


    </section>

    </>
  );
}


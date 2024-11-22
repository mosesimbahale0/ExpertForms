import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "ExpertForms" },
    { name: "description", content: "A collection of Tools for building Content Moderation Systems" },];
};


export default function singlePost() {
  return (
    <>
      <section className="bg-primary text-text" >
        <section className="flex flex-col gap-6 min-h-screen items-center justify-center bg-primary py-20 container mx-auto ">
          <div className="flex flex-col gap-6 text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" /><rect width="2" height="7" x="11" y="6" fill="currentColor" rx="1"><animateTransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></rect><rect width="2" height="9" x="11" y="11" fill="currentColor" rx="1"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></rect></svg>

          </div>

          <div className="flex flex-col gap-6 text-accent text-left justify-center items-center" >
            <p className="text-3xl font-medium text-center text-text3 ">One Post</p>
            <p className=" text-center text-text3 ">Like to contribute? Visit our github page</p>

            <a
              href="https://github.com/mosesimbahale0/ExpertForms"
              target="_blank"
              className="bg-secondary hover:bg-accent  hover:text-text  text-text2 rounded-full flex  flex-row items-center justify-center   text-sm  w-20 h-20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M10 20.568c-3.429 1.157-6.286 0-8-3.568" /><path d="M10 22v-3.242c0-.598.184-1.118.48-1.588c.204-.322.064-.78-.303-.88C7.134 15.452 5 14.107 5 9.645c0-1.16.38-2.25 1.048-3.2c.166-.236.25-.354.27-.46c.02-.108-.015-.247-.085-.527c-.283-1.136-.264-2.343.16-3.43c0 0 .877-.287 2.874.96c.456.285.684.428.885.46s.469-.035 1.005-.169A9.5 9.5 0 0 1 13.5 3a9.6 9.6 0 0 1 2.343.28c.536.134.805.2 1.006.169c.2-.032.428-.175.884-.46c1.997-1.247 2.874-.96 2.874-.96c.424 1.087.443 2.294.16 3.43c-.07.28-.104.42-.084.526s.103.225.269.461c.668.95 1.048 2.04 1.048 3.2c0 4.462-2.134 5.807-5.177 6.643c-.367.101-.507.559-.303.88c.296.47.48.99.48 1.589V22" /></g></svg>
            </a>


          </div>
        </section>
      </section>
    </>
  )
}
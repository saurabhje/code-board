import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Code from "@/components/Code";
import styles from "../app/utils.module.css";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Link from "next/link";

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const jsxCode = `
    export default my Component(){
      return (
        <>
          <section className="px-10 py-5">
            Hello World!
          </section>
        </>
      )
    }
  `;

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div
      className={`${styles.container} flex flex-col items-center py-24 gap-10 lg:py-10`}
    >
      <div className={`self-start animate-in`}>
        <p className="text-2xl md:text-4xl lg:text-6xl font-bold ">
          Elevate Your Coding Experience by Discovering and Contributing
          snippets
        </p>
        <section
          id="codeSnippets"
          className={`self-start mt-10 animate-in w-full`}
        >
          <div className="w-full mb-10 flex flex-col lg:justify-between items-start  lg:flex-row">
            <input
              type="text"
              className="w-4/5 lg:w-3/4 p-1  bg-inherit border focus:outline-none focus:border-gray-600"
            />
            <Link
              className="mt-2 lg:mt-0 lg:ml-6 py-1 lg:py-2 px-4 rounded-md bg-btn-background md:hover:bg-btn-background-hover"
              href="/codes"
            >
              Start searching
            </Link>
          </div>
          <Code language="javascript" code={jsxCode} />
        </section>
      </div>
      <section id="about">
        <About />
      </section>
      <section className="self-start" id="contact">
        <Contact />
      </section>
    </div>
  );
}

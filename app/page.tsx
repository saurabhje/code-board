import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Code from "@/components/Code";
import styles from "../app/utils.module.css";
import About from "@/components/About";
import Contact from "@/components/Contact";


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
    return(
      <>
        <section classname="px-10 py-5">
          Hello World!
        </section>
      </>
    )
  }
    `;
  const cppCode = `
    #include<stdc++.h>
    int main(){
      std::cout<<"Hello World!";
      return 0;
    }
  `;
  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div
      className={`${styles.container} flex flex-col items-center py-24 gap-10 lg:py-10`}
    >
      <div
        className={`self-start animate-in`}
      >
        {" "}
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold ">
          Elevate Your Coding Experience by Discovering and Contributing
          snippets
        </p>
      <section id="codeSnippets" className={`self-start mt-10 animate-in w-full`}>
        <div>
        <input type="text" className="w-4/5 lg:2/3 p-1 bg-transparent border border-gray-500"/>
        <button className="mt-2 py-1 px-5 rounded-md bg-btn-background md:hover:bg-btn-background-hover"> Search </button>
        </div>
        <Code language="javascript" code={jsxCode} />
        <Code language="cpp" code={cppCode} />
      </section>
      </div>
      <section id="about">
        <About/>
      </section>
      <section className="self-start" id="contact">
        <Contact/>
      </section>
    </div>
  );
}

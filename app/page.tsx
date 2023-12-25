import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Code from "@/components/Code";
import styles from "../app/utils.module.css";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ShowCode from "@/components/ShowCode"
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
        className={`self-start text-3xl md:text-5xl lg:text-7xl font-bold animate-in`}
      >
        {" "}
        <p>
          Elevate Your Coding Experience by Discovering and Contributing
          snippets
        </p>
      </div>
      <section id="codeSnippets" className={`self-start animate-in w-full`}>
        <Code language="javascript" code={jsxCode} />
        <Code language="cpp" code={cppCode} />
      </section>
      <section>
        This is where i plan to show codes
        <ShowCode />
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </div>
  );
}

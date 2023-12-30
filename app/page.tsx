import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import styles from "../app/utils.module.css";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

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

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div
      className={`${styles.container} flex flex-col items-center py-14 gap-10 lg:py-10`}
    >
      <div className={`self-start animate-in`}>
        <p className="text-2xl md:text-4xl lg:text-6xl font-bold animate-in ">
          Elevate Your Coding Experience by Discovering and Contributing
          snippets
        </p>
        <section className="mt-6 w-full">
          <Hero/>
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

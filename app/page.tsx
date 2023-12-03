import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Code from "@/components/Code";
import styles from "../app/utils.module.css";

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
    <div className="rounded-md px-5">
      <div className="flex items-center justify-between bg-foreground/5">
        File Name  
        <button
          onClick={copy}
          className="p-1 rounded-md hover:bg-foreground/10"
        >
          {icon}
        </button>
      </div>
      <code className="flex-wrap block">Your custom code here</code>
    </div>
    `;
  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div
      className={`${styles.container} flex flex-col items-center py-24 gap-10 lg:py-10`}
    >
      <div
        className={`${styles.texts} text-3xl md:text-5xl lg:text-7xl font-bold animate-in`}
      >
        {" "}
        <p>Elevate Your Coding Experience by Discovering and Contributing snippets</p>
      </div>
      <div className={`${styles.code} animate-in w-full`}>
        <Code code={jsxCode} />
      </div>
    </div>
  );
}

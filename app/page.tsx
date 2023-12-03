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

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
    <div className="text">
        <p>Where the laziness meets expertise</p>
    </div>
    <div className="code">
      <Code code = "this is just checking how it works to be honest nothing fancy" />
    </div>
    </div>
  );
}

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
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
    <div>
      <code>
        This is extremely dumb
      </code>
    </div>
  );
}

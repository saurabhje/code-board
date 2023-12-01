import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cookies } from "next/headers";

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
    <div className="flex flex-col items-center">
      <main>
        <code>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad error
          deleniti alias soluta consectetur similique doloribus porro quae minus
          rerum, cupiditate magnam expedita ullam corporis provident quaerat
          eos, culpa amet?
        </code>
      </main>
    </div>
  );
}

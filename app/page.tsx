import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Image from "next/image";

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
      <div className="custom-shape-divider-top-1701460132">
        <Image src='/wavesNegative.svg' alt="wave" width={100} height={100}/>
      </div>
    </div>
  );
}

import { SupabaseClient } from "@supabase/supabase-js";

export async function getServerData() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const api = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  const supabaseServer = new SupabaseClient(url, api);

  const { data, error } = await supabaseServer.from('snippets').select('title, language, content');

  if (error) {
    return error;
  }

  return data;
}

export async function getSearchData(arg:string) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const api = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  const supabaseServer = new SupabaseClient(url, api);

  const { data, error } = await supabaseServer.from('snippets').select().textSearch('title',`${arg}`);

  if (error) {
    return error;
  }

  return data;
}
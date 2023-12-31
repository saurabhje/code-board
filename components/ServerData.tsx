import { SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const api = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServer = new SupabaseClient(url, api);

export async function getServerData() {
  const { data, error } = await supabaseServer.from('snippets').select('title, language, content');
  if (error) {
    return error;
  }
  return data;
}

export async function getSearchData(arg:string) {
  const searchWords = arg.split(' ').join(' | ')
  const { data, error } = await supabaseServer.from('snippets').select().textSearch('title',searchWords);
  if (error) {
    return error;
  }
  return data;
}
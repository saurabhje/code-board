import supabase from "../../utils/supabase/client"

export default async function Snippets() {
  const { data: snippets } = await supabase.from('snippets').select()
  return <pre>{JSON.stringify(snippets, null, 2)}</pre>
}
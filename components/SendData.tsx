import supabase from "./../utils/supabase/client";

export default async function SendData({ title,language,snippet }: { title: string,language:string, snippet: string }) {
    const { data, error } = await supabase
      .from("snippets")
      .insert({
        title,
        language,
        content: snippet
      })
      .select();
      console.log(data);
  }
  

import supabase from "./../utils/supabase/client";

export default async function SendData(title: string,language:string, snippet: string) {
    const { data, error } = await supabase
      .from("snippets")
      .insert({
        title: title,
        language: language,
        content: snippet
      })
      .select();
  }
  

import supabase from "../../utils/supabase/client";
import Code from "@/components/Code";

export default async function Snippets() {
  'use server';
  const {data: snippets, error } = await supabase
    .from("snippets")
    .select("title,content");
  if (error) {
    return (
      <div className="mt-10 p-10">
        <p>Error Loading data</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {snippets &&
        snippets.map((snippet, index) => (
          <div key={index}>
            <h2>{snippet.title}</h2>
            <Code language="cpp" code={snippet.content}/>
          </div>
        ))}
    </div>
  );
}

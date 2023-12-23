import { GetServerSideProps } from "next";
import supabase from "../../utils/supabase/client";

export default async function Snippets() {
  const {data: snippets, error } = await supabase
    .from("snippets")
    .select("title,content");
  return (
    <div className="flex flex-col gap-6">
      {snippets.map((snippet, index) => (
        <div key={index}>
          <h2>{snippet.title}</h2>
          <pre>{snippet.content}</pre>
        </div>
      ))}
    </div>
  );
}

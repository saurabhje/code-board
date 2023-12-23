import supabase from "../../utils/supabase/client";

export default async function Snippets() {
  const { data: snippets, error } = await supabase
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
            <pre>{snippet.content}</pre>
          </div>
        ))}
    </div>
  );
}

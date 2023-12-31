import { PostgrestError } from "@supabase/supabase-js";
import Code from "@/components/Code";
import { getServerData } from "./ServerData";
export const revalidate = 0;

interface Snippet {
  title: string;
  language: string;
  content: string;
}

export default async function Snippets() {
  const snippets = (await getServerData()) as Snippet[] | PostgrestError;

  if (Array.isArray(snippets)) {
    return (
        <div className="py-8 columns-1 lg:columns-2 space-y-14">
          {snippets.map((snippet, index) => (
            <div key={index} className="break-inside-avoid">
              <h2 className="mb-2 text-xl">{snippet.title}</h2>
              <Code language={snippet.language} code={snippet.content} />
            </div>
          ))}
        </div>
    );
  } else if ("message" in snippets) {
    console.error("PostgrestError:", snippets.message);
    return (
      <div className="mt-10 p-10">
        <p>Error Loading data: {snippets.message}</p>
      </div>
    );
  } else {
    console.error("Unexpected error:", snippets);
    return (
      <div className="mt-10 p-10">
        <p>Error Loading data</p>
      </div>
    );
  }
}

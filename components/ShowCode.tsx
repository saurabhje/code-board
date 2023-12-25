import { PostgrestError } from "@supabase/supabase-js";
import Code from "@/components/Code";
import getServerData from "@/components/ServerData";
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
      <div className={`w-full py-24 flex items-center justify-center`}>
        <div className="w-full self-start grid grid-cols-1 lg:grid-cols-2 gap-6">
          {snippets.map((snippet, index) => (
            <div key={index} className="mb-4">
              <Code language={snippet.language} code={snippet.content} />
              <h2 className="mt-2">{snippet.title}</h2>
            </div>
          ))}
        </div>
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

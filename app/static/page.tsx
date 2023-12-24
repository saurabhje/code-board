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
  'use server';
  try {
    const snippets = (await getServerData()) as Snippet[] | PostgrestError;

    if (Array.isArray(snippets)) {
      return (
        <div className="flex flex-col gap-6">
          {snippets.map((snippet, index) => (
            <div key={index}>
              <h2>{snippet.title}</h2>
              <Code language="cpps" code={snippet.content} />
            </div>
          ))}
        </div>
      );
    } else if ('message' in snippets) {
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
  } catch (error) {
    console.error("Unexpected error:",error);
    return (
      <div className="mt-10 p-10">
        <p>Error Loading data</p>
      </div>
    );
  }
}

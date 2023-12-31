import { getSearchData } from "@/components/ServerData";
import { PostgrestError } from "@supabase/supabase-js";
import Code from "@/components/Code";
import { useEffect, useState } from "react";
export const revalidate = 0;

interface SearchResult {
  title: string;
  language: string;
  content: string;
}

interface SearchProps {
  searchKey: string;
  searchClick: boolean;
}

export default function Search({ searchKey ,searchClick }: SearchProps) {
  const [searchData, setSearchData] = useState<SearchResult[] | PostgrestError | null>(null);

  useEffect(() => {
    if(searchClick){
      getSearchData(searchKey)
        .then((data) => {
          console.log(data)
          setSearchData(data);
        })
        .catch((error) => {
          console.error("Error loading data", error);
        });
    }
  }, [searchKey]);

  if (!searchData) {
    return null;
  }

  if (Array.isArray(searchData)) {
    return (
      <div>
        {searchData.map((searchItem, index) => (
          <div key={index} className="mt-10">
            <h2 className="mb-2 text-xl">{searchItem.title}</h2>
            <Code language={searchItem.language} code={searchItem.content} />
          </div>
        ))}
      </div>
    );
  } else {
    console.error("Error loading data", searchData);
    return null;
  }
}

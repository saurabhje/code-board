import { getSearchData } from "@/components/ServerData";
import Snippets from "@/components/ShowCode";
import Code from "@/components/Code";

interface Searchdata {
    title: string;
    language: string;
    content: string;
  }
export default async function Jovier() {
    const searchQuery = 'binary search';
  const Searchdata = (await getSearchData(searchQuery)) as Searchdata[];
  return (
    <div className="w-full py-12 px-4 lg:px-1">
      <div className="flex flex-col">
        <label htmlFor="code-syntax">Search Syntax</label>
        <input
          id="code-syntax"
          className="border border-zinc-500 p-1 w-full lg:w-2/3 bg-transparent focus:outline-none focus:border-white"
          type="text"
        />
      </div>
      <button className="mt-2 py-1 px-5 rounded-md bg-btn-background md:hover:bg-btn-background-hover">Search</button>
      {Searchdata.map((searchItem, index) => (
        <div key={index} className="break-inside-avoid">
          <h2 className="mb-2 text-xl">{searchItem.title}</h2>
          <Code language={searchItem.language} code={searchItem.content} />
        </div>
      ))}
      {/* <Snippets /> */}
    </div>
  );
}

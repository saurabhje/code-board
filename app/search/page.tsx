'use client'
import Snippets from "@/components/ShowCode";
import Link from "next/link";
import { useState } from "react";
import Search from "@/components/Search";

export default function SearchCode() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchClick, setSearchClick] = useState(false);

  function handleClick() {
    setSearchClick(true);
  }
  function handleChange(e:any){
    if(searchQuery == ''){
      setSearchClick(false)
    }
    setSearchQuery(e.target.value)
  }
  return (
    <div className="w-full py-12 px-4 lg:px-1">
      <div className="flex flex-col">
        <label htmlFor="code-syntax">Search Syntax</label>
        <input
          id="code-syntax"
          className="border border-zinc-500 p-1 w-full lg:w-2/3 bg-transparent focus:outline-none focus:border-white"
          type="text"
          onChange={handleChange}
        />
      </div>
      <button
        className="mt-2 py-1 px-5 rounded-md bg-btn-background md:hover:bg-btn-background-hover"
        onClick={handleClick}
      >
        Search
      </button>
      {searchClick ? (
        <div className="mt-4">
          <Search searchKey={searchQuery} searchClick={searchClick} />
        </div>
      ) : (
        <Snippets />
      )}

      <div className="mt-4">
        <p>Could not find what you were looking for?</p>
        <Link className="underline" href="/new-code">
          Contribute to our code Source
        </Link>
      </div>
    </div>
  );
}

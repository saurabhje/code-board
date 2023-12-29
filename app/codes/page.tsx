import Snippets from "@/components/ShowCode";
export default function Jovier(){
    return(
        <div className="w-full py-12 px-4 lg:px-1">
            <div className="flex flex-col">
                <label htmlFor="code-syntax">Search Syntax</label>
                <input id="code-syntax" className="border border-zinc-500 p-1 w-full lg:w-2/3 bg-transparent focus:outline-none focus:border-white" type="text" />
            </div>
                <button className="mt-2 py-1 px-5 rounded-md bg-btn-background md:hover:bg-btn-background-hover">Search</button>
            <Snippets/>
        </div>
    )
}
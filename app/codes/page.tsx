import Snippets from "@/components/ShowCode";
export default function Jovier(){
    return(
        <div className="w-full py-20 px-4 lg:px-1">
            <div className="flex">
                <input className="bg-btn-background px-2 py-1 focus:outline-none focus:border-white" type="text" />
                <button className="px-2 py-1 rounded bg-btn-background">Search</button>
            </div>
            <Snippets/>
        </div>
    )
}
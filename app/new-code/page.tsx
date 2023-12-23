import styles from "../utils.module.css";
import SendData from "@/components/SendData";
export default function AddCode() {
  SendData();
  return (
    <div className="p-10 w-full">
      <form className={`${styles.form}`}>
        <div className="w-full flex flex-col">
          <label>Title</label>
          <input
            type="text"
            placeholder=" "
            className="bg-btn-background px-2 py-1 focus:outline-none focus:border-white"
          />
        </div>
        <div className="w-full flex flex-col mt-4">
          <label htmlFor="title">Language </label>
          <input
            id="title"
            type="text"
            className="bg-btn-background px-2 py-1 focus:outline-none focus:border-white"
          />
        </div>
        <div className="w-full flex flex-col mt-4">
          <label htmlFor="snippet">Your code</label>
          <textarea
            id="snippet"
            className="bg-btn-background px-2 py-1 focus:outline-none focus:border-white"
            rows={8}
          />
        </div>
        <button
          type="submit"
          className="mt-4 py-1 px-5 rounded-md bg-btn-background md:hover:bg-btn-background-hover"
        >
          Add
        </button>
      </form>
    </div>
  );
}

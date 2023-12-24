"use client";
import { useState } from "react";
import SendData from "@/components/SendData";
import styles from "../utils.module.css";

export default function AddForm() {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [snippet, setSnippet] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    SendData(title,language,snippet);
  };
  {
    error && <span> Error Encountered</span>;
  }
  return (
    <div className="p-10 w-full">
      <form className={`${styles.form}`}>
        <div className="w-full flex flex-col">
          <label>Title</label>
          <input
            required
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-btn-background px-2 py-1 focus:outline-none focus:border-white"
          />
        </div>
        <div className="w-full flex flex-col mt-4">
          <label htmlFor="language">Language </label>
          <input
            required
            id="language"
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-btn-background px-2 py-1 focus:outline-none focus:border-white"
          />
        </div>
        <div className="w-full flex flex-col mt-4">
          <label htmlFor="snippet">Your code</label>
          <textarea
            required
            id="snippet"
            value={snippet}
            onChange={(e) => setSnippet(e.target.value)}
            className="bg-btn-background px-2 py-1 focus:outline-none focus:border-white"
            rows={8}
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="mt-4 py-1 px-5 rounded-md bg-btn-background md:hover:bg-btn-background-hover"
        >
          {loading && <span>Adding...</span>}
          {!loading && <span>Add</span>}
        </button>
      </form>
    </div>
  );
}

import styles from "../utils.module.css";
export default function AddCode() {
  return (
    <div className={`${styles.form} w-full px-4 mx-10`}>
      <form>
      <div className="w-full flex flex-col">
            <label className="font-bold text-gray-400" htmlFor="title">Code title </label>
            <input id="title" type="text" className="rounded-lg" />
        </div>
        <div className="w-full flex flex-col">
            <label className="font-bold text-gray-400" htmlFor="title">Language </label>
            <input id="title" type="text" className="rounded-lg" />
        </div>
        <div className="w-full flex flex-col">
            <label className="font-bold text-gray-400" htmlFor="snippet">Your code</label>
            <textarea id="snippet" rows={8}/>
        </div>
      </form>
    </div>
  );
}

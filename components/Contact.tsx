import styles from "../app/utils.module.css";

export default function Contact() {
  return (
    <section id="about" className={`self-start animate-in ${styles.psections}`}>
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
      Contact 
    </h1>
    <p>
      <span className="font-bold">Visit my blog:</span> <a className="hover:underline hover:decoration-blue-400 hover:decoration-4" href="saurabhje.vercel.app">Blog@saurabhje</a>
    </p>
    <p>
      <span className="font-bold">Mail me:</span> <a className="hover:underline hover:decoration-blue-400 hover:decoration-4" href="mailto:info@code-board.com">mail@CB</a>
    </p>
    <p>
      <span className="font-bold">X:</span> <a className="hover:underline hover:decoration-blue-400 hover:decoration-4" href="x.com">X@CB</a>
    </p>
    <p>
      <span className="font-bold">Linkedin:</span> <a className="hover:underline hover:decoration-blue-400 hover:decoration-4" href="linkedin.com">In@CB</a>
    </p>
  </section>
  );
}

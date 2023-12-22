import styles from "../app/utils.module.css";

export default function Contact() {
  return (
    <section id="about" className={`self-start animate-in ${styles.psections}`}>
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
      Contact 
    </h1>
    <p>
      <span className="text-xl font-bold">What Sets Us Apart</span>: At
      Code-Board, we're not just a code repository – we're a community-driven
      hub for learning and collaboration.
    </p>

    <p>
      <span className="text-xl font-bold">Collaboration at its Core</span>:
      Our platform is built on the belief that coding is a collaborative
      effort. Connect with fellow developers, share your insights, and learn
      from the diverse perspectives of our community.
    </p>

    <p>
      <span className="text-xl font-bold">Effortless Code Sharing</span>:
      Easily share, discover, and discuss code snippets with a user-friendly
      interface. Whether you're a seasoned developer or just starting, our
      platform is designed to make code sharing and collaboration
      straightforward and enjoyable.
    </p>

    <p>
      <span className="text-xl font-bold">Learning Opportunities</span>:
      Code-Board isn't just a place to share code; it's a space to grow.
      Explore tutorials, tips, and insights shared by our community members,
      creating a dynamic learning environment for everyone.
    </p>
  </section>
  );
}

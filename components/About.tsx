import styles from "../app/utils.module.css";

export default function About() {
  return (
    <section id="about" className={`${styles.psections}`}>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        About <span className="text-blue-400">Code-Board</span>
      </h1>
      <p className="font-bold italic">It is all theatrics, nothing serious merely concept</p>
      <p>
        <span className="font-bold">What Sets Us Apart</span>: At
        Code-Board, we're not just a code repository – we're a community-driven
        hub for learning and collaboration.
      </p>

      <p>
        <span className="font-bold">Collaboration at its Core</span>:
        Our platform is built on the belief that coding is a collaborative
        effort. Connect with fellow developers, share your insights, and learn
        from the diverse perspectives of our community.
      </p>

      <p>
        <span className= "font-bold">Effortless Code Sharing</span>:
        Easily share, discover, and discuss code snippets with a user-friendly
        interface. Whether you're a seasoned developer or just starting, our
        platform is designed to make code sharing and collaboration
        straightforward and enjoyable.
      </p>

      <p>
        <span className="font-bold">Learning Opportunities</span>:
        Code-Board isn't just a place to share code; it's a space to grow.
        Explore tutorials, tips, and insights shared by our community members,
        creating a dynamic learning environment for everyone.
      </p>
    </section>
  );
}

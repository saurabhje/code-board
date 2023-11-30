export default function Footer() {
  return (
    <div className="w-full border-t border-t-foreground/10 p-8 flex-col text-center text-xs">
      <p>
        Created by{" "}
        <a
          href="https://saurabhje.vercel.app"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          SaurabhJe
        </a>
      </p>
    </div>
  );
}

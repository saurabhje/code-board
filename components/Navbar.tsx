import Link from "next/link";
import Image from "next/image";
import AuthButton from "./AuthButton";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center px-10 py-5">
        <Link href="/">
          <Image src="/logo-white.svg" alt="logo" height={29} width={50} />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          <Link className="py-1 px-3 rounded-md hover:bg-btn-background-hover" href="#">About</Link>
          <Link className="py-1 px-3 rounded-md hover:bg-btn-background-hover" href="#">Contact</Link>
          <Link className="py-1 px-3 rounded-md hover:bg-btn-background-hover" href="#">Dashboard</Link>
        </ul>
        <div className="hidden lg:flex">
          <AuthButton />
        </div>
        <div className="inline-block cursor-pointer lg:hidden">
          <svg className="w-10 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
      </nav>
    </div>
  );
}

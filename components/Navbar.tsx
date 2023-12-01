import Link from "next/link";
import Image from "next/image";
import AuthButton from "./AuthButton";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center py-5">
        <Link href="/">
          <Image src="/logo-white.svg" alt="logo" height={29} width={50} />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Dashboard</Link>
        </ul>
        <div className="hidden lg:flex">
          <AuthButton />
        </div>
      </nav>
    </div>
  );
}

import Logo from "./Logo";
import Link from "next/link";
export default function Header() {
  return (
    <header className = "container flex items-center justify-between mx-auto p-5">
      
        <Logo></Logo>
        <div className = "flex gap-3">
          <Link href="/login" className="button button--default">Login</Link>
          <Link href="/signup" className="button button--default">Sign Up</Link>
      </div>
    </header>
  );
}
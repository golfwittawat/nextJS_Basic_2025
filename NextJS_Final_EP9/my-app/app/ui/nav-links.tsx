import Link from "next/link";
export function NavLinks() {
  return (
    <nav>
        <Link href="/">Home</Link> |{" "}
        <Link href="/dashbord">Dashbord</Link> |{" "}
        <Link href="/about">About</Link>
    </nav>
  );
}
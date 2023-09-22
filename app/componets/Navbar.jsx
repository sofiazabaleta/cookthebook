import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <h1>Welcome to CookTheBook</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

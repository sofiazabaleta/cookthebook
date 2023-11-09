import Link from "next/link";
import { Italiana } from "next/font/google";
import Image from "next/image";
import recipe1 from "@/public/images/sample-recipe-1.svg";

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
});

export default function NavBar() {
  return (
    <div>
      <div>
        <h1
          className={"titlectb"}
          style={{
            color: italiana.className,
            fontFamily: italiana.style.fontFamily,
          }}
        >
          COOK THE BOOK
        </h1>
      </div>
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
      <div>
        {/* <Image src={recipe1} alt="Sample Recipe 1" width={632} height={431} /> */}
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <header className="bg-red-400 p-4">
      <nav>
        <ul>
        <li>
          <Link href="#" >Home</Link>
        </li>
        </ul>
      </nav>
    </header>
}

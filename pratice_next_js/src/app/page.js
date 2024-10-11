import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <header className="bg-red-400 p-4">
      <nav>
        <ul className="flex justify-center space-x-6">
        <li>
        <a href="#home" className="text-white hover:bg-gray-600 px-3 py-2 rounded">
                Home
              </a>
        </li>
        <li>
          <Link href="/about" className="text-white hover:bg-orange-400 px-3 py-2 rounded">About </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:bg-gray-400 px-3 py-2 rounded">Contact </Link>
        </li>

        </ul>
      </nav>
    </header>
  )
}

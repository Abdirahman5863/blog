import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen gap-7 flex-col items-center justify-center p-24 bg-gradient-to-r from-blue-300 to-blue-600">
      <p className="text-3xl font-bold  text-orange-300">
        Create Your own Blog
      </p>

      <Link
        href="./blog-add"
        className=" p-4 bg-gradient-to-r from-orange-200 to-orange-500 text-2xl font-bold text-white"
      >
        Explore to add a blog
      </Link>
    </main>
  );
}

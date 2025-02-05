"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/dashboard");
  };
  return (
    <div className="text-center">
      <h2 className="text-emerald-400 text-2xl">
        Welcome to the Next.js Home page
      </h2>

      <button
        onClick={handleNavigation}
        className=" text-center bg-purple-600 text-white p-3 rounded-md"
      >
        Dashboard
      </button>
      <Link href="/dashboard">
        <button className=" text-center bg-purple-600 text-white p-3 rounded-md">
          Dashboard
        </button>
      </Link>
    </div>
  );
};

export default HomePage;

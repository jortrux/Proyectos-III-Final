import Image from "next/image";
import ActivitySection from "../../components/ActivitySection";
import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#000000]">
      <div className="container mt-24 mx-auto px-12 py-4"> 
        <Link
            href="../communities"
            className="text-white text-4xl font-semibold">
            <div className="flex    ">
                <ArrowUturnLeftIcon className="h-5 w-5 my-2 mr-4" />
                Actividades
            </div>
        </Link>
        <ActivitySection />
      </div>
    </main>
  );
}

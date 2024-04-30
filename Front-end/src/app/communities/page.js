import Image from "next/image";
import Navbar from "../../components/Navbar";
import ProjectsSection from "../../components/ProjectsSection";
import Link from "next/link";
import { ArrowLeftIcon } from '@heroicons/react/24/solid'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#ffffff]">
      <div className="container mt-24 mx-auto py-4">
        <div className="flex flex-wrap">
          <Link href="/">
            <ArrowLeftIcon className='h-10 w-10 text-black cursor-pointer' />
          </Link>
          <h1 className="hidden ml-8 md:block text-5xl font-extrabold text-[#14192C]">Comunidades de alumnos</h1>
        </div>
        <div className="inline-block bg-[#E5E9EC] rounded-3xl mt-14 mb-8">
          <div className="px-6 py-6 sm:p-6 sm:pb-20">
            <div className="grid items-center justify-center w-full grid-cols-1 text-left">
              <div>
                <h2 className="text-lg font-bold tracking-tighter text-[#14192C] lg:text-xl">
                  FORO GENERAL DE LA COMUNIDAD DE ALUMNOS
                </h2>
                <p className="mt-2 text-sm text-black">Interactuar con tus compañeros, comparte ideas y resuelve dudas de manera colaborativa.</p>
              </div>
            </div>
          </div>
        </div>

        <ProjectsSection />
      </div>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="bg-gray-200 h-[80vh] flex items-center">
        <div className="container mx-auto px-6 md:px-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">
            Global Shapers Bengaluru II Hub
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 md:mb-10">
            A network of young people driving dialogue, action and change.
          </p>
          <Button asChild className="bg-blue-800 hover:bg-blue-700 rounded-full px-6 md:px-8 py-4 md:py-6 h-auto">
            <Link href="/projects">
              View Our Projects
            </Link>
          </Button>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className="bg-blue-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl mb-8 md:mb-12 border-b border-blue-700 pb-2">Impact Areas</h2>
          <div className="flex flex-nowrap overflow-x-auto scrollbar-hide xl:overflow-x-visible xl:flex-row justify-between max-w-7xl items-center mx-auto space-x-6">
            {/* First card */}
            <div className="flex-shrink-0 bg-gray-300 h-[170px] w-[140px] md:h-[216px] md:w-[170px]"></div>
            
            {/* Dash - Only visible on xl screens */}
            <div className="hidden xl:flex w-[40px] items-center justify-center flex-shrink-0">
              <div className="h-[5px] w-full bg-gray-300"></div>
            </div>
            
            {/* Remaining cards */}
            <div className="flex space-x-6 flex-shrink-0 scrollbar-hide">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex-shrink-0 bg-gray-300 h-[170px] w-[140px] md:h-[216px] md:w-[170px]"></div>
              ))}
            </div>
          </div>
          <div className="text-right mt-6 md:mt-8">
            <Link href="/projects" className="text-white hover:underline flex justify-end items-center">
              Projects <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Curatorship Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl mb-8 md:mb-12 border-b pb-2">Meet the Curatorship</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 place-items-center">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center w-full max-w-[350px]">
                <div className="bg-gray-300 h-[400px] w-full md:h-[477px] md:w-[350px] mb-4"></div>
                <div className="flex items-center justify-between w-full px-2">
                  <div className="flex flex-col">
                    <h3 className="text-lg md:text-xl font-semibold">Curator Name</h3>
                    <p className="text-gray-600">Designation</p>
                  </div>
                  <Link href="#" aria-label="LinkedIn" className="text-gray-400 mt-2 hover:text-blue-600">
                    <FaLinkedin size={30} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-right mt-6 md:mt-8">
            <Link href="/members" className="text-blue-800 hover:underline flex justify-end items-center">
              All Members <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

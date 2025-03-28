import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  const curators = [
    {
      name: "Jane Doe",
      position: "Lead Curator",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop",
      linkedin: "#"
    },
    {
      name: "John Smith",
      position: "Co-Curator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      linkedin: "#"
    },
    {
      name: "Sarah Johnson",
      position: "Program Director",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
      linkedin: "#"
    }
  ];

  const impactAreas = [
    { name: "Climate Action", image: "https://images.unsplash.com/photo-1498925008800-019c7d59d903?q=80&w=2069&auto=format&fit=crop" },
    { name: "Social Equity", image: "https://images.unsplash.com/photo-1591522810850-58128c5fb089?q=80&w=2070&auto=format&fit=crop" },
    { name: "Digital Empowerment", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" },
    { name: "Urban Transformation", image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2064&auto=format&fit=crop" },
    { name: "Education", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" },
    { name: "Healthcare", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" }
  ];

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <Image 
          src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=2074&auto=format&fit=crop" 
          alt="Global Shapers working together"
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="container mx-auto px-6 md:px-10 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">
            Shaping a Better Future, Together
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 md:mb-10">
            Global Shapers Bengaluru II Hub: A dynamic hub of young changemakers committed to creating real impact.
          </p>
          <Button asChild className="bg-blue-800 hover:bg-blue-700 rounded-full px-6 md:px-8 py-4 md:py-6 h-auto">
            <Link href="/projects">
              View Our Projects
            </Link>
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl mb-6 md:mb-8 border-b pb-2">About Us</h2>
          <div className="prose max-w-none">
            <p className="text-base md:text-lg mb-4">
              Welcome to Global Shapers Bengaluru 2, a dynamic hub of young changemakers committed to creating real impact in our city and beyond. As part of the Global Shapers Community, an initiative of the World Economic Forum, we bring together passionate individuals from diverse backgrounds—entrepreneurs, social innovators, and professionals—driven by a shared mission to build a better, more sustainable future.
            </p>
            <p className="text-base md:text-lg">
              At Bengaluru 2, we focus on climate action, social equity, digital empowerment, and urban transformation, working on innovative projects that address the city's most pressing challenges. Through collaboration, knowledge-sharing, and strategic partnerships, we drive meaningful change at the grassroots level.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className="bg-blue-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl mb-8 md:mb-12 border-b border-blue-700 pb-2">Impact Areas</h2>
          <div className="flex flex-nowrap overflow-x-auto scrollbar-hide xl:overflow-x-visible xl:flex-row justify-between max-w-7xl items-center mx-auto space-x-6">
            {/* First card */}
            <div className="flex-shrink-0 h-[170px] w-[140px] md:h-[216px] md:w-[170px] relative rounded-md overflow-hidden">
              <Image 
                src={impactAreas[0].image} 
                alt={impactAreas[0].name}
                fill
                sizes="170px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2">
                <span className="text-white text-sm font-medium">{impactAreas[0].name}</span>
              </div>
            </div>
            
            {/* Dash - Only visible on xl screens */}
            <div className="hidden xl:flex w-[40px] items-center justify-center flex-shrink-0">
              <div className="h-[5px] w-full bg-gray-300"></div>
            </div>
            
            {/* Remaining cards */}
            <div className="flex space-x-6 flex-shrink-0 scrollbar-hide">
              {impactAreas.slice(1).map((area, i) => (
                <div key={i} className="flex-shrink-0 h-[170px] w-[140px] md:h-[216px] md:w-[170px] relative rounded-md overflow-hidden">
                  <Image 
                    src={area.image} 
                    alt={area.name}
                    fill
                    sizes="170px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2">
                    <span className="text-white text-sm font-medium">{area.name}</span>
                  </div>
                </div>
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
            {curators.map((curator, i) => (
              <div key={i} className="flex flex-col items-center w-full max-w-[350px]">
                <div className="relative h-[400px] w-full md:h-[477px] md:w-[350px] mb-4 rounded-md overflow-hidden">
                  <Image 
                    src={curator.image} 
                    alt={curator.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between w-full px-2">
                  <div className="flex flex-col">
                    <h3 className="text-lg md:text-xl font-semibold">{curator.name}</h3>
                    <p className="text-gray-600">{curator.position}</p>
                  </div>
                  <Link href={curator.linkedin} aria-label="LinkedIn" className="text-gray-400 mt-2 hover:text-blue-600">
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

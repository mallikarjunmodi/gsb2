import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { homeContent } from "@/cms/home";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <Image 
          src={homeContent.hero.image}
          alt={homeContent.hero.imageAlt}
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="container mx-auto px-6 md:px-10 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">
            {homeContent.hero.title}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 md:mb-10">
            {homeContent.hero.description}
          </p>
          <Button asChild className="bg-blue-800 hover:bg-blue-700 rounded-full px-6 md:px-8 py-4 md:py-6 h-auto">
            <Link href={homeContent.hero.ctaLink}>
              {homeContent.hero.ctaText}
            </Link>
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl mb-6 md:mb-8 border-b pb-2">{homeContent.about.title}</h2>
          <div className="prose max-w-none">
            {homeContent.about.description.map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className="bg-blue-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl mb-8 md:mb-12 border-b border-blue-700 pb-2">{homeContent.impactAreas.title}</h2>
          <div className="flex flex-nowrap overflow-x-auto scrollbar-hide xl:overflow-x-visible xl:flex-row justify-between max-w-7xl items-center mx-auto space-x-6">
            {/* First card */}
            <div className="flex-shrink-0 h-[170px] w-[140px] md:h-[216px] md:w-[170px] relative rounded-md overflow-hidden">
              <Image 
                src={homeContent.impactAreas.areas[0].image} 
                alt={homeContent.impactAreas.areas[0].name}
                fill
                sizes="170px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2">
                <span className="text-white text-sm font-medium">{homeContent.impactAreas.areas[0].name}</span>
              </div>
            </div>
            
            {/* Dash - Only visible on xl screens */}
            <div className="hidden xl:flex w-[40px] items-center justify-center flex-shrink-0">
              <div className="h-[5px] w-full bg-gray-300"></div>
            </div>
            
            {/* Remaining cards */}
            <div className="flex space-x-6 flex-shrink-0 scrollbar-hide">
              {homeContent.impactAreas.areas.slice(1).map((area, i) => (
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
            <Link href={homeContent.impactAreas.ctaLink} className="text-white hover:underline flex justify-end items-center">
              {homeContent.impactAreas.ctaText} <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Curatorship Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl mb-8 md:mb-12 border-b pb-2">{homeContent.curatorship.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 place-items-center">
            {homeContent.curatorship.curators.map((curator, i) => (
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
            <Link href={homeContent.curatorship.ctaLink} className="text-blue-800 hover:underline flex justify-end items-center">
              {homeContent.curatorship.ctaText} <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

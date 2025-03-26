import Link from 'next/link';
import { Button } from './button';
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 mb-6 sm:mb-8 md:mb-0">
            <p className="max-w-md text-white/90 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit 
              amet lorem ante. Vestibulum volutpat tincidunt mi, nec dignissim diam. 
              Praesent congue faucibus ante, at blandit lorem. Class aptent taciti 
              sociosqu ad litora torquent per conubia nostra, per inceptos 
              himenaeos. Aenean pellentesque porta nunc, vel lacinia dui tincidunt 
              ac. Vivamus ut dui in erat ultrices hendrerit.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end">
            <h2 className="text-2xl sm:text-3xl mb-4 sm:mb-6">Interested in Joining?</h2>
            <Button asChild variant="outline" className="bg-white text-blue-800 px-4 sm:px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors border-none">
              <Link href="/contact" className="flex items-center">
                Apply Now <ArrowRight className="ml-1 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 flex flex-col md:flex-row justify-between items-center border-t border-blue-700 pt-4 sm:pt-6">
          <p className="text-white/90 text-sm sm:text-base text-center md:text-left">©{new Date().getFullYear()} by Global Shapers Bengaluru II Hub, All rights reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="mailto:contact@globalshapersbengaluru.org" className="hover:text-white/80">
              <IoMailOutline className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
            <Link href="https://instagram.com/globalshapersbengaluru" target="_blank" className="hover:text-white/80">
              <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
            <Link href="https://linkedin.com/company/globalshapersbengaluru" target="_blank" className="hover:text-white/80">
              <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
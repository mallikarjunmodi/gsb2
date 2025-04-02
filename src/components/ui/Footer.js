import Link from 'next/link';
import { Button } from './button';
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 mb-6 sm:mb-8 md:mb-0">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Global Shapers Bengaluru II Hub</h3>
            <p className="max-w-md text-white/90 text-sm sm:text-base mb-4">
              As part of the Global Shapers Community, an initiative of the World Economic Forum, 
              we bring together young changemakers committed to creating real impact in our city and beyond. 
              Together, we&apos;re shaping a better, more sustainable future.
            </p>
            <div className="flex flex-col space-y-2 text-white/90 text-sm sm:text-base">
              <div className="flex items-center">
                <IoLocationOutline className="mr-2 h-5 w-5" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-center">
                <IoMailOutline className="mr-2 h-5 w-5" />
                <Link href="mailto:contact@globalshapersbengaluru.org" className="hover:underline">
                globalshapersblr2@gmail.com
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-start md:items-end">
            <h2 className="text-2xl sm:text-3xl mb-4 sm:mb-6">Join Our Community</h2>
            <p className="text-white/90 text-sm sm:text-base mb-4 md:text-right max-w-md">
              Are you 18-27 years old and passionate about making a difference? 
              Join our hub of diverse changemakers and help shape a better future for Bengaluru.
            </p>
            <Button asChild variant="outline" className="bg-white text-blue-800 px-4 sm:px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors border-none">
              <Link href="https://forms.gle/m6joNWdCcSsn2NW66" className="flex items-center">
                Apply Now <ArrowRight className="ml-1 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 pt-8 border-t border-blue-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-4 md:flex-row md:space-x-6 mb-4 md:mb-0">
              <Link href="/" className="text-white/90 hover:text-white mb-2 md:mb-0">Home</Link>
              <Link href="/projects" className="text-white/90 hover:text-white mb-2 md:mb-0">Projects</Link>
              <Link href="/members" className="text-white/90 hover:text-white mb-2 md:mb-0">Members</Link>
              <Link href="/contact" className="text-white/90 hover:text-white">Contact</Link>
            </div>
            <div className="flex space-x-4">
              <Link href="mailto:contact@globalshapersbengaluru.org" className="hover:text-white/80" aria-label="Email">
                <IoMailOutline className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
              <Link href="https://twitter.com/GSBengaluru" target="_blank" className="hover:text-white/80" aria-label="Twitter">
                <FaTwitter className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
              <Link href="https://instagram.com/globalshapersbengaluru" target="_blank" className="hover:text-white/80" aria-label="Instagram">
                <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
              <Link href="https://linkedin.com/company/globalshapersbengaluru" target="_blank" className="hover:text-white/80" aria-label="LinkedIn">
                <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
            </div>
          </div>
          
          <div className="mt-6 text-center md:text-left text-white/90 text-sm">
            <p>©{new Date().getFullYear()} Global Shapers Bengaluru II Hub. All rights reserved.</p>
            <p className="mt-1 text-xs">Part of the <Link href="https://www.globalshapers.org/" target="_blank" className="underline hover:text-white">Global Shapers Community</Link>, an initiative of the World Economic Forum.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './button';

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 md:px-10 w-full border-b">
      <Link href="/" className="flex items-center">
        <Image 
          src="/Logo.png" 
          alt="Global Shapers Bengaluru" 
          width={60} 
          height={60}
        />
      </Link>
      <div className="flex space-x-10">
        <Link href="/projects" className="text-slate-800 hover:text-blue-700 transition-colors">
          Projects
        </Link>
        <Link href="/members" className="text-slate-800 hover:text-blue-700 transition-colors">
          Members
        </Link>
        <Link href="/contact" className="text-slate-800 hover:text-blue-700 transition-colors">
          Contact Us
        </Link>
      </div>
    </nav>
  );
} 
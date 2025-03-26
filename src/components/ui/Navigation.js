'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from './button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center py-4 px-6 md:px-10 w-full border-b">
      <Link href="/" className="flex items-center">
        <Image 
          src="/Logo.png" 
          alt="Global Shapers Bengaluru" 
          width={60} 
          height={60}
        />
      </Link>

      {/* Mobile menu button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-10">
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

      {/* Mobile menu */}
      <div className={`absolute top-full left-0 right-0 bg-white border-b md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4 p-6">
          <Link 
            href="/projects" 
            className="text-slate-800 hover:text-blue-700 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link 
            href="/members" 
            className="text-slate-800 hover:text-blue-700 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Members
          </Link>
          <Link 
            href="/contact" 
            className="text-slate-800 hover:text-blue-700 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
'use client';

import Link from "next/link";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { members } from "@/cms/members";
import { useState } from "react";

export default function MembersPage() {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div className="container mx-auto px-6 md:px-10 py-12 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl mb-8 border-b pb-2">Our Members</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
        {members?.map((member) => (
          <Card 
            key={member?.id} 
            className="border-none shadow-none relative group"
            onMouseEnter={() => setHoveredMember(member?.id)}
            onMouseLeave={() => setHoveredMember(null)}
          >
            <CardContent className="p-0">
              <div className="relative h-[477px] w-[350px] mb-4 rounded-md overflow-hidden bg-gray-100">
                { member?.image ? <Image 
                  src={member?.image}
                  alt={`${member?.name}, ${member?.position}`}
                  fill
                  sizes="350px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={member?.id <= 3}
                /> : <div className="h-[477px] w-[350px] mb-4 rounded-md overflow-hidden bg-gray-100"></div>}
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/80 text-white p-6 flex flex-col justify-center transition-opacity duration-300 ${
                  hoveredMember === member?.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  {member?.name && <h3 className="text-2xl font-semibold mb-2">{member?.name}</h3>}
                  {member?.position && <p className="text-blue-400 mb-4">{member?.position}</p>}
                  {member?.bio && <p className="text-gray-300 mb-4">{member?.bio}</p>}
                 { member?.expertise && <div>
                    <h4 className="font-semibold mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member?.expertise.map((skill, index) => (
                        <span 
                          key={index}
                          className="bg-blue-600/50 text-white px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>}
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold">{member?.name || "Member"}</h3>
                  <p className="text-gray-600">{member?.position || "Member"}</p>
                </div>
                <Link 
                  href={member?.linkedin || "#"} 
                  aria-label={`${member?.name || "Member"}'s LinkedIn`} 
                  className="text-gray-400 mt-2 hover:text-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
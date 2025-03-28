import Link from "next/link";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

export default function MembersPage() {
  // Sample members data
  const members = [
    { name: "Alex Johnson", position: "Project Lead", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop", linkedin: "#" },
    { name: "Michael Chen", position: "Climate Action Lead", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop", linkedin: "#" },
    { name: "Priya Sharma", position: "Education Initiative", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop", linkedin: "#" },
    { name: "David Wilson", position: "Community Outreach", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop", linkedin: "#" },
    { name: "Sophia Lee", position: "Digital Empowerment", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop", linkedin: "#" },
    { name: "Raj Patel", position: "Urban Transformation", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop", linkedin: "#" },
    { name: "Emma Garcia", position: "Innovation Lead", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop", linkedin: "#" },
    { name: "James Robinson", position: "Partnerships", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop", linkedin: "#" },
    { name: "Ananya Reddy", position: "Social Media", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop", linkedin: "#" },
    { name: "Thomas Wright", position: "Operations", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop", linkedin: "#" },
    { name: "Lisa Chang", position: "Event Coordinator", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop", linkedin: "#" },
    { name: "Omar Hassan", position: "Research Lead", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop", linkedin: "#" }
  ];

  return (
    <div className="container mx-auto px-6 md:px-10 py-12 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl mb-8 border-b pb-2">Our Members</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
        {members.map((member, i) => (
          <Card key={i} className="border-none shadow-none">
            <CardContent className="p-0">
              <div className="relative h-[477px] w-[350px] mb-4 rounded-md overflow-hidden">
                <Image 
                  src={member.image}
                  alt={`${member.name}, ${member.position}`}
                  fill
                  sizes="350px"
                  className="object-cover"
                  priority={i < 3} // Only set priority for the first 3 members (above the fold)
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
                <Link href={member.linkedin} aria-label="LinkedIn" className="text-gray-400 mt-2 hover:text-blue-600">
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
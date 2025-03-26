import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

export default function MembersPage() {
  return (
    <div className="container mx-auto px-6 md:px-10 py-12 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl mb-8 border-b pb-2">Our Members</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
        {Array.from({ length: 12 }).map((_, i) => (
          <Card key={i} className="border-none shadow-none">
            <CardContent className="p-0">
              <div className="bg-gray-300 h-[477px] w-[350px] mb-4"></div>
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold">Member Name</h3>
                  <p className="text-gray-600">Designation</p>
                </div>
                <Link href="#" aria-label="LinkedIn" className="text-gray-400 mt-2 hover:text-blue-600">
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
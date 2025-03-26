import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 md:px-10 py-12 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl mb-12 border-b pb-2">Our Projects</h1>
      
      <div className="space-y-24">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center justify-center`}>
            <div className="flex justify-center">
              <Card className="border-none shadow-none">
                <CardContent className="p-0">
                  <div className="bg-gray-300 h-[358px] w-[477px]"></div>
                </CardContent>
              </Card>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">Project Name</h2>
              <p className="text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet 
                lorem ante. Vestibulum volutpat tincidunt mi, nec dignissim diam. 
                Praesent congue faucibus ante, at blandit lorem. Class aptent taciti 
                sociosqu ad litora torquent per conubia nostra, per inceptos 
                himenaeos. Aenean pellentesque porta nunc, vel lacinia dui tincidunt 
                ac. Vivamus ut dui in erat ultrices hendrerit.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  {/* Icons below paragraph */}
                  {[1, 2, 3, 4].map((icon) => (
                    <div key={icon} className="h-8 w-8 bg-gray-300"></div>
                  ))}
                </div>
                <Link href="#" className="text-blue-800 flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
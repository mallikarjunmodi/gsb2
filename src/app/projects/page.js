import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-12 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl sm:text-4xl mb-8 sm:mb-12 border-b pb-2">Our Projects</h1>
      
      <div className="space-y-16 sm:space-y-24">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 sm:gap-8 items-center justify-center`}>
            <div className="flex justify-center w-full md:w-1/2">
              <Card className="border-none shadow-none w-full">
                <CardContent className="p-0">
                  <div className="bg-gray-300 h-[250px] sm:h-[300px] md:h-[358px] w-full md:w-[477px]"></div>
                </CardContent>
              </Card>
            </div>
            
            <div className="w-full md:w-1/2 px-2 sm:px-4">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Project Name</h2>
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet 
                lorem ante. Vestibulum volutpat tincidunt mi, nec dignissim diam. 
                Praesent congue faucibus ante, at blandit lorem. Class aptent taciti 
                sociosqu ad litora torquent per conubia nostra, per inceptos 
                himenaeos. Aenean pellentesque porta nunc, vel lacinia dui tincidunt 
                ac. Vivamus ut dui in erat ultrices hendrerit.
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <div className="flex space-x-2">
                  {/* Icons below paragraph */}
                  {[1, 2, 3, 4].map((icon) => (
                    <div key={icon} className="h-6 w-6 sm:h-8 sm:w-8 bg-gray-300"></div>
                  ))}
                </div>
                <Link href="#" className="text-blue-800 flex items-center hover:underline text-sm sm:text-base">
                  Learn More <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
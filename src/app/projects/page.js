import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FaBook, FaHandsHelping, FaUsers, FaFemale } from "react-icons/fa";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Building a Library, Inspiring Young Minds",
      description: "Our latest initiative, \"Shaping Readers, Shaping Futures,\" is dedicated to building a library and creating a vibrant reading corner within a school that lacks adequate learning resources. Through book collection drives, community donations, and strategic partnerships, we aim to provide students with engaging books that spark curiosity, creativity, and a lifelong love for reading. This initiative is not just about books—it's about empowering young minds, fostering education, and bridging the literacy gap.",
      supportText: "How You Can Help: We are seeking partners, donors, and volunteers to help bring this vision to life.",
      icons: ["book", "helping"],
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop",
      alt: "Children reading books in a colorful library"
    },
    {
      id: 2,
      title: "JeevikaLINK: Bridging the Gaps in Women's Economic Empowerment",
      description: "Empowering women economically is one of the largest ongoing efforts in the social sector, yet most initiatives operate in silos, limiting their impact, scalability, and sustainability. The lack of visibility, collaboration, and resource-sharing hinders their potential to create long-term change. To address this, we are building a digital-first platform that connects non-profits, women-led livelihood initiatives, government agencies, corporates, social enterprises, donors, researchers, and volunteers—all working toward women's economic empowerment in India.",
      supportText: "What We Offer: A comprehensive registry of organizations, resources, and funding opportunities; A hub for collaboration, knowledge exchange, and capacity building; A space for impact storytelling and sharing best practices; A bridge between policy, technology, and grassroots action.",
      icons: ["female", "users"],
      image: "https://images.unsplash.com/photo-1573164574230-db1d5e960238?q=80&w=2069&auto=format&fit=crop",
      alt: "Women entrepreneurs collaborating at a workshop"
    },
    {
      id: 3,
      title: "Bridging Volunteers & Non-Profits: A One-Stop Solution for Social Impact",
      description: "Volunteering has the power to transform communities, yet many passionate individuals struggle to find the right opportunities, while non-profits often lack visibility and access to committed volunteers. Our initiative aims to bridge this gap by creating a one-stop platform that connects people eager to make a difference with organizations that need support. This collaborative effort between the Global Shapers Hubs of Chennai, Puducherry, Coimbatore, and Bengaluru brings together a network of young changemakers working to streamline and amplify the impact of volunteerism.",
      supportText: "Our Vision: To make volunteering accessible, impactful, and sustainable. The platform matches volunteers with causes based on skills, interests, and location, benefiting individuals looking to give back, non-profits seeking support, and communities in need.",
      icons: ["users", "helping"],
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2070&auto=format&fit=crop",
      alt: "Diverse group of volunteers working together"
    }
  ];

  // Function to render the appropriate icon based on the icon name
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "book":
        return <FaBook />;
      case "helping":
        return <FaHandsHelping />;
      case "users":
        return <FaUsers />;
      case "female":
        return <FaFemale />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-12 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl sm:text-4xl mb-8 sm:mb-12 border-b pb-2">Our Projects</h1>
      
      <div className="space-y-16 sm:space-y-24">
        {projects.map((project, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 sm:gap-8 items-center justify-center`}>
            <div className="flex justify-center w-full md:w-1/2">
              <Card className="border-none shadow-none w-full overflow-hidden">
                <CardContent className="p-0 relative h-[250px] sm:h-[300px] md:h-[358px] w-full">
                  <Image 
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-md"
                    priority={i === 0}
                  />
                </CardContent>
              </Card>
            </div>
            
            <div className="w-full md:w-1/2 px-2 sm:px-4">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{project.title}</h2>
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                {project.description}
              </p>
              <p className="text-gray-800 font-medium mb-4 text-sm sm:text-base">
                {project.supportText.split(': ')[0] && (
                  <span className="font-bold">{project.supportText.split(': ')[0]}: </span>
                )}
                {project.supportText.split(': ')[1]}
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <div className="flex space-x-3">
                  {/* Project-specific icons */}
                  {project.icons.map((iconName, index) => (
                    <div key={index} className="text-blue-800 h-6 w-6 sm:h-8 sm:w-8 bg-gray-100 flex items-center justify-center rounded-lg">
                      {renderIcon(iconName)}
                    </div>
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
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FaBook, 
  FaHandsHelping, 
  FaUsers, 
  FaFemale, 
  FaGraduationCap,
  FaLeaf,
  FaLaptopCode,
  FaHeartbeat,
  FaChartLine,
  FaPalette,
  FaRunning,
  FaUtensils,
  FaHome,
  FaBus,
  FaMicroscope,
  FaLightbulb,
  FaBullhorn,
  FaUserGraduate,
  FaRocket,
  FaRecycle
} from "react-icons/fa";
import { projects } from "@/cms/projects";

export default function ProjectsPage() {
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
      case "education":
        return <FaGraduationCap />;
      case "environment":
        return <FaLeaf />;
      case "technology":
        return <FaLaptopCode />;
      case "health":
        return <FaHeartbeat />;
      case "finance":
        return <FaChartLine />;
      case "art":
        return <FaPalette />;
      case "sports":
        return <FaRunning />;
      case "food":
        return <FaUtensils />;
      case "housing":
        return <FaHome />;
      case "transportation":
        return <FaBus />;
      case "research":
        return <FaMicroscope />;
      case "innovation":
        return <FaLightbulb />;
      case "advocacy":
        return <FaBullhorn />;
      case "mentorship":
        return <FaUserGraduate />;
      case "entrepreneurship":
        return <FaRocket />;
      case "sustainability":
        return <FaRecycle />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-12 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl sm:text-4xl mb-8 sm:mb-12 border-b pb-2">Our Projects</h1>
      
      <div className="space-y-16 sm:space-y-24">
        {projects?.map((project, i) => (
          <div key={project.id} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 sm:gap-8 items-center justify-center`}>
            <div className="flex justify-center w-full md:w-1/2">
              <Card className="border-none shadow-none w-full overflow-hidden">
                <CardContent className="p-0 relative h-[250px] sm:h-[300px] md:h-[358px] w-full">
                 { project?.image ? <Image 
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-md bg-gray-100"
                    priority={i === 0}
                  /> : <div className="h-[250px] sm:h-[300px] md:h-[358px] w-full bg-gray-100 rounded-md"></div>}
                </CardContent>
              </Card>
            </div>
            
            <div className="w-full md:w-1/2 px-2 sm:px-4">
              { project?.title && <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{project.title}</h2>}
              { project?.description && <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                {project.description}
              </p>}
              { project?.supportText && <p className="text-gray-800 font-medium mb-4 text-sm sm:text-base">
                {project?.supportText?.split(': ')[0] && (
                  <span className="font-bold">{project?.supportText?.split(': ')[0]}: </span>
                )}
                {project?.supportText?.split(': ')[1]}
              </p>}
              { project?.icons && <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <div className="flex space-x-3">
                  {/* Project-specific icons */}
                  {project?.icons?.map((iconName, index) => (
                    <div key={index} className="text-blue-800 h-6 w-6 sm:h-8 sm:w-8 bg-gray-100 flex items-center justify-center rounded-lg">
                      {renderIcon(iconName)}
                    </div>
                  ))}
                </div>
                { project?.learnMoreLink && <Link href={project?.learnMoreLink} className="text-blue-800 flex items-center hover:underline text-sm sm:text-base">
                  Learn More <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>}
              </div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
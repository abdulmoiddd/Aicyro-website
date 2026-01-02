import React from "react";
// 1. Next.js Link Import
import Link from "next/link";
import { MapPin, Clock, Users, Eye } from "lucide-react";

const ProjectCard = ({ title, description, imageSrc, details, projectUrl }) => {
  const { country, duration, developers } = details;

  return (
    <div className="w-full">
      <div className="bg-[#0F121A] backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
        {/* Image Placeholder */}
        <div
          className="h-48 bg-cover bg-center"
          style={{
            backgroundImage: `url('${imageSrc}')`,
            backgroundSize: "cover",
          }}
        ></div>

        <div className="p-6 text-white flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-400 mb-6 min-h-[60px] flex-grow">
            {description}
          </p>

          {/* Details Section */}
          <div className="text-sm space-y-2 mb-6 border-t border-b border-white/10 py-4">
            <p className="flex items-center text-gray-300">
              <MapPin className="w-4 h-4 mr-2 text-indigo-400" /> {country}
            </p>
            <p className="flex items-center text-gray-300">
              <Clock className="w-4 h-4 mr-2 text-indigo-400" /> {duration}
            </p>
            <p className="flex items-center text-gray-300">
              <Users className="w-4 h-4 mr-2 text-indigo-400" /> {developers}
            </p>
          </div>

          {/* 3. BUTTON SECTION */}
          <div className="mt-auto">
            {/* Next.js uses 'href' instead of 'to'. 
               If 'projectUrl' is undefined, it defaults to "#" to prevent errors.
            */}
            <Link
              href={projectUrl || "#"}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <Eye className="w-4 h-4" />
              View Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

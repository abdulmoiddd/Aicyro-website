import React from "react";
// 1. Next.js Link Import
import Link from "next/link";
import { MapPin, Clock, Users, Eye } from "lucide-react";

const ProjectCard = ({ title, description, imageSrc, details, projectUrl }) => {
  const { country, duration, developers } = details;

  return (
    <div className="w-full">
      {/* UPDATED: Background and Border Variables */}
      <div className="bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--border-color)] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
        {/* Image Placeholder */}
        <div
          className="h-48 bg-cover bg-center"
          style={{
            backgroundImage: `url('${imageSrc}')`,
            backgroundSize: "cover",
          }}
        ></div>

        <div className="p-6 text-[var(--foreground)] flex flex-col flex-grow">
          {/* UPDATED: Title Color */}
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          {/* UPDATED: Description Color */}
          <p className="text-sm text-[var(--foreground-muted)] mb-6 min-h-[60px] flex-grow">
            {description}
          </p>

          {/* Details Section */}
          {/* UPDATED: Divider Border and Text Colors */}
          <div className="text-sm space-y-2 mb-6 border-t border-b border-[var(--border-color)] py-4">
            <p className="flex items-center text-[var(--foreground-muted)]">
              {/* UPDATED: Icon Color uses Secondary Variable */}
              <MapPin className="w-4 h-4 mr-2 text-[var(--secondary)]" />{" "}
              {country}
            </p>
            <p className="flex items-center text-[var(--foreground-muted)]">
              <Clock className="w-4 h-4 mr-2 text-[var(--secondary)]" />{" "}
              {duration}
            </p>
            <p className="flex items-center text-[var(--foreground-muted)]">
              <Users className="w-4 h-4 mr-2 text-[var(--secondary)]" />{" "}
              {developers}
            </p>
          </div>

          {/* 3. BUTTON SECTION */}
          <div className="mt-auto">
            {/* Next.js uses 'href' instead of 'to'. 
               If 'projectUrl' is undefined, it defaults to "#" to prevent errors.
            */}
            <Link
              href={projectUrl || "#"}
              // UPDATED: Button Background uses Secondary Variable
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[var(--secondary)] hover:bg-[var(--primary)] text-white font-medium rounded-lg transition-colors duration-200"
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

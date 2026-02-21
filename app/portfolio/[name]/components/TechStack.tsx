import React from "react";
import Image from "next/image";

import SectionTitle from "@/components/SectionTitle";

interface TechStackProps {
  techStacks: string[];
}

const TechStack: React.FC<TechStackProps> = ({ techStacks }) => {
  return (
    <div>
      <SectionTitle className="my-40">Tech Stack</SectionTitle>
      <div className="flex flex-col items-center justify-center gap-10 sm:flex-row">
        {techStacks.map((techStack, index) => (
          <Image
            key={index}
            src={techStack}
            alt={`Tech logo ${index + 1}`}
            width={150}
            height={150}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;

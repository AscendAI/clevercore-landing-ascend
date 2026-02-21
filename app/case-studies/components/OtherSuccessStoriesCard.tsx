import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { CaseStudy } from "../data";

interface OtherSuccessStoriesCardProps {
  caseStudy: CaseStudy;
  src?: string;
}

const OtherSuccessStoriesCard: React.FC<OtherSuccessStoriesCardProps> = ({
  caseStudy,
  src,
}) => {
  return (
    <div className="overflow-hidden rounded-lg border-2 duration-700 hover:border-primary bg-gradient-to-b from-[#130B39]">
      {!src && (
        <div className="relative flex h-48 w-full items-center justify-center md:h-64">
          <Image
            src={caseStudy.image}
            alt={caseStudy.name}
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
      )}
      <div className="p-4">
        <h2 className={`${!src ? 'text-lg font-semibold md:text-xl line-clamp-1': 'text-lg line-clamp-1 font-bold md:text-xl'}`}>{caseStudy.title}</h2>
        <p className={`mt-2 text-sm text-muted-foreground ${src ? 'line-clamp-1': 'line-clamp-1'} `}>
          {caseStudy.preview}
        </p>

        {src && (
          <p className="my-4 line-clamp-3">
            {caseStudy.intro}
          </p>
        )}

        <div className="mt-4">
          <Link
            href={`/case-studies/${caseStudy.name}/`}
            className="inline-block"
          >
            <Button className="bg-gradient-to-r from-primary to-blue-500 text-white hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 rounded-xl" >Read More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OtherSuccessStoriesCard;

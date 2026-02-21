import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

function CaseStudyCards({ imageSrc, title, description, href }: {imageSrc: string, title: string, description: string, href: string}) {
  return (
    <div className='group mx-auto h-[480px] w-[90%] overflow-hidden rounded-md border bg-white p-2 text-black dark:border-0 dark:bg-secondary dark:text-white'>
      <figure className='relative h-80 w-full overflow-hidden rounded-md bg-[#f0f5fa] p-2 transition-all duration-300 group-hover:h-72 dark:bg-[#0a121a]'>
        <div
          style={{
            background:
              'linear-gradient(123.9deg, #130B39 1.52%, rgba(0, 0, 0, 0) 68.91%)',
          }}
          className='absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 group-hover:opacity-100'
        ></div>
        <Image
          src={imageSrc}
          alt='case study image'
          width={600}
          height={600}
          className='absolute -bottom-1 right-0 h-64 w-[80%] rounded-lg border-4 object-cover transition-all duration-300 group-hover:-bottom-5 group-hover:border-4 group-hover:border-[#76aaf82d]'
        />
      </figure>
      <article className='space-y-2 p-4'>
        <h1 className='text-xl font-semibold capitalize'>{title}</h1>
        <p className='text-base leading-[120%]'>{description}</p>
        <Link
          href={href}
          className='flex translate-y-2 gap-1 pt-2 text-base font-normal text-blue-600 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white'
        >
          Learn about {title}
          <span>
            <ChevronRight />
          </span>
        </Link>
      </article>
    </div>
  );
}

export default CaseStudyCards;

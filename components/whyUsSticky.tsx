import Link from "next/link"

import SectionTitle from "./SectionTitle"
import { Button } from "./ui/button"

function WhyUsSticky({
  title,
  header,
  subHeader,
  CTA,
  section,
}: {
  title: string
  header: string
  subHeader: string
  CTA: string
  section: string
}) {
  return (
    <>
      <div className="flex max-w-xl flex-col gap-10">
        <SectionTitle
          className={`mb-10 mt-0 text-base ${section === "1"
              ? "text-center md:text-end"
              : section === "2"
                ? "text-center tracking-[0.9rem] md:text-start"
                : ""
            }`}
        >
          {title}
        </SectionTitle>
        <h1
          className={`md:text-5x text-3xl font-extrabold ${section === "1"
              ? "text-center md:text-end"
              : section === "2"
                ? "text-center md:text-start"
                : ""
            }`}
        >
          {header}
        </h1>
        <p
          className={`min-h-[90px] max-w-[700px] text-lg text-muted-foreground md:min-h-[110px] lg:min-h-[130px] lg:text-xl ${section === "1"
              ? "text-center md:text-end"
              : section === "2"
                ? "text-center md:text-start"
                : ""
            }`}
        >
          {subHeader}
        </p>
        <Link
          href={`https://cal.com/louis-taborn-yvsqiy/30min`}
          target="_blank"
          className={`flex justify-center ${section === "1" ? "md:justify-end" : "md:justify-start"
            }`}
        >
          <Button
            className={`${section === "1"
                ? "float-right"
                : section === "2"
                  ? "float-left"
                  : ""
              }`}
          >
            {CTA}
          </Button>
        </Link>
      </div>
    </>
  )
}

export default WhyUsSticky

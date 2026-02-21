import { heroTexts } from "./heroSectionTexts"

export default function HeroContent() {
  const { typewriterWords } = heroTexts

  return (
    <div className="flex max-w-[980px] flex-col items-start gap-2">
      <h1 className="h-[100px] md:h-[150px] text-3xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
        {typewriterWords[0]}
      </h1>

      <div className="relative h-[180px] max-w-[700px] md:min-h-[110px] lg:h-[130px]">
        <p className="text-lg text-muted-foreground lg:text-xl">
          {heroTexts.descriptions[0]}
        </p>
      </div>
    </div>
  )
}

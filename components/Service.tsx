import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

interface ServiceProps {
  title: string
  icon: string
  description: string
}

export const Service = ({ title, icon, description }: ServiceProps) => {
  return (
    <div className="cursor-grab">
      <Card className=" flex h-56 w-48 flex-col items-center border-none bg-gradient-to-b from-[#130B39] text-center duration-500 hover:scale-105 hover:duration-300 md:h-64 md:w-52">
        <CardHeader className="relative flex w-full items-center justify-center pb-1">
          <Image
            src={icon}
            alt={title}
            width={64}
            height={64}
            className="absolute -top-8 w-[5rem]"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="md:mt-16 mt-10 text-md md:text-lg font-normal lg:mt-12 lg:text-xl">
            {title}
          </CardTitle>
        </CardContent>
      </Card>
    </div>
  )
}

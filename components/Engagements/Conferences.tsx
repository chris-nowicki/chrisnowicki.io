import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import { Card, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import Image from 'next/image'

export default function Conferences() {
  return (
    <AccordionItem value="Conferences">
      <AccordionTrigger className="text-xl font-bold md:text-2xl">
        Conferences
      </AccordionTrigger>
      <AccordionContent className="flex flex-wrap gap-4">
        {/* THAT Conference */}
        <a
          href="https://thatconference.com/"
          target="_blank"
          className="w-full md:w-[375px]"
        >
          <Card className="w-full transition-all duration-100 ease-in-out hover:border-primary">
            <CardHeader>
              <CardTitle className="flex justify-center">
                <Image
                  src="/images/logos/that.svg"
                  width={125}
                  height={125}
                  alt="THAT Conference Logo"
                />
              </CardTitle>
            </CardHeader>
            <CardFooter className="flex justify-center">
              <div className="flex flex-wrap gap-1">
                <Badge className="rounded-full" variant="secondary">
                  January 2024, TX
                </Badge>
                <Badge className="rounded-full" variant="secondary">
                  July 2024, TX
                </Badge>
              </div>
            </CardFooter>
          </Card>
        </a>

        {/* Render ATL */}
        <a
          href="https://renderatl.com/"
          target="_blank"
          className="w-full md:w-[375px]"
        >
          <Card className="w-full transition-all duration-100 ease-in-out hover:border-primary">
            <CardHeader>
              <CardTitle className="flex flex-col items-center gap-1">
                <Image
                  src="/images/logos/render-atl.svg"
                  width={75}
                  height={75}
                  alt="Render ATL Conference Logo"
                />
                Render ATL
              </CardTitle>
            </CardHeader>
            <CardFooter className="flex justify-center">
              <div className="flex flex-wrap gap-1">
                <Badge className="rounded-full" variant="secondary">
                  June 2023
                </Badge>
                <Badge className="rounded-full" variant="secondary">
                  June 2024
                </Badge>
              </div>
            </CardFooter>
          </Card>
        </a>
      </AccordionContent>
    </AccordionItem>
  )
}

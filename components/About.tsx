import Image from 'next/image'

// icons
import { Linkedin, GitHub, ArrowIcon } from './Icons'

export default function About({ image }: { image: string }) {
    return (
        <div className="mt-0 flex flex-row flex-wrap-reverse justify-center md:mt-10 md:flex-nowrap">
            <div className="flex w-full flex-col items-center text-center text-xl md:mr-6 md:items-start md:text-left">
                <p className="mb-3 md:mt-0 md:text-3xl">
                    Hello, I'm{' '}
                    <span className="text-purple-light dark:text-purple-dark">
                        Chris Nowicki
                    </span>
                    .
                </p>
                <p>
                    I'm a technology nerd who lives on coffee ☕️, is obsessed
                    with cheeseburgers 🍔, and tinkers with new tech on a daily
                    basis.
                </p>
                <p className="mt-4 md:mr-4">
                    I excel at bringing web designs to life and am passionate
                    about backend development.
                </p>
                <p className="mt-4 font-mono text-lg font-bold text-purple-light dark:text-purple-dark md:mr-4">
                    I'm currently looking for a new role as a full-stack
                    engineer.
                </p>
                <div className="flex w-full flex-row justify-center md:justify-start">
                    <a
                        href="http://www.linkedin.com/in/chris-nowicki"
                        className="py-43text-lg mt-8 mr-4 flex items-center gap-2 rounded border border-neutral-200 px-4 hover:bg-neutral-100 dark:border-background-dark dark:hover:bg-background-dark/25"
                        target="_blank"
                    >
                        <Linkedin size={24} />
                        Linkedin <ArrowIcon size={12} />
                    </a>

                    <a
                        href="https://github.com/chris-nowicki"
                        className="mt-8 flex items-center gap-2 rounded border border-neutral-200 px-4 py-3 text-lg hover:bg-neutral-100 dark:border-background-dark dark:hover:bg-background-dark/25"
                        target="_blank"
                    >
                        <GitHub size={24} />
                        GitHub <ArrowIcon size={12} />
                    </a>
                </div>
            </div>

            <div className="flex w-[200px] flex-col sm:mb-4 md:mb-0 md:mt-0 md:w-[400px]">
                <Image
                    className="w-full rounded shadow-lg md:w-auto"
                    width={400}
                    height={400}
                    src={image}
                    alt="chris nowicki"
                    priority
                />
            </div>
        </div>
    )
}

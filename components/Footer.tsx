import { Linkedin, GitHub, Twitter, Instagram, TriangleSharp } from './Icons'

function Footer() {
    return (
        <div className="flex w-full flex-col items-center">
            <footer className="relative mt-16 flex w-full max-w-3xl flex-col items-center justify-center border-t border-gray-300">
                <a
                    href="#home"
                    className="-mb-6 -translate-y-4 text-2xl text-purple-light hover:text-purple-500"
                >
                    <TriangleSharp size={24} />
                </a>

                <div className="mt-4 flex w-full flex-col items-center">
                    <div className="flex items-center gap-2">
                        <a
                            href="http://www.linkedin.com/in/chris-nowicki"
                            className="hover:text-purple-light dark:hover:text-purple-dark"
                            target="_blank"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="https://github.com/chris-nowicki"
                            className="link-animate hover:text-purple-light dark:hover:text-purple-dark"
                            target="_blank"
                        >
                            <GitHub size={24} />
                        </a>
                        <a
                            href="http://www.twitter.com/iamwix"
                            className="link-animate hover:text-purple-light dark:hover:text-purple-dark"
                            target="_blank"
                        >
                            <Twitter size={24} />
                        </a>
                        <a
                            href="http://www.instagram.com/iamwix"
                            className="link-animate hover:text-purple-light dark:hover:text-purple-dark"
                            target="_blank"
                        >
                            <Instagram size={24} />
                        </a>
                    </div>
                    <div className="link-animate text-md mt-2 flex w-full justify-center gap-1 pb-4">
                        made with{' '}
                        <a
                            href="https://nextjs.org/"
                            className="text-purple-light dark:text-purple-dark"
                            target="_blank"
                        >
                            Next.js
                        </a>
                        and{' '}
                        <a
                            href="https://www.sanity.io"
                            className=" text-purple-light dark:text-purple-dark"
                            target="_blank"
                        >
                            Sanity CMS
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer

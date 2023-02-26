export default function Contact({ showProjects }) {
    return (
        <div
            id="contact"
            className={` flex w-full flex-col items-center justify-center rounded ${
                showProjects
                    ? 'mb-16 bg-background-light py-8 text-foreground shadow-lg shadow-background-light/50 dark:bg-background-dark dark:shadow-background-dark/50'
                    : 'text-black dark:text-foreground'
            }   px-16 `}
        >
            <div className="flex flex-col items-center">
                <h1
                    className={`mb-4 text-4xl ${
                        showProjects
                            ? ' text-purple-dark'
                            : 'text-purple-light dark:text-purple-dark'
                    }`}
                >
                    Get In Touch
                </h1>
                <p className="text-center text-lg">
                    I am currently looking for new work. Contact me to say
                    hello, talk about an opportunity, or ask me a question! My
                    inbox is always open.
                </p>
                <a
                    href="mailto:chris@chrisnowicki.io"
                    className={`mt-8 rounded-lg border-2 px-6 py-2 ${
                        showProjects
                            ? 'border-purple-dark  text-purple-dark hover:bg-purple-dark hover:text-foreground'
                            : 'dark:hover:text-foreground`  border-purple-light text-purple-light hover:bg-purple-light hover:text-foreground dark:border-purple-dark dark:text-purple-dark dark:hover:bg-purple-dark'
                    }`}
                >
                    Say Hello
                </a>
                <span className="text-md mt-2 text-foreground">
                    chris@chrisnowicki.io
                </span>
            </div>
        </div>
    )
}

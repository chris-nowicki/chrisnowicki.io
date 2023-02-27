export default function Contact() {
    return (
        <div
            id="contact"
            className="flex w-full flex-col items-center justify-center rounded bg-background-light py-8 px-8 text-foreground shadow-lg shadow-background-light/50 dark:bg-background-dark dark:shadow-background-dark/50 md:px-16"
        >
            <div className="flex flex-col items-center">
                <h1 className="mb-4 text-4xl text-purple-dark">Get In Touch</h1>
                <p className="text-center text-lg">
                    I am currently looking for new work. Contact me to say
                    hello, talk about an opportunity, or ask me a question! My
                    inbox is always open.
                </p>
                <a
                    href="mailto:chris@chrisnowicki.io"
                    className="mt-8 flex flex-col items-center rounded-lg border-2 border-purple-dark px-6 py-2  text-purple-dark hover:bg-purple-dark hover:text-foreground"
                >
                    Say Hello
                </a>
            </div>
        </div>
    )
}

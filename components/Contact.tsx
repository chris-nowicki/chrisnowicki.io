export default function Contact({ showProjects }) {
    return (
        <div
            id="contact"
            className={` flex w-full flex-col items-center justify-center rounded ${
                showProjects
                    ? 'mb-16 bg-bgDark py-8 text-textDark shadow-lg shadow-bgDark/50 dark:bg-gray-900 dark:shadow-gray-900/50'
                    : 'text-black dark:text-textDark'
            }   px-16 `}
        >
            <div className="flex flex-col items-center">
                <h1
                    className={`mb-4 text-4xl ${
                        showProjects
                            ? ' text-purpleDark'
                            : 'text-purple-600 dark:text-purpleDark'
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
                            ? 'border-purpleDark  text-purpleDark hover:bg-purpleDark hover:text-textDark'
                            : 'dark:hover:text-textDark`  border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-textDark dark:border-purpleDark dark:text-purpleDark dark:hover:bg-purpleDark'
                    }`}
                >
                    Say Hello
                </a>
                <span className="text-md text-textDark mt-2">chris@chrisnowicki.io</span>
            </div>
        </div>
    )
}

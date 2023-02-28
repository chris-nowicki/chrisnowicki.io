import Link from 'next/link'

// icons
import { PDF, Download, Linkedin, GitHub, ArrowIcon } from 'components/Icons'

export default function ResumeLink({
    url,
    name,
}: {
    url: string
    name: string
}) {
    return (
        <>
            <Link
                href={`
            ${name === 'pdf' ? `${url}?dl=` : url}
            `}
                className="flex w-full items-center justify-between rounded-md border border-neutral-200 p-4 hover:bg-neutral-100 dark:border-background-dark hover:dark:bg-background-dark/25"
                prefetch={false}
            >
                <div className="flex items-center gap-2">
                    {name === 'pdf' ? (
                        <PDF size={24} />
                    ) : name === 'Linkedin' ? (
                        <Linkedin size={24} />
                    ) : (
                        <GitHub size={24} />
                    )}
                    {name === 'pdf' ? 'Download Resumé' : name}
                </div>
                {name === 'pdf' ? (
                    <Download size={24} />
                ) : (
                    <ArrowIcon size={12} />
                )}
            </Link>
        </>
    )
}

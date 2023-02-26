// icons
import { GitHub, OpenOutline } from '../Icons'

export default function Link({
    url,
    icon,
    name,
}: {
    url: string
    icon: string
    name: string
}) {
    return (
        <>
            <a
                href={url}
                className="hover:bg-purple-60 flex w-1/3 items-center justify-center rounded border border-purple-dark p-1 text-foreground hover:bg-purple-dark md:w-1/2"
                target="_blank"
            >
                {icon == 'github' ? (
                    <GitHub size={16} />
                ) : (
                    <OpenOutline size={16} />
                )}
                <span className="text-md ml-2">{name}</span>
            </a>
        </>
    )
}

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
                className="hover:bg-purple-60 flex w-1/3 items-center justify-center rounded border border-purpleDark p-1 text-textDark hover:bg-purpleDark md:w-1/2"
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

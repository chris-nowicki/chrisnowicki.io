// icons
import { GitHub, OpenOutline } from '../../components/Icons'

export default function Link({
    url,
    icon,
    name,
    liveSiteUrl,
}: {
    url: string
    icon: string
    name: string
    liveSiteUrl: boolean
}) {
    return (
        <>
            <a
                href={url}
                className={`hover:bg-activeColor-dark/85 flex ${
                    liveSiteUrl ? 'w-1/2' : 'w-full'
                } cursor-pointer items-center justify-center border  border-borderColor-dark p-2 text-foreground hover:text-purple-dark md:bg-background-dark  md:p-0`}
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

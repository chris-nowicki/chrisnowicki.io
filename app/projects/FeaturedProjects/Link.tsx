// icons
import { GitHub, OpenOutline } from '../../../components/Icons'

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
                className={`hover:bg-activeColor-dark/85 flex ${liveSiteUrl ? 'w-1/2' : 'w-full'} cursor-pointer items-center p-2 md:p-0  justify-center border border-borderColor-dark md:bg-background-dark text-foreground  hover:text-purple-dark`}
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

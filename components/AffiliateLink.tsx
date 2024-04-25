interface Props {
  href: string
  name: string
}

export default function AffiliateLink({ href, name }: Props) {
  return (
    <a
      href={href}
      className="mb-2 flex items-center hover:underline"
      target="_blank"
    >
      {name}
    </a>
  )
}

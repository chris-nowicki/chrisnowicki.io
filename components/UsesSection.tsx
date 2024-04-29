interface Props {
  name: string
  items: {
    name: string
    url: string
  }[]
}

export default function UsesSection({ name, items }: Props) {
  return (
    <div className="mt-8 flex w-full flex-col">
      <h2 className="rounded-lg border p-2 font-semibold">{name}</h2>
      <ul className="my-0">
        {items.map((item, i) => (
          <li key={i}>
            <a
              href={item.url}
              className="mb-1 flex items-center decoration-primary hover:underline hover:underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

import About from '../components/About'

// sanity.io client & query
import { getImage } from '../lib/sanity'

export default async function Home() {
    const imageData = getImage()

    const [chrisnowicki] = await Promise.all([imageData])

    return (
        <div className="px-10 md:px-0">
            <About image={chrisnowicki} />
        </div>
    )
}

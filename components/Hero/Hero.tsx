import SocialMetrics from '../SocialMetrics/SocialMetrics'
import Intro from './Intro'

export default async function Hero() {
  return (
    <div className="mt-28 flex flex-col items-center gap-y-32">
      <Intro />
      <SocialMetrics />
    </div>
  )
}

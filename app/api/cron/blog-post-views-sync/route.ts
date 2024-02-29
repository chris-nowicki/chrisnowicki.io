import { NextRequest, NextResponse } from 'next/server'
import { getArticles } from '@/lib/devto'
import { getStoredPostViews, updatePostViews } from '@/lib/planetscale'

// Force dynamic (server) route instead of static page
export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  // make sure the request is coming from vercel
  const authToken = (req.headers.get('authorization') || '')
    .split('Bearer ')
    .at(1)

  if (!authToken || authToken != process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // get list of articles from Dev.TO
  const articles = await getArticles()
  let postViewCount: number = 0

  // parse through for page_views_count
  if (articles.length > 0) {
    articles.map((article) => {
      postViewCount += article.page_views_count
    })
  }

  // get current stored post views from the database
  const storedPostViews = await getStoredPostViews()

  // if the stored post views do not equal views from dev.to then update the database
  if (storedPostViews === postViewCount) {
    return NextResponse.json(
      `(no change) totalPostViews: ${storedPostViews}, storedViews: ${storedPostViews}`,
      {
        status: 208,
      }
    )
  } else {
    updatePostViews(postViewCount)
    return NextResponse.json(`(updated) totalPostViews: ${postViewCount}`, {
      status: 200,
    })
  }
}

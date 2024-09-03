import { NextRequest, NextResponse } from 'next/server'
import { env } from './env'

export function middleware(req: NextRequest) {
  const authToken = (req.headers.get('authorization') || '')
    .split('Bearer ')
    .at(1)

  if (!authToken || authToken != env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
}

export const config = {
  matcher: ['/api/cron/:path*'],
}

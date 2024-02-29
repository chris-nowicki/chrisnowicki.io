import { cronAuth } from '@/utils/cronAuth'
import { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  return cronAuth(req)
}

export const config = {
  matcher: ['/api/cron/:path*'],
}

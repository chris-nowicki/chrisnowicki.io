import { NextRequest, NextResponse } from 'next/server'
import { env } from '../env'

export async function cronAuth(req: NextRequest) {
  const authToken = (req.headers.get('authorization') || '')
    .split('Bearer ')
    .at(1)

  if (!authToken || authToken != env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return
}

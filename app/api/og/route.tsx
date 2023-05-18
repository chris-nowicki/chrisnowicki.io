import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import { NEXTJS, TAILWIND, SANITY, VERCEL } from '@/components/Icons'

// types
import { env } from '@/types/env-private'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const pageDescription: string =
    searchParams.get('description') || 'This is a description'

  const url =
    env.NODE_ENV === 'production'
      ? 'https://chrisnowicki.io'
      : 'http://localhost:3000'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundImage: `url(${url}/og.png)`,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
            height: '628px',
            fontSize: 110,
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: 'white',
            whiteSpace: 'pre-wrap',
            padding: '0 91px 0 91px',
          }}
        >
          {pageDescription}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            position: 'absolute',
            bottom: 85,
            right: 91,
            borderRadius: 5,
            padding: '10px 20px',
          }}
        >
          <NEXTJS />
          <span
            style={{
              backgroundColor: 'white',
              borderRadius: 50,
              padding: '10px',
            }}
          >
            <TAILWIND />
          </span>
          <SANITY />
          <VERCEL />
        </div>
      </div>
    ),
    {
      width: 1820,
      height: 904,
    }
  )
}

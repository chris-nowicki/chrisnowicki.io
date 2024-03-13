import { envVariables } from '@/new-types'
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'
const environment = process.env.NODE_ENV

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const pageDescription: string =
    searchParams.get('description') || 'This is a description'
  const title: string = searchParams.get('page') || 'Page'

  const baseUrl =
    environment === 'development' ?
      'http://localhost:3000'
    : 'https://chrisnowicki.io'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundImage: `url(${baseUrl}/og.png)`,
        }}
      >
        <div
          style={{
            padding: '40px 0 0 91px',
            color: 'white',
            fontSize: 175,
          }}
        >
          {`/${title}`}
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
            fontSize: 110,
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: 'white',
            whiteSpace: 'pre-wrap',
            padding: '0 0 0 91px',
          }}
        >
          {pageDescription}
        </div>
      </div>
    ),
    {
      width: 1820,
      height: 904,
    }
  )
}

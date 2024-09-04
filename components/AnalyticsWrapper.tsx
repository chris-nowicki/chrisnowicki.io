'use client'
import { FC } from 'react'
import { Analytics } from '@vercel/analytics/react'

const AnalyticsWrapper: FC = (): JSX.Element => {
  return <Analytics />
}

export default AnalyticsWrapper

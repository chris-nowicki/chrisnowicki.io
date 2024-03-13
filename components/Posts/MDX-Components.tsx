'use server'
import Image from 'next/image'
import * as runtime from 'react/jsx-runtime'
import Tweet from '../Tweet-Component'

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

const components = {
  Image,
  Tweet,
}

interface MdxProps {
  code: string
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}

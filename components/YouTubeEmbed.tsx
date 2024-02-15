import React from 'react'

interface YouTubeEmbedProps {
  embedId: string
}

export default function YouTubeEmbed({ embedId }: YouTubeEmbedProps) {
  return (
    <div className="relative mt-4 h-0 overflow-hidden pb-[56.25%] ">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="absolute left-0 top-0 h-full w-full border-none"
        allowFullScreen
      />
    </div>
  )
}

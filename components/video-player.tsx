"use client"

import { useState } from "react"
import Image from "next/image"
import videBg from "../public/img/backgrounds/about-video.png"

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  if (isPlaying) {
    return (
      <div className="relative w-full max-w-9xl mx-auto overflow-hidden rounded-2xl">
        <iframe
          className="w-full aspect-video rounded-2xl"
          src="https://www.youtube.com/embed/clpPuh0QFxc?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-9xl mx-auto overflow-hidden rounded-2xl" id="video-container">
      <Image
        src={videBg}
        alt="Printing video preview"
        width={1200}
        height={675}
        className="w-full h-auto object-cover"
      />
      <button
        onClick={handlePlayClick}
        className="absolute inset-0 flex items-center justify-center hover:scale-105 transition-transform"
      >
        <svg
          className="w-20 h-20 text-white opacity-90 hover:opacity-100 transition duration-200"
          fill="currentColor"
          viewBox="0 0 84 84"
        >
          <circle cx="42" cy="42" r="42" fill="#ffffffcc" />
          <polygon fill="#000" points="33,27 60,42 33,57" />
        </svg>
      </button>
    </div>
  )
}

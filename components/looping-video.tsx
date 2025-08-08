'use client'

import { useRef, useEffect } from 'react'

export function LoopingVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    // Try to ensure autoplay on some browsers
    const tryPlay = async () => {
      try {
        if (v.paused) {
          await v.play().catch(() => {})
        }
      } catch {}
    }
    tryPlay()
  }, [])

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <video
          ref={videoRef}
          className="w-full rounded-2xl shadow-xl border-2 border-festival-yellow-400"
          src="/sister_video.mp4"
          loop
          autoPlay
          muted
          playsInline
          controls={false}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}


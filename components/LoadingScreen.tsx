"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 10
        return newProgress >= 100 ? 100 : newProgress
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-gradient-to-b from-black to-blue-950/30 loading-screen">
      <div className="w-full max-w-md px-8 py-12 flex flex-col items-center backdrop-blur-lg bg-black/30 rounded-2xl border border-gray-800/50 shadow-2xl">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Hector Miranda</h1>
        <h2 className="text-xl text-blue-400 mb-12 font-light">Software Engineer & Solutions Architect</h2>
        
        <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden mb-3">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="text-white mb-8 text-sm font-mono">{Math.round(progress)}%</p>
        <p className="text-gray-400 animate-pulse text-sm">Initializing 3D Experience</p>
      </div>
    </div>
  )
}

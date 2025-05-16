import Experience from "@/components/Experience"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Hector Miranda | 3D Interactive Portfolio",
  description: "Interactive 3D portfolio showcasing Hector Miranda's experience as a software engineer and solutions architect"
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-black">
      <Experience />
    </main>
  )
}

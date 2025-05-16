"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education & Achievements" },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90' : 'bg-black/70'} backdrop-blur-lg border-b ${scrolled ? 'border-gray-800' : 'border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent font-bold text-xl">Hector Miranda</h1>
            <p className="text-gray-400 text-xs">Software Engineer & Solutions Architect</p>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => onSectionChange(section.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-blue-900/30 text-blue-300 border border-blue-800/50"
                      : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none transition-colors"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out transform ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 border-t border-gray-800">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                onSectionChange(section.id)
                setMobileMenuOpen(false)
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                activeSection === section.id
                  ? "bg-blue-900/30 text-blue-300 border border-blue-800/50"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

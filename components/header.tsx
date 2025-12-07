"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Music } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-foreground/10 bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Music className="w-6 h-6" />
            <span className="font-bold text-xl">AUDIODIGITAL</span>
          </Link>

          {/* Mobile menu button */}
          <div className="flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:opacity-70 transition-opacity">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

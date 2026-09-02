'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-[#8B1538] text-white text-sm py-3 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex flex-col sm:flex-row gap-3 text-xs items-center sm:items-start">
            <a href="mailto:nazmalize@gmail.com" className="flex items-center gap-1 hover:text-[#D4AF37]">
              📧 nazmalize@gmail.com
            </a>
            <span className="flex items-center gap-1">📞 +880 1855687030</span>
            <span className="flex items-center gap-1">📍 High School Road (Oppsite of Tanvir Store), Malatinagar,  Bogura, Bangladesh</span>
          </div>
          <div className="flex gap-3 items-center">
            <a href="https://www.facebook.com/share/1CPzsChGPc/" className="hover:text-[#D4AF37]">FB</a>
            <a href="https://www.facebook.com/share/1CPzsChGPc/" className="hover:text-[#D4AF37]">TW</a>
            <a href="https://www.facebook.com/share/1CPzsChGPc/" className="hover:text-[#D4AF37]">LN</a>
            <a href="https://www.facebook.com/share/1CPzsChGPc/" className="hover:text-[#D4AF37]">YT</a>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white border-b-2 border-[#8B1538]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-playfair">
            <div className="w-12 h-12 bg-[#8B1538] rounded-full flex items-center justify-center text-white font-bold text-lg">
              B
            </div>
            <div>
              <div className="font-bold text-[#8B1538] text-lg">BWCCI</div>
              <div className="text-[#D4AF37] text-xs font-semibold">BOGURA WOMEN CHAMBER OF COMMERCE & INDUSTRY</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex md:flex-wrap gap-4 font-semibold items-center">
            <Link href="/" className="text-[#2D2D2D] hover:text-[#8B1538] transition">Home</Link>
            {/* About Dropdown */}
            <div className="relative group">
              <button aria-haspopup="true" aria-expanded="false" className="text-[#8B1538] hover:text-[#D4AF37] transition flex items-center gap-1">
                About Us
                <span>▼</span>
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border-2 border-[#8B1538] rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-50">
                <Link href="/about" className="block px-4 py-3 text-[#2D2D2D] hover:bg-[#F5F5F5]">Brief History &amp; Profile</Link>
                <Link href="/president-message" className="block px-4 py-3 text-[#2D2D2D] hover:bg-[#F5F5F5]">President&apos;s Message</Link>
                <Link href="/secretariat" className="block px-4 py-3 text-[#2D2D2D] hover:bg-[#F5F5F5]">Secretariat Wings</Link>
                <Link href="/board-directors" className="block px-4 py-3 text-[#2D2D2D] hover:bg-[#F5F5F5]">Board of Directors</Link>
              </div>
            </div>

            <Link href="/services" className="text-[#2D2D2D] hover:text-[#8B1538] transition">Services</Link>
            <Link href="" className="text-[#2D2D2D] hover:text-[#8B1538] transition"></Link>
            <Link href="/membership" className="text-[#2D2D2D] hover:text-[#8B1538] transition">Membership</Link>
            <Link href="/events" className="text-[#2D2D2D] hover:text-[#8B1538] transition">Events</Link>
            <Link href="/gallery" className="text-[#2D2D2D] hover:text-[#8B1538] transition">Gallery</Link>
            <Link href="/notice-board" className="text-[#2D2D2D] hover:text-[#8B1538] transition">Notice Board</Link>
            <Link href="/resources" className="text-[#2D2D2D] hover:text-[#8B1538] transition">Resources</Link>
            <Link href="/contact" className="text-[#2D2D2D] hover:text-[#8B1538] transition">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#8B1538] text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t-2 border-[#8B1538] p-4 space-y-3">
            <Link href="/" className="block text-[#2D2D2D] hover:text-[#8B1538]">Home</Link>
            <Link href="/about" className="block text-[#2D2D2D] hover:text-[#8B1538]">Brief History</Link>
            <Link href="/president-message" className="block text-[#2D2D2D] hover:text-[#8B1538]">President&apos;s Message</Link>
            <Link href="/secretariat" className="block text-[#2D2D2D] hover:text-[#8B1538]">Secretariat Wings</Link>
            <Link href="/board-directors" className="block text-[#2D2D2D] hover:text-[#8B1538]">Board of Directors</Link>
            <Link href="/services" className="block text-[#2D2D2D] hover:text-[#8B1538]">Services</Link>
            <Link href="" className="block text-[#2D2D2D] hover:text-[#8B1538]"></Link>
            <Link href="/membership" className="block text-[#2D2D2D] hover:text-[#8B1538]">Membership</Link>
            <Link href="/events" className="block text-[#2D2D2D] hover:text-[#8B1538]">Events</Link>
            <Link href="/gallery" className="block text-[#2D2D2D] hover:text-[#8B1538]">Gallery</Link>
            <Link href="/notice-board" className="block text-[#2D2D2D] hover:text-[#8B1538]">Notice Board</Link>
            <Link href="/resources" className="block text-[#2D2D2D] hover:text-[#8B1538]">Resources</Link>
            <Link href="/contact" className="block text-[#2D2D2D] hover:text-[#8B1538]">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  )
}
import { useState, useEffect } from 'react'
import { navLinks, authorInfo } from '../data'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      const sections = navLinks.map(link => link.href.replace('#', ''))
      const scrollPosition = window.scrollY + 100
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      setIsMobileMenuOpen(false)
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-[#0B0B0B]/98 backdrop-blur-xl border-b border-[#8B0000]/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group">
            <span className="text-xl font-cinzel font-bold tracking-[0.3em] text-[#D9D9D9] group-hover:text-[#8B0000] transition-colors duration-500">
              {authorInfo.name.toUpperCase()}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs tracking-[0.2em] uppercase transition-all duration-500 relative py-2 font-montserrat font-medium ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[#D9D9D9]'
                    : 'text-[#D9D9D9]/50 hover:text-[#D9D9D9]/80'
                }`}
              >
                {link.name}
                {activeSection === link.href.replace('#', '') && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B0000] to-transparent"></span>
                )}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-4 px-8 py-3 border border-[#8B0000]/50 text-[#D9D9D9] text-xs tracking-[0.2em] uppercase hover:bg-[#8B0000]/10 hover:border-[#8B0000] transition-all duration-500 font-montserrat font-medium"
            >
              Get the Book
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#D9D9D9] hover:text-[#8B0000] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-[#1C1C1C]/98 backdrop-blur-xl border border-[#8B0000]/10 mt-2 p-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-4 py-3 text-xs tracking-[0.2em] uppercase transition-colors font-montserrat ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[#D9D9D9] bg-[#8B0000]/10'
                    : 'text-[#D9D9D9]/50 hover:text-[#D9D9D9] hover:bg-[#8B0000]/5'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block mt-3 px-4 py-3 border border-[#8B0000]/50 text-[#D9D9D9] text-center text-xs tracking-[0.2em] uppercase hover:bg-[#8B0000]/10 transition-all font-montserrat"
            >
              Get the Book
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
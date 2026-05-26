import { authorInfo, navLinks } from '../data'

export default function Footer() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-[#0B0B0B]">
      {/* Launch Portal */}
      <div className="border-y border-[#D9D9D9]/5">
        <div className="max-w-7xl mx-auto px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="text-[#D9D9D9]/60 text-xs tracking-[0.2em] uppercase font-montserrat font-medium">Ready to Publish?</p>
              <p className="text-[#D9D9D9]/20 text-xs mt-2 font-montserrat">Access the go-live portal for your book</p>
            </div>
            <a
              href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-[#0B0B0B] font-bold text-sm hover:from-yellow-300 hover:via-yellow-200 hover:to-yellow-400 transition-all overflow-hidden font-montserrat"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Launch & Go-Live Portal
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="text-xl font-cinzel font-bold tracking-[0.2em] text-[#D9D9D9]/60 mb-4">{authorInfo.name}</p>
            <p className="text-[#D9D9D9]/20 text-xs leading-relaxed font-montserrat">
              Award-winning author of "Seduced" — A story of courage, revelation, and love.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[#D9D9D9]/30 text-xs tracking-[0.2em] uppercase mb-6 font-montserrat font-medium">Navigation</p>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-[#D9D9D9]/20 text-xs tracking-wider hover:text-[#8B0000] transition-colors duration-500 font-montserrat"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[#D9D9D9]/30 text-xs tracking-[0.2em] uppercase mb-6 font-montserrat font-medium">Contact</p>
            <a
              href={`mailto:${authorInfo.email}`}
              className="text-[#D9D9D9]/20 text-xs hover:text-[#8B0000] transition-colors duration-500 font-montserrat flex items-center gap-2"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              {authorInfo.email}
            </a>
          </div>
        </div>

        <div className="border-t border-[#D9D9D9]/5 mt-16 pt-8 text-center">
          <p className="text-[#D9D9D9]/10 text-[10px] tracking-[0.2em] uppercase font-montserrat">
            &copy; {new Date().getFullYear()} {authorInfo.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
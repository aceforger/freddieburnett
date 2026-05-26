import { authorInfo, book } from '../data'

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center bg-[#0B0B0B] relative overflow-hidden cinematic-grain">
      {/* Cinematic lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#8B0000]/8 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8B0000]/5 rounded-full blur-[100px]"></div>
      
      {/* Spotlight effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-[#8B0000]/3 to-transparent rounded-full blur-3xl"></div>

      {/* Thin vertical lines - cinematic letterbox feel */}
      <div className="absolute inset-0 flex justify-center gap-32 opacity-[0.03]">
        <div className="w-px h-full bg-[#D9D9D9]"></div>
        <div className="w-px h-full bg-[#D9D9D9]"></div>
        <div className="w-px h-full bg-[#D9D9D9]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left animate-fade-up">
            <div className="inline-block mb-10">
              <span className="text-[#8B0000] text-xs tracking-[0.4em] uppercase font-montserrat font-medium">
                Award-Winning Novel
              </span>
            </div>

            <h1 className="text-7xl md:text-8xl lg:text-9xl font-cormorant font-bold italic text-[#F5F5F5] mb-8 leading-[0.9] tracking-tight">
              {book.title}
            </h1>

            <div className="w-32 h-[1px] bg-gradient-to-r from-[#8B0000] to-transparent mb-10 mx-auto md:mx-0"></div>

            <p className="text-lg text-[#D9D9D9]/50 mb-8 font-cormorant italic font-light leading-relaxed max-w-md mx-auto md:mx-0">
              "{book.shortDescription}"
            </p>

            <p className="text-sm text-[#D9D9D9]/40 mb-12 font-montserrat tracking-[0.15em] uppercase">
              {authorInfo.name}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <a
                href="#book"
                onClick={(e) => handleScroll(e, '#book')}
                className="px-10 py-4 border border-[#8B0000] text-[#D9D9D9] text-xs tracking-[0.2em] uppercase hover:bg-[#8B0000]/10 transition-all duration-500 font-montserrat font-medium text-center"
              >
                Discover the Story
              </a>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, '#about')}
                className="px-10 py-4 border border-[#D9D9D9]/10 text-[#D9D9D9]/50 text-xs tracking-[0.2em] uppercase hover:border-[#D9D9D9]/30 hover:text-[#D9D9D9]/80 transition-all duration-500 font-montserrat font-medium text-center"
              >
                About the Author
              </a>
            </div>
          </div>

          {/* Book Cover */}
          <div className="relative mx-auto max-w-sm">
            {/* Dramatic shadow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-[#8B0000]/40 to-transparent blur-2xl"></div>
            
            {/* Book with cinematic border */}
            <div className="relative border border-[#D9D9D9]/10 shadow-2xl">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B0000]/60 to-transparent"></div>
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B0000]/40 to-transparent"></div>
              
              <div className="aspect-[3/4] bg-[#1C1C1C]">
                <img
                  src="/images/seduce.jpg"
                  alt={book.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                    e.target.parentElement.innerHTML = `
                      <div class="text-center p-12">
                        <p class="text-8xl font-cormorant font-bold italic text-[#D9D9D9]/20 mb-6">S</p>
                        <p class="text-[#D9D9D9]/40 font-cormorant text-xl italic">${book.title}</p>
                        <div class="w-12 h-[1px] bg-[#8B0000]/40 mx-auto mt-4"></div>
                        <p class="text-[#D9D9D9]/20 text-xs tracking-wider uppercase mt-4 font-montserrat">Cover Coming Soon</p>
                      </div>
                    `
                  }}
                />
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 text-[#8B0000]/60">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
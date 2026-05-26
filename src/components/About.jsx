import { authorInfo } from '../data'

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#1C1C1C] relative overflow-hidden cinematic-grain">
      {/* Subtle red glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#8B0000]/5 rounded-full blur-[150px]"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-20 items-start">
          {/* Left */}
          <div className="md:col-span-5">
            <span className="text-[#8B0000] text-xs tracking-[0.4em] uppercase font-montserrat font-medium">
              The Author
            </span>
            <h2 className="text-5xl md:text-6xl font-cormorant font-bold text-[#F5F5F5] mt-6 mb-10 leading-tight">
              {authorInfo.name}
            </h2>

            {/* Profile image with cinematic frame */}
            <div className="relative max-w-sm">
              <div className="aspect-[3/4] border border-[#D9D9D9]/10 overflow-hidden">
                <img
                  src="/images/profile.png"
                  alt={authorInfo.name}
                  className="w-full h-full object-cover grayscale"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('bg-[#0B0B0B]', 'flex', 'items-center', 'justify-center')
                    e.target.parentElement.innerHTML = `
                      <div class="text-center p-12">
                        <p class="text-6xl font-cormorant font-bold text-[#D9D9D9]/20 mb-4">FB</p>
                        <p class="text-[#D9D9D9]/40 font-montserrat text-xs tracking-wider uppercase">Author Photo</p>
                      </div>
                    `
                  }}
                />
              </div>
              <div className="mt-6">
                <p className="text-[#D9D9D9]/60 text-xs tracking-[0.15em] uppercase font-montserrat">{authorInfo.location}</p>
                <p className="text-[#D9D9D9]/30 text-xs mt-2 font-montserrat">{authorInfo.hometown}</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="md:col-span-7 space-y-12">
            <p className="text-[#D9D9D9]/60 text-base leading-relaxed font-cormorant font-light text-lg">
              {authorInfo.bio}
            </p>

            {/* Accolades */}
            <div className="space-y-4">
              <span className="text-[#8B0000] text-xs tracking-[0.3em] uppercase font-montserrat font-medium">Honors & Awards</span>
              <div className="grid sm:grid-cols-2 gap-3">
                {authorInfo.accolades.map((award, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border border-[#D9D9D9]/5 hover:border-[#8B0000]/20 transition-all duration-500">
                    <span className="text-[#8B0000] text-lg font-cormorant font-bold">{String(index + 1).padStart(2, '0')}</span>
                    <p className="text-[#D9D9D9]/40 text-xs leading-relaxed font-montserrat tracking-wide">{award}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="border-l border-[#8B0000]/30 pl-8 py-2">
              <p className="text-[#8B0000] text-xs tracking-[0.2em] uppercase mb-3 font-montserrat font-medium">Education</p>
              <p className="text-[#D9D9D9]/50 text-sm font-cormorant font-light italic">{authorInfo.education}</p>
            </div>

            <a
              href={`mailto:${authorInfo.email}`}
              className="inline-block px-10 py-4 border border-[#8B0000]/50 text-[#D9D9D9] text-xs tracking-[0.2em] uppercase hover:bg-[#8B0000]/10 hover:border-[#8B0000] transition-all duration-500 font-montserrat font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
import { book } from '../data'

export default function BookDetail() {
  return (
    <section id="book" className="py-32 bg-[#0B0B0B] relative overflow-hidden cinematic-grain">
      {/* Dramatic side lighting */}
      <div className="absolute left-0 top-0 bottom-0 w-[400px] bg-gradient-to-r from-[#8B0000]/8 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-20 items-center">
          {/* Book Cover */}
          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#8B0000]/30 to-transparent blur-2xl"></div>
              <div className="relative border border-[#D9D9D9]/10 shadow-2xl">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B0000]/60 to-transparent"></div>
                <div className="aspect-[3/4] bg-[#1C1C1C]">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                      e.target.parentElement.innerHTML = `
                        <div class="text-center p-12">
                          <p class="text-8xl font-cormorant font-bold italic text-[#D9D9D9]/20 mb-6">S</p>
                          <p class="text-[#D9D9D9]/40 font-cormorant text-xl italic">${book.title}</p>
                        </div>
                      `
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="md:col-span-7">
            <span className="text-[#8B0000] text-xs tracking-[0.4em] uppercase font-montserrat font-medium">The Novel</span>
            <h2 className="text-6xl md:text-7xl font-cormorant font-bold italic text-[#F5F5F5] mt-6 mb-6 leading-none">
              {book.title}
            </h2>
            <p className="text-xl text-[#D9D9D9]/40 font-cormorant italic font-light mb-8">
              "{book.tagline}"
            </p>
            <div className="w-24 h-[1px] bg-[#8B0000] mb-10"></div>

            <div className="text-[#D9D9D9]/50 text-sm leading-relaxed font-montserrat font-light space-y-4 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
              {book.description.split('. ').map((sentence, i) => (
                <p key={i}>{sentence}.</p>
              ))}
            </div>

            <div className="flex gap-4 mt-10">
              <div className="border border-[#D9D9D9]/10 px-6 py-4">
                <p className="text-[#8B0000] text-xs tracking-wider uppercase font-montserrat font-medium">Genre</p>
                <p className="text-[#D9D9D9]/40 text-xs mt-2 font-montserrat">Literary Fiction</p>
              </div>
              <div className="border border-[#D9D9D9]/10 px-6 py-4">
                <p className="text-[#8B0000] text-xs tracking-wider uppercase font-montserrat font-medium">Themes</p>
                <p className="text-[#D9D9D9]/40 text-xs mt-2 font-montserrat">Redemption · Love · Forgiveness</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block mt-10 px-10 py-4 border border-[#8B0000] text-[#D9D9D9] text-xs tracking-[0.2em] uppercase hover:bg-[#8B0000]/10 transition-all duration-500 font-montserrat font-medium"
            >
              Order This Book
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
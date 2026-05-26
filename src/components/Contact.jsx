import { contactInfo, authorInfo } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#1C1C1C] relative overflow-hidden cinematic-grain">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#8B0000]/5 rounded-full blur-[150px]"></div>

      <div className="max-w-3xl mx-auto px-8 text-center relative z-10">
        <span className="text-[#8B0000] text-xs tracking-[0.4em] uppercase font-montserrat font-medium">Contact</span>
        <h2 className="text-5xl md:text-6xl font-cormorant font-bold text-[#F5F5F5] mt-6 mb-8">
          Get the Book
        </h2>
        
        <div className="w-16 h-[1px] bg-[#8B0000]/60 mx-auto mb-10"></div>
        
        <p className="text-[#D9D9D9]/40 text-sm leading-relaxed max-w-md mx-auto mb-16 font-montserrat font-light">
          Contact {authorInfo.firstName} directly for signed copies, speaking engagements, or to share your thoughts on Seduced.
        </p>

        <div className="inline-block border border-[#D9D9D9]/5 p-12">
          <p className="text-6xl font-cormorant font-bold italic text-[#D9D9D9]/10 mb-8">S</p>
          
          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center gap-3 px-12 py-5 border border-[#8B0000]/50 text-[#D9D9D9] text-xs tracking-[0.15em] uppercase hover:bg-[#8B0000]/10 hover:border-[#8B0000] transition-all duration-500 font-montserrat font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            {contactInfo.email}
          </a>
        </div>
      </div>
    </section>
  )
}
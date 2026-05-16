import PageFooter from "@/components/PageFooter";

export default function About() {
  const noiseUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/bg-noise_e533a6c1.png";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[auto] md:min-h-[auto] flex items-center justify-start bg-black overflow-hidden py-2 md:py-3">
        <div className="absolute inset-0 w-full h-full bg-black z-0" />
        <div
          className="absolute inset-0 w-full h-full z-5"
          style={{
            backgroundImage: `url('${noiseUrl}')`,
            backgroundSize: 'auto',
            backgroundRepeat: 'repeat',
            opacity: 0.3,
          }}
        />
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 md:py-3">
            <div style={{marginLeft: '10px', paddingTop: '20px', paddingBottom: '20px'}}>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{fontFamily: "'Special Elite', serif", letterSpacing: '0.02em'}}>
                /// AB0UT
              </h1>
              <p className="text-white text-base md:text-lg leading-relaxed" style={{fontFamily: "'Inconsolata', monospace", maxWidth: '750px'}}>
                Current deets & a little history
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section with Distressed Background */}
      <section
        className="relative w-full py-6 md:py-8"
        style={{
          backgroundImage: `url('${noiseUrl}')`,
          backgroundColor: '#f9f9f9',
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* About the Studio - Two Column */}
          <div className="mb-12">
            <h2 className="text-lg md:text-xl font-bold mb-8" style={{fontFamily: "'Special Elite', serif", letterSpacing: '0.15em'}}>
              /// ABOUT THE STUDIO
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-3 text-sm md:text-base text-gray-900" style={{fontFamily: "'Inconsolata', monospace", marginTop: '-20px'}}>
                <p>
                  Located in Cottage Grove, 20min south of Eugene, Oregon, National Freedom is more than an incredible place to record; it's a place to clear out the urban claptrap, take a bucolic walk in nearby nature, and even enjoy the charm of a small town Main Street——a short walk from the studio.
                </p>
                
                <p className="font-bold mb-1">RATES</p>
                <p style={{marginTop: '-6px'}}>Rates are currently set on project by project basis. We need to cover costs, of course, but we also understand everyone is at a different place in their career.</p>
                
                <p className="font-bold mb-1">LODGING</p>
                <p style={{marginTop: '-6px'}}>Yep, we're off the beaten path. We're happy to work with you on lodging options while you're here.</p>
                
                <p className="font-bold mb-1">HISTORY</p>
                <p>
                  The first National Freedom was tucked inside the utility room of a Fullerton, California 1940s bungalow. When that iMac and a bit of gear moved to Cottage Grove in 2005 with Richard Swift and his family, Christopher Colbert moved from Nashville and he and Swift got to work. Built inside an existing studio space, National Freedom has gone through many incarnations and arrangements——for a time it used only the big room. Over a decade and a half in the making, the studio is now an incredible sonic-lab + art-show + super-vibey space that is beloved by all who've recorded there.
                </p>
              </div>

              {/* Right Column - Darker Background */}
              <div className="px-4 md:px-8 py-2 md:py-4 space-y-4 text-sm md:text-base text-gray-900 mb-0 mt-0" style={{fontFamily: "'Inconsolata', monospace", backgroundColor: 'rgba(150, 150, 150, 0.25)'}}> 
                <h3 className="text-lg md:text-xl font-bold mb-4" style={{fontFamily: "'Special Elite', serif", letterSpacing: '0.15em', color: '#000'}}>/// HOUSE ENGINEER</h3>
                <h3 className="text-lg md:text-xl font-bold mb-4" style={{fontFamily: "'Special Elite', serif", letterSpacing: '0.15em', color: '#000'}}>/// Christopher Colbert</h3>
                <p>
                  House engineer Christopher Colbert is a forty-year veteran of live sound, studio recording, and mastering. He's worked alongside some of the biz's legendary engineers in studios around the world, mixed television performances for 120 Minutes, every late night talk show, and has a long list of FOH gigs——from Leon Bridges to The Walkmen to Mazzy Star and made or assisted on recordings for Pedro the Lion, Richard Swift, Mineral, Sixpence None the Richer, Elf Power, Nathaniel Rateliff, and countless more.
                </p>
                <p>
                  He keeps all the tech, machines, instruments, and do-dads up to snuff and is always available to fix/cajole/prob-solve when needed. He can also be added to the studio fee if you'd like him there as your engineer.
                </p>
                <p>
                  Like all classic engineers, he's a little grumpy, sharply funny, suffers no fools, and makes a finished jam sound amazing.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-gray-300 my-2" />

          {/* Richard Swift Tribute - Black Box with Background Image */}
          <div className="bg-black text-white p-8 md:p-12 mb-12 mt-4 relative" style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="2" /></filter><rect width="100" height="100" fill="%23000000" /><rect width="100" height="100" fill="%23ffffff" opacity="0.02" filter="url(%23noise)" /></svg>')`,
            backgroundSize: '100px 100px'
          }}>
            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-bold mb-6" style={{fontFamily: "'Special Elite', serif", letterSpacing: '0.15em'}}>
                /// A NOTE ABOUT SWIFT
              </h3>
              
              {/* Photo and Caption */}
              <div className="mb-8">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/swift-dj(2)_67bd3622.jpg" alt="Richard Swift and Damien Jurado" className="w-full mb-3" />
                <p className="text-xs" style={{fontFamily: "'Inconsolata', monospace"}}>/// Damien Jurado & R. Swift — Photo: Sarah Jurado</p>
              </div>
            
            <div className="space-y-4 text-sm md:text-base" style={{fontFamily: "'Inconsolata', monospace"}}>
              <p>
                National Freedom is, truly, an extension of Richard Swift himself. It's a little like crawling into someone's creative head. Some of his artwork and the miscellany he collected hang about the studio and the space possess his laidback but focused attention, where there's not one way something should be made or sound or look or feel——except with honesty and courage. Swift had immense creativity and imagination that went along with a magnanimous heart——at times equaled by his dagger wit and critique. He's missed by us everyday. We're happy to keep a part of his spirit and work alive at National Freedom.
              </p>
              
              <p>
                Also, addiction sucks. If you need help, please get help: <span style={{color: '#d97a9a'}}>1-800-662-4357</span>.
              </p>
              
              <p>
                You can also show your support and pick up some rad 7"s and merch at <span style={{color: '#d97a9a'}}>THE FUGYEP SOUNDATION</span>.
              </p>
            </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center pb-4 md:pb-6">
            <p className="text-lg md:text-3xl font-bold mb-6" style={{fontFamily: "'Special Elite', serif"}}>
              Wanna book? Got questions?
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 border-2 border-pink-400 text-pink-400 font-bold hover:bg-pink-400 hover:text-black transition-colors text-sm md:text-base"
              style={{fontFamily: "'Inconsolata', monospace", letterSpacing: '0.1em'}}
            >
              CONTACT
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <PageFooter />
    </div>
  );
}

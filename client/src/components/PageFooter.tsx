import { Link } from "wouter";

export default function PageFooter() {
  const backslashUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/bg-backslash-black_dd49c3a4.png";
  const noiseUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/bg-noise_e533a6c1.png";
  const buffaloUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_buffalo-head_01_29a9febb.png";

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.currentTarget as HTMLAnchorElement).style.color = '#d97a9a';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280';
  };

  return (
    <footer className="relative w-full">
      {/* Backslash Divider */}
      <div
        className="relative w-full mt-0 md:mt-0 h-16 md:h-32 z-20 bg-contain bg-bottom bg-repeat-x"
        style={{
          backgroundImage: `url('${noiseUrl}'), url('${backslashUrl}')`,
          backgroundSize: 'auto, auto 100%',
          backgroundPosition: 'top left, bottom',
          backgroundRepeat: 'repeat, repeat-x',
          backgroundAttachment: 'scroll, scroll',
          backgroundColor: '#f9f9f9',
        }}
      />

      {/* Footer Section */}
      <section
        className="relative w-full py-16 md:py-12 mt-0"
        style={{
          backgroundImage: `url('${noiseUrl}')`,
          backgroundColor: '#f9f9f9',
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
          paddingTop: 'calc(4rem + 4rem)',
          marginTop: '-4rem',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 md:grid md:grid-cols-2 md:gap-4">
          {/* Studio Info Box */}
          <div className="mt-auto md:ml-auto mx-auto p-5 bg-black relative" style={{maxWidth: 'calc(28rem - 20px)'}}>
            <h2 className="text-2xl font-bold leading-tight text-white mb-2" style={{fontFamily: "'Special Elite', serif"}}>
              /// The Studio
            </h2>
            <p className="mb-0 text-white text-lg" style={{fontFamily: "'Inconsolata', monospace"}}>
              National Freedom is a landmark studio where some of the most original records of the last decade were made.
            </p>
            <p className="mt-4">
              <Link href="/studio" className="text-base font-bold hover:opacity-80 transition-opacity" style={{color: '#d97a9a', fontFamily: "'Inconsolata', monospace"}}>
                More → → →
              </Link>
            </p>
            <hr className="border-gray-600 mt-4 mb-3" />

            {/* Footer Navigation */}
            <nav className="pt-2 pb-3">
              <ul className="grid grid-cols-3 gap-6 text-base font-bold" style={{fontFamily: "'Special Elite', serif", letterSpacing: '0.05em', color: '#6b7280'}}>
                <li>
                  <Link href="/studio" className="transition-colors" style={{color: '#6b7280'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    ///STUDIO
                  </Link>
                </li>
                <li>
                  <Link href="/gear" className="transition-colors" style={{color: '#6b7280'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    ///G3AR
                  </Link>
                </li>
                <li>
                  <Link href="/discography" className="transition-colors" style={{color: '#6b7280'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    ///DISC0G
                  </Link>
                </li>
                <li>
                  <Link href="/mastering" className="transition-colors" style={{color: '#6b7280'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    ///MAST3RING
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="transition-colors" style={{color: '#6b7280'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    ///AB0UT
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition-colors" style={{color: '#6b7280'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    ///C0NT4CT
                  </Link>
                </li>
              </ul>
            </nav>
            <hr className="hidden md:block border-gray-600 mt-4 mb-4" />
            
            {/* Desktop Copyright - nested inside nav box */}
            <div className="hidden md:block text-sm font-mono space-y-1" style={{color: '#6b7280'}}>
              <p>/// © 2020 - 2026 National Freedom Studio</p>
              <p>/// Site by T.rox</p>
            </div>
          </div>

          {/* Buffalo Background Image (Right side on desktop) */}
          <div className="hidden md:flex flex-col items-center justify-center" style={{marginLeft: '20px'}}>
            <img
              src={buffaloUrl}
              alt="Buffalo Head"
              className="max-h-96 object-contain"
            />
          </div>

          {/* Mobile Layout: Buffalo underneath content */}
          <div className="md:hidden flex flex-col items-center mt-8 w-full" style={{marginLeft: '20px'}}>
            <img
              src={buffaloUrl}
              alt="Buffalo Head"
              className="w-full max-w-xs object-contain"
              style={{maxHeight: '300px', marginBottom: '25px'}}
            />
            <div className="text-sm font-mono space-y-1 text-center" style={{color: '#6b7280'}}>
              <p>/// © 2020 - 2026 National Freedom Studio</p>
              <p>/// Site by T.rox</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

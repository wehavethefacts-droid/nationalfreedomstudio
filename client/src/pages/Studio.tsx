import PageFooter from "@/components/PageFooter";

export default function Studio() {
  // Studio photos with labels - masonry layout with varying sizes
  const studioPhotos = [
    { label: "/// Control Room", url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_control_01_968a08b3.jpg", colSpan: 2, rowSpan: 1 },
    { label: "/// Drums + bobs & bits", url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_drum-corner_01_3ff37c40.jpg", colSpan: 1, rowSpan: 1 },
    { label: "/// 1969 Gibson ES-125 guitar + amps", url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_guitar-amps_01_aeb85bf7.jpg", colSpan: 1, rowSpan: 1 },
    { label: "/// Main Room", url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_main-room_01_40cf4bff.jpg", colSpan: 2, rowSpan: 1 },
    { label: "/// Wurli Upright /// Melody Grand", url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_pianos_01_6a8da621.jpg", colSpan: 1, rowSpan: 1 },
    { label: "/// Rack", url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_rack_01_a19ed1bb.jpg", colSpan: 1, rowSpan: 1 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Overlay Content */}
      <section className="relative w-full min-h-[auto] md:min-h-[auto] flex items-center justify-start bg-black overflow-hidden py-2 md:py-3">
        <div className="absolute inset-0 w-full h-full bg-black z-0" />
        <div
          className="absolute inset-0 w-full h-full z-5"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/bg-noise_e533a6c1.png')",
            backgroundSize: 'auto',
            backgroundRepeat: 'repeat',
            opacity: 0.3,
          }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 md:py-3">
            <div style={{marginLeft: '10px', paddingTop: '20px', paddingBottom: '20px'}}>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{fontFamily: "'Special Elite', serif", letterSpacing: '0.02em'}}>
                /// TH3 STUDIO
              </h1>
              <p className="text-white text-base md:text-lg leading-relaxed" style={{fontFamily: "'Inconsolata', monospace", maxWidth: '750px'}}>
                Eclectic. Intimate. The right mix of vintage hunkydory and modern wizbang. This isn't a sterile, operating-room audio clinic. National Freedom is making music in someone's rad living room that feels like your own rad living room.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="relative w-full py-0 md:py-0 pb-4 md:pb-6 bg-black">
        {/* Grainy Texture Overlay */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/bg-noise_e533a6c1.png')",
            backgroundSize: 'auto',
            backgroundRepeat: 'repeat',
            opacity: 0.3,
            pointerEvents: 'none',
          }}
        />
        <div className="w-full px-2 md:px-4 relative z-10">
          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-3 mb-12">
            {/* First row: Control Room full-width */}
            <div className="relative overflow-hidden group col-span-1 md:col-span-4">
              <img
                src={studioPhotos[0].url}
                alt={studioPhotos[0].label}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 right-0 p-3 md:p-4">
                <p className="text-white text-xs md:text-sm font-bold text-right" style={{fontFamily: "'Special Elite', serif"}}>
                  {studioPhotos[0].label}
                </p>
              </div>
            </div>

            {/* Second row: Drums and Guitar */}
            <div className="relative overflow-hidden group col-span-1 md:col-span-2">
              <img
                src={studioPhotos[1].url}
                alt={studioPhotos[1].label}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 right-0 p-3 md:p-4">
                <p className="text-white text-xs md:text-sm font-bold text-right" style={{fontFamily: "'Special Elite', serif"}}>
                  {studioPhotos[1].label}
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden group col-span-1 md:col-span-2">
              <img
                src={studioPhotos[2].url}
                alt={studioPhotos[2].label}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 right-0 p-3 md:p-4">
                <p className="text-white text-xs md:text-sm font-bold text-right" style={{fontFamily: "'Special Elite', serif"}}>
                  {studioPhotos[2].label}
                </p>
              </div>
            </div>

            {/* Third row: Full width Main Room */}
            <div className="relative overflow-hidden group col-span-1 md:col-span-4">
              <img
                src={studioPhotos[3].url}
                alt={studioPhotos[3].label}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 right-0 p-3 md:p-4">
                <p className="text-white text-xs md:text-sm font-bold text-right" style={{fontFamily: "'Special Elite', serif"}}>
                  {studioPhotos[3].label}
                </p>
              </div>
            </div>

            {/* Fourth row: Pianos and Rack */}
            <div className="relative overflow-hidden group col-span-1 md:col-span-2">
              <img
                src={studioPhotos[4].url}
                alt={studioPhotos[4].label}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 right-0 p-3 md:p-4">
                <p className="text-white text-xs md:text-sm font-bold text-right" style={{fontFamily: "'Special Elite', serif"}}>
                  {studioPhotos[4].label}
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden group col-span-1 md:col-span-2">
              <img
                src={studioPhotos[5].url}
                alt={studioPhotos[5].label}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 right-0 p-3 md:p-4">
                <p className="text-white text-xs md:text-sm font-bold text-right" style={{fontFamily: "'Special Elite', serif"}}>
                  {studioPhotos[5].label}
                </p>
              </div>
            </div>

          </div>

          {/* Videos Section */}
          <div className="mt-8 pt-6 max-w-5xl mx-auto">
            {/* First Video */}
            <div className="mb-12">
              <p className="text-white mb-4 font-serif tracking-wide" style={{fontFamily: "'Special Elite', serif"}}>
                /// BTS at NF 2014 /// Nathaniel Rateliff
              </p>
              <div style={{paddingBottom: '56.25%', position: 'relative', height: 0}}>
                <iframe
                  src="https://player.vimeo.com/video/121430086?h=3799c65863&title=0&byline=0&portrait=0"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Second Video */}
            <div className="mb-12">
              <p className="text-white mb-4 font-serif tracking-wide" style={{fontFamily: "'Special Elite', serif"}}>
                /// BTS at NF 2011 /// Damien Jurado
              </p>
              <div style={{paddingBottom: '56.25%', position: 'relative', height: 0}}>
                <iframe
                  src="https://player.vimeo.com/video/23657302?h=67a735b0f0&title=0&byline=0&portrait=0"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mb-12 mt-12">
            <p className="text-xl md:text-3xl font-bold mb-6 text-white" style={{fontFamily: "'Special Elite', serif"}}>
              Wanna book? Got questions?
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-2 border-2 border-pink-400 text-pink-400 font-bold hover:bg-pink-400 hover:text-black transition-colors text-base"
              style={{fontFamily: "'Inconsolata', monospace"}}
            >
              CONTACT
            </a>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}

import PageFooter from "@/components/PageFooter";

export default function Discography() {
  const noiseUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/bg-noise_e533a6c1.png";

  const discography = [
    {
      artist: "Richard Swift",
      albums: [
        { title: "The Hex", year: "2018", url: "#" },
        { title: "The Atlantic Ocean", year: "2009", url: "#" },
        { title: "Walt Wolfman", year: "2011", url: "#" },
        { title: "Other People's Songs", year: "2010", note: "with Damien Jurado", url: "#" },
        { title: "As Onasis", year: "2008", url: "#" },
        { title: "Ground Trouble Jaw", year: "2008", url: "#" }
      ]
    },
    {
      artist: "Nathaniel Rateliff & the Night Sweats",
      albums: [
        { title: "Nathaniel Rateliff & the Night Sweats", year: "2015", url: "#" },
        { title: "Tearing at the Seams", year: "2018", url: "#" },
        { title: "And It's Still Alright", year: "2020", note: "as Nathaniel Rateliff", url: "#" }
      ]
    },
    {
      artist: "Foxygen",
      albums: [
        { title: "Take The Kids Off Broadway", year: "2011", url: "#" },
        { title: "We Are The 21st Century Ambassadors Of Peace & Magic", year: "2013", url: "#" }
      ]
    },
    {
      artist: "Lucius",
      albums: [
        { title: "Christmas Time Is Here", year: "2018", url: "#" }
      ]
    },
    {
      artist: "Pure Bathing Culture",
      albums: [
        { title: "The Chalice", year: "2021", url: "#" },
        { title: "Moon Tides", year: "2013", url: "#" }
      ]
    },
    {
      artist: "Damien Jurado",
      albums: [
        { title: "Saint Bartlett", year: "2010", url: "#" },
        { title: "Maraqopa", year: "2012", url: "#" },
        { title: "Brothers and Sisters of the Eternal Son", year: "2014", url: "#" },
        { title: "Visions of Us on the Land", year: "2015", url: "#" }
      ]
    },
    {
      artist: "Sharon Van Etten",
      albums: [
        { title: "Are We There", year: "2014", note: "Mixed at NF", url: "#" }
      ]
    },
    {
      artist: "Guster",
      albums: [
        { title: "Evermotion", year: "2015", url: "#" }
      ]
    },
    {
      artist: "Kevin Morby",
      albums: [
        { title: "City Music", year: "2017", url: "#" }
      ]
    },
    {
      artist: "Cold War Kids",
      albums: [
        { title: "Something Is Not Right With Me", year: "2008", url: "#" }
      ]
    },
    {
      artist: "Tennis",
      albums: [
        { title: "Ritual in Repeat", year: "2014", url: "#" },
        { title: "Small Sound", year: "2013", url: "#" }
      ]
    },
    {
      artist: "The Mynabirds",
      albums: [
        { title: "What We Lose in the Fire We Gain in the Flood", year: "2010", url: "#" },
        { title: "Generals", year: "2012", url: "#" }
      ]
    },
    {
      artist: "Gardens & Villa",
      albums: [
        { title: "Gardens & Villa", year: "2011", url: "#" },
        { title: "Gordon Von Zilla Presents", year: "2020", url: "#" }
      ]
    },
    {
      artist: "Jessie Baylin",
      albums: [
        { title: "Little Spark", year: "2012", url: "#" },
        { title: "Strawberry Wind", year: "2018", url: "#" }
      ]
    },
    {
      artist: "Laetitia Sadier",
      albums: [
        { title: "The Trip", year: "2010", url: "#" }
      ]
    },
    {
      artist: "Tijuana Panthers",
      albums: [
        { title: "Wayne Interest", year: "2014", url: "#" }
      ]
    },
    {
      artist: "Marco Benevento",
      albums: [
        { title: "Swift", year: "2014", url: "#" }
      ]
    },
    {
      artist: "Born Ruffians",
      albums: [
        { title: "Uncle, Duke & the Chief", year: "2018", url: "#" }
      ]
    },
    {
      artist: "Lonnie Holley",
      albums: [
        { title: "National Freedom", year: "2020", url: "#" }
      ]
    },
    {
      artist: "David Bazan",
      albums: [
        { title: "Care", year: "2017", url: "#" }
      ]
    },
    {
      artist: "Wake Owl",
      albums: [
        { title: "The Private World of Paradise", year: "2017", url: "#" }
      ]
    },
    {
      artist: "Tahiti 80",
      albums: [
        { title: "Ball Room", year: "2014", url: "#" }
      ]
    },
    {
      artist: "The Grahams",
      albums: [
        { title: "Kids Like Us", year: "2020", url: "#" }
      ]
    }
  ];

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
                /// DISCOGRAPHY
              </h1>
              <p className="text-white text-base md:text-lg leading-relaxed" style={{fontFamily: "'Inconsolata', monospace", maxWidth: '750px'}}>
                These projects were recorded (or mostly recorded or maybe mixed) at National Freedom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section with Distressed Background */}
      <section
        className="relative w-full py-16 md:py-20"
        style={{
          backgroundImage: `url('${noiseUrl}')`,
          backgroundColor: '#f9f9f9',
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="space-y-8">
            {discography.map((artist, idx) => (
              <div key={idx}>
                <div className="flex gap-12 md:gap-16 mb-6">
                  {/* Artist Name */}
                  <div className="w-40 md:w-56 flex-shrink-0 pl-4 md:pl-8">
                    <h3 className="text-base md:text-lg font-bold" style={{fontFamily: "'Special Elite', serif", letterSpacing: '0.15em'}}>
                      {artist.artist}
                    </h3>
                  </div>
                  
                  {/* Albums Grid */}
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    {artist.albums.map((album, albumIdx) => (
                      <div key={albumIdx} style={{paddingLeft: '1.5rem', textIndent: '-1.5rem'}}>
                        <p className="font-bold text-base md:text-lg" style={{fontFamily: "'Inconsolata', monospace"}}>
                          —— {album.title}
                        </p>
                        <p className="text-sm md:text-base text-gray-600 mt-1" style={{fontFamily: "'Inconsolata', monospace", paddingLeft: '1.5rem', textIndent: '-1.5rem'}}>
                          <span style={{color: '#000000'}}>///</span>{album.year}
                          {album.note && <span className="ml-2 italic">{album.note}</span>}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Divider */}
                <hr className="border-gray-300 my-6" />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center pb-4 md:pb-6">
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

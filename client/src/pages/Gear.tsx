import PageFooter from "@/components/PageFooter";

const noiseUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/bg-noise_e533a6c1.png";

export default function Gear() {
  const gearCategories = [
    {
      title: "Console",
      items: ["—— 1970's APSI Model 3000 24 channel recording console"]
    },
    {
      title: "Converters",
      items: ["—— Antelope Audio Orion 32+", "—— Lynx Hilo"]
    },
    {
      title: "Monitors",
      items: ["—— Dynaudio Acoustics BM15A", "—— Kali Audio LP-8", "—— PMC Result6"]
    },
    {
      title: "Software",
      items: ["—— Pro Tools 2018", "—— Logic Pro", "—— Samplitude Pro X3", "—— Fab Filter", "—— Sound Toys", "—— Softube", "—— PSP Audioware", "—— DDMF", "—— Waves", "—— iZotope"]
    },
    {
      title: "Preamps",
      items: ["—— Millennia Media x4", "—— Warm Audio WA-412 Discreet Mic pre amp x4", "—— 1970's Heil Sound HM101preamps x8", "—— Mo Talaba Designs Microphone preamp x8", "—— TK Audio Tk-lizer"]
    },
    {
      title: "Dynamics",
      items: ["—— 1960's Spectra Sonics Model 610 Comp Limiter", "—— 1970's DBX 165A", "—— DBX 160A", "—— Warm Audio WA-2A leveling amplifier", "—— Warm Audio WA-76 limiting amplifier x2", "—— Empirical Labs EL8 Distressor x2", "—— Urei Model 7110 limiter/compressor", "—— Rupert Neve Designs Master Buss Processor", "—— Millenia Media TCL-2 Twin Topology 2 Chanel Compressor", "—— TK Audio BC1-S"]
    },
    {
      title: "Effects",
      items: ["—— Roland Space Echo RE-201", "—— AKG BX-10 spring reverb", "—— Benson Studio Tall Bird tube spring reverb", "—— Fostex Model 3180 spring reverb", "—— Yamaha Analog Delay Model E1010", "—— 1970's Univox EC.80A tape echo", "—— 1970's Univox PHZ-1 phaser", "—— DeltaLab Super Time Line digital delay", "—— KT BBD-320 analog chorus", "—— Lexicon LXP-15"]
    },
    {
      title: "Tape Recorders",
      items: ["—— Studer A80 VU MKIV 2\" 16 track recorder", "—— Otari MX5050 1/2\" 8 track recorder", "—— Tascam 122 cassette recorder", "—— Tascam Portastudio 424 mkIII 4 track cassette recorder"]
    },
    {
      title: "Microphones",
      items: ["—— AEA R-84 ribbon microphone", "—— AEA R-92 ribbon microphone x2", "—— Coles 4038 ribbon microphone", "—— Sennheiser MD421-2 vintage(white)dynamic microphone x2", "—— Shure SM7B", "—— Audio-Technica ATM25", "—— Romito Engineering Active Ribbon Microphone x2", "—— Electro-Voice RE20 dynamic microphone", "—— Cascade X-15 stereo ribbon microphone", "—— Sennheiser MD403 dynamic microphone", "—— Electro-Voice 635A dynamic microphone x4", "—— Shure SM57 dynamic microphone x12", "—— Shure SM58 dynamic microphone x6", "—— Warm Audio FET-47 large diaphragm condenser microphone"]
    },
    {
      title: "Instruments",
      items: ["—— Wurlitzer upright piano", "—— Hammond M3 organ with Leslie Model 45 speaker", "—— Roland Juno-60 synthesizer", "—— Mellotron/Chamberlain synthesizer", "—— Arturia Minibrute analog synthesizer", "—— Nord Electro 4D synthesizer", "—— 1970's Optigan optical organ with large disc collection", "—— Korg Trinity Plus synthesizer"]
    },
    {
      title: "Drums",
      items: ["—— C&C Drum Company custom-made drum kit", "—— 1940's Gretsch Defender drum kit", "—— assorted drums, snares, and percussion"]
    },
    {
      title: "Guitars",
      items: ["—— 1959 Gibson ES-125 guitar", "—— 1969 Fender Mustang bass", "—— 1951 Gibson LG-0 guitar", "—— 1984 Fender Stratocaster guitar", "—— 1980's Fender Telecaster guitar", "—— Gibson Thunderbird bass", "—— 1970's Ibanez Violin bass", "—— Assorted 6 and 12 string Danelectro guitars", "—— 1968 Univox HI-Flyer guitar"]
    },
    {
      title: "Amplifiers",
      items: ["—— 1966 Ampeg Jet-12", "—— 1964 Gibson Skylark", "—— 1967 Danelectro DM-25", "—— 1960's Heathkit TA-16", "—— Fender Deluxe DeVille", "—— 1990's Yamaha T50C", "—— Fender Rumble 100", "—— Fender Princeton Chorus"]
    },
    {
      title: "Gadgets",
      items: ["—— Many drum machines, guitar pedals, pocket synths, doohickys, and thingamajigs"]
    },
    {
      title: "Turntables",
      items: ["—— Technics SL 1200 MK2 with Ortophon cartridge x2", "—— Numark DJ Mixer"]
    },
    {
      title: "Taxidermy",
      items: ["—— 1 Crow with bobble head, wings splayed, standing on cow skull", "—— 1 8 point Buck head", "—— 1/2 Buffalo head, right side only", "—— 1 Armadillo in active pose", "—— 1 Squirrel on a log", "—— 1 Weasel on log", "—— 1 Frog playing guitar"]
    }
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
                /// G3AR
              </h1>
              <p className="text-white text-base md:text-lg leading-relaxed" style={{fontFamily: "'Inconsolata', monospace", maxWidth: '750px'}}>
                We have everything a first-class, modern studio requires——plus a grip of vintage electronics and instruments to make some original noise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative w-full py-12 md:py-16"
        style={{
          backgroundImage: `url('${noiseUrl}')`,
          backgroundColor: '#f9f9f9',
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
        }}>
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <div className="space-y-0">
            {gearCategories.map((category, idx) => (
              <div key={idx} className="border-b border-gray-300 last:border-b-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-0 py-6 md:py-8">
                  {/* Left Column - Category Name */}
                  <div className="pr-4 md:pr-8">
                    <h3 className="text-base md:text-lg font-bold text-black" style={{fontFamily: "'Special Elite', serif", letterSpacing: '0.15em'}}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Right Column - Items in Two Sub-Columns */}
                  <div className="md:col-span-3 pl-0 md:pl-8 pt-2 md:pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {category.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="text-sm md:text-base text-gray-700" style={{fontFamily: "'Inconsolata', monospace", paddingLeft: '1.5em', textIndent: '-1.5em'}}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mb-6 mt-12">
            <p className="text-lg md:text-3xl font-bold mb-6 text-black" style={{fontFamily: "'Special Elite', serif"}}>
              Wanna book? Got questions?
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 border-2 border-pink-400 text-pink-400 font-bold hover:bg-pink-400 hover:text-black transition-colors text-base md:text-lg"
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

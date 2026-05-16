import PageFooter from "@/components/PageFooter";

export default function Contact() {
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
                /// CONTACT
              </h1>
              <p className="text-white text-base md:text-lg leading-relaxed" style={{fontFamily: "'Inconsolata', monospace", maxWidth: '750px'}}>
                Tell us about your project. Or just say hello.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section with Distressed Background */}
      <section
        className="relative w-full py-8 md:py-12"
        style={{
          backgroundImage: `url('${noiseUrl}')`,
          backgroundColor: '#f9f9f9',
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="space-y-8 mb-12">
            <div>
              <p className="text-base md:text-lg text-gray-900 mb-6" style={{fontFamily: "'Inconsolata', monospace"}}>
                Please tell us a LITTLE bit about your project, the dates you're looking for, and your budget. We'll get back to you ASAP:
              </p>
              
              <a href="mailto:nationalfreedomstudio@gmail.com" className="text-lg md:text-xl font-bold text-pink-400 hover:text-pink-500 mb-4 inline-block" style={{fontFamily: "'Inconsolata', monospace", letterSpacing: '0.05em', marginBottom: 'calc(1rem - 5px)'}}>
                {'>>'} nationalfreedomstudio@gmail.com
              </a>
              
              <p className="text-base md:text-lg text-gray-900 mb-6 mt-4" style={{fontFamily: "'Inconsolata', monospace"}}>
                You can also do the social media thing:
              </p>
              
              <div className="flex gap-8">
                <a href="https://instagram.com/nationalfreedomstudio" target="_blank" rel="noopener noreferrer" aria-label="National Freedom Studio on Instagram" className="text-black hover:text-blue-600 transition-colors">
                  <svg className="w-12 h-12" viewBox="0 0 140 140" fill="currentColor">
                    <path d="M102.083 0H37.917A37.975 37.975 0 000 37.917v64.166A37.975 37.975 0 0037.917 140h64.166A37.975 37.975 0 00140 102.083V37.917A37.975 37.975 0 00102.083 0zM70 102.083A32.083 32.083 0 11102.083 70 32.083 32.083 0 0170 102.083zm37.917-64.166a8.75 8.75 0 118.75-8.75 8.75 8.75 0 01-8.75 8.75z" />
                  </svg>
                </a>
                <a href="https://twitter.com/NF_Studio" target="_blank" rel="noopener noreferrer" aria-label="National Freedom Studio on Twitter" className="text-black hover:text-blue-600 transition-colors">
                  <svg className="w-12 h-12" viewBox="0 0 140 140" fill="currentColor">
                    <path d="M136.033 37.567a2.917 2.917 0 00-1.166-5.075l-4.609-1.167a2.917 2.917 0 01-1.925-4.083l2.567-5.192a2.917 2.917 0 00-3.383-4.083l-11.667 3.266a2.917 2.917 0 01-2.567-.466 29.167 29.167 0 00-17.5-5.834A29.167 29.167 0 0066.617 44.1v2.1a1.458 1.458 0 01-1.284 1.458c-16.391 1.925-32.083-6.416-49-25.9a2.975 2.975 0 00-2.975-.875 2.917 2.917 0 00-1.691 2.45 44.217 44.217 0 002.683 28.7 1.458 1.458 0 01-1.517 2.1L6.3 52.85a2.917 2.917 0 00-3.325 3.442A30.042 30.042 0 0016.8 78.342a1.458 1.458 0 010 2.625l-3.092 1.225a2.917 2.917 0 00-1.516 4.025 25.433 25.433 0 0018.666 14.466 1.458 1.458 0 010 2.742 63.817 63.817 0 01-25.025 4.842 2.974 2.974 0 00-1.166 5.833 117.017 117.017 0 0047.483 11.258 73.383 73.383 0 0040.833-11.666 72.917 72.917 0 0032.434-60.842v-5.075a2.917 2.917 0 011.05-2.217z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <PageFooter />
    </div>
  );
}

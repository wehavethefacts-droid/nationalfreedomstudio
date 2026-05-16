import { useState, useEffect } from "react";
import { Link } from "wouter";

const buffaloUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_buffalo-head_01_29a9febb.png";
const noiseUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/bg-noise_e533a6c1.png";
const buttonMenuUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/nf_hamb_menu_045660d0.png";
const buttonXUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/nf_hamb_x_45712f0a.png";
const logoUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_logo_transparent_691f7edf.png";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { label: "/// STUDIO", href: "/studio" },
    { label: "/// G3AR", href: "/gear" },
    { label: "/// DISCOG", href: "/discography" },
    { label: "/// MAST3RING", href: "/mastering" },
    { label: "/// AB0UT", href: "/about" },
    { label: "/// C0NT4CT", href: "/contact" },
  ];

  return (
    <>
      {/* Floating Pink Menu Button in Lower Right - Using Image */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-6 z-[9999]"
        style={{
          width: '63px',
          height: '63px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          transform: isOpen ? 'scale(1.05)' : 'scale(1)',
          padding: 0,
          backgroundImage: `url('${isOpen ? buttonXUrl : buttonMenuUrl}')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        aria-label="Toggle menu"
      />

      {/* Full-screen Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-[9998] overflow-hidden"
          style={{
            backgroundImage: `url('${noiseUrl}')`,
            backgroundColor: '#f5f5f5',
            backgroundSize: 'auto',
            backgroundRepeat: 'repeat',
          }}
        >
          <div className="fixed inset-0 flex flex-col items-center justify-center px-4 py-4" style={{pointerEvents: 'auto'}}>
            {/* Navigation Links */}
            <nav className="mb-6 text-center space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-bold transition-colors"
                  style={{
                    fontFamily: "'Special Elite', serif",
                    color: '#000',
                  }}
                >
                  {link.label.replace('/// ', '')}
                </Link>
              ))}
            </nav>

            {/* Buffalo Image */}
            <img
              src={buffaloUrl}
              alt="Buffalo Head"
              className="max-h-32 object-contain mb-2"
            />

            {/* National Freedom Logo */}
            <img
              src={logoUrl}
              alt="National Freedom"
              className="max-w-sm object-contain" style={{maxWidth: '200px'}}
            />
          </div>
        </div>
      )}
    </>
  );
}

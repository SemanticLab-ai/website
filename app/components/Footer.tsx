import { Link } from "react-router";
import { Mail, Linkedin, Twitter, Heart, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Products: [
      { name: "Image Enhancer", href: "/products/image-enhancer" },
      { name: "SmartApply", href: "/products/smartapply" },
      { name: "Visual Search", href: "/products/visual-search" },
      { name: "Services", href: "/services" },
    ],
    Company: [
      { name: "Founders", href: "/founders" },
      { name: "Support", href: "mailto:hello@semanticlab.ai" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "mailto:hello@semanticlab.ai?subject=Privacy%20Policy" },
      { name: "Terms of Service", href: "mailto:hello@semanticlab.ai?subject=Terms%20of%20Service" },
    ],
  };

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Email", icon: Mail, href: "mailto:hello@semanticlab.ai" },
  ];

  return (
    <footer className="relative bg-dark-bg overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent" />

      {/* Decorative glows */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lime/3 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-teal/3 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-lime rounded-xl flex items-center justify-center text-dark-bg font-display font-bold text-lg shadow-lg">
                  S
                </div>
                <span className="text-xl font-display font-bold text-white">
                  SemanticLab
                </span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
                Designing and building AI-ready platforms with purpose.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-lime/10 flex items-center justify-center text-white/40 hover:text-lime transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      {link.href.startsWith("mailto:") ? (
                        <a
                          href={link.href}
                          className="text-sm text-white/40 hover:text-lime transition-colors duration-300"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-sm text-white/40 hover:text-lime transition-colors duration-300"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* CTA Column */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Get Started
              </h3>
              <div className="space-y-3">
                <div>
                  <Link
                    to="/app/image-enhancer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-lime text-dark-bg text-sm font-semibold rounded-full hover:bg-lime-dark hover:shadow-lg hover:shadow-lime/20 transition-all duration-300 hover:scale-105"
                  >
                    Try Image Enhancer
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
                <div>
                  <a
                    href="https://smart-apply.contact-e0b.workers.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    Try SmartApply
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founders strip */}
        <div className="py-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border border-lime/10 flex-shrink-0">
              <img
                src="/images/founders/founders-sm.jpg"
                alt="Raihan & Naila — SemanticLab founders"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-white font-semibold mb-1">Raihan Razi & Naila Rahman</p>
              <p className="text-white/40 text-sm leading-relaxed max-w-md">
                The duo behind SemanticLab — 20+ years combined in tech infrastructure and UX design. Melbourne-based, founder-led, independently built.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-lime fill-lime" />
              <span>in Melbourne, Australia</span>
            </div>
            <p>
              &copy; {currentYear} SemanticLab. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

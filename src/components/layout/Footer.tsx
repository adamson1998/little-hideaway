import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { siteConfig } from "@/config/site";
import { EmailModal } from "@/components/EmailModal";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={`bg-foreground text-primary-foreground ${styles.footerBg}`}> 
      <div className={styles.footerOverlay}>
        <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-serif text-2xl font-semibold">{siteConfig.name}</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex gap-4 pt-2">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Home
              </Link>
              <Link to="/suites" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Our Suites
              </Link>
              <Link to="/experience" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Experience
              </Link>
               <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                About Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                <Phone size={16} />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                <Mail size={16} />
                {siteConfig.email}
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                {siteConfig.address}
              </div>
            </div>
          </div>

          {/* Chat With Us (WhatsApp) */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Chat With Us</h4>
            <p className="text-primary-foreground/80 text-sm">
              Have questions? Chat with us directly on WhatsApp and get instant replies!
            </p>
            <a
              href="https://wa.me/255716324929"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#244e34] hover:bg-[#128C7E] text-white text-sm rounded-lg transition-colors border border-[#25D366] shadow"
              aria-label="Chat on WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.363.71.306 1.263.489 1.696.625.713.227 1.362.195 1.874.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
}

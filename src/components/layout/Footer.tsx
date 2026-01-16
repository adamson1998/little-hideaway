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

          {/* Send Message */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Get in Touch</h4>
            <p className="text-primary-foreground/80 text-sm">
              Have questions? Send us a message and we'll get back to you shortly.
            </p>
            <EmailModal
              trigger={
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground text-sm rounded-lg transition-colors border border-primary-foreground/20">
                  <Mail size={16} />
                  Send Email
                </button>
              }
            />
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

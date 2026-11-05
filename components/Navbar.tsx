'use client';

import { useState } from 'react';
import { Phone, Shield, MessageCircle, Menu, X, Award, CheckCircle } from 'lucide-react';
import TataAiaLogo from './TataAiaLogo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Corporate Trust Strip */}
      <div className="top-trust-strip">
        <div className="top-trust-container">
          <div className="trust-item-group">
            <span className="trust-badge">
              <Shield size={13} className="text-emerald" /> IRDAI Authorized Life Advisor
            </span>
            <span className="trust-separator">•</span>
            <span className="trust-stat">
              <Award size={13} /> 99.13% Claim Settlement Ratio (FY24)
            </span>
            <span className="trust-separator">•</span>
            <span className="trust-stat">
              <CheckCircle size={13} /> 150+ Years of TATA Heritage
            </span>
          </div>

          <div className="top-contact-actions">
            <a href="tel:9629486819" className="top-phone-link">
              <Phone size={13} /> <span>+91 96294 86819</span>
            </a>
            <a
              href="https://wa.me/919629486819?text=Hi%20Mohamed%20Anas,%20I%20would%20like%20to%20know%20more%20about%20TATA%20AIA%20Insurance%20plans."
              target="_blank"
              rel="noreferrer"
              className="top-wa-link"
            >
              <MessageCircle size={13} /> <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Header */}
      <header className="main-header">
        <div className="header-container">
          <a href="#top" className="brand-wrapper">
            <TataAiaLogo size="md" />
            <div className="advisor-tag-box">
              <span className="advisor-name">Mohamed Anas S</span>
              <span className="advisor-sub">TATA Finance Advisor</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <a href="#solutions" className="nav-link">Our Solutions</a>
            <a href="#why-tata" className="nav-link">Why TATA AIA</a>
            {/* <a href="#calculator" className="nav-link">Plan Calculator</a> */}
            <a href="#about" className="nav-link">Meet Your Advisor</a>
            {/* <a href="#faq" className="nav-link">FAQs</a> */}
          </nav>

          {/* Action CTAs */}
          <div className="header-cta-group">
            <a href="tel:9629486819" className="btn-call-outline">
              <Phone size={15} /> <span>Call 96294 86819</span>
            </a>
            <a href="#contact" className="btn-primary-header">
              Get Free Quote
            </a>

            {/* Mobile Toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer">
            <div className="mobile-nav-links">
              <a href="#solutions" onClick={() => setMobileMenuOpen(false)}>Our Solutions</a>
              <a href="#why-tata" onClick={() => setMobileMenuOpen(false)}>Why TATA AIA</a>
              {/* <a href="#calculator" onClick={() => setMobileMenuOpen(false)}>Plan Calculator</a> */}
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>Meet Your Advisor</a>
              {/* <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQs</a> */}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mobile-cta-btn">
                Request Free Callback
              </a>
              <div className="mobile-direct-call">
                <a href="tel:9629486819">
                  <Phone size={16} /> Direct Call: 96294 86819
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}


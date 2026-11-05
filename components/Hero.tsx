'use client';

import Image from 'next/image';
import { ArrowRight, Phone, MessageCircle, ShieldCheck, Award, TrendingUp, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-corporate" id="top">
      {/* Background ambient lighting */}
      <div className="hero-glow-blob-1" />
      <div className="hero-glow-blob-2" />

      <div className="hero-container">
        {/* Left Column: Headline and Value Proposition */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse" />
            <span>TATA AIA LIFE INSURANCE • AUTHORIZED ADVISOR</span>
          </div>

          <p className="hero-tagline">With You, For a Better Tomorrow</p>

          <h1 className="hero-title">
            Plan Today...
            <span className="hero-title-highlight"> Live Worry-Free Tomorrow</span>
          </h1>

          <p className="hero-subphrase">
            Let&apos;s Build a Secure Future Together
          </p>

          <p className="hero-description">
            Safeguard your family&apos;s lifestyle, build guaranteed wealth, and plan a dignified retirement with personalized financial advisory from <strong>Mohamed Anas S</strong>, backed by the 150+ year legacy of TATA.
          </p>

          {/* Quick CTA Buttons */}
          <div className="hero-actions-group">
            <a href="#contact" className="btn-hero-primary">
              <span>Book Free Consultation</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="https://wa.me/919629486819?text=Hi%20Mohamed%20Anas,%20I%20would%20like%20to%20get%20a%20personalized%20financial%20quote%20for%20TATA%20AIA."
              target="_blank"
              rel="noreferrer"
              className="btn-hero-secondary"
            >
              <MessageCircle size={18} className="text-emerald" />
              <span>WhatsApp Consultation</span>
            </a>

            <a href="tel:9629486819" className="btn-hero-call">
              <Phone size={18} />
              <span>96294 86819</span>
            </a>
          </div>

          {/* Trust Highlights Strip */}
          <div className="hero-trust-grid">
            <div className="hero-trust-item">
              <div className="trust-icon-wrap">
                <Award size={20} className="icon-blue" />
              </div>
              <div>
                <strong>99.13%</strong>
                <span>Claim Settlement Ratio</span>
              </div>
            </div>

            <div className="hero-trust-item">
              <div className="trust-icon-wrap">
                <ShieldCheck size={20} className="icon-red" />
              </div>
              <div>
                <strong>150+ Years</strong>
                <span>TATA Group Legacy</span>
              </div>
            </div>

            <div className="hero-trust-item">
              <div className="trust-icon-wrap">
                <Users size={20} className="icon-blue" />
              </div>
              <div>
                <strong>85 Lakh+</strong>
                <span>Families Protected</span>
              </div>
            </div>

            <div className="hero-trust-item">
              <div className="trust-icon-wrap">
                <TrendingUp size={20} className="icon-red" />
              </div>
              <div>
                <strong>100% Tax Benefit</strong>
                <span>Under Sec 80C & 10(10D)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Showcase & Advisor Card */}
        <div className="hero-visual-column">
          <div className="visual-card-wrapper">
            <div className="poster-preview-frame">
              <div className="poster-header-tag">
                <span className="live-dot" /> Live Advisor Support • Mohamed Anas S
              </div>
              <div className="image-aspect-box">
                <Image
                  src="/images/tata-aia-poster-1.jpg"
                  alt="Mohamed Anas S - TATA AIA Life Insurance Advisor Poster"
                  width={560}
                  height={820}
                  priority
                  className="poster-img"
                />
              </div>

              {/* Floating Quick Connect Badge */}
              <div className="floating-badge-advisor">
                <div className="advisor-avatar-circle">
                  <span>MA</span>
                </div>
                <div className="advisor-details-mini">
                  <div className="advisor-name-bold">Mohamed Anas S</div>
                  <div className="advisor-title-red">TATA Finance Advisor</div>
                  <a href="tel:9629486819" className="advisor-phone-click">
                    <Phone size={12} /> Call: 96294 86819
                  </a>
                </div>
              </div>

              <div className="floating-badge-guarantee">
                <ShieldCheck size={18} className="text-blue" />
                <span>IRDAI Regulated Advisor</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Motto Ribbon */}
      <div className="motto-ribbon">
        <div className="motto-container">
          <span className="motto-item">SECURE</span>
          <span className="motto-bullet">•</span>
          <span className="motto-item">PLAN</span>
          <span className="motto-bullet">•</span>
          <span className="motto-item">GROW</span>
        </div>
      </div>
    </section>
  );
}


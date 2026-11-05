'use client';

import Image from 'next/image';
import { Phone, MessageCircle, ShieldCheck, CheckCircle2, UserCheck, Clock, FileText } from 'lucide-react';

export default function AdvisorProfile() {
  return (
    <section className="advisor-section" id="about">
      <div className="section-container">
        <div className="advisor-grid">
          {/* Left Column: Image showcase with interactive badge */}
          <div className="advisor-visual-col">
            <div className="advisor-image-card">
              <div className="advisor-image-aspect">
                <Image
                  src="/images/tata-aia-poster-2.jpg"
                  alt="Mohamed Anas S - Consulting family under TATA AIA protection shield"
                  width={560}
                  height={620}
                  className="advisor-showcase-img"
                />
              </div>

              <div className="advisor-badge-float">
                <div className="badge-shield-icon">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="badge-advisor-title">Authorized TATA Advisor</div>
                  <div className="badge-advisor-sub">Direct Partner for Family Security</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio and Advisory Philosophy */}
          <div className="advisor-bio-col">
            <div className="section-kicker">MEET YOUR ADVISOR</div>
            <h2 className="advisor-name-heading">
              Mohamed Anas S
            </h2>
            <div className="advisor-company-line">
              <span className="designation-tag">TATA Finance Advisor</span>
              <span className="bullet-sep">•</span>
              <span className="company-text">TATA AIA Life Insurance</span>
            </div>

            <p className="advisor-quote-box">
              &ldquo;My mission is to ensure that no family faces financial distress when life takes unexpected turns. I don&apos;t just recommend a policy; I provide lifelong partnership, transparent guidance, and proactive claim settlement support for your nominees.&rdquo;
            </p>

            <div className="advisor-strengths-grid">
              <div className="strength-card">
                <UserCheck size={20} className="strength-icon text-blue" />
                <div>
                  <strong>Personalized Advisory</strong>
                  <span>Custom plans based on your income, age, liabilities, and family dreams.</span>
                </div>
              </div>

              <div className="strength-card">
                <Clock size={20} className="strength-icon text-red" />
                <div>
                  <strong>Dedicated Claim Support</strong>
                  <span>When a claim arises, I personally assist your nominees through paperwork and follow-ups.</span>
                </div>
              </div>

              <div className="strength-card">
                <FileText size={20} className="strength-icon text-blue" />
                <div>
                  <strong>Free Existing Policy Audit</strong>
                  <span>Get an unbiased review of your existing insurance policies to identify gaps or overlapping costs.</span>
                </div>
              </div>

              <div className="strength-card">
                <CheckCircle2 size={20} className="strength-icon text-red" />
                <div>
                  <strong>Zero Pressure, 100% Clarity</strong>
                  <span>Clear explanations without confusing jargon or hidden clauses.</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Actions */}
            {/* <div className="advisor-contact-block">
              <div className="contact-block-kicker">Get in Touch Directly with Anas:</div>
              <div className="contact-buttons-row">
                <a href="tel:9629486819" className="btn-advisor-phone">
                  <Phone size={18} />
                  <span>Call: 96294 86819</span>
                </a>

                <a
                  href="https://wa.me/919629486819?text=Hi%20Mohamed%20Anas,%20I%20would%20like%20to%20consult%20with%20you%20regarding%20TATA%20AIA%20insurance."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-advisor-whatsapp"
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}


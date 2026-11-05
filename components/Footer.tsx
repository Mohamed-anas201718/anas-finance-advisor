import TataAiaLogo from './TataAiaLogo';
import { Phone, MessageCircle, ShieldCheck, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-corporate">
      {/* Brand Ribbon Bar */}
      <div className="footer-ribbon">
        <div className="footer-ribbon-inner">
          <span className="ribbon-motto">SECURE • PLAN • GROW</span>
          <span className="ribbon-sub">With You, For a Better Tomorrow</span>
        </div>
      </div>

      <div className="footer-main-container">
        <div className="footer-grid">
          {/* Col 1: Brand & Advisor */}
          <div className="footer-col-brand">
            <div className="footer-logo-wrap">
              <TataAiaLogo variant="light" size="md" />
            </div>
            <div className="footer-advisor-badge">
              <strong>Mohamed Anas S</strong>
              <span>TATA Finance Advisor</span>
              <p>Your Trusted Partner for Financial Security &amp; Long-Term Wealth Creation.</p>
            </div>

            <div className="footer-contact-items">
              <a href="tel:9629486819" className="footer-call-link">
                <Phone size={16} /> <span>+91 96294 86819</span>
              </a>
              <a
                href="https://wa.me/919629486819?text=Hi%20Mohamed%20Anas,%20I%20would%20like%20to%20consult%20regarding%20TATA%20AIA%20plans."
                target="_blank"
                rel="noreferrer"
                className="footer-wa-link"
              >
                <MessageCircle size={16} /> <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div className="footer-col-nav">
            <h4>Our Solutions</h4>
            <ul>
              <li><a href="#solutions">Life Insurance (Term Protection)</a></li>
              <li><a href="#solutions">Health &amp; Critical Illness Cover</a></li>
              <li><a href="#solutions">Wealth Creation &amp; Savings</a></li>
              <li><a href="#solutions">Retirement &amp; Pension Plans</a></li>
              <li><a href="#solutions">Tax Benefits (Sec 80C &amp; 10(10D))</a></li>
              <li><a href="#solutions">Child Higher Education Plans</a></li>
            </ul>
          </div>

          {/* Col 3: Why TATA AIA */}
          <div className="footer-col-nav">
            <h4>Why TATA AIA?</h4>
            <ul>
              <li><a href="#why-tata">99.13% Claim Settlement Ratio</a></li>
              <li><a href="#why-tata">150+ Years TATA Brand Legacy</a></li>
              <li><a href="#why-tata">4-Hour Express Claim Support</a></li>
              <li><a href="#why-tata">Dedicated Human Advisor Support</a></li>
              <li><a href="#calculator">Instant Premium Calculator</a></li>
              <li><a href="#about">Doorstep Advisory Service</a></li>
            </ul>
          </div>

          {/* Col 4: Trust & Compliance */}
          <div className="footer-col-trust">
            <h4>Regulatory Compliance</h4>
            <div className="trust-card-mini">
              <ShieldCheck size={20} className="text-emerald" />
              <div>
                <strong>IRDAI Authorized</strong>
                <span>Official Life Insurance Advisory</span>
              </div>
            </div>
            <p className="footer-compliance-text">
              Insurance is the subject matter of solicitation. Product availability, eligibility criteria, benefits and terms are governed by official TATA AIA Life Insurance Company Ltd policy documents.
            </p>
            {/* <div className="footer-admin-link">
              <a href="/admin">Advisor Portal Access &rarr;</a>
            </div> */}
          </div>
        </div>

        {/* Bottom Disclaimer & Legal */}
        <div className="footer-bottom-bar">
          <p className="legal-disclaimer">
            Disclaimer: This is the official personal advisor website of Mohamed Anas S, an authorized Financial Advisor for TATA AIA Life Insurance Company Limited. TATA and AIA trademarks and logos are used strictly under authorization.
          </p>
          <div className="copyright-row">
            <span>&copy; {currentYear} Mohamed Anas S • TATA Finance Advisor. All rights reserved.</span>
            <span>IRDAI Reg. Life Insurance Advisory</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


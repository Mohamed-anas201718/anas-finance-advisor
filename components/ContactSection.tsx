import { Phone, MessageCircle, Clock, MapPin, ShieldCheck, CheckCircle } from 'lucide-react';
import LeadForm from './LeadForm';

export default function ContactSection() {
  return (
    <section className="contact-corporate-section" id="contact">
      <div className="section-container">
        <div className="contact-corporate-grid">
          {/* Left Column: Direct Info & Booking details */}
          <div className="contact-info-column">
            <div className="section-kicker">GET IN TOUCH TODAY!</div>
            <h2 className="contact-main-heading">
              Let&apos;s Build a Secure Future Together
            </h2>
            <p className="contact-sub-intro">
              Whether you want to safeguard your family with pure term insurance, save on tax, or plan for your child&apos;s university fund, Mohamed Anas S is here to guide you with honest, data-driven advice.
            </p>

            <div className="advisor-contact-card-box">
              <div className="card-top-identity">
                <div className="advisor-profile-pill">
                  <div className="avatar-initials">MA</div>
                  <div>
                    <strong>Mohamed Anas S</strong>
                    <span>TATA Finance Advisor</span>
                  </div>
                </div>
                <span className="authorized-badge">Authorized</span>
              </div>

              {/* <div className="contact-methods-list">
                <a href="tel:9629486819" className="method-row phone-highlight">
                  <div className="method-icon-wrap">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="method-label">Direct Phone Call</span>
                    <strong className="method-value">+91 96294 86819</strong>
                  </div>
                </a>

                <a
                  href="https://wa.me/919629486819?text=Hi%20Mohamed%20Anas,%20I%20would%20like%20to%20consult%20with%20you%20regarding%20TATA%20AIA%20insurance."
                  target="_blank"
                  rel="noreferrer"
                  className="method-row whatsapp-highlight"
                >
                  <div className="method-icon-wrap">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <span className="method-label">WhatsApp Quick Chat</span>
                    <strong className="method-value">+91 96294 86819</strong>
                  </div>
                </a>
              </div> */}

              <div className="advisory-perks-box">
                <div className="perk-item">
                  <Clock size={16} className="text-blue" />
                  <span>Consultation by Appointment</span>
                </div>
                <div className="perk-item">
                  <MapPin size={16} className="text-red" />
                  <span>Digital Consultation Worldwide</span>
                </div>
                <div className="perk-item">
                  <CheckCircle size={16} className="text-emerald" />
                  <span>100% Free Consultation with No Purchase Obligation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Callback & Enquiry Form */}
          <div className="contact-form-column">
            <div className="form-card-container">
              <div className="form-header-bar">
                <div className="form-header-title">
                  <ShieldCheck size={22} className="text-blue" />
                  <div>
                    <h3>Request a Free Financial Consultation</h3>
                    <p>Receive custom quote &amp; benefit illustration within 2 hours</p>
                  </div>
                </div>
              </div>

              <div className="form-inner-body">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


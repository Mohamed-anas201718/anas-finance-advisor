'use client';

import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  return (
    <aside className="floating-contact-container" aria-label="Quick contact buttons">
      <a
        href="https://wa.me/919629486819?text=Hi%20Mohamed%20Anas,%20I%20would%20like%20to%20consult%20with%20you%20regarding%20TATA%20AIA%20insurance%20plans."
        target="_blank"
        rel="noreferrer"
        className="floating-btn-wa"
        aria-label="Chat with Mohamed Anas on WhatsApp"
        title="WhatsApp Mohamed Anas S"
      >
        <MessageCircle size={24} />
        <span className="floating-text">Chat on WhatsApp</span>
      </a>

      <a
        href="tel:9629486819"
        className="floating-btn-phone"
        aria-label="Call Mohamed Anas S at 96294 86819"
        title="Call 96294 86819"
      >
        <Phone size={22} />
        <span className="floating-text">Call 96294 86819</span>
      </a>
    </aside>
  );
}


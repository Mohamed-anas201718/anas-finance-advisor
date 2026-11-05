'use client';

import { FormEvent, useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, MessageCircle, ShieldCheck } from 'lucide-react';

const interestOptions = [
  'Life Protection',
  'Wealth Planning',
  'Health & Critical Illness',
  'Retirement Planning',
  'Child Future Planning',
  'Tax Saving Solutions',
  'Need Financial Guidance'
];

export default function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setStatus('idle');
    setErrorMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    setSubmittedName(String(data.full_name || ''));

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Unable to submit your enquiry.');

      form.reset();
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setBusy(false);
    }
  }

  if (status === 'success') {
    return (
      <div className="lead-form-success-card">
        <div className="success-icon-wrap">
          <CheckCircle2 size={44} className="text-emerald" />
        </div>
        <h3>Thank You, {submittedName}!</h3>
        <p>
          Your consultation request has been received. <strong>Mohamed Anas S</strong> will get in touch with you shortly on your provided mobile number.
        </p>
        <div className="success-quick-connect">
          <span>Need immediate assistance?</span>
          <div className="success-buttons">
            <a href="tel:9629486819" className="btn-call-mini">
              <Phone size={15} /> Call 96294 86819
            </a>
            <a
              href="https://wa.me/919629486819?text=Hi%20Mohamed%20Anas,%20I%20just%20submitted%20an%20enquiry%20on%20your%20website."
              target="_blank"
              rel="noreferrer"
              className="btn-wa-mini"
            >
              <MessageCircle size={15} /> WhatsApp Chat
            </a>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn-submit-another"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form className="lead-form-pro" onSubmit={submit}>
      <div className="form-grid-pro">
        <div className="form-field-group">
          <label htmlFor="full_name">
            Full Name <span className="req-star">*</span>
          </label>
          <input
            id="full_name"
            name="full_name"
            placeholder="e.g. Ramesh Kumar"
            minLength={2}
            maxLength={80}
            required
            className="input-control"
          />
        </div>

        <div className="form-field-group">
          <label htmlFor="mobile_number">
            Mobile Number <span className="req-star">*</span>
          </label>
          <input
            id="mobile_number"
            name="mobile_number"
            placeholder="10-digit mobile number"
            inputMode="numeric"
            pattern="[6-9][0-9]{9}"
            maxLength={10}
            required
            className="input-control"
          />
          <span className="field-hint">We respect your privacy. No spam calls.</span>
        </div>

        <div className="form-field-group">
          <label htmlFor="city">
            City / Location <span className="req-star">*</span>
          </label>
          <input
            id="city"
            name="city"
            placeholder="e.g. Chennai, Madurai, Coimbatore"
            maxLength={80}
            required
            className="input-control"
          />
        </div>

        <div className="form-field-group">
          <label htmlFor="interest">
            Insurance &amp; Financial Goal <span className="req-star">*</span>
          </label>
          <select id="interest" name="interest" defaultValue="Life Protection" className="input-control select-control">
            {interestOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-consent-box">
        <label className="checkbox-label">
          <input type="checkbox" name="consent" value="true" required defaultChecked />
          <span>
            I authorize Mohamed Anas S (TATA AIA Life Insurance Advisor) to contact me via Call, SMS, or WhatsApp regarding this enquiry.
          </span>
        </label>
      </div>

      {status === 'error' && (
        <div className="form-alert-error" role="alert">
          <AlertCircle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}

      <button type="submit" className="btn-submit-pro" disabled={busy}>
        {busy ? (
          <span>Connecting with Advisor...</span>
        ) : (
          <>
            <Send size={16} />
            <span>Request Personalized Advisory &amp; Quote</span>
          </>
        )}
      </button>

      <div className="form-security-footer">
        <ShieldCheck size={14} className="text-emerald" />
        <span>Your information is encrypted &amp; never shared with third parties.</span>
      </div>
    </form>
  );
}

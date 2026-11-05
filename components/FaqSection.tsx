'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

const faqs = [
  {
    q: 'How does Mohamed Anas S help me during a claim?',
    a: 'Unlike online aggregators where families must navigate generic customer care IVRs, Mohamed Anas S acts as your personal single point of contact. In the unfortunate event of a claim, Anas personally guides your nominees with documentation, IRDAI compliance, and liaises directly with TATA AIA claim officers for swift resolution under the 4-Hour Express Claim initiative.'
  },
  {
    q: 'What is the difference between Term Insurance and Guaranteed Wealth Plans?',
    a: 'Term Insurance (like TATA AIA Sampoorna Raksha Supreme) provides maximum pure life cover (e.g. ₹1 Cr+ at ~₹500-800/mo) to safeguard family expenses and liabilities in your absence. Guaranteed Wealth Plans (like Fortune Guarantee Plus) combine life cover with guaranteed maturity returns, protecting you from fluctuating market interest rates.'
  },
  {
    q: 'How do I determine how much Life Insurance cover my family needs?',
    a: 'A standard financial rule of thumb is 10 to 15 times your annual gross income plus any outstanding liabilities (home loans, personal loans) and anticipated major future expenses (children higher education and marriage). Mohamed Anas provides a free personalized Human Life Value (HLV) calculation during your consultation.'
  },
  {
    q: 'What tax savings are available with TATA AIA policies?',
    a: 'You can claim deductions up to ₹1,50,000 every financial year on premium payments under Section 80C of the Income Tax Act. Health and critical illness riders are eligible for additional deductions under Section 80D. Crucially, death benefits and qualifying maturity proceeds are 100% Tax-Free under Section 10(10D).'
  },
  {
    q: 'Can I consult with Mohamed Anas if I reside in another city or state?',
    a: 'Yes, absolutely! While Mohamed Anas provides doorstep consultations across Tamil Nadu, he provides end-to-end paperless, digital advisory consultations via phone and video calls to clients across India and NRI clients planning for their families back home.'
  },
  {
    q: 'Are medical tests mandatory for buying a policy?',
    a: 'Not in all cases. Many TATA AIA plans offer instant, tele-medical or non-medical issuance up to specific sum-assured thresholds depending on your age and health history. If a medical checkup is required, TATA AIA arranges home sample collection at zero expense to you.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // return (
  //   <section className="faq-section" id="faq">
  //     <div className="section-container">
  //       <div className="section-header-center">
  //         <div className="section-kicker">GOT QUESTIONS?</div>
  //         <h2 className="section-main-heading">
  //           Frequently Asked Questions
  //         </h2>
  //         <p className="section-subtext">
  //           Transparent guidance without jargon. Have more questions? Feel free to contact Mohamed Anas S directly.
  //         </p>
  //       </div>

  //       <div className="faq-accordion-container">
  //         {faqs.map((faq, idx) => {
  //           const isOpen = openIndex === idx;

  //           return (
  //             <div
  //               key={idx}
  //               className={`faq-card-item ${isOpen ? 'faq-item-open' : ''}`}
  //               onClick={() => toggle(idx)}
  //             >
  //               <button
  //                 type="button"
  //                 className="faq-question-btn"
  //                 aria-expanded={isOpen}
  //               >
  //                 <span className="faq-question-text">
  //                   <HelpCircle size={18} className="faq-q-icon" />
  //                   {faq.q}
  //                 </span>
  //                 <ChevronDown
  //                   size={20}
  //                   className={`faq-chevron ${isOpen ? 'rotate-180' : ''}`}
  //                 />
  //               </button>

  //               {isOpen && (
  //                 <div className="faq-answer-block">
  //                   <p>{faq.a}</p>
  //                 </div>
  //               )}
  //             </div>
  //           );
  //         })}
  //       </div>

  //       <div className="faq-footer-callout">
  //         <span>Still have questions about your existing policies or choosing a new plan?</span>
  //         <a href="tel:9629486819" className="faq-call-btn">
  //           <PhoneCall size={15} /> Talk to Anas: 96294 86819
  //         </a>
  //       </div>
  //     </div>
  //   </section>
  // );
}

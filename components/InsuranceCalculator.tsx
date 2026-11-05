'use client';

import { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';

export default function InsuranceCalculator() {
  const [activeTab, setActiveTab] = useState<'term' | 'savings' | 'retirement'>('term');
  const [age, setAge] = useState<number>(30);
  const [termCover, setTermCover] = useState<number>(100);
  const [monthlySavings, setMonthlySavings] = useState<number>(5000);
  const [investmentYears, setInvestmentYears] = useState<number>(10);

  const baseRatePerLakh = age < 25 ? 6 : age < 35 ? 8 : age < 45 ? 14 : 26;
  const estimatedMonthlyTermPremium = Math.round((termCover * baseRatePerLakh) / 10) * 10;
  const annualTaxSavedTerm = Math.round(estimatedMonthlyTermPremium * 12 * 0.312);

  const totalInvestedSavings = monthlySavings * 12 * investmentYears;
  const estimatedMaturityValue = Math.round(totalInvestedSavings * (1 + 0.065 * investmentYears * 1.15));
  const annualTaxSavedSavings = Math.min(Math.round(monthlySavings * 12 * 0.312), 46800);

  const yearsToRetire = Math.max(60 - age, 5);
  const totalRetirementCorpus = Math.round(monthlySavings * 12 * yearsToRetire * 2.2);
  const estimatedMonthlyPension = Math.round((totalRetirementCorpus * 0.068) / 12);

  const getWhatsAppMessage = () => {
    if (activeTab === 'term') {
      return `Hi Mohamed Anas, I checked the TATA AIA calculator: Age ${age}, Desired Life Cover ₹${termCover >= 100 ? (termCover / 100).toFixed(1) + ' Crore' : termCover + ' Lakh'}. Estimated Premium ₹${estimatedMonthlyTermPremium}/mo. Please share exact quote.`;
    } else if (activeTab === 'savings') {
      return `Hi Mohamed Anas, I checked the TATA AIA Wealth plan: Age ${age}, Monthly savings ₹${monthlySavings.toLocaleString('en-IN')}. Please share the guaranteed benefits illustration.`;
    } else {
      return `Hi Mohamed Anas, I am planning for retirement at Age ${age}, investing ₹${monthlySavings.toLocaleString('en-IN')}/mo. Please share TATA AIA Annuity details.`;
    }
  };

  // return (
  //   <section className="calculator-section" id="calculator">
  //     <div className="section-container">
  //       <div className="section-header-center">
  //         <div className="section-kicker">INSTANT ESTIMATE</div>
  //         <h2 className="section-main-heading">
  //           TATA AIA Plan &amp; Premium Estimator
  //         </h2>
  //         <p className="section-subtext">
  //           Estimate your life protection cover, wealth returns, and tax benefits in real-time. Customized quotations prepared by Mohamed Anas S with zero obligation.
  //         </p>
  //       </div>

  //       <div className="calculator-card-container">
  //         <div className="calc-tabs">
  //           <button
  //             className={`calc-tab-btn ${activeTab === 'term' ? 'active-tab' : ''}`}
  //             onClick={() => setActiveTab('term')}
  //           >
  //             <ShieldCheck size={18} />
  //             <span>Term Life Protection</span>
  //           </button>
  //           <button
  //             className={`calc-tab-btn ${activeTab === 'savings' ? 'active-tab' : ''}`}
  //             onClick={() => setActiveTab('savings')}
  //           >
  //             <Calculator size={18} />
  //             <span>Guaranteed Wealth &amp; Savings</span>
  //           </button>
  //           <button
  //             className={`calc-tab-btn ${activeTab === 'retirement' ? 'active-tab' : ''}`}
  //             onClick={() => setActiveTab('retirement')}
  //           >
  //             <CheckCircle2 size={18} />
  //             <span>Retirement Pension</span>
  //           </button>
  //         </div>

  //         <div className="calc-body-grid">
  //           <div className="calc-inputs-column">
  //             <div className="calc-input-group">
  //               <div className="slider-label-row">
  //                 <label htmlFor="age-slider">Your Current Age</label>
  //                 <span className="slider-current-val">{age} Years</span>
  //               </div>
  //               <input
  //                 id="age-slider"
  //                 type="range"
  //                 min="18"
  //                 max="60"
  //                 value={age}
  //                 onChange={(e) => setAge(Number(e.target.value))}
  //                 className="calc-range-slider"
  //               />
  //               <div className="slider-bounds">
  //                 <span>18 Yrs</span>
  //                 <span>40 Yrs</span>
  //                 <span>60 Yrs</span>
  //               </div>
  //             </div>

  //             {activeTab === 'term' && (
  //               <div className="calc-input-group">
  //                 <div className="slider-label-row">
  //                   <label htmlFor="cover-slider">Desired Life Cover (Sum Assured)</label>
  //                   <span className="slider-current-val">
  //                     ₹{termCover >= 100 ? `${(termCover / 100).toFixed(1)} Crore` : `${termCover} Lakh`}
  //                   </span>
  //                 </div>
  //                 <input
  //                   id="cover-slider"
  //                   type="range"
  //                   min="50"
  //                   max="500"
  //                   step="25"
  //                   value={termCover}
  //                   onChange={(e) => setTermCover(Number(e.target.value))}
  //                   className="calc-range-slider"
  //                 />
  //                 <div className="slider-bounds">
  //                   <span>₹50 Lakh</span>
  //                   <span>₹2.5 Crore</span>
  //                   <span>₹5.0 Crore</span>
  //                 </div>
  //               </div>
  //             )}

  //             {(activeTab === 'savings' || activeTab === 'retirement') && (
  //               <>
  //                 <div className="calc-input-group">
  //                   <div className="slider-label-row">
  //                     <label htmlFor="savings-slider">Monthly Investment Amount</label>
  //                     <span className="slider-current-val">
  //                       ₹{monthlySavings.toLocaleString('en-IN')}/month
  //                     </span>
  //                   </div>
  //                   <input
  //                     id="savings-slider"
  //                     type="range"
  //                     min="2500"
  //                     max="50000"
  //                     step="2500"
  //                     value={monthlySavings}
  //                     onChange={(e) => setMonthlySavings(Number(e.target.value))}
  //                     className="calc-range-slider"
  //                   />
  //                   <div className="slider-bounds">
  //                     <span>₹2,500</span>
  //                     <span>₹25,000</span>
  //                     <span>₹50,000+</span>
  //                   </div>
  //                 </div>

  //                 {activeTab === 'savings' && (
  //                   <div className="calc-input-group">
  //                     <div className="slider-label-row">
  //                       <label htmlFor="years-slider">Premium Payment Period</label>
  //                       <span className="slider-current-val">{investmentYears} Years</span>
  //                     </div>
  //                     <input
  //                       id="years-slider"
  //                       type="range"
  //                       min="5"
  //                       max="15"
  //                       step="1"
  //                       value={investmentYears}
  //                       onChange={(e) => setInvestmentYears(Number(e.target.value))}
  //                       className="calc-range-slider"
  //                     />
  //                     <div className="slider-bounds">
  //                       <span>5 Years</span>
  //                       <span>10 Years</span>
  //                       <span>15 Years</span>
  //                     </div>
  //                   </div>
  //                 )}
  //               </>
  //             )}

  //             <div className="calc-note-box">
  //               <p>
  //                 *Estimated figures based on standard non-smoker healthy profile. Actual premium may vary based on medical underwriting, lifestyle, and chosen riders. Contact Mohamed Anas S for official company benefit illustration.
  //               </p>
  //             </div>
  //           </div>

  //           <div className="calc-results-column">
  //             <div className="calc-result-box">
  //               <div className="result-kicker">ESTIMATED PROJECTION</div>

  //               {activeTab === 'term' && (
  //                 <>
  //                   <div className="result-main-number">
  //                     <span className="result-curr">₹</span>
  //                     <strong>{estimatedMonthlyTermPremium.toLocaleString('en-IN')}</strong>
  //                     <span className="result-per">/month*</span>
  //                   </div>
  //                   <div className="result-subtitle">
  //                     for <strong>₹{termCover >= 100 ? `${(termCover / 100).toFixed(1)} Cr` : `${termCover} L`}</strong> Pure Life Cover
  //                   </div>

  //                   <div className="result-breakdown-list">
  //                     <div className="breakdown-item">
  //                       <span>Total Life Security</span>
  //                       <strong>₹{termCover >= 100 ? `${(termCover / 100).toFixed(1)} Crore` : `${termCover} Lakh`}</strong>
  //                     </div>
  //                     <div className="breakdown-item">
  //                       <span>Annual Tax Savings (Sec 80C)</span>
  //                       <strong className="text-emerald">Up to ₹{annualTaxSavedTerm.toLocaleString('en-IN')}/yr</strong>
  //                     </div>
  //                     <div className="breakdown-item">
  //                       <span>TATA AIA Claim Settlement</span>
  //                       <strong className="text-blue">99.13% Industry Best</strong>
  //                     </div>
  //                   </div>
  //                 </>
  //               )}

  //               {activeTab === 'savings' && (
  //                 <>
  //                   <div className="result-main-number">
  //                     <span className="result-curr">₹</span>
  //                     <strong>{estimatedMaturityValue.toLocaleString('en-IN')}</strong>
  //                   </div>
  //                   <div className="result-subtitle">
  //                     Estimated Tax-Free Maturity Corpus*
  //                   </div>

  //                   <div className="result-breakdown-list">
  //                     <div className="breakdown-item">
  //                       <span>Total Invested ({investmentYears} yrs)</span>
  //                       <strong>₹{totalInvestedSavings.toLocaleString('en-IN')}</strong>
  //                     </div>
  //                     <div className="breakdown-item">
  //                       <span>Life Cover Included</span>
  //                       <strong className="text-blue">Up to ₹{(monthlySavings * 12 * 10).toLocaleString('en-IN')}</strong>
  //                     </div>
  //                     <div className="breakdown-item">
  //                       <span>Tax Savings per Year</span>
  //                       <strong className="text-emerald">Up to ₹{annualTaxSavedSavings.toLocaleString('en-IN')}</strong>
  //                     </div>
  //                     <div className="breakdown-item">
  //                       <span>Maturity Exemption</span>
  //                       <strong>100% Tax-Free under Sec 10(10D)</strong>
  //                     </div>
  //                   </div>
  //                 </>
  //               )}

  //               {activeTab === 'retirement' && (
  //                 <>
  //                   <div className="result-main-number">
  //                     <span className="result-curr">₹</span>
  //                     <strong>{estimatedMonthlyPension.toLocaleString('en-IN')}</strong>
  //                     <span className="result-per">/month*</span>
  //                   </div>
  //                   <div className="result-subtitle">
  //                     Guaranteed Monthly Pension for Life from age 60
  //                   </div>

  //                   <div className="result-breakdown-list">
  //                     <div className="breakdown-item">
  //                       <span>Years to Accumulate</span>
  //                       <strong>{yearsToRetire} Years</strong>
  //                     </div>
  //                     <div className="breakdown-item">
  //                       <span>Projected Retirement Fund</span>
  //                       <strong className="text-blue">₹{totalRetirementCorpus.toLocaleString('en-IN')}</strong>
  //                     </div>
  //                     <div className="breakdown-item">
  //                       <span>Payout Frequency</span>
  //                       <strong>Monthly / Annual for Lifetime</strong>
  //                     </div>
  //                   </div>
  //                 </>
  //               )}

  //               <div className="result-actions">
  //                 <a
  //                   href={`https://wa.me/919629486819?text=${encodeURIComponent(getWhatsAppMessage())}`}
  //                   target="_blank"
  //                   rel="noreferrer"
  //                   className="calc-btn-whatsapp"
  //                 >
  //                   <MessageCircle size={17} />
  //                   <span>Get Exact Quote on WhatsApp</span>
  //                 </a>

  //                 <a href="#contact" className="calc-btn-consult">
  //                   <span>Lock In Quote with Anas</span>
  //                   <ArrowRight size={16} />
  //                 </a>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
}

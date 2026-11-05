import { ShieldCheck, HeartPulse, TrendingUp, Sunrise, Receipt, ArrowRight } from 'lucide-react';

const solutionsList = [
  {
    id: 'life-insurance',
    icon: ShieldCheck,
    title: 'Life Insurance',
    subtitle: 'Protect Your Loved Ones',
    popularPlan: 'TATA AIA Sampoorna Raksha Supreme',
    accentColor: 'blue'
  },
  {
    id: 'health-insurance',
    icon: HeartPulse,
    title: 'Health & Critical Illness',
    subtitle: 'Stay Healthy, Live Better',
    popularPlan: 'TATA AIA CritiCare Plus Rider',
    accentColor: 'red'
  },
  {
    id: 'wealth-creation',
    icon: TrendingUp,
    title: 'Wealth Creation',
    subtitle: 'Grow Your Savings Smartly',
    popularPlan: 'TATA AIA Fortune Guarantee Plus',
    accentColor: 'blue'
  },
  {
    id: 'retirement-plans',
    icon: Sunrise,
    title: 'Retirement Plans',
    subtitle: 'Enjoy a Peaceful Tomorrow',
    popularPlan: 'TATA AIA Smart Annuity Plan',
    accentColor: 'red'
  },
  {
    id: 'tax-benefits',
    icon: Receipt,
    title: 'Tax Benefits',
    subtitle: 'Save More, Plan Better',
    popularPlan: 'Government Approved 80C & 10(10D)',
    accentColor: 'blue'
  }
];

export default function Solutions() {
  return (
    <section className="solutions-section" id="solutions">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-kicker">OUR SOLUTIONS</div>
          <h2 className="section-main-heading">
            Comprehensive Coverage For Every Stage Of Life
          </h2>
          <p className="section-subtext">
            Every family&apos;s financial journey is unique. Mohamed Anas S provides custom-tailored TATA AIA solutions designed to secure your loved ones and achieve your life goals.
          </p>
        </div>

        {/* Solutions Grid — 5 clean cards, no paragraph, no bullets */}
        <div className="solutions-cards-grid solutions-grid-5">
          {solutionsList.map((sol) => {
            const IconComponent = sol.icon;
            const isRed = sol.accentColor === 'red';

            return (
              <article key={sol.id} className={`solution-pro-card solution-card-compact ${isRed ? 'card-accent-red' : 'card-accent-blue'}`}>
                {/* Icon */}
                <div className={`sol-icon-box-lg ${isRed ? 'icon-bg-red' : 'icon-bg-blue'}`}>
                  <IconComponent size={30} />
                </div>

                {/* Title & Subtitle */}
                <div className="card-title-block">
                  <h3 className="sol-card-title">{sol.title}</h3>
                  <p className="sol-card-subtitle">{sol.subtitle}</p>
                </div>

                {/* Plan Badge */}
                <span className="badge-plan-tag-bottom">{sol.popularPlan}</span>

                {/* CTA */}
                <div className="card-footer-action">
                  <a href="#contact" className="sol-action-btn">
                    <span>Enquire Now</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Banner callout */}
        <div className="solutions-callout-banner">
          <div className="callout-left">
            <h4>Not sure which plan matches your family&apos;s income and goals?</h4>
            <p>Schedule a quick 10-minute confidential consultation with Mohamed Anas S to get a personalized recommendation.</p>
          </div>
          <div className="callout-right">
            <a href="tel:9629486819" className="callout-phone-btn">
              Call Advisor: 96294 86819
            </a>
            <a href="#contact" className="callout-quote-btn">
              Request Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

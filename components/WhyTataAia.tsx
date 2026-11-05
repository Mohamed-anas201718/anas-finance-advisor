import { ShieldCheck, Layers, Headphones, Sliders, CheckCircle, Award, Clock, HeartHandshake } from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Trusted Brand – TATA',
    tagline: '150+ Years of Unwavering Integrity',
    accent: 'blue'
  },
  {
    icon: Layers,
    title: 'Comprehensive Plans',
    tagline: 'Custom Solutions For Every Life Stage',
    accent: 'red'
  },
  {
    icon: Headphones,
    title: 'Dedicated Advisor Support',
    tagline: '24/7 Guidance & Doorstep Assistance',
    accent: 'blue'
  },
  {
    icon: Sliders,
    title: 'Flexible Options',
    tagline: 'Tailored To Your Cash Flow',
    accent: 'red'
  }
];

export default function WhyTataAia() {
  return (
    <section className="why-tata-section" id="why-tata">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-kicker">THE TATA AIA PROMISE</div>
          <h2 className="section-main-heading">
            Why Choose TATA AIA Life Insurance?
          </h2>
          <p className="section-subtext">
            When you secure your family&apos;s future, you need an institution with an impeccable track record of honoring promises and an advisor who stands by your family in moments of need.
          </p>
        </div>

        {/* 4 Pillars Grid - Compact (no paragraph) */}
        <div className="why-pillars-grid">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isRed = pillar.accent === 'red';

            return (
              <div key={idx} className={`why-pillar-card ${isRed ? 'pillar-red' : 'pillar-blue'}`}>
                <div className={`pillar-icon-box ${isRed ? 'icon-bg-red' : 'icon-bg-blue'}`}>
                  <Icon size={28} />
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <span className="pillar-tagline">{pillar.tagline}</span>
                <div className="pillar-bullet">
                  <CheckCircle size={15} className="bullet-check" />
                  <span>Backed by IRDAI regulations &amp; sovereign safety standards</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Statistics Banner */}
        <div className="tata-stats-strip">
          <div className="stats-box-item">
            <div className="stats-icon-circle">
              <Award size={24} />
            </div>
            <div className="stats-text-block">
              <span className="stat-number">99.13%</span>
              <span className="stat-label">Individual Death Claim Settlement Ratio (FY24)</span>
            </div>
          </div>

          <div className="stats-divider" />

          <div className="stats-box-item">
            <div className="stats-icon-circle">
              <Clock size={24} />
            </div>
            <div className="stats-text-block">
              <span className="stat-number">15 Days*</span>
              <span className="stat-label">Express Claim Decision for Eligible Policies</span>
            </div>
          </div>

          <div className="stats-divider" />

          <div className="stats-box-item">
            <div className="stats-icon-circle">
              <HeartHandshake size={24} />
            </div>
            <div className="stats-text-block">
              <span className="stat-number">85 Lakh+</span>
              <span className="stat-label">Indian Families Protected Nationwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

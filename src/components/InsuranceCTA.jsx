import './InsuranceCTA.css';
import ctaBg from '../../images/piggybank-cv_gqWoAOYU-unsplash.jpg';

export default function InsuranceCTA() {
  return (
    <section className="insurance-cta" style={{ backgroundImage: `linear-gradient(rgba(44,50,60,0.85),rgba(44,50,60,0.85)), url(${ctaBg})` }}>
      <h2 className="insurance-cta-title">Ready to start working towards your financial goals?</h2>
      <p className="insurance-cta-desc">We would love to see if we are the right fit for you!</p>
      <button className="insurance-cta-btn">
        BOOK A FREE CONSULTATION <span className="arrow">→</span>
      </button>
    </section>
  );
}

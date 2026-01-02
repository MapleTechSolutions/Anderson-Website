import '../styles/FinalCTA.css'
import ctaImage from '../../images/annie-spratt-sggw4-qDD54-unsplash.jpg'

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta-container">
        <div className="final-cta-content">
          <h2 className="final-cta-title">Your Partner for Financial Success</h2>
          <p className="final-cta-subtitle">WHERE RELATIONSHIPS MATTER MOST</p>
          <p className="final-cta-text">
            Building a successful financial future requires a partnership built on compatibility and care. At Anderson Wealth Management, we are more than just financial advisors – we become your trusted partners on this journey. Our approach centers around fostering a deep understanding of your values, aspirations, and financial objectives, allowing us to provide tailored solutions that resonate with you on a personal level.
          </p>
          <button className="final-cta-button">BOOK A FREE CONSULT →</button>
        </div>

        <div className="final-cta-image">
          <img src={ctaImage} alt="Financial Planning" />
        </div>
      </div>
    </section>
  )
}

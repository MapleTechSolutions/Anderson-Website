import '../styles/AboutSection.css'
import aboutImage from '../../images/northfolk-Ok76F6yW2iA-unsplash.jpg'

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="Anderson Wealth Management" />
        </div>

        <div className="about-content">
          <h2 className="about-title">At Anderson Wealth Management, we are your guide to financial security.</h2>
          
          <p className="about-text">
            Our team is committed to creating a relationship-based approach to financial planning that is focused on you.
          </p>

          <p className="about-text">
            We offer personalized guidance to help you navigate these options and select the investment strategy that best aligns with your unique circumstances and goals.
          </p>

          <button className="about-button">BOOK A FREE CONSULTATION →</button>
        </div>
      </div>
    </section>
  )
}

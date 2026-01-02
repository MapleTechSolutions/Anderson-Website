import '../styles/AboutContentGrid.css'
import colabImage from '../../images/campaign-creators-qCi_MzVODoU-unsplash.jpg'
import visionImage from '../../images/alex-hudson-7AgqAZbogOQ-unsplash.jpg'

export default function AboutContentGrid() {
  return (
    <section className="about-content-grid">
      <div className="grid-container">
        {/* Top Left - Text */}
        <div className="grid-item text-item">
          <h2 className="grid-title">
            BUILDING RELATIONSHIPS BASED ON TRUST AND TRANSPARENCY
          </h2>
          <p className="grid-text">
            At Anderson Wealth Management, we understand that meaningful financial relationships are built on a foundation of trust, integrity, and open communication. Our team is committed to listening to your unique needs and crafting personalized solutions that align with your values and aspirations. We believe in earning your confidence every single day through transparent advice and putting your interests first.
          </p>
        </div>

        {/* Top Right - Image */}
        <div className="grid-item image-item">
          <img src={colabImage} alt="Collaborative Partnership" />
        </div>

        {/* Bottom Left - Image */}
        <div className="grid-item image-item">
          <img src={visionImage} alt="Global Financial Vision" />
        </div>

        {/* Bottom Right - Text */}
        <div className="grid-item text-item">
          <p className="grid-text">
            Our mission is to work collaboratively with you to develop a comprehensive financial strategy that addresses all aspects of your unique life. Whether your goals involve saving for your children's education, purchasing your dream home, planning for a comfortable retirement, or transitioning a business to the next generation – we are here to guide you every step of the way. With our expert advice and unwavering support, we help you build a brighter financial future for yourself and those you love.
          </p>
          <button className="grid-cta-button">BOOK A FREE CONSULTATION →</button>
        </div>
      </div>
    </section>
  )
}

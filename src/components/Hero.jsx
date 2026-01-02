import '../styles/Hero.css'
import heroBg from '../../images/kelly-sikkema-CXv5jxuMGBk-unsplash.jpg'

export default function Hero() {
  return (
    <section 
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h3 className="hero-title">
          Your Trusted Guide to Wealth Management in Regina, Saskatchewan
        </h3>
        <p className="hero-subtitle">
          Achieve Financial Security with Anderson Wealth Management
        </p>
      </div>
    </section>
  )
}

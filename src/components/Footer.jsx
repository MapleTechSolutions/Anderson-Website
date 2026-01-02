import '../styles/Footer.css'
import logo from '../../images/Anderson-Wealth-Horizontal-White.svg'
import portfolioLogo from '../../images/Portfolio-Strategies-wh.png'
import horizonsLogo from '../../images/Financial-Horizons-wh.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-main">
          <div className="footer-left">
            <div className="footer-logo-group">
              <img src={logo} alt="Anderson Wealth Logo" className="footer-logo" />
            </div>
          </div>

          <div className="footer-center">
            <a href="https://portfoliostrategies.ca/" target="_blank" rel="noopener noreferrer" className="brand-logo-link">
              <img src={portfolioLogo} alt="Portfolio Strategies" className="footer-brand-logo" />
            </a>
            <a href="https://www.financialhorizons.com/" target="_blank" rel="noopener noreferrer" className="brand-logo-link">
              <img src={horizonsLogo} alt="Financial Horizons" className="footer-brand-logo" />
            </a>
          </div>

          <div className="footer-right">
            <div className="footer-info-group">
              <div>
                <h4 className="footer-heading">HOURS</h4>
                <p className="footer-text">Monday – Friday</p>
                <p className="footer-text">8:30am – 4:30pm</p>
              </div>
              <div>
                <h4 className="footer-heading">CONTACT US</h4>
                <a href="mailto:contact@andersonwealth.ca" className="footer-link">Email Us</a>
                <a href="tel:+13065773384" className="footer-link">Call Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2025 Anderson Wealth Management | Website by <a href="https://mapletechsolutions.github.io/maple-web/" target="_blank" rel="noopener noreferrer" className="footer-credit-link">Maple Tech</a><br />
          All mutual funds products are sold through <a href="https://portfoliostrategies.ca/" target="_blank" rel="noopener noreferrer" className="footer-credit-link">Portfolio Strategies Corporation</a>
        </p>
      </div>
    </footer>
  )
}

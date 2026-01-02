import './InsuranceSecure.css';
import PropTypes from 'prop-types';

export default function InsuranceSecure({
  image,
  imageAlt = '',
  title,
  description,
  products = [],
  investmentText,
  investmentLink,
  ctaText = 'BOOK A FREE CONSULTATION',
  onCtaClick
}) {
  return (
    <section className="insurance-secure">
      <div className="insurance-secure-img">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="insurance-secure-content">
        <h2 className="insurance-secure-title">{title}</h2>
        <p className="insurance-secure-desc">{description}</p>
        <div className="insurance-secure-products">
          {products.map((list, idx) => (
            <div className="insurance-secure-list" key={idx}>
              <ul>
                {list.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
        {investmentText && (
          <div className="insurance-secure-investment">
            {investmentText} {investmentLink && <a href={investmentLink.href} className="insurance-learn-more">{investmentLink.text}</a>}
          </div>
        )}
        <button className="insurance-secure-cta" onClick={onCtaClick}>
          {ctaText} <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
}

InsuranceSecure.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  investmentText: PropTypes.string,
  investmentLink: PropTypes.shape({ href: PropTypes.string, text: PropTypes.string }),
  ctaText: PropTypes.string,
  onCtaClick: PropTypes.func
};

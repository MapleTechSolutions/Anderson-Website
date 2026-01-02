import '../styles/ProcessSteps.css';
import PropTypes from 'prop-types';

const fallbackImages = [
  '/images/kelly-sikkema-CXv5jxuMGBk-unsplash.jpg',
  '/images/kelly-sikkema-v_yesrC0s2o-unsplash.jpg',
  '/images/piggybank-cv_gqWoAOYU-unsplash.jpg',
  '/images/towfiqu-barbhuiya-0ITvgXAU5Oo-unsplash.jpg'
];

export default function ProcessSteps({ steps, header = 'HOW THE PROCESS WORKS' }) {
  return (
    <section className="process-steps">
      <div className="process-header">
        <h2>{header}</h2>
      </div>
      <div className={steps.length === 3 ? 'process-grid process-grid-three' : 'process-grid'}>
        {steps.map((step, index) => (
          <div key={index} className="process-card">
            <div className="process-image">
              <img src={step.image || fallbackImages[index % fallbackImages.length]} alt={step.title} />
            </div>
            <div className="process-number">{step.number}</div>
            <h3 className="process-title">{step.title}</h3>
            <p className="process-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

ProcessSteps.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  header: PropTypes.string
};

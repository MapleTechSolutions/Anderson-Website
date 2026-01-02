import '../styles/ProcessSteps.css'

export default function ProcessSteps() {
  const steps = [
    {
      number: '1',
      image: '/images/kelly-sikkema-CXv5jxuMGBk-unsplash.jpg',
      title: 'DISCOVERY',
      description: 'We start by getting to know what\'s important to you. We listen to your goals and your vision for the future, and identify any planning gaps that need to be addressed.'
    },
    {
      number: '2',
      image: '/images/kelly-sikkema-v_yesrC0s2o-unsplash.jpg',
      title: 'PLAN DEVELOPMENT',
      description: 'Based on our discovery session, we create customized solutions that suit your unique needs. From investments to insurance, we provide recommendations to help you meet your vision for the future.'
    },
    {
      number: '3',
      image: '/images/piggybank-cv_gqWoAOYU-unsplash.jpg',
      title: 'IMPLEMENTATION',
      description: 'We help you put the plan into place, so you can start making progress toward your financial goals.'
    },
    {
      number: '4',
      image: '/images/towfiqu-barbhuiya-0ITvgXAU5Oo-unsplash.jpg',
      title: 'MAINTENANCE',
      description: 'We understand that life is constantly changing. That\'s why we work with you to ensure your plan always aligns with your current goals, risk tolerance, and needs. We keep up with ever-changing investment and insurance economics so you don\'t have to.'
    }
  ]

  return (
    <section className="process-steps">
      <div className="process-header">
        <h2>HOW THE PROCESS WORKS</h2>
      </div>

      <div className="process-grid">
        {steps.map((step, index) => (
          <div key={index} className="process-card">
            <div className="process-image">
              <img src={step.image} alt={step.title} />
            </div>
            <div className="process-number">{step.number}</div>
            <h3 className="process-title">{step.title}</h3>
            <p className="process-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

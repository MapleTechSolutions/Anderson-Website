import '../styles/Promise.css'

export default function Promise() {
  const promises = [
    {
      icon: (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 6 L50 16 L50 32 C50 48 32 58 32 58 C32 58 14 48 14 32 L14 16 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 34 L30 40 L42 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'PROTECTION',
      description: 'For your assets and family through personalized planning and risk mitigation strategies.'
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="12" width="28" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" rx="2"/>
          <line x1="18" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="18" y1="36" x2="46" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="18" y1="48" x2="46" y2="48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: 'EDUCATION',
      description: 'And understanding of your financial options to empower you to make informed choices for your future.'
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="32" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="32" r="3" fill="currentColor"/>
          <line x1="16" y1="32" x2="48" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: 'TRANSPARENCY',
      description: 'To ensure you have peace of mind and confidence in your financial decisions.'
    }
  ]

  return (
    <section className="promise">
      <div className="promise-header">
        <h2>OUR PROMISE TO YOU</h2>
        <p className="promise-subtitle">Our Commitment to Helping You Reach Your Goals.</p>
      </div>

      <div className="promise-grid">
        {promises.map((promise, index) => (
          <div key={index} className="promise-card">
            <div className="promise-icon">
              {promise.icon}
            </div>
            <h3 className="promise-title">{promise.title}</h3>
            <p className="promise-description">{promise.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

import '../styles/OfferedServices.css'
import icon1 from '../../images/icon01.svg'
import icon2 from '../../images/icon02.svg'

export default function OfferedServices() {
  const services = [
    {
      title: 'INSURANCE',
      icon: icon1,
      items: [
        'Key Person Insurance',
        'Asset Protection',
        'Retirement Protection',
        'Succession Planning',
        'Buy-Sell Agreement Funding',
        'Life Disability & Critical Illness',
        'Segregated Funds',
        'Annuities',
        'GIA\'s'
      ],
      buttonText: 'INSURANCE SERVICES'
    },
    {
      title: 'INVESTMENTS',
      icon: icon2,
      items: [
        'Retirement Analysis',
        'Investment Planning',
        'Registered & Non-Registered Investment Accounts',
        'Mutual Funds',
        'HISA\'s',
        'GIC\'s',
        'ETF\'s'
      ],
      buttonText: 'INVESTMENT SOLUTIONS'
    }
  ]

  return (
    <section className="offered-services">
      <div className="services-header">
        <h2>Services and products we offer to help meet your goal include...</h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-column">
            <div className="service-icon">
              <img src={service.icon} alt={service.title} />
            </div>

            <h3 className="service-title">{service.title}</h3>

            <ul className="service-items">
              {service.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <button className="service-button">{service.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  )
}

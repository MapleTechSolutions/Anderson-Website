import '../styles/Services.css'

import icon1 from '../../images/Anderson-Wealth-Icon-Mine-Shaft-150x150.png'
export default function Services() {
  const services = [
    {
      icon: icon1,
      title: 'Strategic Planning',
      description: 'Navigate Complex Financial Decisions'
    },
    {
      icon: icon1,
      title: 'Accelerated Growth',
      description: 'Meet Financial Goals Faster'
    },
    {
      icon: icon1,
      title: 'Peace of Mind',
      description: 'Reduce Financial Stress'
    }
  ]

  return (
    <section className="services">
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.icon} alt={service.title} className="service-icon" />
            <p className="service-text">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

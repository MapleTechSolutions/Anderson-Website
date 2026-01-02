import '../styles/AboutPageHeader.css'

export default function AboutPageHeader({title, label}) {
  return (
    <section className="about-page-header">
      <div className="about-header-overlay"></div>
      <div className="about-header-content">
        <p className="about-header-label">{label}</p>
        <h1 className="about-header-title">{title}</h1>
      </div>
    </section>
  )
}

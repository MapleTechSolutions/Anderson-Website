import '../styles/Banner.css'

export default function Banner({text}) {
  return (
    <section className="banner">
      <div className="banner-content">
        <h2 className="banner-text">
          {text}
        </h2>
      </div>
    </section>
  )
}

import './InsuranceHero.css';
// import insuranceImg from '../../images/annie-spratt-IT6aov1ScW0-unsplash.jpg';

export default function InsuranceHero({img,title,title1,title2,text1,text2}) {
  return (
    <section className="insurance-hero">
      <div className="insurance-hero-left">
        <div className="insurance-hero-eyebrow">{title}</div>
        <h1 className="insurance-hero-title">{title1}<br />{title2}</h1>
        <p className="insurance-hero-desc">
          {text1}
        </p>
        <p className="insurance-hero-bold">
            {text2}
        </p>
      </div>
      <div className="insurance-hero-right">
        <img src={img} alt="Insurance meeting" />
      </div>
    </section>
  );
}

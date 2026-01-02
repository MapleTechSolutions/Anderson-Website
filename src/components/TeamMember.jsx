import '../styles/TeamMember.css'
import memberImage from '../../images/ANP_6333-Web.jpg'

export default function TeamMember() {
  return (
    <section className="team-member">
      <div className="team-container">
        <div className="member-image">
          <img src={memberImage} alt="Team Member" />
        </div>
        <div className="member-info">
          <h2 className="member-name">EVAN ANDERSON</h2>
          <p className="member-role">FOUNDER, ADVISOR</p>
          
          <div className="member-bio">
            <p>
              Growing up in South East Saskatchewan I was shown the effort and work that goes into making money and creating wealth for your family. This is where my passion has come from for making sure my clients feel confident in the concepts and strategies we deploy to help them grow and protect their wealth.
            </p>
            <p>
              My favorite part of my career is getting the opportunity to build meaningful and long relationships with so many different families and individuals.
            </p>
          </div>

          <div className="member-contact">
            <a href="mailto:evan.anderson@andersonwealth.ca" className="contact-link">
              <span className="contact-icon">✉</span>
              evan.anderson@andersonwealth.ca
            </a>
            <a href="tel:+13065773384" className="contact-link">
              <span className="contact-icon">☎</span>
              +1 (306) 577-3384
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

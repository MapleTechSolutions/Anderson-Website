import '../styles/AboutTeamMember.css'

export default function AboutTeamMember({ name, title, bio, email, phone, image, flipped = false }) {
  return (
    <section className={`team-member about-team-member ${flipped ? 'flipped' : ''}`}>
      <div className={`team-container ${flipped ? 'flipped' : ''}`}>
        {!flipped && (
          <div className="member-image">
            <img src={image} alt={name} />
          </div>
        )}
        
        <div className="member-info">
          <h2 className="member-name">{name}</h2>
          <p className="member-role">{title}</p>
          
          <div className="member-bio">
            {Array.isArray(bio) ? (
              bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>{bio}</p>
            )}
          </div>

          {(email || phone) && (
            <div className="member-contact">
              {email && (
                <a href={`mailto:${email}`} className="contact-link">
                  <span className="contact-icon">✉</span>
                  {email}
                </a>
              )}
              {phone && (
                <a href={`tel:${phone}`} className="contact-link">
                  <span className="contact-icon">☎</span>
                  {phone}
                </a>
              )}
            </div>
          )}
        </div>

        {flipped && (
          <div className="member-image">
            <img src={image} alt={name} />
          </div>
        )}
      </div>
    </section>
  )
}

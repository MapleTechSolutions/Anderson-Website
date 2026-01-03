import Header from '../components/Header'
import AboutPageHeader from '../components/AboutPageHeader'
import Footer from '../components/Footer'
import '../styles/BookingPage.css'

export default function BookingPage() {
  return (
    <>
      <Header 
        variant="light"
      />
      <AboutPageHeader
        title="Book Your Free Consultation"
        label="Schedule a Meeting"
      />

      <div className="booking-page">
        <div className="booking-container">
          <div className="booking-intro">
            <h2>Let's Start Your Financial Journey</h2>
            <p>
              Book a complimentary, no-obligation consultation with our team.
              We'll discuss your financial goals, answer your questions, and explore
              how we can help you build a brighter financial future.
            </p>
            <div className="booking-features">
              <div className="booking-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Free & No Obligation</span>
              </div>
              <div className="booking-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>60-Minute Session</span>
              </div>
              <div className="booking-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Virtual or In-Person</span>
              </div>
            </div>
          </div>

          <div className="booking-calendar">
            <iframe
              src="https://calendar.app.google/px1AzPk8NUafRY4q9"
              title="Book a Consultation"
              className="calendar-iframe"
              frameBorder="0"
            />
          </div>

          <div className="booking-footer-info">
            <h3>What to Expect</h3>
            <div className="expectation-grid">
              <div className="expectation-item">
                <div className="expectation-number">1</div>
                <div className="expectation-content">
                  <h4>Discovery</h4>
                  <p>We'll learn about your financial situation, goals, and concerns</p>
                </div>
              </div>
              <div className="expectation-item">
                <div className="expectation-number">2</div>
                <div className="expectation-content">
                  <h4>Assessment</h4>
                  <p>We'll discuss how our services align with your needs</p>
                </div>
              </div>
              <div className="expectation-item">
                <div className="expectation-number">3</div>
                <div className="expectation-content">
                  <h4>Next Steps</h4>
                  <p>If it's a good fit, we'll outline a personalized plan forward</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}

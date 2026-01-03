import { useState } from 'react';
import Header from '../components/Header';
import AboutPageHeader from '../components/AboutPageHeader';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import '../styles/ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '268fc010-6d96-4d1c-b8dd-a46d6a05c7b4',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          subject: `Contact Form: ${formData.service || 'General Inquiry'}`,
          from_name: 'Anderson Wealth Website',
          to_email: 'jinilpatel176@gmail.com'
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('✓ Message sent successfully! We\'ll get back to you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        // Clear success message after 5 seconds
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('✗ Failed to send message. Please try again or email us directly.');
      }
    } catch (error) {
      setStatus('✗ Failed to send message. Please try again or email us directly.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <>
      <Header variant="light" />
      <AboutPageHeader
        title="Contact Us"
        label="Get In Touch"
      />

      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Let's Connect</h2>
              <p className="contact-intro">
                Have questions about our services? Ready to start your financial journey?
                We're here to help. Reach out today for a free, no-obligation consultation.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:evan.anderson@andersonwealth.ca">evan.anderson@andersonwealth.ca</a>
                    <a href="mailto:admin@andersonwealth.ca">admin@andersonwealth.ca</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <a href="tel:+13065773384">+1 (306) 577-3384</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Office Hours</h3>
                    <p>Monday – Friday</p>
                    <p>8:30 AM – 4:30 PM</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Location</h3>
                    <p>Regina, Saskatchewan</p>
                    <p className="location-note">Serving clients across Saskatchewan and beyond</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send Us A Message</h2>

                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(306) 123-4567"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service...</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Investments">Investments</option>
                    <option value="Both Insurance and Investments">Both Insurance and Investments</option>
                    <option value="General Consultation">General Consultation</option>
                    <option value="Not Sure">I'm not sure</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                {status && (
                  <p
                    className="form-status"
                    style={{
                      backgroundColor: status.includes('✓') ? '#d4f4dd' : status.includes('✗') ? '#ffe5e5' : '#e3f2fd',
                      color: status.includes('✓') ? '#2d6a3e' : status.includes('✗') ? '#c92a2a' : '#1565c0',
                      border: status.includes('✓') ? '1px solid #a8e6b8' : status.includes('✗') ? '1px solid #ffa8a8' : '1px solid #90caf9'
                    }}
                  >
                    {status}
                  </p>
                )}

                <button
                  type="submit"
                  className="submit-button"
                  disabled={status === 'Sending...'}
                >
                  {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                </button>

                <p className="form-note">
                  * Required fields. We typically respond within 24 business hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <FinalCTA />
      <Footer />
    </>
  );
}

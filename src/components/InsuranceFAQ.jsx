import { useState } from 'react';
import './InsuranceFAQ.css';

const faqs = [
  {
    question: 'HOW LONG UNTIL I SEE RESULTS?',
    answer: 'We understand that you want to see results quickly when it comes to your financial future. While results may vary depending on the client and their level of risk tolerance, we often hear feedback from our clients that they feel a sense of peace even after their very first meeting with us. Our goal is to help you achieve long-term success, and we’re committed to working with you every step of the way to ensure that you see the results you’re looking for.'
  },
  {
    question: 'WHAT IF I RUN OUT OF MONEY?',
    answer: 'This is a common concern among many people. The underlying cause often stems from individuals who have saved and accumulated money throughout their lives without having a specific target or a clear idea of their desired retirement income. However, once we start working with clients and help them identify their desired retirement income, we can provide a tailored solution. By taking into account various factors, we are able to determine the required retirement portfolio that aligns with your goals.'
  }
];

export default function InsuranceFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="insurance-faq">
      <h2 className="insurance-faq-title">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="insurance-faq-list">
        {faqs.map((faq, idx) => (
          <div key={idx} className="insurance-faq-item">
            <button
              className="insurance-faq-question"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
            >
              {faq.question}
              <span className="insurance-faq-arrow">&#x25BC;</span>
            </button>
            {openIndex === idx && (
              <div className="insurance-faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

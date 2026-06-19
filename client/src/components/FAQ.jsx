import { useState } from 'react';

const FAQS = [
  { q: 'Does my child need prior coding experience?', a: 'No experience needed! This workshop is designed for absolute beginners. Our mentors start from the very basics and build up at a comfortable pace.' },
  { q: 'What equipment or software is required?', a: 'A laptop or desktop with a stable internet connection is all you need. All software is free and web-based — no downloads required.' },
  { q: 'How are live sessions structured?', a: 'Sessions run Monday–Friday, 10:00 AM–12:00 PM IST. Each class is 2 hours: 90 min of guided learning + 30 min hands-on project time. Recordings available for 7 days.' },
  { q: 'Is there a refund policy?', a: 'Full refund within 48 hours of enrollment. 50% refund if requested before Week 2 begins. Post that, access to recordings remains available.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="section faq-section" id="faq">
      <div className="section-label">FAQ</div>
      <h2 className="section-title">Common questions</h2>
      <p className="section-sub">Still unsure? We've answered the most asked ones below.</p>
      <div className="faq-list">
        {FAQS.map((f, i) => (
          <div className={`faq-item${open === i ? ' open' : ''}`} key={i}>
            <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
              {f.q}
              <span className="faq-icon">+</span>
            </button>
            <div className={`faq-a${open === i ? ' open' : ''}`}>{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

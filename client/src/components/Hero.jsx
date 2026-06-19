export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-badge"><span></span>Summer 2026 · Now Enrolling</div>
        <h1><em>AI & Robotics</em><br />Summer Workshop</h1>
        <p>A 4-week hands-on journey where curious kids aged 8–14 build real robots, train AI models, and solve problems like engineers.</p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo('register')}>Enroll Now →</button>
          <button className="btn-secondary" onClick={() => scrollTo('outcomes')}>See What They'll Learn</button>
        </div>
        <div className="hero-chips">
          <div className="chip">🗓 Starts 15 July 2026</div>
          <div className="chip">💻 Online</div>
          <div className="chip">⭐ 4.9/5 from 300+ alumni</div>
          <div className="chip">📜 Certificate included</div>
        </div>
      </div>
    </section>
  );
}

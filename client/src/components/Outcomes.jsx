const OUTCOMES = [
  { title: 'Understand AI Fundamentals',        desc: 'Grasp how ML models think, train, and predict real-world data.' },
  { title: 'Build Your First Robot',             desc: 'Assemble and program a robot that reacts to sensors and commands.' },
  { title: 'Code in Python & Scratch',           desc: 'Write clean working code using beginner-friendly tools and Python.' },
  { title: 'Design Thinking & Problem Solving',  desc: 'Break complex challenges into solvable steps like an engineer.' },
  { title: 'Collaborate on a Team Project',      desc: 'Present a final group project at Demo Day to peers and mentors.' },
  { title: 'Earn a Digital Certificate',         desc: 'Receive a verified Kidrove certificate to showcase your skills.' },
];

export default function Outcomes() {
  return (
    <section className="section outcomes-section" id="outcomes">
      <div className="section-label">Learning Outcomes</div>
      <h2 className="section-title">What your child will walk away with</h2>
      <p className="section-sub">Practical, portfolio-ready skills — not just theory.</p>
      <div className="outcomes-grid">
        {OUTCOMES.map((o, i) => (
          <div className="outcome-item" key={i}>
            <div className="outcome-num">{String(i + 1).padStart(2, '0')}</div>
            <div>
              <h4>{o.title}</h4>
              <p>{o.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

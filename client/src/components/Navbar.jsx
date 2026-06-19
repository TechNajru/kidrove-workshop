export default function Navbar() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <nav className="nav">
      <div className="nav-logo">
        <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
          <rect width="32" height="32" rx="8" fill="#2563EB"/>
          <path d="M8 16l6 6 10-12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Kidrove
      </div>
      <div className="nav-links">
        <a onClick={() => scrollTo('details')}>Details</a>
        <a onClick={() => scrollTo('outcomes')}>Outcomes</a>
        <a onClick={() => scrollTo('faq')}>FAQ</a>
        <a onClick={() => scrollTo('register')}>Register</a>
      </div>
      <button className="nav-btn" onClick={() => scrollTo('register')}>Enroll Now</button>
    </nav>
  );
}

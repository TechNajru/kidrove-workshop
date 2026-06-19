const DETAILS = [
  { icon: '👦', color: '#EFF6FF', label: 'Age Group',  value: '8 – 14 Years' },
  { icon: '📅', color: '#F0FDF4', label: 'Duration',   value: '4 Weeks' },
  { icon: '💻', color: '#ECFDF5', label: 'Mode',       value: 'Online' },
  { icon: '💰', color: '#FFFBEB', label: 'Fee',         value: '₹2,999' },
  { icon: '🚀', color: '#EFF6FF', label: 'Start Date',  value: '15 July 2026' },
];

export default function Details() {
  return (
    <section className="section" id="details">
      <div className="section-label">Workshop Details</div>
      <h2 className="section-title">Everything you need to know</h2>
      <p className="section-sub">Quick snapshot of what this workshop includes before you sign up.</p>
      <div className="details-grid">
        {DETAILS.map((d, i) => (
          <div className="detail-card" key={i}>
            <div className="detail-icon" style={{ background: d.color }}>{d.icon}</div>
            <div className="label">{d.label}</div>
            <div className="value">{d.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

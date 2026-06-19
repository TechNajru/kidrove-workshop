import { useState } from 'react';

// ✅ This uses your Render backend URL in production, localhost in development
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const validate = ({ name, email, phone }) => {
  const errors = {};
  if (!name.trim() || name.trim().length < 2) errors.name = 'Please enter your full name.';
  if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email address.';
  if (!phone.trim() || !/^\+?[\d\s\-]{7,15}$/.test(phone)) errors.phone = 'Enter a valid phone number.';
  return errors;
};

export default function Registration() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [serverError, setServerError] = useState('');

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setServerError('');
    try {
      const res = await fetch(`${API_URL}/api/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(data.message);
        setForm({ name: '', email: '', phone: '' });
      } else {
        setServerError(data.errors?.join(' ') || 'Something went wrong.');
      }
    } catch {
      setServerError('Could not connect to server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="reg-section" id="register">
      <div className="reg-inner">
        <div className="section-label">Registration</div>
        <h2 className="section-title" style={{ fontSize: '1.7rem' }}>Secure Your Spot</h2>
        <p className="section-sub" style={{ color: '#94A3B8' }}>
          Limited seats. Fill in your details and we'll confirm enrollment within 24 hours.
        </p>
        {success ? (
          <div className="success-box">
            <div className="tick">🎉</div>
            <strong>You're registered!</strong>
            {success}
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            {serverError && <div className="server-error">{serverError}</div>}
            {[
              { name: 'name',  label: 'Full Name',     type: 'text',  placeholder: 'e.g. Riya Sharma' },
              { name: 'email', label: 'Email Address', type: 'email', placeholder: 'parent@example.com' },
              { name: 'phone', label: 'Phone Number',  type: 'tel',   placeholder: '+91 98765 43210' },
            ].map(({ name, label, type, placeholder }) => (
              <div className="form-group" key={name}>
                <label htmlFor={name}>{label}</label>
                <input
                  id={name} type={type} name={name}
                  placeholder={placeholder}
                  value={form[name]} onChange={handleChange}
                  className={errors[name] ? 'error' : ''}
                />
                {errors[name] && <span className="field-error">{errors[name]}</span>}
              </div>
            ))}
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Submitting…' : 'Register for ₹2,999 →'}
            </button>
            <p className="form-note">🔒 Your data is safe. No spam, ever.</p>
          </form>
        )}
      </div>
    </section>
  );
}

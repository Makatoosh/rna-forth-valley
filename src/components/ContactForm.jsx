import React, { useState } from 'react';
import { Send } from 'lucide-react';
import './ContactForm.css';

// Update this once you have your branch email address
const BRANCH_EMAIL = 'info@rnaforthvalley.co.uk';

const SUBJECTS = [
  'General Enquiry',
  'Membership',
  'Welfare & Support',
  'Events',
  'Other',
];

const validate = (data) => {
  const errors = {};
  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = 'Please enter your full name (at least 2 characters).';
  }
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (data.phone.trim() && !/^[\d\s+\-().]{7,}$/.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (!data.subject) {
    errors.subject = 'Please select a subject.';
  }
  if (!data.message.trim() || data.message.trim().length < 10) {
    errors.message = 'Please enter a message (at least 10 characters).';
  }
  return errors;
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const subject = encodeURIComponent(`[RNA Forth Valley] ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      (formData.phone ? `Phone: ${formData.phone}\n` : '') +
      `\n${formData.message}`
    );

    window.location.href = `mailto:${BRANCH_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-text">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-desc">
              Have a question about the branch, membership, or welfare support? We'd love to hear from you.
              Fill in the form and it will open in your email client ready to send.
            </p>
            <div className="contact-meeting-info">
              <strong>We meet every 2nd Friday of the month</strong>
              <span>RBLS Grangemouth, 4 Dundas Street, Grangemouth, FK3 8BQ</span>
              <span>19:00 – 20:30</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="cf-row">
              <div className={`cf-field ${errors.name ? 'cf-field-error' : ''}`}>
                <label htmlFor="cf-name">Full Name *</label>
                <input
                  id="cf-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                />
                {errors.name && <span className="cf-error">{errors.name}</span>}
              </div>
              <div className={`cf-field ${errors.email ? 'cf-field-error' : ''}`}>
                <label htmlFor="cf-email">Email Address *</label>
                <input
                  id="cf-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  autoComplete="email"
                />
                {errors.email && <span className="cf-error">{errors.email}</span>}
              </div>
            </div>

            <div className="cf-row">
              <div className={`cf-field ${errors.phone ? 'cf-field-error' : ''}`}>
                <label htmlFor="cf-phone">Phone (optional)</label>
                <input
                  id="cf-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="07700 900 000"
                  autoComplete="tel"
                />
                {errors.phone && <span className="cf-error">{errors.phone}</span>}
              </div>
              <div className={`cf-field ${errors.subject ? 'cf-field-error' : ''}`}>
                <label htmlFor="cf-subject">Subject *</label>
                <select
                  id="cf-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">Select a subject…</option>
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.subject && <span className="cf-error">{errors.subject}</span>}
              </div>
            </div>

            <div className={`cf-field ${errors.message ? 'cf-field-error' : ''}`}>
              <label htmlFor="cf-message">Message *</label>
              <textarea
                id="cf-message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help?"
              />
              {errors.message && <span className="cf-error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary cf-submit">
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

import React, { useState, useEffect } from 'react';
import { X, Send, Mail, MapPin, CheckCircle, Calendar, Sparkles } from 'lucide-react';

export default function ApplyModal({ isOpen, onClose, initialPosition, onShowToast }) {
  const [position, setPosition] = useState(initialPosition || 'Student Relationship Executive');
  const [district, setDistrict] = useState('Kasaragod');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [qualification, setQualification] = useState('Plus Two');

  useEffect(() => {
    if (initialPosition) {
      setPosition(initialPosition);
    }
  }, [initialPosition]);

  if (!isOpen) return null;

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!name || !email) {
      onShowToast('Please provide your name and email address.', 'error');
      return;
    }

    const subject = encodeURIComponent(`Application for ${position} - ${name} (${district})`);
    const body = encodeURIComponent(
      `Dear ILM Career Consultancy Recruitment Team,\n\n` +
      `I am submitting my application for executive recruitment.\n\n` +
      `Applicant Details:\n` +
      `- Full Name: ${name}\n` +
      `- Email Address: ${email}\n` +
      `- Mobile / WhatsApp: ${phone || 'Provided upon request'}\n` +
      `- Applied Position: ${position}\n` +
      `- Preferred District: ${district}\n` +
      `- Qualification: ${qualification}\n\n` +
      `Please find my CV attached for your evaluation.\n\n` +
      `Best regards,\n${name}`
    );

    window.location.href = `mailto:ilmconsultancy2026@gmail.com?subject=${subject}&body=${body}`;
    onShowToast('Opening your default mail client with pre-filled application draft!', 'success');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          maxWidth: '650px',
          width: '100%',
          padding: '2.5rem',
          position: 'relative',
          boxShadow: 'var(--shadow-lg)',
          border: '2px solid var(--color-gold)',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            backgroundColor: 'var(--color-bg-light)',
            border: '1px solid var(--color-border)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-navy)',
            transition: 'all 0.2s ease'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Top Banner */}
        <div style={{ marginBottom: '1.5rem', paddingRight: '2rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.35rem 0.85rem',
            backgroundColor: 'var(--color-gold-light)',
            border: '1px solid var(--color-gold-border)',
            borderRadius: 'var(--radius-full)',
            color: 'var(--color-navy)',
            fontWeight: 800,
            fontSize: '0.78rem',
            textTransform: 'uppercase',
            marginBottom: '0.5rem'
          }}>
            <Sparkles size={14} />
            <span>EXECUTIVE RECRUITMENT APPLICATION</span>
          </div>

          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-navy)' }}>
            Join ILM Career Consultancy
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.96rem', marginTop: '0.25rem' }}>
            Submit your resume directly to <strong>ilmconsultancy2026@gmail.com</strong>
          </p>
        </div>

        {/* Notice Badge */}
        <div style={{
          backgroundColor: 'var(--color-bg-light)',
          borderLeft: '4px solid var(--color-gold)',
          padding: '1rem 1.25rem',
          borderRadius: 'var(--radius-md)',
          marginBottom: '1.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-navy)' }}>
            <Calendar size={18} color="var(--color-gold-dark)" />
            <span>Last Date to Apply: August 10</span>
          </div>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>
            Official Recruitment 2026
          </span>
        </div>

        <form onSubmit={handleSendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
              Full Name *
            </label>
            <input 
              type="text"
              required
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                fontSize: '0.96rem',
                fontWeight: 600
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="modal-grid">
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                Email Address *
              </label>
              <input 
                type="email"
                required
                placeholder="your.name@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  fontSize: '0.96rem',
                  fontWeight: 600
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                Mobile / WhatsApp Number
              </label>
              <input 
                type="tel"
                placeholder="Required for district updates"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  fontSize: '0.96rem',
                  fontWeight: 600
                }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="modal-grid">
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                Position Applied For
              </label>
              <select 
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  fontSize: '0.94rem',
                  fontWeight: 600,
                  backgroundColor: '#FFFFFF'
                }}
              >
                <option value="Student Relationship Executive">Student Relationship Executive</option>
                <option value="Sales Executive">Sales Executive</option>
                <option value="Data Collection Executive">Data Collection Executive</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                Preferred District
              </label>
              <select 
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  fontSize: '0.94rem',
                  fontWeight: 600,
                  backgroundColor: '#FFFFFF'
                }}
              >
                <option value="Kasaragod">Kasaragod</option>
                <option value="Kannur">Kannur</option>
                <option value="Wayanad">Wayanad</option>
                <option value="Kozhikode">Kozhikode</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
              Highest Educational Qualification
            </label>
            <select 
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                fontSize: '0.94rem',
                fontWeight: 600,
                backgroundColor: '#FFFFFF'
              }}
            >
              <option value="Plus Two">Plus Two / Higher Secondary</option>
              <option value="Degree">Degree / Graduation</option>
              <option value="Fresher">Fresh Graduate / Fresher</option>
            </select>
          </div>

          <div style={{ marginTop: '0.5rem' }}>
            <button 
              type="submit"
              className="btn btn-primary btn-lg"
              style={{ width: '100%' }}
            >
              <Send size={20} />
              <span>Launch Mail & Send CV to ilmconsultancy2026@gmail.com</span>
            </button>
          </div>

        </form>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .modal-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

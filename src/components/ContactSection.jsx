import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function ContactSection({ onShowToast }) {
  const [selectedPosition, setSelectedPosition] = useState('Student Relationship Executive');
  const [selectedDistrict, setSelectedDistrict] = useState('Kasaragod');
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [qualification, setQualification] = useState('Plus Two');

  const handleSubmitDraft = (e) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail) {
      onShowToast('Please fill in your name and email address.', 'error');
      return;
    }

    const subject = encodeURIComponent(`Application: ${selectedPosition} - ${applicantName}`);
    const body = encodeURIComponent(
      `Dear ILM Career Consultancy Recruitment Desk,\n\n` +
      `Applicant Name: ${applicantName}\n` +
      `Email: ${applicantEmail}\n` +
      `Position Applied: ${selectedPosition}\n` +
      `Target District: ${selectedDistrict}\n` +
      `Qualification: ${qualification}\n\n` +
      `I have prepared my CV for your review. Please let me know the next steps.`
    );

    window.location.href = `mailto:ilmconsultancy2026@gmail.com?subject=${subject}&body=${body}`;
    onShowToast('Opening your mail client with pre-filled application draft!', 'success');
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={14} />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="section-title">
            Contact ILM Recruitment Desk
          </h2>
          <p className="section-subtitle">
            Direct your inquiries and CV submissions directly to our official email endpoint.
          </p>
          <div className="gold-divider" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: '3rem',
          alignItems: 'start'
        }} className="contact-grid">
          
          {/* Left Column: Official Contact Info */}
          <div style={{
            backgroundColor: 'var(--color-bg-light)',
            padding: '2.5rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border)'
          }}>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1rem' }}>
              Official Communication Channel
            </h3>
            
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              For executive hiring, data collection inquiries, and student relationship registrations, contact us exclusively via email:
            </p>

            {/* Email Box */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              backgroundColor: 'var(--color-white)',
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              border: '2px solid var(--color-gold)',
              marginBottom: '2rem'
            }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-navy)',
                color: 'var(--color-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Mail size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--color-gold-dark)', textTransform: 'uppercase' }}>
                  RECRUITMENT DESK EMAIL
                </div>
                <a 
                  href="mailto:ilmconsultancy2026@gmail.com" 
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--color-navy)',
                    wordBreak: 'break-all'
                  }}
                >
                  ilmconsultancy2026@gmail.com
                </a>
              </div>
            </div>

            {/* Active Districts List */}
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '1rem' }}>
                Operational Districts
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                {['Kasaragod', 'Kannur', 'Wayanad', 'Kozhikode'].map((d) => (
                  <div key={d} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    backgroundColor: 'var(--color-white)',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    fontWeight: 700,
                    color: 'var(--color-navy)',
                    fontSize: '0.92rem'
                  }}>
                    <MapPin size={16} color="var(--color-gold-dark)" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Pre-composed Application Form Assistant */}
          <div style={{
            backgroundColor: 'var(--color-navy)',
            color: 'var(--color-white)',
            padding: '2.5rem',
            borderRadius: 'var(--radius-lg)',
            border: '2px solid var(--color-gold)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
              Quick Application Form Draft
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.94rem', marginBottom: '1.75rem' }}>
              Fill in your basic details to compose a structured email application directly to <strong style={{ color: '#FFFFFF' }}>ilmconsultancy2026@gmail.com</strong>.
            </p>

            <form onSubmit={handleSubmitDraft} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Full Name *
                </label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Anish Kumar"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-gold-border)',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--color-navy-dark)',
                    fontSize: '0.95rem',
                    fontWeight: 600
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Email Address *
                </label>
                <input 
                  type="email"
                  required
                  placeholder="e.g. applicant@gmail.com"
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-gold-border)',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--color-navy-dark)',
                    fontSize: '0.95rem',
                    fontWeight: 600
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    Select Position
                  </label>
                  <select
                    value={selectedPosition}
                    onChange={(e) => setSelectedPosition(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-gold-border)',
                      backgroundColor: '#FFFFFF',
                      color: 'var(--color-navy-dark)',
                      fontSize: '0.9rem',
                      fontWeight: 600
                    }}
                  >
                    <option value="Student Relationship Executive">Student Relationship Executive</option>
                    <option value="Sales Executive">Sales Executive</option>
                    <option value="Data Collection Executive">Data Collection Executive</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    Select District
                  </label>
                  <select
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-gold-border)',
                      backgroundColor: '#FFFFFF',
                      color: 'var(--color-navy-dark)',
                      fontSize: '0.9rem',
                      fontWeight: 600
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
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Qualification
                </label>
                <select
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-gold-border)',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--color-navy-dark)',
                    fontSize: '0.9rem',
                    fontWeight: 600
                  }}
                >
                  <option value="Plus Two">Plus Two</option>
                  <option value="Degree">Degree</option>
                  <option value="Fresher">Fresher</option>
                </select>
              </div>

              <button 
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ marginTop: '0.75rem', width: '100%' }}
              >
                <Send size={18} />
                <span>Compose Application Email</span>
              </button>

            </form>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

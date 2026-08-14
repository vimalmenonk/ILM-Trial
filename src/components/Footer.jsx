import React from 'react';
import { useApp } from '../context/AppContext';
import Logo from './Logo';
import { Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { navigateTo } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: 'var(--color-navy-dark)',
      color: 'var(--color-white)',
      padding: '4rem 0 2rem 0',
      borderTop: '5px solid var(--color-gold)',
      width: '100%',
      maxWidth: '100vw',
      boxSizing: 'border-box',
      overflowX: 'hidden'
    }}>
      <div className="container">
        
        {/* Main Footer Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          
          {/* Column 1: Brand & Tagline */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <Logo variant="light" size="normal" showTagline={true} />
            </div>
            <p style={{
              fontSize: '0.88rem',
              color: 'rgba(255, 255, 255, 0.75)',
              lineHeight: 1.6,
              maxWidth: '340px'
            }}>
              Dedicated career consultancy and executive recruitment organisation focused on shaping futures with Integrity, Learning, and Mastery across Kerala.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              fontWeight: 800,
              color: 'var(--color-gold)',
              marginBottom: '1rem',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { label: 'Home', view: 'home' },
                { label: 'About ILMI', view: 'about' },
                { label: 'Course Finder', view: 'course-finder' },
                { label: 'Academic Programs', view: 'programs' },
                { label: 'Screening Exam', view: 'screening-exam-reg' },
                { label: 'Student Login', view: 'student-login' },
                { label: 'FAQ', view: 'faq' },
              ].map((item) => (
                <li key={item.label}>
                  <button 
                    onClick={() => navigateTo(item.view)}
                    style={{
                      fontSize: '0.88rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      transition: 'color 0.2s ease',
                      fontWeight: 500,
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      textAlign: 'left'
                    }}
                    className="footer-link"
                  >
                    • {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Recruitment Districts */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              fontWeight: 800,
              color: 'var(--color-gold)',
              marginBottom: '1rem',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Districts
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['Kasaragod', 'Kannur', 'Wayanad', 'Kozhikode'].map((loc) => (
                <li key={loc} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.88rem',
                  color: 'rgba(255, 255, 255, 0.85)'
                }}>
                  <MapPin size={15} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                  <span>{loc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Submission */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              fontWeight: 800,
              color: 'var(--color-gold)',
              marginBottom: '1rem',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Send Resume To
            </h4>
            
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--color-gold)',
              borderRadius: 'var(--radius-md)',
              padding: '0.85rem 1rem',
              marginBottom: '0.85rem',
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <Mail size={16} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-gold)', textTransform: 'uppercase' }}>
                  Official Email
                </span>
              </div>
              <a 
                href="mailto:ilmconsultancy2026@gmail.com"
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  wordBreak: 'break-all'
                }}
              >
                ilmconsultancy2026@gmail.com
              </a>
            </div>

            <div style={{
              fontSize: '0.8rem',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.5
            }}>
              Last Date to Apply: <strong>August 10</strong><br />
              Requirement: Plus Two / Degree / Freshers
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.6)' }}>
            © {new Date().getFullYear()} <strong>ILM Career Consultancy</strong>. INTEGRITY • LEARNING • MASTERY.
          </div>

          <button 
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid var(--color-gold)',
              color: 'var(--color-gold)',
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.82rem',
              fontWeight: 700,
              transition: 'all 0.2s ease'
            }}
            className="back-to-top"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>

      <style>{`
        .footer-link:hover {
          color: var(--color-gold) !important;
        }
        .back-to-top:hover {
          background-color: var(--color-gold) !important;
          color: var(--color-navy-dark) !important;
        }
      `}</style>
    </footer>
  );
}

import React from 'react';
import Logo from './Logo';
import { Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: 'var(--color-navy-dark)',
      color: 'var(--color-white)',
      padding: '4.5rem 0 2.5rem 0',
      borderTop: '5px solid var(--color-gold)'
    }}>
      <div className="container">
        
        {/* Main Footer Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
          gap: '3rem',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
        }} className="footer-grid">
          
          {/* Column 1: Brand & Tagline */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <Logo variant="light" size="normal" showTagline={true} />
            </div>
            <p style={{
              fontSize: '0.92rem',
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
              fontSize: '1.1rem',
              fontWeight: 800,
              color: 'var(--color-gold)',
              marginBottom: '1.25rem',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Home', href: '#home' },
                { label: 'About ILM', href: '#about' },
                { label: 'Career Opportunities', href: '#opportunities' },
                { label: 'What You Will Do', href: '#responsibilities' },
                { label: 'Eligibility & Benefits', href: '#eligibility' },
                { label: 'Locations', href: '#locations' },
                { label: 'Contact Desk', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    style={{
                      fontSize: '0.92rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      transition: 'color 0.2s ease',
                      fontWeight: 500
                    }}
                    className="footer-link"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Recruitment Districts */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.1rem',
              fontWeight: 800,
              color: 'var(--color-gold)',
              marginBottom: '1.25rem',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Districts
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Kasaragod', 'Kannur', 'Wayanad', 'Kozhikode'].map((loc) => (
                <li key={loc} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.92rem',
                  color: 'rgba(255, 255, 255, 0.85)'
                }}>
                  <MapPin size={16} color="var(--color-gold)" />
                  <span>{loc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Submission */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.1rem',
              fontWeight: 800,
              color: 'var(--color-gold)',
              marginBottom: '1.25rem',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Send Resume To
            </h4>
            
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--color-gold)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              marginBottom: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
                <Mail size={18} color="var(--color-gold)" />
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--color-gold)', textTransform: 'uppercase' }}>
                  Official Email
                </span>
              </div>
              <a 
                href="mailto:ilmconsultancy2026@gmail.com"
                style={{
                  fontSize: '0.94rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  wordBreak: 'break-all'
                }}
              >
                ilmconsultancy2026@gmail.com
              </a>
            </div>

            <div style={{
              fontSize: '0.82rem',
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
          paddingTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.6)' }}>
            © {new Date().getFullYear()} <strong>ILM Career Consultancy</strong>. INTEGRITY • LEARNING • MASTERY. All Rights Reserved.
          </div>

          <button 
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid var(--color-gold)',
              color: 'var(--color-gold)',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.85rem',
              fontWeight: 700,
              transition: 'all 0.2s ease'
            }}
            className="back-to-top"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>

      <style>{`
        .footer-link:hover {
          color: var(--color-gold) !important;
          padding-left: 4px;
        }
        .back-to-top:hover {
          background-color: var(--color-gold) !important;
          color: var(--color-navy-dark) !important;
        }
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

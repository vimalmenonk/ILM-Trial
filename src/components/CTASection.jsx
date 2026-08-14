import React from 'react';
import { Mail, Calendar, Sparkles, Send, Copy, Check } from 'lucide-react';

export default function CTASection({ onOpenApplyModal, onCopyEmail, copied }) {
  const email = 'ilmconsultancy2026@gmail.com';

  return (
    <section 
      style={{
        backgroundColor: 'var(--color-navy)',
        color: 'var(--color-white)',
        padding: '5.5rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '4px solid var(--color-gold)',
        borderBottom: '4px solid var(--color-gold)'
      }}
    >
      {/* Visual Accent Overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15) 0%, rgba(11, 27, 61, 0) 75%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          border: '2px solid var(--color-gold)',
          borderRadius: 'var(--radius-lg)',
          padding: '3.5rem 2.5rem',
          textAlign: 'center',
          maxWidth: '960px',
          margin: '0 auto',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)'
        }}>
          
          {/* Top Star Banner */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.45rem 1.25rem',
            backgroundColor: 'rgba(212, 175, 55, 0.15)',
            border: '1px solid var(--color-gold)',
            borderRadius: 'var(--radius-full)',
            color: 'var(--color-gold)',
            fontWeight: 800,
            fontSize: '0.9rem',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '1.5rem'
          }}>
            <Sparkles size={16} />
            <span>★ BE A PART OF ILM ★</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '2.6rem',
            fontWeight: 800,
            color: 'var(--color-white)',
            lineHeight: 1.2,
            marginBottom: '1rem'
          }}>
            TOGETHER, LET'S SHAPE THE FUTURE!
          </h2>

          <p style={{
            fontSize: '1.15rem',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '680px',
            margin: '0 auto 2.25rem auto',
            lineHeight: 1.6
          }}>
            Send your updated resume directly to our recruitment desk. Mention your preferred district (Kasaragod, Kannur, Wayanad, or Kozhikode) in your email.
          </p>

          {/* Last Date Highlight Box */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            backgroundColor: 'var(--color-gold)',
            color: 'var(--color-navy-dark)',
            padding: '0.85rem 1.75rem',
            borderRadius: 'var(--radius-md)',
            fontWeight: 800,
            fontSize: '1.1rem',
            marginBottom: '2.5rem',
            boxShadow: 'var(--shadow-gold)'
          }}>
            <Calendar size={22} />
            <span>LAST DATE TO APPLY: AUGUST 10</span>
          </div>

          {/* Email Container & Action Buttons */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
            maxWidth: '580px',
            margin: '0 auto'
          }}>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              padding: '0.75rem 1rem 0.75rem 1.25rem',
              border: '2px solid var(--color-gold)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={20} color="var(--color-navy)" />
                <span style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--color-navy-dark)',
                  letterSpacing: '0.5px'
                }}>
                  {email}
                </span>
              </div>

              <button 
                onClick={onCopyEmail}
                title="Copy Email Address"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: copied ? '#22c55e' : 'var(--color-bg-light)',
                  color: copied ? '#FFFFFF' : 'var(--color-navy)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  border: '1px solid var(--color-border)',
                  transition: 'all 0.2s ease'
                }}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div style={{ display: 'flex', gap: '1rem', width: '100%', flexWrap: 'wrap' }}>
              <a 
                href={`mailto:${email}?subject=Application%20for%20Executive%20Position%20-%20ILM%20Career%20Consultancy&body=Dear%20ILM%20Recruitment%20Team,%0A%0AI%20am%20interested%20in%20applying%20for%20a%20position%20at%20ILM%20Career%20Consultancy.%0A%0AApplied%20Position:%20[Student%20Relationship%20Executive%20/%20Sales%20Executive%20/%20Data%20Collection%20Executive]%0APreferred%20District:%20[Kasaragod%20/%20Kannur%20/%20Wayanad%20/%20Kozhikode]%0AQualification:%20[Plus%20Two%20/%20Degree%20/%20Fresher]%0AContact%20Number:%20%0A%0APlease%20find%20my%20attached%20CV.`}
                className="btn btn-primary btn-lg"
                style={{ flex: 1 }}
              >
                <Send size={20} />
                <span>Send Your CV via Email</span>
              </a>

              <button 
                onClick={onOpenApplyModal}
                className="btn btn-outline-gold btn-lg"
                style={{ flex: 1 }}
              >
                <span>Interactive Application</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

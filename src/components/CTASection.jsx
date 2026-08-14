import React from 'react';
import { useApp } from '../context/AppContext';
import { Mail, Calendar, Sparkles, Send, Copy, Check } from 'lucide-react';

export default function CTASection({ onCopyEmail, copied }) {
  const { navigateTo } = useApp();
  const email = 'ilmconsultancy2026@gmail.com';

  return (
    <section 
      style={{
        backgroundColor: 'var(--color-navy)',
        color: 'var(--color-white)',
        padding: '4.5rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '4px solid var(--color-gold)',
        borderBottom: '4px solid var(--color-gold)',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          border: '2px solid var(--color-gold)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem 1.25rem',
          textAlign: 'center',
          maxWidth: '960px',
          margin: '0 auto',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
          width: '100%',
          boxSizing: 'border-box',
          overflow: 'hidden'
        }}>
          
          {/* Top Star Banner */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            backgroundColor: 'rgba(212, 175, 55, 0.15)',
            border: '1px solid var(--color-gold)',
            borderRadius: 'var(--radius-full)',
            color: 'var(--color-gold)',
            fontWeight: 800,
            fontSize: '0.82rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
            maxWidth: '100%',
            whiteSpace: 'normal'
          }}>
            <Sparkles size={14} />
            <span>★ BE A PART OF ILM ★</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.75rem, 4.5vw, 2.6rem)',
            fontWeight: 800,
            color: 'var(--color-white)',
            lineHeight: 1.2,
            marginBottom: '1rem',
            wordBreak: 'break-word'
          }}>
            TOGETHER, LET'S SHAPE THE FUTURE!
          </h2>

          <p style={{
            fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '680px',
            margin: '0 auto 1.75rem auto',
            lineHeight: 1.6
          }}>
            Send your updated resume directly to our recruitment desk. Mention your preferred district (Kasaragod, Kannur, Wayanad, or Kozhikode) in your email.
          </p>

          {/* Last Date Highlight Box */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            backgroundColor: 'var(--color-gold)',
            color: 'var(--color-navy-dark)',
            padding: '0.75rem 1.25rem',
            borderRadius: 'var(--radius-md)',
            fontWeight: 800,
            fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)',
            marginBottom: '2rem',
            boxShadow: 'var(--shadow-gold)',
            maxWidth: '100%',
            whiteSpace: 'normal',
            boxSizing: 'border-box'
          }}>
            <Calendar size={20} style={{ flexShrink: 0 }} />
            <span>LAST DATE TO APPLY: AUGUST 10</span>
          </div>

          {/* Email Container & Action Buttons */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            maxWidth: '580px',
            margin: '0 auto',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              padding: '0.65rem 0.85rem',
              border: '2px solid var(--color-gold)',
              boxSizing: 'border-box',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', minWidth: 0, flex: 1 }}>
                <Mail size={18} color="var(--color-navy)" style={{ flexShrink: 0 }} />
                <span style={{
                  fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
                  fontWeight: 700,
                  color: 'var(--color-navy-dark)',
                  wordBreak: 'break-all'
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
                  gap: '0.35rem',
                  padding: '0.4rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: copied ? '#22c55e' : 'var(--color-bg-light)',
                  color: copied ? '#FFFFFF' : 'var(--color-navy)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  border: '1px solid var(--color-border)',
                  flexShrink: 0
                }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem', width: '100%', flexWrap: 'wrap' }}>
              <a 
                href={`mailto:${email}?subject=Application%20for%20Executive%20Position%20-%20ILM%20Career%20Consultancy`}
                className="btn btn-primary btn-lg"
                style={{ flex: 1, minWidth: '220px' }}
              >
                <Send size={18} />
                <span>Send Your CV via Email</span>
              </a>

              <button 
                onClick={() => navigateTo('screening-exam-reg')}
                className="btn btn-outline-gold btn-lg"
                style={{ flex: 1, minWidth: '220px' }}
              >
                <span>Interactive Registration</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

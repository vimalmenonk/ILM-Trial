import React from 'react';
import { useApp } from '../context/AppContext';
import { Compass, Briefcase, ArrowRight, MapPin, Calendar, CheckCircle2, UserCheck, Sparkles } from 'lucide-react';

export default function Hero() {
  const { navigateTo } = useApp();

  return (
    <section 
      id="home"
      style={{
        backgroundColor: 'var(--color-navy)',
        color: 'var(--color-white)',
        padding: '5rem 0 6rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '4px solid var(--color-gold)'
      }}
    >
      {/* Radial Gold Background Gradient */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(11, 27, 61, 0) 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '3.5rem',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Column */}
          <div className="animate-fade-in">
            
            {/* Tagline Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.5rem 1.1rem',
              backgroundColor: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid var(--color-gold)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--color-gold)',
              fontWeight: 800,
              fontSize: '0.88rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              <Sparkles size={16} />
              <span>INTEGRITY • LEARNING • MASTERY</span>
            </div>

            {/* Poster Headline */}
            <h1 style={{
              fontSize: '3.2rem',
              fontWeight: 800,
              color: 'var(--color-white)',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em'
            }}>
              BUILD CAREERS. <br />
              <span style={{ color: 'var(--color-gold)' }}>
                SHAPE FUTURES.
              </span>
            </h1>

            <p style={{
              fontSize: '1.15rem',
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '560px',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              Welcome to <strong>ILM Career Consultancy</strong>. Explore guided academic course matching, complete the 2-Step Screening Assessment within your 14-day completion window, and earn verified certificates.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.15rem',
              marginBottom: '2.5rem'
            }}>
              <button 
                onClick={() => navigateTo('course-finder')}
                className="btn btn-primary btn-lg"
              >
                <Compass size={20} />
                <span>Launch Course Finder</span>
              </button>

              <button 
                onClick={() => navigateTo('screening-exam-reg')}
                className="btn btn-outline-gold btn-lg"
              >
                <span>Start Screening Exam</span>
                <ArrowRight size={20} />
              </button>

              <button 
                onClick={() => navigateTo('student-login')}
                className="btn btn-navy"
                style={{ border: '1px solid var(--color-gold)' }}
              >
                <UserCheck size={18} />
                <span>Student Login Portal</span>
              </button>
            </div>

            {/* Key Quick Highlights */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.75rem',
              paddingTop: '1.75rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.15)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={18} color="var(--color-gold)" />
                <span style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 600 }}>
                  Guided 3-Step Course Finder
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Calendar size={18} color="var(--color-gold)" />
                <span style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 600 }}>
                  14-Day Completion Window
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <MapPin size={18} color="var(--color-gold)" />
                <span style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 600 }}>
                  4 Kerala Districts Covered
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Portal Showcase Card */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: '2.25rem',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.35)',
              border: '2px solid var(--color-gold)',
              color: 'var(--color-navy-dark)'
            }}>
              <div style={{
                textAlign: 'center',
                borderBottom: '2px solid var(--color-bg-light)',
                paddingBottom: '1.25rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--color-gold-dark)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                  ILMI SYSTEM USER JOURNEY
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-navy)', marginTop: '0.2rem' }}>
                  Complete Student Flow
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                {[
                  '1. Guided Course Finder',
                  '2. Course Information & Requirements',
                  '3. Candidate Registration Form',
                  '4. Screening Exam Fee Payment',
                  '5. Student Portal & 14-Day Countdown',
                  '6. Exam 1 & Final Assessment Simulator',
                  '7. Result Reports & QR Verification'
                ].map((step) => (
                  <div key={step} style={{
                    padding: '0.65rem 0.95rem',
                    backgroundColor: 'var(--color-bg-light)',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 700,
                    color: 'var(--color-navy)',
                    borderLeft: '3px solid var(--color-gold)'
                  }}>
                    {step}
                  </div>
                ))}
              </div>

              <button 
                onClick={() => navigateTo('course-finder')}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <span>Start User Journey Now</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

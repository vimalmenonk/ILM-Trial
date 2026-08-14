import React from 'react';
import { ShieldCheck, BookOpen, Award, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      title: 'INTEGRITY',
      subtitle: 'Ethical & Transparent Standards',
      description: 'Upholding unwavering honesty, transparency, and ethical commitment in every student relationship and career advisory step.',
      icon: ShieldCheck,
    },
    {
      title: 'LEARNING',
      subtitle: 'Continuous Skill Enhancement',
      description: 'Fostering a culture of continuous learning, comprehensive guidance, and educational excellence to prepare individuals for tomorrow.',
      icon: BookOpen,
    },
    {
      title: 'MASTERY',
      subtitle: 'Excellence in Execution',
      description: 'Striving for mastery across career mentorship, student dataset management, and impactful district-level engagement.',
      icon: Award,
    },
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={14} />
            <span>ABOUT ILM CAREER CONSULTANCY</span>
          </div>
          <h2 className="section-title">
            Guided by Our Core Values
          </h2>
          <p className="section-subtitle">
            ILM Career Consultancy is built upon three foundational pillars that define our mission, work ethic, and professional commitment across Kerala.
          </p>
          <div className="gold-divider" />
        </div>

        {/* 3 Pillars Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3.5rem'
        }}>
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div 
                key={pillar.title}
                style={{
                  backgroundColor: 'var(--color-bg-light)',
                  padding: '2.5rem 2rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
                className="about-card"
              >
                {/* Pillar Icon Badge */}
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-navy)',
                  color: 'var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <IconComponent size={28} />
                </div>

                <div style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: 'var(--color-gold-dark)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '0.25rem'
                }}>
                  PILLAR 0{idx + 1}
                </div>

                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  color: 'var(--color-navy)',
                  marginBottom: '0.4rem'
                }}>
                  {pillar.title}
                </h3>

                <div style={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--color-text-muted)',
                  marginBottom: '1rem'
                }}>
                  {pillar.subtitle}
                </div>

                <p style={{
                  fontSize: '0.96rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.65,
                  marginTop: 'auto'
                }}>
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Client Content Placeholder Container */}
        <div style={{
          backgroundColor: 'var(--color-gold-light)',
          border: '2px dashed var(--color-gold-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h4 style={{
            color: 'var(--color-navy)',
            fontSize: '1.25rem',
            fontWeight: 700,
            marginBottom: '0.5rem'
          }}>
            Organisation Profile & Detailed Background
          </h4>
          <p style={{
            color: 'var(--color-navy-dark)',
            fontSize: '0.95rem',
            opacity: 0.85,
            lineHeight: 1.6
          }}>
            Detailed organizational overview, institutional mission statements, and accredited program details will be updated as official documentation is published by ILM leadership.
          </p>
        </div>

      </div>

      <style>{`
        .about-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-gold) !important;
        }
      `}</style>
    </section>
  );
}

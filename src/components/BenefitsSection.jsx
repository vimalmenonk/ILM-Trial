import React from 'react';
import { Trophy, TrendingUp, MapPin, Sparkles } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      id: 'incentives',
      title: 'Performance Incentives',
      description: 'Attractive performance-based financial incentives rewarding milestone achievements and quality data outcomes.',
      icon: Trophy,
    },
    {
      id: 'growth',
      title: 'Training & Career Growth',
      description: 'Structured onboarding, skills training, and continuous mentorship fostering professional development and upward mobility.',
      icon: TrendingUp,
    },
    {
      id: 'district',
      title: 'Flexible Work in Your District',
      description: 'Work conveniently within your home district (Kasaragod, Kannur, Wayanad, or Kozhikode) with flexible schedule arrangements.',
      icon: MapPin,
    },
  ];

  return (
    <section id="benefits" className="section bg-navy" style={{ color: 'var(--color-white)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            background: 'rgba(212, 175, 55, 0.15)',
            border: '1px solid var(--color-gold)',
            color: 'var(--color-gold)',
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            borderRadius: 'var(--radius-full)',
            marginBottom: '1rem'
          }}>
            <Sparkles size={14} />
            <span>WHAT WE OFFER</span>
          </div>

          <h2 className="section-title" style={{ color: 'var(--color-white)' }}>
            Official Employee Benefits
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
            Key advantages explicitly provided to executives joining ILM Career Consultancy.
          </p>
          <div className="gold-divider" />
        </div>

        {/* 3 Horizontal Benefit Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {benefits.map((b) => {
            const IconComponent = b.icon;
            return (
              <div 
                key={b.id}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2.25rem',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start'
                }}
                className="benefit-card"
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-gold)',
                  color: 'var(--color-navy-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: 'var(--shadow-gold)'
                }}>
                  <IconComponent size={28} />
                </div>

                <div style={{
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  color: 'var(--color-gold)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem'
                }}>
                  BENEFIT
                </div>

                <h3 style={{
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: 'var(--color-white)',
                  marginBottom: '0.75rem'
                }}>
                  {b.title}
                </h3>

                <p style={{
                  fontSize: '0.96rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.65
                }}>
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .benefit-card:hover {
          transform: translateY(-5px);
          background-color: rgba(255, 255, 255, 0.09) !important;
          border-color: var(--color-gold) !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
}

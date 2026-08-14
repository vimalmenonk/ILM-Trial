import React from 'react';
import { Database, UserCheck, UserPlus, Compass, Sparkles } from 'lucide-react';

export default function WhatYouWillDo() {
  const responsibilities = [
    {
      step: '01',
      title: 'Collect Student Data',
      description: 'Systematically gather essential student contact and educational details across your designated district.',
      icon: Database,
    },
    {
      step: '02',
      title: 'Connect with Students & Parents',
      description: 'Engage in clear, empathetic communication with students and parents to understand educational aspirations.',
      icon: UserCheck,
    },
    {
      step: '03',
      title: 'Register Students',
      description: 'Seamlessly assist eligible students with registration procedures and documentation onboarding.',
      icon: UserPlus,
    },
    {
      step: '04',
      title: 'Guide & Follow Up',
      description: 'Provide continuous guidance, track candidate progress, and maintain follow-up records to ensure success.',
      icon: Compass,
    },
  ];

  return (
    <section id="responsibilities" className="section bg-white">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={14} />
            <span>ROLE OVERVIEW</span>
          </div>
          <h2 className="section-title">
            What You Will Do
          </h2>
          <p className="section-subtitle">
            Core duties performed by ILM district executives, derived directly from our recruitment specifications.
          </p>
          <div className="gold-divider" />
        </div>

        {/* 4 Responsibilities Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.75rem'
        }}>
          {responsibilities.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.step}
                style={{
                  backgroundColor: 'var(--color-bg-light)',
                  padding: '2.25rem 1.75rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease'
                }}
                className="do-card"
              >
                {/* Step Pill */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-navy)',
                    color: 'var(--color-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    <IconComponent size={24} />
                  </div>

                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: 'var(--color-gold)',
                    opacity: 0.8
                  }}>
                    {item.step}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 800,
                  color: 'var(--color-navy)',
                  marginBottom: '0.6rem'
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '0.94rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.6
                }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .do-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-gold) !important;
          background-color: #FFFFFF !important;
        }
      `}</style>
    </section>
  );
}

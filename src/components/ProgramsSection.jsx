import React from 'react';
import { useApp } from '../context/AppContext';
import { BookOpen, GraduationCap, Award, ArrowRight, Sparkles } from 'lucide-react';

export default function ProgramsSection() {
  const { coursesCatalog, navigateTo } = useApp();

  return (
    <section id="programs" className="section bg-white">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={14} />
            <span>ACADEMIC & CAREER PATHS</span>
          </div>
          <h2 className="section-title">
            ILMI Academic Programs
          </h2>
          <p className="section-subtitle">
            Explore structured professional courses, diplomas, and certification programs available through ILMI.
          </p>
          <div className="gold-divider" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {coursesCatalog.map((program) => (
            <div 
              key={program.id}
              style={{
                backgroundColor: 'var(--color-bg-light)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.25rem',
                border: '1px solid var(--color-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
              className="program-card"
            >
              <div>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  backgroundColor: 'var(--color-navy)',
                  color: 'var(--color-gold)',
                  padding: '0.3rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  display: 'inline-block',
                  marginBottom: '1rem'
                }}>
                  {program.category}
                </span>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                  {program.title}
                </h3>

                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {program.description}
                </p>

                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '1.5rem' }}>
                  • Required Qualification: {program.qualificationReq}<br />
                  • Duration: {program.duration}<br />
                  • Screening Assessment: 2 Steps Included
                </div>
              </div>

              <button 
                onClick={() => navigateTo('course-info', { course: program })}
                className="btn btn-navy"
                style={{ width: '100%' }}
              >
                <span>View Program Details</span>
                <ArrowRight size={16} />
              </button>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .program-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-gold) !important;
          background-color: #FFFFFF !important;
        }
      `}</style>
    </section>
  );
}

import React from 'react';
import { useApp } from '../context/AppContext';
import { Users, TrendingUp, ClipboardList, MapPin, Mail, ArrowRight, Sparkles } from 'lucide-react';

export default function RecruitmentSection() {
  const { navigateTo } = useApp();

  return (
    <section id="careers" className="section bg-white">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={14} />
            <span>DISTRICT RECRUITMENT INITIATIVE</span>
          </div>
          <h2 className="section-title">
            Executive Career Opportunities
          </h2>
          <p className="section-subtitle">
            Recruitment notice for Student Relationship, Sales, and Data Collection Executives across Kasaragod, Kannur, Wayanad, and Kozhikode.
          </p>
          <div className="gold-divider" />
        </div>

        {/* 3 Executive Positions */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.75rem',
          marginBottom: '3rem',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          {[
            {
              title: 'Student Relationship Executive',
              icon: Users,
              desc: 'Connect with students & parents, guide career options, register applicants, and maintain relationship touchpoints.'
            },
            {
              title: 'Sales Executive',
              icon: TrendingUp,
              desc: 'Drive district outreach, communicate ILMI program value, and achieve performance incentive milestones.'
            },
            {
              title: 'Data Collection Executive',
              icon: ClipboardList,
              desc: 'Systematically collect student data, organize demographic records, and utilize smartphone & WhatsApp reporting.'
            }
          ].map((pos) => {
            const IconComp = pos.icon;
            return (
              <div 
                key={pos.title}
                style={{
                  backgroundColor: 'var(--color-bg-light)',
                  padding: '2rem 1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  width: '100%',
                  boxSizing: 'border-box'
                }}
              >
                <div>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-navy)',
                    color: 'var(--color-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.15rem'
                  }}>
                    <IconComp size={24} />
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem', wordBreak: 'break-word' }}>
                    {pos.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                    {pos.desc}
                  </p>
                </div>

                <button 
                  onClick={() => navigateTo('screening-exam-reg')}
                  className="btn btn-outline"
                  style={{ width: '100%', boxSizing: 'border-box' }}
                >
                  <span>Apply via Screening Exam</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

        {/* District Locations Strip (Fixes Screenshot 5 Email & Text Overlap) */}
        <div style={{
          backgroundColor: 'var(--color-navy)',
          color: '#FFFFFF',
          padding: '2.25rem 1.5rem',
          borderRadius: 'var(--radius-lg)',
          border: '2px solid var(--color-gold)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          overflow: 'hidden'
        }}>
          <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--color-gold)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.25rem' }}>
              DISTRICT COVERAGE
            </div>
            <div style={{
              fontSize: 'clamp(1.05rem, 3.5vw, 1.3rem)',
              fontWeight: 800,
              lineHeight: 1.4,
              wordBreak: 'break-word'
            }}>
              Kasaragod | Kannur | Wayanad | Kozhikode
            </div>
          </div>

          <a 
            href="mailto:ilmconsultancy2026@gmail.com"
            className="btn btn-primary"
            style={{
              width: '100%',
              maxWidth: '360px',
              boxSizing: 'border-box',
              wordBreak: 'break-all',
              whiteSpace: 'normal',
              justifyContent: 'center',
              fontSize: '0.88rem',
              padding: '0.8rem 1rem'
            }}
          >
            <Mail size={16} style={{ flexShrink: 0 }} />
            <span>Send CV: ilmconsultancy2026@gmail.com</span>
          </a>
        </div>

      </div>
    </section>
  );
}

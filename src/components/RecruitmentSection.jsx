import React from 'react';
import { useApp } from '../context/AppContext';
import { Users, TrendingUp, ClipboardList, MapPin, Trophy, ArrowRight, Sparkles } from 'lucide-react';

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
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3.5rem'
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
                  padding: '2.25rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-navy)',
                    color: 'var(--color-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}>
                    <IconComp size={26} />
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.65rem' }}>
                    {pos.title}
                  </h3>

                  <p style={{ fontSize: '0.94rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {pos.desc}
                  </p>
                </div>

                <button 
                  onClick={() => navigateTo('screening-exam-reg')}
                  className="btn btn-outline"
                  style={{ width: '100%' }}
                >
                  <span>Apply via Screening Exam</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

        {/* District Locations Strip */}
        <div style={{
          backgroundColor: 'var(--color-navy)',
          color: '#FFFFFF',
          padding: '2rem',
          borderRadius: 'var(--radius-lg)',
          border: '2px solid var(--color-gold)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-gold)', fontWeight: 800, textTransform: 'uppercase' }}>
              DISTRICT COVERAGE
            </div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>
              Kasaragod | Kannur | Wayanad | Kozhikode
            </div>
          </div>

          <a 
            href="mailto:ilmconsultancy2026@gmail.com"
            className="btn btn-primary"
          >
            <span>Send CV: ilmconsultancy2026@gmail.com</span>
          </a>
        </div>

      </div>
    </section>
  );
}

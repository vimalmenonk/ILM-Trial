import React, { useState } from 'react';
import { Users, TrendingUp, ClipboardList, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import OpportunityModal from './OpportunityModal';

export default function OpportunitiesSection({ onApplyPosition }) {
  const [selectedPosition, setSelectedPosition] = useState(null);

  const positions = [
    {
      id: 'student-relationship-executive',
      title: 'Student Relationship Executive',
      shortDescription: 'Engage directly with prospective students and parents, offering educational guidance, registration support, and structured follow-ups.',
      icon: Users,
      badge: 'Primary Career Path',
      responsibilities: [
        'Connect with Students & Parents',
        'Guide & Follow Up on career paths',
        'Register Students for ILM initiatives',
        'Maintain positive student relationship touchpoints'
      ],
      eligibility: 'Plus Two / Degree / Freshers',
    },
    {
      id: 'sales-executive',
      title: 'Sales Executive',
      shortDescription: 'Drive outreach, communicate career development opportunities, and register interested candidates across target district sectors.',
      icon: TrendingUp,
      badge: 'District Outreach',
      responsibilities: [
        'Promote ILM career & education guidance opportunities',
        'Connect with prospective students and families',
        'Register qualified candidates into programs',
        'Achieve performance incentive milestones'
      ],
      eligibility: 'Plus Two / Degree / Freshers',
    },
    {
      id: 'data-collection-executive',
      title: 'Data Collection Executive',
      shortDescription: 'Gather and systematically organize student demographic data across designated districts to build reliable educational databases.',
      icon: ClipboardList,
      badge: 'Data & Analytics',
      responsibilities: [
        'Collect Student Data accurately',
        'Organize student records using mobile & WhatsApp tools',
        'Connect with parents and verify applicant details',
        'Guide candidates through registration procedures'
      ],
      eligibility: 'Plus Two / Degree / Freshers',
    },
  ];

  return (
    <section id="opportunities" className="section bg-light">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={14} />
            <span>POSITIONS AVAILABLE</span>
          </div>
          <h2 className="section-title">
            Career Opportunities at ILM
          </h2>
          <p className="section-subtitle">
            Explore active recruitment openings. We welcome ambitious freshers, Plus Two graduates, and degree holders across 4 Kerala districts.
          </p>
          <div className="gold-divider" />
        </div>

        {/* 3 Positions Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
          gap: '2rem'
        }}>
          {positions.map((pos) => {
            const IconComponent = pos.icon;
            return (
              <div 
                key={pos.id}
                style={{
                  backgroundColor: 'var(--color-white)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2.25rem',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                className="opportunity-card"
              >
                <div>
                  {/* Icon & Category Tag */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem'
                  }}>
                    <div style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-gold-light)',
                      border: '1px solid var(--color-gold-border)',
                      color: 'var(--color-navy)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <IconComponent size={26} color="var(--color-navy)" />
                    </div>

                    <span style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      backgroundColor: 'var(--color-bg-light)',
                      color: 'var(--color-navy)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)'
                    }}>
                      {pos.badge}
                    </span>
                  </div>

                  {/* Position Title */}
                  <h3 style={{
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    color: 'var(--color-navy)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.3
                  }}>
                    {pos.title}
                  </h3>

                  {/* Short Description */}
                  <p style={{
                    fontSize: '0.95rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem'
                  }}>
                    {pos.shortDescription}
                  </p>

                  {/* Quick Highlights */}
                  <div style={{
                    borderTop: '1px dashed var(--color-border)',
                    paddingTop: '1rem',
                    marginBottom: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}>
                      <CheckCircle2 size={16} color="var(--color-gold-dark)" />
                      <span><strong>Eligibility:</strong> Plus Two / Degree / Freshers</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}>
                      <CheckCircle2 size={16} color="var(--color-gold-dark)" />
                      <span><strong>Tools:</strong> Smartphone & WhatsApp</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <button 
                    onClick={() => setSelectedPosition(pos)}
                    className="btn btn-outline"
                    style={{ flex: 1, fontSize: '0.9rem', padding: '0.75rem' }}
                  >
                    <span>View Details</span>
                  </button>

                  <button 
                    onClick={() => onApplyPosition(pos.title)}
                    className="btn btn-primary"
                    style={{ flex: 1, fontSize: '0.9rem', padding: '0.75rem' }}
                  >
                    <span>Apply</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Detailed Modal View */}
        {selectedPosition && (
          <OpportunityModal 
            position={selectedPosition}
            onClose={() => setSelectedPosition(null)}
            onApply={onApplyPosition}
          />
        )}

      </div>

      <style>{`
        .opportunity-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-gold) !important;
        }
      `}</style>
    </section>
  );
}

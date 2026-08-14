import React from 'react';
import { MapPin, Navigation, Sparkles } from 'lucide-react';

export default function LocationsSection() {
  const locations = [
    {
      name: 'KASARAGOD',
      code: 'KSD',
      tagline: 'Northern Kerala Recruitment District',
      description: 'Active district operations for student relationship, sales, and field data collection executives.',
    },
    {
      name: 'KANNUR',
      code: 'KNR',
      tagline: 'Malabar Regional Hub',
      description: 'Strategic district center for executive outreach, student registration, and parent guidance.',
    },
    {
      name: 'WAYANAD',
      code: 'WND',
      tagline: 'Highland Career Zone',
      description: 'Flexible district positions facilitating student data collection and career advisory.',
    },
    {
      name: 'KOZHIKODE',
      code: 'KKD',
      tagline: 'Major Academic Center',
      description: 'Key district recruitment for sales executives and relationship management specialists.',
    },
  ];

  return (
    <section id="locations" className="section bg-light">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={14} />
            <span>OPERATIONAL DISTRICTS</span>
          </div>
          <h2 className="section-title">
            Our Recruitment Locations
          </h2>
          <p className="section-subtitle">
            Executive positions are currently open across 4 key Kerala districts. Work flexibly within your home district.
          </p>
          <div className="gold-divider" />
        </div>

        {/* 4 Districts Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.75rem'
        }}>
          {locations.map((loc) => (
            <div 
              key={loc.name}
              style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem 1.75rem',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}
              className="location-card"
            >
              {/* Header Badge */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.25rem'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-gold-light)',
                  border: '1px solid var(--color-gold-border)',
                  color: 'var(--color-navy)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MapPin size={24} color="var(--color-navy)" />
                </div>

                <span style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  backgroundColor: 'var(--color-navy)',
                  color: 'var(--color-gold)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--radius-sm)'
                }}>
                  {loc.code}
                </span>
              </div>

              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                color: 'var(--color-navy)',
                marginBottom: '0.25rem',
                letterSpacing: '0.5px'
              }}>
                {loc.name}
              </h3>

              <div style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--color-gold-dark)',
                marginBottom: '0.85rem'
              }}>
                {loc.tagline}
              </div>

              <p style={{
                fontSize: '0.94rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
                marginTop: 'auto'
              }}>
                {loc.description}
              </p>

              <div style={{
                marginTop: '1.25rem',
                paddingTop: '0.85rem',
                borderTop: '1px dashed var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--color-navy)'
              }}>
                <Navigation size={14} color="var(--color-gold-dark)" />
                <span>District Coverage Active</span>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .location-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-gold) !important;
        }
      `}</style>
    </section>
  );
}

import React from 'react';
import { X, CheckCircle, Mail, MapPin, Smartphone, GraduationCap, ArrowRight } from 'lucide-react';

export default function OpportunityModal({ position, onClose, onApply }) {
  if (!position) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          maxWidth: '620px',
          width: '100%',
          padding: '2.5rem',
          position: 'relative',
          boxShadow: 'var(--shadow-lg)',
          border: '2px solid var(--color-gold)',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            backgroundColor: 'var(--color-bg-light)',
            border: '1px solid var(--color-border)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-navy)',
            transition: 'all 0.2s ease'
          }}
        >
          <X size={20} />
        </button>

        {/* Position Header */}
        <div style={{ marginBottom: '1.5rem', paddingRight: '2rem' }}>
          <span style={{
            fontSize: '0.8rem',
            fontWeight: 800,
            color: 'var(--color-gold-dark)',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            display: 'inline-block',
            marginBottom: '0.4rem'
          }}>
            RECRUITMENT POSITION
          </span>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-navy)' }}>
            {position.title}
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginTop: '0.35rem' }}>
            ILM Career Consultancy • District Level Executive Role
          </p>
        </div>

        {/* Responsibilities */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.85rem' }}>
            Key Responsibilities
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {position.responsibilities.map((resp) => (
              <div key={resp} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle size={18} color="var(--color-gold-dark)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span style={{ fontSize: '0.96rem', color: 'var(--color-text-dark)', fontWeight: 500 }}>
                  {resp}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.85rem' }}>
            Eligibility & Requirements
          </h4>
          <div style={{ 
            backgroundColor: 'var(--color-bg-light)', 
            padding: '1.25rem', 
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <GraduationCap size={20} color="var(--color-navy)" />
              <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Qualification: Plus Two / Degree / Freshers</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Smartphone size={20} color="var(--color-navy)" />
              <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Tools: Smartphone & WhatsApp Required</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <MapPin size={20} color="var(--color-navy)" />
              <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Districts: Kasaragod, Kannur, Wayanad, Kozhikode</span>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.85rem' }}>
            Benefits Offered
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {['Performance Incentives', 'Training & Career Growth', 'Flexible Work in Your District'].map((b) => (
              <span key={b} style={{
                fontSize: '0.88rem',
                fontWeight: 700,
                backgroundColor: 'var(--color-gold-light)',
                color: 'var(--color-navy)',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-gold-border)'
              }}>
                ✓ {b}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button 
            className="btn btn-primary btn-lg"
            onClick={() => {
              onClose();
              onApply(position.title);
            }}
            style={{ flex: 1 }}
          >
            <Mail size={18} />
            <span>Apply Now — Send CV</span>
          </button>
          <button 
            className="btn btn-outline"
            onClick={onClose}
          >
            <span>Close</span>
          </button>
        </div>

      </div>
    </div>
  );
}

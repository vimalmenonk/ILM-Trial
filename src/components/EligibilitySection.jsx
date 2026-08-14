import React, { useState } from 'react';
import { GraduationCap, MessageSquare, Smartphone, Check, Sparkles, AlertCircle } from 'lucide-react';

export default function EligibilitySection() {
  // Interactive Eligibility Checker state
  const [eduSelected, setEduSelected] = useState('');
  const [hasPhone, setHasPhone] = useState(null);
  const [hasComm, setHasComm] = useState(null);
  const [checkResult, setCheckResult] = useState(null);

  const criteria = [
    {
      title: 'Educational Qualification',
      highlight: 'Plus Two / Degree / Freshers',
      description: 'Open to Plus Two pass-outs, diploma holders, fresh graduates, and experienced candidates.',
      icon: GraduationCap,
    },
    {
      title: 'Communication Ability',
      highlight: 'Good Communication Skills',
      description: 'Proficiency in interacting clearly, respectfully, and effectively with students and parents.',
      icon: MessageSquare,
    },
    {
      title: 'Required Technology Tools',
      highlight: 'Smartphone & WhatsApp Required',
      description: 'Active smartphone access with WhatsApp connectivity for field reporting and student data entry.',
      icon: Smartphone,
    },
  ];

  const handleEvaluateEligibility = (e) => {
    e.preventDefault();
    if (!eduSelected || hasPhone === null || hasComm === null) {
      setCheckResult({
        eligible: false,
        message: 'Please answer all 3 questions to check your eligibility status.'
      });
      return;
    }

    if (hasPhone && hasComm) {
      setCheckResult({
        eligible: true,
        message: 'Congratulations! You meet all eligibility criteria for ILM Career Consultancy executive positions.'
      });
    } else {
      setCheckResult({
        eligible: false,
        message: 'Good communication skills and an active smartphone with WhatsApp are required for this role.'
      });
    }
  };

  return (
    <section id="eligibility" className="section bg-light">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={14} />
            <span>REQUIREMENTS</span>
          </div>
          <h2 className="section-title">
            Eligibility Criteria
          </h2>
          <p className="section-subtitle">
            Review the explicit requirements stated in our official recruitment notice.
          </p>
          <div className="gold-divider" />
        </div>

        {/* 3 Criteria Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {criteria.map((c) => {
            const IconComponent = c.icon;
            return (
              <div 
                key={c.title}
                style={{
                  backgroundColor: 'var(--color-white)',
                  padding: '2.25rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start'
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-navy)',
                  color: 'var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  <IconComponent size={26} />
                </div>

                <div style={{
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  color: 'var(--color-gold-dark)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '0.3rem'
                }}>
                  REQUIREMENT
                </div>

                <h3 style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: 'var(--color-navy)',
                  marginBottom: '0.5rem'
                }}>
                  {c.title}
                </h3>

                <div style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--color-navy-light)',
                  backgroundColor: 'var(--color-gold-light)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '0.85rem',
                  borderLeft: '3px solid var(--color-gold)'
                }}>
                  {c.highlight}
                </div>

                <p style={{
                  fontSize: '0.94rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.6
                }}>
                  {c.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Eligibility Quick-Check Box */}
        <div style={{
          backgroundColor: 'var(--color-navy)',
          color: 'var(--color-white)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          maxWidth: '850px',
          margin: '0 auto',
          boxShadow: 'var(--shadow-md)',
          border: '2px solid var(--color-gold)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <h3 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', fontWeight: 800 }}>
              Instant Eligibility Self-Checker
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.95rem', marginTop: '0.35rem' }}>
              Select your status below to verify if you qualify for immediate CV submission.
            </p>
          </div>

          <form onSubmit={handleEvaluateEligibility} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Question 1 */}
            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '0.94rem', marginBottom: '0.5rem' }}>
                1. What is your highest qualification?
              </label>
              <select 
                value={eduSelected}
                onChange={(e) => setEduSelected(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-gold-border)',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  color: 'var(--color-navy-dark)',
                  fontSize: '0.95rem',
                  fontWeight: 600
                }}
              >
                <option value="">-- Select Qualification --</option>
                <option value="plus-two">Plus Two / Higher Secondary</option>
                <option value="degree">Degree / Diploma</option>
                <option value="fresher">Fresh Graduate / Fresher</option>
              </select>
            </div>

            {/* Question 2 */}
            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '0.94rem', marginBottom: '0.5rem' }}>
                2. Do you have a Smartphone with WhatsApp?
              </label>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  type="button"
                  onClick={() => setHasPhone(true)}
                  style={{
                    flex: 1,
                    padding: '0.65rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-gold)',
                    backgroundColor: hasPhone === true ? 'var(--color-gold)' : 'transparent',
                    color: hasPhone === true ? 'var(--color-navy-dark)' : 'var(--color-white)',
                    fontWeight: 700
                  }}
                >
                  Yes, Required Smartphone Available
                </button>
                <button
                  type="button"
                  onClick={() => setHasPhone(false)}
                  style={{
                    flex: 1,
                    padding: '0.65rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    backgroundColor: hasPhone === false ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                    color: 'var(--color-white)',
                    fontWeight: 600
                  }}
                >
                  No
                </button>
              </div>
            </div>

            {/* Question 3 */}
            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '0.94rem', marginBottom: '0.5rem' }}>
                3. Do you have good interpersonal & communication skills?
              </label>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  type="button"
                  onClick={() => setHasComm(true)}
                  style={{
                    flex: 1,
                    padding: '0.65rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-gold)',
                    backgroundColor: hasComm === true ? 'var(--color-gold)' : 'transparent',
                    color: hasComm === true ? 'var(--color-navy-dark)' : 'var(--color-white)',
                    fontWeight: 700
                  }}
                >
                  Yes, Confident Communicator
                </button>
                <button
                  type="button"
                  onClick={() => setHasComm(false)}
                  style={{
                    flex: 1,
                    padding: '0.65rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    backgroundColor: hasComm === false ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                    color: 'var(--color-white)',
                    fontWeight: 600
                  }}
                >
                  No
                </button>
              </div>
            </div>

            <button 
              type="submit"
              className="btn btn-primary btn-lg"
              style={{ marginTop: '0.5rem', width: '100%' }}
            >
              Verify Eligibility Status
            </button>
          </form>

          {/* Feedback Display */}
          {checkResult && (
            <div style={{
              marginTop: '1.5rem',
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: checkResult.eligible ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.2)',
              border: `1px solid ${checkResult.eligible ? '#22c55e' : '#ef4444'}`,
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem'
            }}>
              {checkResult.eligible ? (
                <Check size={24} color="#22c55e" />
              ) : (
                <AlertCircle size={24} color="#ef4444" />
              )}
              <span style={{ fontSize: '0.96rem', fontWeight: 600 }}>
                {checkResult.message}
              </span>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

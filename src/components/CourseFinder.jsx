import React from 'react';
import { useApp } from '../context/AppContext';
import { Compass, GraduationCap, Target, ArrowRight, Sparkles, RefreshCw } from 'lucide-react';

export default function CourseFinder() {
  const { 
    finderStep1Goal, setFinderStep1Goal,
    finderStep2Edu, setFinderStep2Edu,
    finderStep3Interest, setFinderStep3Interest,
    coursesCatalog, navigateTo
  } = useApp();

  const goals = [
    'Professional Course',
    'Degree / Academic Program',
    'Career-oriented Program',
    'Skill Development',
    'Certification'
  ];

  const qualifications = [
    '+2',
    'Degree',
    'PG',
    'Professional Qualification',
    'Other'
  ];

  const interests = [
    'Finance',
    'Accounting',
    'Business',
    'Management',
    'Technology',
    'Law',
    'Other'
  ];

  // Filtering matching courses based on selection or showing catalog
  const filteredCourses = coursesCatalog.filter(course => {
    let match = true;
    if (finderStep1Goal && course.category !== finderStep1Goal) {
      if (!course.category.toLowerCase().includes(finderStep1Goal.toLowerCase().split(' ')[0])) {
        match = false;
      }
    }
    if (finderStep2Edu && course.qualificationReq !== finderStep2Edu) {
      if (finderStep2Edu !== 'Other' && course.qualificationReq !== finderStep2Edu) {
        match = false;
      }
    }
    if (finderStep3Interest && course.interestArea !== finderStep3Interest) {
      if (finderStep3Interest !== 'Other' && course.interestArea !== finderStep3Interest) {
        match = false;
      }
    }
    return match;
  });

  const activeMatches = (finderStep1Goal || finderStep2Edu || finderStep3Interest) 
    ? filteredCourses 
    : coursesCatalog;

  const handleReset = () => {
    setFinderStep1Goal('');
    setFinderStep2Edu('');
    setFinderStep3Interest('');
  };

  return (
    <section id="course-finder" className="section bg-light">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={14} />
            <span>MAIN FEATURE • ILMI SYSTEM</span>
          </div>
          <h2 className="section-title">
            Guided Course Finder
          </h2>
          <p className="section-subtitle">
            Find the ideal academic program or professional certification tailored to your qualification and career goals.
          </p>
          <div className="gold-divider" />
        </div>

        {/* 3-Step Guided Selection Container (Fixes Screenshot 3 Overflow) */}
        <div style={{
          backgroundColor: 'var(--color-navy)',
          color: 'var(--color-white)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.25rem 1.5rem',
          boxShadow: 'var(--shadow-lg)',
          border: '2px solid var(--color-gold)',
          marginBottom: '3rem',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.75rem',
            flexWrap: 'wrap',
            gap: '1rem',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            <div>
              <h3 style={{ color: 'var(--color-gold)', fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)', fontWeight: 800 }}>
                3-Step Guided Program Matcher
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                Select options across the three steps to view recommended programs.
              </p>
            </div>

            {(finderStep1Goal || finderStep2Edu || finderStep3Interest) && (
              <button 
                onClick={handleReset}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid var(--color-gold)',
                  color: 'var(--color-gold)',
                  padding: '0.45rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.82rem',
                  fontWeight: 700
                }}
              >
                <RefreshCw size={14} />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            
            {/* Step 1 */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              padding: '1.25rem 1rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                <Compass size={18} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--color-gold)', letterSpacing: '1px' }}>
                  STEP 1 — PROGRAM GOAL
                </span>
              </div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.98rem', fontWeight: 700, marginBottom: '0.85rem' }}>
                What are you looking for?
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', width: '100%' }}>
                {goals.map((g) => (
                  <button
                    key={g}
                    onClick={() => setFinderStep1Goal(finderStep1Goal === g ? '' : g)}
                    style={{
                      textAlign: 'left',
                      padding: '0.6rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      backgroundColor: finderStep1Goal === g ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.08)',
                      color: finderStep1Goal === g ? 'var(--color-navy-dark)' : 'rgba(255, 255, 255, 0.9)',
                      border: '1px solid ' + (finderStep1Goal === g ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.15)'),
                      transition: 'all 0.2s ease',
                      width: '100%',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      boxSizing: 'border-box'
                    }}
                  >
                    {finderStep1Goal === g ? '✓ ' : ''}{g}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              padding: '1.25rem 1rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                <GraduationCap size={18} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--color-gold)', letterSpacing: '1px' }}>
                  STEP 2 — QUALIFICATION
                </span>
              </div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.98rem', fontWeight: 700, marginBottom: '0.85rem' }}>
                Educational Qualification
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', width: '100%' }}>
                {qualifications.map((q) => (
                  <button
                    key={q}
                    onClick={() => setFinderStep2Edu(finderStep2Edu === q ? '' : q)}
                    style={{
                      textAlign: 'left',
                      padding: '0.6rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      backgroundColor: finderStep2Edu === q ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.08)',
                      color: finderStep2Edu === q ? 'var(--color-navy-dark)' : 'rgba(255, 255, 255, 0.9)',
                      border: '1px solid ' + (finderStep2Edu === q ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.15)'),
                      transition: 'all 0.2s ease',
                      width: '100%',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      boxSizing: 'border-box'
                    }}
                  >
                    {finderStep2Edu === q ? '✓ ' : ''}{q}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              padding: '1.25rem 1rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                <Target size={18} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--color-gold)', letterSpacing: '1px' }}>
                  STEP 3 — CAREER GOAL
                </span>
              </div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.98rem', fontWeight: 700, marginBottom: '0.85rem' }}>
                Interest / Career Goal
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', width: '100%' }}>
                {interests.map((i) => (
                  <button
                    key={i}
                    onClick={() => setFinderStep3Interest(finderStep3Interest === i ? '' : i)}
                    style={{
                      textAlign: 'left',
                      padding: '0.6rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      backgroundColor: finderStep3Interest === i ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.08)',
                      color: finderStep3Interest === i ? 'var(--color-navy-dark)' : 'rgba(255, 255, 255, 0.9)',
                      border: '1px solid ' + (finderStep3Interest === i ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.15)'),
                      transition: 'all 0.2s ease',
                      width: '100%',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      boxSizing: 'border-box'
                    }}
                  >
                    {finderStep3Interest === i ? '✓ ' : ''}{i}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Results Output Section */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-navy)' }}>
              Suitable Matching Courses ({activeMatches.length})
            </h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
              Official ILMI Catalog
            </span>
          </div>

          {activeMatches.length === 0 ? (
            <div style={{
              backgroundColor: 'var(--color-white)',
              padding: '2.5rem 1.5rem',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
              border: '1px solid var(--color-border)',
              boxSizing: 'border-box'
            }}>
              <h4 style={{ color: 'var(--color-navy)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>
                No direct match for this specific filter combination.
              </h4>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem', fontSize: '0.92rem' }}>
                Click reset to explore all available ILMI programs and screening exams.
              </p>
              <button onClick={handleReset} className="btn btn-navy">
                View All Programs
              </button>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {activeMatches.map((course) => (
                <div 
                  key={course.id}
                  style={{
                    backgroundColor: 'var(--color-white)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.75rem 1.5rem',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box',
                    maxWidth: '100%'
                  }}
                  className="course-card"
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        backgroundColor: 'var(--color-gold-light)',
                        color: 'var(--color-navy)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-gold-border)'
                      }}>
                        {course.category}
                      </span>
                      <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>
                        {course.duration}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.6rem', wordBreak: 'break-word' }}>
                      {course.title}
                    </h4>

                    <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.55, marginBottom: '1.15rem' }}>
                      {course.description}
                    </p>

                    <div style={{
                      backgroundColor: 'var(--color-bg-light)',
                      padding: '0.75rem 0.85rem',
                      borderRadius: 'var(--radius-md)',
                      marginBottom: '1.25rem',
                      fontSize: '0.85rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.3rem'
                    }}>
                      <div><strong>Eligibility:</strong> {course.qualificationReq}</div>
                      <div><strong>Focus Area:</strong> {course.interestArea}</div>
                      <div><strong>Exam Fee:</strong> {course.fee}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                    <button 
                      onClick={() => navigateTo('course-info', { course })}
                      className="btn btn-outline"
                      style={{ flex: 1, minWidth: '120px', fontSize: '0.85rem', padding: '0.65rem 0.5rem' }}
                    >
                      <span>Course Info</span>
                    </button>

                    <button 
                      onClick={() => navigateTo('screening-exam-reg', { course })}
                      className="btn btn-primary"
                      style={{ flex: 1, minWidth: '120px', fontSize: '0.85rem', padding: '0.65rem 0.5rem' }}
                    >
                      <span>Start Exam</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>

      </div>

      <style>{`
        .course-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-gold) !important;
        }
      `}</style>
    </section>
  );
}

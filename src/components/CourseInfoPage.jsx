import React from 'react';
import { useApp } from '../context/AppContext';
import { BookOpen, CheckCircle, ArrowRight, ArrowLeft, ShieldCheck, Clock, FileText, Sparkles } from 'lucide-react';

export default function CourseInfoPage() {
  const { selectedCourse, navigateTo, coursesCatalog } = useApp();

  const course = selectedCourse || coursesCatalog[0];

  return (
    <section className="section bg-white">
      <div className="container" style={{ maxWidth: '960px' }}>
        
        {/* Back Button */}
        <button 
          onClick={() => navigateTo('course-finder')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1.75rem',
            backgroundColor: 'var(--color-bg-light)',
            border: '1px solid var(--color-border)',
            padding: '0.5rem 1rem',
            borderRadius: 'var(--radius-md)',
            fontWeight: 700,
            color: 'var(--color-navy)',
            maxWidth: '100%',
            boxSizing: 'border-box'
          }}
        >
          <ArrowLeft size={18} />
          <span>Back to Course Finder</span>
        </button>

        {/* Course Header Banner */}
        <div style={{
          backgroundColor: 'var(--color-navy)',
          color: 'var(--color-white)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem 1.75rem',
          border: '2px solid var(--color-gold)',
          marginBottom: '2.25rem',
          boxShadow: 'var(--shadow-md)',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.85rem',
            backgroundColor: 'rgba(212, 175, 55, 0.15)',
            border: '1px solid var(--color-gold)',
            color: 'var(--color-gold)',
            borderRadius: 'var(--radius-full)',
            fontWeight: 800,
            fontSize: '0.78rem',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            maxWidth: '100%',
            whiteSpace: 'normal'
          }}>
            <Sparkles size={14} />
            <span>OFFICIAL ILMI PROGRAM INFORMATION</span>
          </div>

          {/* Responsive Course Title (Fixes Screenshot 1 Title Overflow) */}
          <h1 style={{
            fontSize: 'clamp(1.4rem, 4.5vw, 2.4rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            marginBottom: '1.25rem',
            lineHeight: 1.25,
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
            maxWidth: '100%'
          }}>
            {course.title}
          </h1>

          <p style={{
            fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
            color: 'rgba(255, 255, 255, 0.88)',
            lineHeight: 1.6,
            marginBottom: '1.75rem',
            maxWidth: '780px',
            wordBreak: 'break-word'
          }}>
            {course.description}
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.25rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            paddingTop: '1.25rem',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={18} color="var(--color-gold)" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '0.9rem' }}>Duration: <strong>{course.duration}</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={18} color="var(--color-gold)" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '0.9rem' }}>Category: <strong>{course.category}</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText size={18} color="var(--color-gold)" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '0.9rem' }}>Assessment: <strong>2-Step Screening Exam</strong></span>
            </div>
          </div>
        </div>

        {/* Syllabus Breakdown */}
        <div style={{
          backgroundColor: 'var(--color-bg-light)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem 1.5rem',
          border: '1px solid var(--color-border)',
          marginBottom: '2.25rem',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <h3 style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.4rem)', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1.25rem' }}>
            Program Curriculum & Core Modules
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
            marginBottom: '1.75rem'
          }}>
            {course.syllabus.map((item, idx) => (
              <div key={item} style={{
                backgroundColor: '#FFFFFF',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                boxSizing: 'border-box'
              }}>
                <span style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-gold-light)',
                  color: 'var(--color-navy)',
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--color-gold-border)',
                  flexShrink: 0
                }}>
                  0{idx + 1}
                </span>
                <span style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '0.92rem', wordBreak: 'break-word' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: 'var(--color-gold-light)',
            border: '1px solid var(--color-gold-border)',
            padding: '1.15rem 1.25rem',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            boxSizing: 'border-box'
          }}>
            <CheckCircle size={22} color="var(--color-navy)" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '0.9rem', color: 'var(--color-navy-dark)', fontWeight: 600 }}>
              Completion of this program grants access to the official ILMI 2-Step Screening Assessment & Verification Certificate.
            </div>
          </div>
        </div>

        {/* Action Section (Fixes Screenshot 2 Button Overflow) */}
        <div style={{
          textAlign: 'center',
          backgroundColor: '#FFFFFF',
          padding: '2.25rem 1.5rem',
          borderRadius: 'var(--radius-lg)',
          border: '2px solid var(--color-gold)',
          boxShadow: 'var(--shadow-md)',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          overflow: 'hidden'
        }}>
          <h3 style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
            Ready to Begin Your Screening Exam?
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.94rem', marginBottom: '1.5rem' }}>
            Proceed to the registration form to submit your personal and educational details.
          </p>

          <button 
            onClick={() => navigateTo('screening-exam-reg', { course })}
            className="btn btn-primary btn-lg"
            style={{
              width: '100%',
              maxWidth: '380px',
              margin: '0 auto',
              boxSizing: 'border-box',
              whiteSpace: 'normal',
              justifyContent: 'center'
            }}
          >
            <span>START SCREENING EXAM</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}

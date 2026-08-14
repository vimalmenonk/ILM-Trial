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
            marginBottom: '2rem',
            backgroundColor: 'var(--color-bg-light)',
            border: '1px solid var(--color-border)',
            padding: '0.5rem 1rem',
            borderRadius: 'var(--radius-md)',
            fontWeight: 700,
            color: 'var(--color-navy)'
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
          padding: '3rem 2.5rem',
          border: '2px solid var(--color-gold)',
          marginBottom: '2.5rem',
          boxShadow: 'var(--shadow-md)'
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
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            <Sparkles size={14} />
            <span>OFFICIAL ILMI PROGRAM INFORMATION</span>
          </div>

          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem', lineHeight: 1.2 }}>
            {course.title}
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.88)', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '780px' }}>
            {course.description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={18} color="var(--color-gold)" />
              <span style={{ fontSize: '0.94rem' }}>Duration: <strong>{course.duration}</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={18} color="var(--color-gold)" />
              <span style={{ fontSize: '0.94rem' }}>Category: <strong>{course.category}</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText size={18} color="var(--color-gold)" />
              <span style={{ fontSize: '0.94rem' }}>Assessment: <strong>2-Step Screening Exam</strong></span>
            </div>
          </div>
        </div>

        {/* Syllabus Breakdown */}
        <div style={{
          backgroundColor: 'var(--color-bg-light)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          border: '1px solid var(--color-border)',
          marginBottom: '2.5rem'
        }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1.25rem' }}>
            Program Curriculum & Core Modules
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {course.syllabus.map((item, idx) => (
              <div key={item} style={{
                backgroundColor: '#FFFFFF',
                padding: '1.1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem'
              }}>
                <span style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-gold-light)',
                  color: 'var(--color-navy)',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--color-gold-border)'
                }}>
                  0{idx + 1}
                </span>
                <span style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '0.95rem' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: 'var(--color-gold-light)',
            border: '1px solid var(--color-gold-border)',
            padding: '1.25rem',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <CheckCircle size={24} color="var(--color-navy)" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '0.94rem', color: 'var(--color-navy-dark)', fontWeight: 600 }}>
              Completion of this program grants access to the official ILMI 2-Step Screening Assessment & Verification Certificate.
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div style={{
          textAlign: 'center',
          backgroundColor: '#FFFFFF',
          padding: '2.5rem',
          borderRadius: 'var(--radius-lg)',
          border: '2px solid var(--color-gold)',
          boxShadow: 'var(--shadow-md)'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
            Ready to Begin Your Screening Exam?
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.96rem', marginBottom: '1.75rem' }}>
            Proceed to the registration form to submit your personal and educational details.
          </p>

          <button 
            onClick={() => navigateTo('screening-exam-reg', { course })}
            className="btn btn-primary btn-lg"
            style={{ minWidth: '280px' }}
          >
            <span>START SCREENING EXAM</span>
            <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { useApp } from '../context/AppContext';
import Logo from './Logo';
import { Download, Printer, ArrowLeft, ShieldCheck, QrCode } from 'lucide-react';

export default function ResultReportPDF() {
  const { registrationData, studentId, exam1Score, navigateTo, showToast } = useApp();

  return (
    <section className="section bg-light">
      <div className="container" style={{ maxWidth: '800px' }}>
        
        {/* Navigation Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <button 
            onClick={() => navigateTo('student-portal')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-md)',
              fontWeight: 700,
              color: 'var(--color-navy)'
            }}
          >
            <ArrowLeft size={18} />
            <span>Back to Dashboard</span>
          </button>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button 
              onClick={() => window.print()}
              className="btn btn-outline"
            >
              <Printer size={16} />
              <span>Print PDF</span>
            </button>
            <button 
              onClick={() => showToast('Downloading Result Report PDF...', 'success')}
              className="btn btn-primary"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* Official Printable Result Document matching PDF Page 9 */}
        <div 
          id="printable-report"
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '3.5rem 3rem',
            border: '2px solid var(--color-navy)',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative'
          }}
        >
          {/* Header Logo & Tagline */}
          <div style={{ textAlign: 'center', borderBottom: '3px double var(--color-gold)', paddingBottom: '1.75rem', marginBottom: '2rem' }}>
            <Logo size="large" showTagline={true} />
          </div>

          <div style={{
            textAlign: 'center',
            fontSize: '1.6rem',
            fontWeight: 800,
            color: 'var(--color-navy)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '2rem'
          }}>
            EXAM RESULT REPORT
          </div>

          {/* Student & Exam Details */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '1rem',
            backgroundColor: 'var(--color-bg-light)',
            padding: '1.5rem',
            borderRadius: 'var(--radius-md)',
            marginBottom: '2rem',
            fontSize: '0.96rem'
          }}>
            <div><strong>Student Name:</strong> {registrationData.fullName}</div>
            <div><strong>Student ID:</strong> {studentId}</div>
            <div><strong>Course:</strong> {registrationData.course}</div>
            <div><strong>Exam Name:</strong> Screening Exam 1</div>
            <div><strong>Exam Date:</strong> {new Date().toLocaleDateString('en-GB')}</div>
            <div><strong>District Center:</strong> {registrationData.district}</div>
          </div>

          {/* Marks Breakdown Table */}
          <div style={{ marginBottom: '2rem' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.95rem'
            }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-navy)', color: '#FFFFFF' }}>
                  <th style={{ padding: '0.85rem', textAlign: 'left' }}>Assessment Category</th>
                  <th style={{ padding: '0.85rem', textAlign: 'center' }}>Total Questions</th>
                  <th style={{ padding: '0.85rem', textAlign: 'center' }}>Attempted</th>
                  <th style={{ padding: '0.85rem', textAlign: 'center' }}>Score</th>
                  <th style={{ padding: '0.85rem', textAlign: 'center' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '0.85rem', fontWeight: 700 }}>Screening Assessment 1</td>
                  <td style={{ padding: '0.85rem', textAlign: 'center' }}>{exam1Score.totalQuestions}</td>
                  <td style={{ padding: '0.85rem', textAlign: 'center' }}>{exam1Score.attempted}</td>
                  <td style={{ padding: '0.85rem', textAlign: 'center', fontWeight: 800 }}>{exam1Score.score} ({exam1Score.percentage}%)</td>
                  <td style={{ padding: '0.85rem', textAlign: 'center', color: '#22c55e', fontWeight: 800 }}>{exam1Score.status}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Performance Summary */}
          <div style={{
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            marginBottom: '2.5rem'
          }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
              Exam Performance Breakdown
            </h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Candidate demonstrated strong comprehension in core principles, data accuracy, and communication guidelines. Eligible for Final Assessment and Certification.
            </p>
          </div>

          {/* Report Footer / Signature & Digital Verification */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '2px solid var(--color-border)',
            paddingTop: '1.5rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--color-navy)', textTransform: 'uppercase' }}>
                Issued by ILMI
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                Official Examination Board • ILM Career Consultancy
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'var(--color-gold-light)', padding: '0.65rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-gold-border)' }}>
              <QrCode size={32} color="var(--color-navy)" />
              <div style={{ fontSize: '0.78rem', color: 'var(--color-navy-dark)', fontWeight: 700 }}>
                [ Digital Verification ]<br />
                ID: {studentId}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

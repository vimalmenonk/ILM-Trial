import React from 'react';
import { useApp } from '../context/AppContext';
import Logo from './Logo';
import { Award, Download, Printer, QrCode, ArrowLeft, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';

export default function CertificateView() {
  const { registrationData, studentId, navigateTo, showToast } = useApp();

  const certNo = 'ILMI-CERT-2026-000001';
  const issueDate = '26 August 2026';

  return (
    <section className="section bg-light">
      <div className="container" style={{ maxWidth: '880px' }}>
        
        {/* Navigation Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
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
              onClick={() => navigateTo('certificate-verify')}
              className="btn btn-outline"
            >
              <ExternalLink size={16} />
              <span>Verify Online</span>
            </button>

            <button 
              onClick={() => window.print()}
              className="btn btn-outline"
            >
              <Printer size={16} />
              <span>Print</span>
            </button>

            <button 
              onClick={() => showToast('Downloading Official Certificate PDF...', 'success')}
              className="btn btn-primary"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* Completion Announcement Banner (PDF Page 10) */}
        <div style={{
          backgroundColor: 'var(--color-navy)',
          color: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem',
          textAlign: 'center',
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
            marginBottom: '0.75rem'
          }}>
            <Sparkles size={14} />
            <span>FINAL ELIGIBILITY RULES SATISFIED</span>
          </div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
            Congratulations!
          </h2>

          <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '600px', margin: '0 auto' }}>
            You have successfully completed the ILMI Assessment.
          </p>
        </div>

        {/* Certificate Document Card (PDF Page 11) */}
        <div 
          id="certificate-document"
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '4rem 3.5rem',
            border: '8px double var(--color-gold)',
            boxShadow: '0 20px 50px rgba(11, 27, 61, 0.15)',
            textAlign: 'center',
            position: 'relative',
            background: 'radial-gradient(circle at center, #FFFFFF 0%, #FAF8F2 100%)'
          }}
        >
          {/* Top Logo */}
          <div style={{ marginBottom: '1.5rem' }}>
            <Logo size="large" showTagline={true} />
          </div>

          <div style={{
            fontSize: '0.85rem',
            fontWeight: 800,
            letterSpacing: '4px',
            color: 'var(--color-gold-dark)',
            textTransform: 'uppercase',
            marginBottom: '0.5rem'
          }}>
            OFFICIAL CERTIFICATE OF COMPLETION
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '3rem',
            fontWeight: 800,
            color: 'var(--color-navy)',
            letterSpacing: '2px',
            marginBottom: '1.5rem'
          }}>
            CERTIFICATE
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', fontStyle: 'italic', marginBottom: '1rem' }}>
            This is to certify that
          </p>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '2.4rem',
            fontWeight: 800,
            color: 'var(--color-navy)',
            borderBottom: '2px solid var(--color-gold)',
            display: 'inline-block',
            paddingBottom: '0.35rem',
            marginBottom: '1.5rem',
            minWidth: '320px'
          }}>
            {registrationData.fullName}
          </h2>

          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dark)', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto 2rem auto' }}>
            has successfully completed the <strong>{registrationData.course}</strong> under the official <strong>ILMI Assessment Program</strong>.
          </p>

          {/* Certificate Metadata */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem',
            maxWidth: '520px',
            margin: '0 auto 2.5rem auto',
            backgroundColor: '#FFFFFF',
            padding: '1.25rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-gold-border)',
            fontSize: '0.94rem'
          }}>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>CERTIFICATE NO</div>
              <strong style={{ color: 'var(--color-navy)', fontSize: '1.05rem' }}>{certNo}</strong>
            </div>

            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>DATE OF ISSUE</div>
              <strong style={{ color: 'var(--color-navy)', fontSize: '1.05rem' }}>{issueDate}</strong>
            </div>
          </div>

          {/* QR Code Verification Banner */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '2px solid var(--color-gold-border)',
            paddingTop: '2rem',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--color-navy)', textTransform: 'uppercase' }}>
                ILM EXAMINATION BOARD
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                Integrity • Learning • Mastery
              </div>
            </div>

            <button 
              onClick={() => navigateTo('certificate-verify')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                backgroundColor: 'var(--color-navy)',
                color: '#FFFFFF',
                padding: '0.75rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-gold)',
                cursor: 'pointer'
              }}
            >
              <QrCode size={36} color="var(--color-gold)" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-gold)', fontWeight: 800 }}>VERIFY CERTIFICATE</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600 }}>{certNo}</div>
              </div>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

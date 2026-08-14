import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Logo from './Logo';
import { ShieldCheck, Search, CheckCircle2, QrCode, ArrowLeft, Sparkles } from 'lucide-react';

export default function CertificateVerification() {
  const { navigateTo } = useApp();
  const [searchCertNo, setSearchCertNo] = useState('ILMI-CERT-2026-000001');
  const [verifiedResult, setVerifiedResult] = useState({
    valid: true,
    certNo: 'ILMI-CERT-2026-000001',
    studentName: 'Muhammad K',
    studentId: 'ILMI-2026-000001',
    courseName: 'Professional Diploma in Business & Management',
    issueDate: '26 August 2026',
    district: 'Kozhikode',
    status: 'VERIFIED & OFFICIAL'
  });

  const handleVerifySearch = (e) => {
    e.preventDefault();
    if (searchCertNo.toUpperCase().includes('ILMI-CERT')) {
      setVerifiedResult({
        valid: true,
        certNo: searchCertNo.toUpperCase(),
        studentName: 'Muhammad K',
        studentId: 'ILMI-2026-000001',
        courseName: 'Professional Diploma in Business & Management',
        issueDate: '26 August 2026',
        district: 'Kozhikode',
        status: 'VERIFIED & OFFICIAL'
      });
    } else {
      setVerifiedResult({ valid: false });
    }
  };

  return (
    <section className="section bg-light">
      <div className="container" style={{ maxWidth: '720px' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <button 
            onClick={() => navigateTo('home')}
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
            <span>Back to Main Website</span>
          </button>
        </div>

        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={14} />
            <span>ONLINE VERIFICATION PORTAL</span>
          </div>
          <h2 className="section-title">
            ILMI Certificate Verification
          </h2>
          <p className="section-subtitle">
            Verify the authenticity of any official ILMI Certificate of Completion.
          </p>
          <div className="gold-divider" />
        </div>

        {/* Verification Search Box */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-md)',
          border: '2px solid var(--color-gold)',
          marginBottom: '2rem'
        }}>
          <form onSubmit={handleVerifySearch} style={{ display: 'flex', gap: '0.85rem' }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <input 
                type="text" 
                required
                placeholder="Enter Certificate Number (e.g. ILMI-CERT-2026-000001)"
                value={searchCertNo}
                onChange={(e) => setSearchCertNo(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  fontSize: '0.96rem',
                  fontWeight: 600
                }}
              />
              <QrCode size={20} color="var(--color-navy)" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
            </div>

            <button type="submit" className="btn btn-navy">
              <Search size={18} />
              <span>Verify</span>
            </button>
          </form>
        </div>

        {/* Verified Certificate Output Box */}
        {verifiedResult.valid ? (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-md)',
            border: '2px solid #22c55e'
          }} className="animate-fade-in">
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                backgroundColor: 'rgba(34, 197, 94, 0.15)',
                color: '#22c55e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <ShieldCheck size={30} />
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#22c55e', textTransform: 'uppercase' }}>
                  ✓ AUTHENTIC ILMI RECORD
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-navy)' }}>
                  Certificate Verified
                </h3>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.95rem' }}>
              <div><strong>Certificate No:</strong> {verifiedResult.certNo}</div>
              <div><strong>Student Name:</strong> {verifiedResult.studentName}</div>
              <div><strong>Student ID:</strong> {verifiedResult.studentId}</div>
              <div><strong>District:</strong> {verifiedResult.district}</div>
              <div style={{ gridColumn: 'span 2' }}><strong>Program:</strong> {verifiedResult.courseName}</div>
              <div><strong>Issue Date:</strong> {verifiedResult.issueDate}</div>
              <div><strong>Verification Status:</strong> <span style={{ color: '#22c55e', fontWeight: 800 }}>{verifiedResult.status}</span></div>
            </div>

          </div>
        ) : (
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid #ef4444',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem',
            textAlign: 'center',
            color: '#ef4444',
            fontWeight: 700
          }}>
            No record found for Certificate Number "{searchCertNo}". Please check the input.
          </div>
        )}

      </div>
    </section>
  );
}

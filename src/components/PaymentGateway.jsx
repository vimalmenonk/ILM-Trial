import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CreditCard, CheckCircle2, ShieldCheck, Download, ArrowRight, Sparkles, Lock } from 'lucide-react';

export default function PaymentGateway() {
  const { registrationData, navigateTo, setPaymentDone, setRegistrationId, setStudentId, setIsLoggedIn, showToast } = useApp();

  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const regId = 'ILMI-SCR-2026-000001';
  const stdId = 'ILMI-2026-000001';

  const handlePayNow = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
      setPaymentDone(true);
      setRegistrationId(regId);
      setStudentId(stdId);
      setIsLoggedIn(true);
      showToast('Payment successful! Credentials generated.', 'success');
    }, 1800);
  };

  return (
    <section className="section bg-light">
      <div className="container" style={{ maxWidth: '680px' }}>
        
        {/* Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={14} />
            <span>STEP 4 OF USER JOURNEY</span>
          </div>
          <h2 className="section-title">
            Screening Exam Fee Payment
          </h2>
          <p className="section-subtitle">
            Secure payment gateway integration specified in PDF Page 4.
          </p>
          <div className="gold-divider" />
        </div>

        {!success ? (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-md)',
            border: '2px solid var(--color-gold)'
          }}>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'var(--color-navy)',
              color: '#FFFFFF',
              padding: '1.25rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              marginBottom: '2rem'
            }}>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-gold)', fontWeight: 800 }}>SCREENING EXAM FEE</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800 }}>₹ 1,500</div>
              </div>
              <Lock size={28} color="var(--color-gold)" />
            </div>

            <div style={{
              backgroundColor: 'var(--color-bg-light)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              marginBottom: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              fontSize: '0.96rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Student Name:</span>
                <strong style={{ color: 'var(--color-navy)' }}>{registrationData.fullName}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Course:</span>
                <strong style={{ color: 'var(--color-navy)' }}>{registrationData.course}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Mobile Number:</span>
                <strong style={{ color: 'var(--color-navy)' }}>{registrationData.mobileNumber}</strong>
              </div>
            </div>

            {/* Payment Method Selector Mock */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                Payment Gateway Mode
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                <div style={{
                  border: '2px solid var(--color-gold)',
                  backgroundColor: 'var(--color-gold-light)',
                  padding: '0.85rem',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: 'var(--color-navy)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <CreditCard size={18} />
                  <span>UPI / Debit Card / Net Banking</span>
                </div>
                <div style={{
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-bg-light)',
                  padding: '0.85rem',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: 'var(--color-text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <ShieldCheck size={18} />
                  <span>Instant Gateway Mock</span>
                </div>
              </div>
            </div>

            <button 
              onClick={handlePayNow}
              disabled={processing}
              className="btn btn-primary btn-lg"
              style={{ width: '100%' }}
            >
              {processing ? 'Processing Payment Gateway...' : '[ PAY NOW — ₹ 1,500 ]'}
            </button>

          </div>
        ) : (
          /* Payment Success View matching PDF Page 4 */
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem 2.5rem',
            textAlign: 'center',
            boxShadow: 'var(--shadow-lg)',
            border: '3px solid #22c55e'
          }} className="animate-fade-in">
            
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              backgroundColor: 'rgba(34, 197, 94, 0.15)',
              color: '#22c55e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto'
            }}>
              <CheckCircle2 size={44} />
            </div>

            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
              ✓ Payment Successful
            </h3>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', marginBottom: '2rem' }}>
              Your screening exam registration fee has been processed. Login credentials issued below.
            </p>

            <div style={{
              backgroundColor: 'var(--color-bg-light)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem',
              marginBottom: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              textAlign: 'left'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--color-border)', paddingBottom: '0.6rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--color-text-muted)' }}>Registration ID:</span>
                <strong style={{ color: 'var(--color-navy)', fontSize: '1.05rem' }}>{regId}</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--color-border)', paddingBottom: '0.6rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--color-text-muted)' }}>Student ID:</span>
                <strong style={{ color: 'var(--color-gold-dark)', fontSize: '1.1rem' }}>{stdId}</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 600, color: 'var(--color-text-muted)' }}>Receipt Status:</span>
                <strong style={{ color: '#22c55e' }}>Generated & Sent to Email</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => showToast('Downloading payment receipt PDF...', 'info')}
                className="btn btn-outline"
                style={{ flex: 1 }}
              >
                <Download size={18} />
                <span>Download Receipt</span>
              </button>

              <button 
                onClick={() => navigateTo('student-portal')}
                className="btn btn-navy btn-lg"
                style={{ flex: 1 }}
              >
                <span>Proceed to Student Portal</span>
                <ArrowRight size={18} />
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

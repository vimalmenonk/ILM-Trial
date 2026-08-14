import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CreditCard, CheckCircle2, ShieldCheck, Download, ArrowRight, Sparkles, Lock } from 'lucide-react';

export default function PaymentGateway() {
  const { registrationData, navigateTo, setPaymentDone, setRegistrationId, setStudentId, setIsLoggedIn, showToast } = useApp();

  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState('upi');

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
            padding: '2.25rem 1.5rem',
            boxShadow: 'var(--shadow-md)',
            border: '2px solid var(--color-gold)',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden'
          }}>
            
            {/* Screening Exam Fee Banner */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'var(--color-navy)',
              color: '#FFFFFF',
              padding: '1.25rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              marginBottom: '1.75rem',
              boxSizing: 'border-box',
              width: '100%'
            }}>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-gold)', fontWeight: 800, textTransform: 'uppercase' }}>SCREENING EXAM FEE</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800 }}>₹ 1,500</div>
              </div>
              <Lock size={28} color="var(--color-gold)" style={{ flexShrink: 0 }} />
            </div>

            {/* Student Info Details (Fixes Screenshot 4 Alignment & Wrapping) */}
            <div style={{
              backgroundColor: 'var(--color-bg-light)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              marginBottom: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
              fontSize: '0.94rem',
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <div className="payment-detail-row">
                <span className="payment-label">Student Name:</span>
                <strong className="payment-value">{registrationData.fullName}</strong>
              </div>

              <div className="payment-detail-row">
                <span className="payment-label">Course:</span>
                <strong className="payment-value">{registrationData.course}</strong>
              </div>

              <div className="payment-detail-row">
                <span className="payment-label">Mobile Number:</span>
                <strong className="payment-value">{registrationData.mobileNumber}</strong>
              </div>
            </div>

            {/* Payment Method Selector (Fixes Screenshot 4 Squished Mode Cards) */}
            <div style={{ marginBottom: '2rem', width: '100%', boxSizing: 'border-box' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                Payment Gateway Mode
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '0.85rem',
                width: '100%',
                boxSizing: 'border-box'
              }} className="payment-methods-grid">
                
                <button
                  type="button"
                  onClick={() => setSelectedMethod('upi')}
                  style={{
                    border: selectedMethod === 'upi' ? '2px solid var(--color-gold)' : '1px solid var(--color-border)',
                    backgroundColor: selectedMethod === 'upi' ? 'var(--color-gold-light)' : '#FFFFFF',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    color: 'var(--color-navy)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    textAlign: 'left',
                    boxSizing: 'border-box',
                    width: '100%',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    cursor: 'pointer'
                  }}
                >
                  <CreditCard size={20} color="var(--color-navy)" style={{ flexShrink: 0 }} />
                  <span style={{ lineHeight: 1.3 }}>UPI / Debit Card / Net Banking</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedMethod('mock')}
                  style={{
                    border: selectedMethod === 'mock' ? '2px solid var(--color-gold)' : '1px solid var(--color-border)',
                    backgroundColor: selectedMethod === 'mock' ? 'var(--color-gold-light)' : '#FFFFFF',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    color: 'var(--color-navy)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    textAlign: 'left',
                    boxSizing: 'border-box',
                    width: '100%',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    cursor: 'pointer'
                  }}
                >
                  <ShieldCheck size={20} color="var(--color-navy)" style={{ flexShrink: 0 }} />
                  <span style={{ lineHeight: 1.3 }}>Instant Gateway Mock</span>
                </button>

              </div>
            </div>

            {/* Pay Now Button (Fixes Screenshot 4 Button Overflow) */}
            <button 
              onClick={handlePayNow}
              disabled={processing}
              className="btn btn-primary btn-lg"
              style={{
                width: '100%',
                maxWidth: '100%',
                boxSizing: 'border-box',
                whiteSpace: 'normal',
                justifyContent: 'center',
                padding: '0.95rem 1rem'
              }}
            >
              {processing ? 'Processing Payment Gateway...' : '[ PAY NOW — ₹ 1,500 ]'}
            </button>

          </div>
        ) : (
          /* Payment Success View matching PDF Page 4 */
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem 1.5rem',
            textAlign: 'center',
            boxShadow: 'var(--shadow-lg)',
            border: '3px solid #22c55e',
            width: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden'
          }} className="animate-fade-in">
            
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'rgba(34, 197, 94, 0.15)',
              color: '#22c55e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto'
            }}>
              <CheckCircle2 size={40} />
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
              ✓ Payment Successful
            </h3>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.94rem', marginBottom: '1.75rem' }}>
              Your screening exam registration fee has been processed. Credentials generated below.
            </p>

            <div style={{
              backgroundColor: 'var(--color-bg-light)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              marginBottom: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
              textAlign: 'left',
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--color-border)', paddingBottom: '0.5rem', flexWrap: 'wrap', gap: '0.25rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--color-text-muted)' }}>Registration ID:</span>
                <strong style={{ color: 'var(--color-navy)', fontSize: '1rem' }}>{regId}</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--color-border)', paddingBottom: '0.5rem', flexWrap: 'wrap', gap: '0.25rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--color-text-muted)' }}>Student ID:</span>
                <strong style={{ color: 'var(--color-gold-dark)', fontSize: '1.05rem' }}>{stdId}</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.25rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--color-text-muted)' }}>Receipt Status:</span>
                <strong style={{ color: '#22c55e' }}>Generated & Sent to Email</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', width: '100%' }}>
              <button 
                onClick={() => showToast('Downloading payment receipt PDF...', 'info')}
                className="btn btn-outline"
                style={{ flex: 1, minWidth: '140px' }}
              >
                <Download size={16} />
                <span>Receipt</span>
              </button>

              <button 
                onClick={() => navigateTo('student-portal')}
                className="btn btn-navy"
                style={{ flex: 1, minWidth: '160px' }}
              >
                <span>Student Portal</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </div>
        )}

      </div>

      <style>{`
        .payment-detail-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 1rem;
          border-bottom: 1px dashed var(--color-border);
          padding-bottom: 0.5rem;
        }
        .payment-label {
          color: var(--color-text-muted);
          font-weight: 600;
          flex-shrink: 0;
        }
        .payment-value {
          color: var(--color-navy);
          text-align: right;
          word-break: break-word;
          overflow-wrap: break-word;
          max-width: 65%;
        }
        @media (max-width: 500px) {
          .payment-detail-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
          }
          .payment-value {
            text-align: left;
            max-width: 100%;
          }
          .payment-methods-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

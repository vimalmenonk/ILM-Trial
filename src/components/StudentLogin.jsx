import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { UserCheck, Lock, ArrowRight, KeyRound, Sparkles } from 'lucide-react';

export default function StudentLogin() {
  const { studentId, setIsLoggedIn, navigateTo, showToast } = useApp();

  const [inputStudentId, setInputStudentId] = useState(studentId || 'ILMI-2026-000001');
  const [passwordOtp, setPasswordOtp] = useState('123456');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!inputStudentId || !passwordOtp) {
      showToast('Please enter your Student ID / Mobile and Password / OTP.', 'error');
      return;
    }
    setIsLoggedIn(true);
    showToast(`Welcome back, Student ID ${inputStudentId}!`, 'success');
    navigateTo('student-portal');
  };

  return (
    <section className="section bg-light">
      <div className="container" style={{ maxWidth: '520px' }}>
        
        {/* Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={14} />
            <span>STUDENT AUTHENTICATION</span>
          </div>
          <h2 className="section-title">
            Student Login
          </h2>
          <p className="section-subtitle">
            Access your ILMI student portal, 14-day exam window, study materials, and certificates.
          </p>
          <div className="gold-divider" />
        </div>

        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-md)',
          border: '2px solid var(--color-gold)'
        }}>
          
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            <div>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                Student ID / Mobile Number *
              </label>
              <div style={{ position: 'relative' }}>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. ILMI-2026-000001 or 9876543210"
                  value={inputStudentId}
                  onChange={(e) => setInputStudentId(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem 0.8rem 2.5rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.95rem',
                    fontWeight: 600
                  }}
                />
                <UserCheck size={18} color="var(--color-navy)" style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                Password / OTP *
              </label>
              <div style={{ position: 'relative' }}>
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  value={passwordOtp}
                  onChange={(e) => setPasswordOtp(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem 0.8rem 2.5rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.95rem',
                    fontWeight: 600
                  }}
                />
                <Lock size={18} color="var(--color-navy)" style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)' }} />
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--color-gold-light)',
              border: '1px solid var(--color-gold-border)',
              padding: '0.85rem 1rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.85rem',
              color: 'var(--color-navy-dark)',
              fontWeight: 600
            }}>
              💡 Demo Login Credentials pre-filled for immediate testing!
            </div>

            <button 
              type="submit" 
              className="btn btn-navy btn-lg"
              style={{ marginTop: '0.5rem', width: '100%' }}
            >
              <span>[ LOGIN ]</span>
              <ArrowRight size={18} />
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

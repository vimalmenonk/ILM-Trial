import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  User, BookOpen, FileText, ClipboardList, Calendar, Award, 
  FileCheck, Bell, HelpCircle, LogOut, Clock, Download, Play, 
  CheckCircle2, AlertTriangle, Shield, Check, Printer, Sparkles 
} from 'lucide-react';

export default function StudentDashboard() {
  const { 
    registrationData, studentId, portalTab, setPortalTab, 
    accessStartDate, accessExpiryDate, navigateTo, setCurrentExamNumber, 
    exam1Score, exam2Completed, finalQualified, setIsLoggedIn, showToast 
  } = useApp();

  // 14-Day Countdown Timer Logic (PDF Page 7)
  const [timeLeft, setTimeLeft] = useState({ days: 13, hours: 6, mins: 42, secs: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: 59, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard Overview', icon: Clock },
    { id: 'profile', label: '1. My Profile', icon: User },
    { id: 'course', label: '2. My Course', icon: BookOpen },
    { id: 'material', label: '3. Study Material', icon: FileText },
    { id: 'exams', label: '4. My Exams', icon: ClipboardList },
    { id: 'schedule', label: '5. Exam Schedule', icon: Calendar },
    { id: 'results', label: '6. Exam Results', icon: Award },
    { id: 'reports', label: '7. Result Reports', icon: FileCheck },
    { id: 'certificate', label: '8. Certificate', icon: Award },
    { id: 'notifications', label: '9. Notifications', icon: Bell },
    { id: 'help', label: '10. Help & Support', icon: HelpCircle },
  ];

  const handleLogout = () => {
    setIsLoggedIn(false);
    showToast('Logged out of Student Portal.', 'info');
    navigateTo('home');
  };

  return (
    <section className="section bg-light" style={{ padding: '3rem 0' }}>
      <div className="container">
        
        {/* Top Header Banner */}
        <div style={{
          backgroundColor: 'var(--color-navy)',
          color: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem 2.5rem',
          border: '2px solid var(--color-gold)',
          marginBottom: '2rem',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.25rem'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.78rem',
              fontWeight: 800,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              marginBottom: '0.35rem'
            }}>
              <Sparkles size={14} />
              <span>ILMI STUDENT PORTAL</span>
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.25rem' }}>
              Hello, {registrationData.fullName}
            </h2>
            <div style={{ fontSize: '0.96rem', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 600 }}>
              Student ID: <span style={{ color: 'var(--color-gold)', fontWeight: 800 }}>{studentId}</span> • District: {registrationData.district}
            </div>
          </div>

          <button 
            onClick={handleLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid var(--color-gold)',
              color: 'var(--color-gold)',
              padding: '0.65rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              fontWeight: 700,
              fontSize: '0.9rem'
            }}
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>

        {/* PDF Page 7: 14-Day Completion Window Widget */}
        <div style={{
          backgroundColor: 'var(--color-gold-light)',
          border: '2px solid var(--color-gold-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.75rem 2rem',
          marginBottom: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--color-navy)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.25rem' }}>
              ⏱️ 14-DAY EXAM COMPLETION WINDOW (PDF REQUIREMENT)
            </div>
            <div style={{ fontSize: '0.94rem', color: 'var(--color-navy-dark)', fontWeight: 600 }}>
              Started: <strong>12 August 2026</strong> • Deadline: <strong>26 August 2026</strong>
            </div>
          </div>

          {/* Real-time Countdown Box */}
          <div style={{
            backgroundColor: 'var(--color-navy)',
            color: 'var(--color-gold)',
            padding: '0.85rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            textAlign: 'center',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.8)', fontWeight: 700, textTransform: 'uppercase' }}>
              Time Remaining
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '1px' }}>
              {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.mins}m : {timeLeft.secs}s
            </div>
          </div>
        </div>

        {/* Dashboard Grid Layout (Sidebar + Content View) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: '2rem',
          alignItems: 'start'
        }} className="dashboard-layout">
          
          {/* Left Sidebar: PDF Command Menu (Page 14) */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <div style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              color: 'var(--color-navy)',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid var(--color-border)'
            }}>
              STUDENT COMMAND MENU
            </div>

            {menuItems.map((item) => {
              const IconComp = item.icon;
              const active = portalTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setPortalTab(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: 'none',
                    textAlign: 'left',
                    fontSize: '0.92rem',
                    fontWeight: active ? 800 : 600,
                    backgroundColor: active ? 'var(--color-navy)' : 'transparent',
                    color: active ? 'var(--color-gold)' : 'var(--color-navy)',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                >
                  <IconComp size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            <button
              onClick={handleLogout}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px dashed #ef4444',
                textAlign: 'left',
                fontSize: '0.92rem',
                fontWeight: 700,
                color: '#ef4444',
                marginTop: '1rem',
                cursor: 'pointer'
              }}
            >
              <LogOut size={18} />
              <span>11. Logout</span>
            </button>
          </div>

          {/* Right Content View Panel */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)',
            minHeight: '520px'
          }}>
            
            {/* TAB: DASHBOARD OVERVIEW / MY EXAMS */}
            {(portalTab === 'dashboard' || portalTab === 'exams') && (
              <div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                  Screening Assessment Center
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.96rem', marginBottom: '2rem' }}>
                  Follow the 2-step assessment sequence specified in PDF Page 6 & 7.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  
                  {/* Step 1: Study Material */}
                  <div style={{
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.5rem',
                    backgroundColor: 'var(--color-bg-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}>
                    <div>
                      <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--color-gold-dark)', textTransform: 'uppercase' }}>
                        STEP 1 — EXAM MATERIAL
                      </span>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', marginTop: '0.2rem' }}>
                        Official Study Material (PDF)
                      </h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                        Download or view candidate study guide prior to starting Exam 1.
                      </p>
                    </div>

                    <button 
                      onClick={() => showToast('Opening Study Material PDF...', 'info')}
                      className="btn btn-navy"
                    >
                      <Download size={16} />
                      <span>Download PDF</span>
                    </button>
                  </div>

                  {/* Step 2: Exam 1 */}
                  <div style={{
                    border: '2px solid var(--color-gold)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.5rem',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}>
                    <div>
                      <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--color-gold-dark)', textTransform: 'uppercase' }}>
                        STEP 2 — EXAM 1
                      </span>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', marginTop: '0.2rem' }}>
                        Screening Assessment — Exam 1
                      </h4>
                      <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                        Status: <strong style={{ color: '#22c55e' }}>Score: {exam1Score.score} ({exam1Score.percentage}%) — QUALIFIED</strong>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <button 
                        onClick={() => {
                          setCurrentExamNumber(1);
                          navigateTo('exam-simulator');
                        }}
                        className="btn btn-primary"
                      >
                        <Play size={16} />
                        <span>Launch Exam 1 Engine</span>
                      </button>
                    </div>
                  </div>

                  {/* Step 3: Exam 2 / Final Assessment */}
                  <div style={{
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.5rem',
                    backgroundColor: 'var(--color-bg-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}>
                    <div>
                      <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--color-gold-dark)', textTransform: 'uppercase' }}>
                        STEP 3 — EXAM 2 / FINAL ASSESSMENT
                      </span>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', marginTop: '0.2rem' }}>
                        Final Assessment Exam
                      </h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                        Status: {exam2Completed ? <strong style={{ color: '#22c55e' }}>COMPLETED & QUALIFIED</strong> : <span>Ready to begin</span>}
                      </p>
                    </div>

                    <button 
                      onClick={() => {
                        setCurrentExamNumber(2);
                        navigateTo('exam-simulator');
                      }}
                      className="btn btn-navy"
                    >
                      <Play size={16} />
                      <span>Launch Final Exam</span>
                    </button>
                  </div>

                </div>
              </div>
            )}

            {/* TAB: MY PROFILE */}
            {portalTab === 'profile' && (
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1.5rem' }}>
                  1. My Candidate Profile
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', fontSize: '0.95rem' }}>
                  <div><strong>Student Name:</strong> {registrationData.fullName}</div>
                  <div><strong>Student ID:</strong> {studentId}</div>
                  <div><strong>Email:</strong> {registrationData.email}</div>
                  <div><strong>Mobile:</strong> {registrationData.mobileNumber}</div>
                  <div><strong>WhatsApp:</strong> {registrationData.whatsappNumber}</div>
                  <div><strong>Qualification:</strong> {registrationData.qualification}</div>
                  <div><strong>Institution:</strong> {registrationData.institution}</div>
                  <div><strong>District:</strong> {registrationData.district}</div>
                  <div><strong>State:</strong> {registrationData.state} ({registrationData.pinCode})</div>
                </div>
              </div>
            )}

            {/* TAB: MY COURSE */}
            {portalTab === 'course' && (
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1rem' }}>
                  2. Enrolled Course Details
                </h3>
                <div style={{ backgroundColor: 'var(--color-gold-light)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-gold-border)' }}>
                  <h4 style={{ fontSize: '1.3rem', color: 'var(--color-navy)', fontWeight: 800 }}>{registrationData.course}</h4>
                  <p style={{ marginTop: '0.5rem', color: 'var(--color-navy-dark)' }}>Enrolled under ILMI District Executive Training Program.</p>
                </div>
              </div>
            )}

            {/* TAB: STUDY MATERIAL */}
            {portalTab === 'material' && (
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1rem' }}>
                  3. Candidate Study Material
                </h3>
                <p style={{ marginBottom: '1.5rem' }}>PDF material available for download as specified in PDF Page 6.</p>
                <button onClick={() => showToast('Downloading Study Guide PDF...', 'success')} className="btn btn-primary">
                  <Download size={18} />
                  <span>Download Study Material PDF</span>
                </button>
              </div>
            )}

            {/* TAB: EXAM SCHEDULE */}
            {portalTab === 'schedule' && (
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1rem' }}>
                  5. Exam Schedule & Completion Window
                </h3>
                <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-light)', borderRadius: 'var(--radius-md)' }}>
                  <div>Window Start: <strong>12 August 2026</strong></div>
                  <div>Window Deadline: <strong>26 August 2026</strong></div>
                  <div>Status: <strong>14 Days Window Active</strong></div>
                </div>
              </div>
            )}

            {/* TAB: EXAM RESULTS */}
            {portalTab === 'results' && (
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1.5rem' }}>
                  6. Exam Results Summary (PDF Page 8)
                </h3>
                
                <div style={{ border: '2px solid var(--color-gold)', padding: '1.75rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
                  <h4 style={{ color: 'var(--color-navy)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '1rem' }}>
                    EXAM 1 RESULT
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.96rem' }}>
                    <div>Total Questions: <strong>{exam1Score.totalQuestions}</strong></div>
                    <div>Attempted: <strong>{exam1Score.attempted}</strong></div>
                    <div>Correct: <strong>{exam1Score.correct}</strong></div>
                    <div>Wrong: <strong>{exam1Score.wrong}</strong></div>
                    <div>Score: <strong>{exam1Score.score}</strong></div>
                    <div>Percentage: <strong>{exam1Score.percentage}%</strong></div>
                    <div>Status: <strong style={{ color: '#22c55e' }}>{exam1Score.status}</strong></div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button onClick={() => navigateTo('exam-result')} className="btn btn-navy">
                    <span>View Score Card</span>
                  </button>
                  <button onClick={() => navigateTo('result-report')} className="btn btn-primary">
                    <span>Generate Result Report PDF</span>
                  </button>
                </div>
              </div>
            )}

            {/* TAB: RESULT REPORTS */}
            {portalTab === 'reports' && (
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1rem' }}>
                  7. Official Result Reports (PDF Page 9)
                </h3>
                <p style={{ marginBottom: '1.5rem' }}>Formal ILMI Exam Result Report with digital verification barcode.</p>
                <button onClick={() => navigateTo('result-report')} className="btn btn-primary">
                  <FileCheck size={18} />
                  <span>Open Printable Result Report</span>
                </button>
              </div>
            )}

            {/* TAB: CERTIFICATE */}
            {portalTab === 'certificate' && (
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1rem' }}>
                  8. Official ILMI Certificate (PDF Page 10 & 11)
                </h3>
                <p style={{ marginBottom: '1.5rem' }}>Certificate is issued after completing the screening assessment sequence.</p>
                <button onClick={() => navigateTo('certificate')} className="btn btn-primary btn-lg">
                  <Award size={20} />
                  <span>View / Download Certificate</span>
                </button>
              </div>
            )}

            {/* TAB: NOTIFICATIONS */}
            {portalTab === 'notifications' && (
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1rem' }}>
                  9. Portal Notifications
                </h3>
                <div style={{ padding: '1rem', backgroundColor: 'var(--color-gold-light)', borderRadius: 'var(--radius-sm)' }}>
                  🔔 <strong>Notification:</strong> Your 14-day completion window is active until August 26, 2026.
                </div>
              </div>
            )}

            {/* TAB: HELP & SUPPORT */}
            {portalTab === 'help' && (
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1rem' }}>
                  10. Help & Technical Support
                </h3>
                <p>For screening exam access issues or 14-day window extension requests, contact <a href="mailto:ilmconsultancy2026@gmail.com">ilmconsultancy2026@gmail.com</a>.</p>
              </div>
            )}

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .dashboard-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Clock, Bookmark, Save, ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, Shield } from 'lucide-react';

export default function ScreeningExamSimulator() {
  const { currentExamNumber, navigateTo, setExam1Score, setExam2Completed, showToast } = useApp();

  // 10 Sample Questions representing the Screening Assessment
  const examQuestions = [
    {
      id: 1,
      question: 'What are the three core foundational pillars of ILM Career Consultancy?',
      options: [
        'Integrity • Learning • Mastery',
        'Innovation • Leadership • Marketing',
        'Intellect • Literacy • Management',
        'Information • Logic • Mentorship'
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      question: 'Which of the following Kerala districts is NOT among the 4 primary recruitment districts for ILM executives?',
      options: [
        'Kasaragod',
        'Kannur',
        'Thiruvananthapuram',
        'Wayanad'
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      question: 'What is the standard candidate completion window granted for the ILMI Screening Exam access?',
      options: [
        '7 Days',
        '14 Days / 2 Weeks',
        '30 Days',
        '60 Days'
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: 'Which tool is explicitly required for Data Collection Executives according to recruitment requirements?',
      options: [
        'Laptop & Broadband',
        'Smartphone & WhatsApp',
        'Desktop & Printer',
        'Vehicle & Tablet'
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      question: 'What is the official email address for sending candidate CVs to ILM Career Consultancy?',
      options: [
        'info@ilmconsultancy.com',
        'ilmconsultancy2026@gmail.com',
        'careers@ilmedu.in',
        'help@ilm.org'
      ],
      correctAnswer: 1
    }
  ];

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState({});
  const [examTimeSecs, setExamTimeSecs] = useState(1800); // 30 minutes
  const [autoSaved, setAutoSaved] = useState(true);

  // Timer Countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setExamTimeSecs(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSelectOption = (optionIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQIndex]: optionIndex
    }));
    setAutoSaved(false);
    setTimeout(() => setAutoSaved(true), 400);
  };

  const toggleMarkReview = () => {
    setMarkedForReview(prev => ({
      ...prev,
      [currentQIndex]: !prev[currentQIndex]
    }));
  };

  const handleSubmitExam = () => {
    if (currentExamNumber === 1) {
      setExam1Score({
        totalQuestions: 50,
        attempted: Object.keys(selectedAnswers).length + 43,
        correct: 40,
        wrong: 8,
        score: '40/50',
        percentage: 80,
        status: 'QUALIFIED'
      });
      showToast('Exam 1 submitted successfully! View your result card.', 'success');
      navigateTo('exam-result');
    } else {
      setExam2Completed(true);
      showToast('Final Assessment completed successfully! View your final result.', 'success');
      navigateTo('final-result');
    }
  };

  const formatTimer = (totalSecs) => {
    const m = Math.floor(totalSecs / 60);
    const s = totalSecs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentQ = examQuestions[currentQIndex];

  return (
    <section className="section bg-light" style={{ padding: '2rem 0' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* Exam Engine Bar */}
        <div style={{
          backgroundColor: 'var(--color-navy)',
          color: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          padding: '1.25rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.5rem',
          border: '2px solid var(--color-gold)',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--color-gold)' }}>
              ILMI SCREENING ASSESSMENT — EXAM {currentExamNumber}
            </div>
            <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.8)' }}>
              Candidates must complete within the 14-day completion window
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {/* Auto Save Status Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: autoSaved ? '#22c55e' : 'var(--color-gold)' }}>
              <Save size={16} />
              <span>{autoSaved ? 'Auto Saved' : 'Saving...'}</span>
            </div>

            {/* Live Countdown Timer */}
            <div style={{
              backgroundColor: 'rgba(212, 175, 55, 0.2)',
              border: '1px solid var(--color-gold)',
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: 800,
              fontSize: '1.1rem',
              color: 'var(--color-gold)'
            }}>
              <Clock size={18} />
              <span>{formatTimer(examTimeSecs)}</span>
            </div>
          </div>
        </div>

        {/* Main Exam Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 280px',
          gap: '1.5rem',
          alignItems: 'start'
        }} className="exam-grid">
          
          {/* Left Column: Question & Options */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                backgroundColor: 'var(--color-gold-light)',
                color: 'var(--color-navy)',
                padding: '0.3rem 0.85rem',
                borderRadius: 'var(--radius-sm)'
              }}>
                Question {currentQIndex + 1} of {examQuestions.length}
              </span>

              <button 
                onClick={toggleMarkReview}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: markedForReview[currentQIndex] ? 'var(--color-gold)' : 'var(--color-bg-light)',
                  color: markedForReview[currentQIndex] ? 'var(--color-navy-dark)' : 'var(--color-navy)',
                  border: '1px solid var(--color-gold)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: 700,
                  fontSize: '0.85rem'
                }}
              >
                <Bookmark size={16} />
                <span>{markedForReview[currentQIndex] ? 'Marked for Review' : 'Mark for Review'}</span>
              </button>
            </div>

            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1.75rem', lineHeight: 1.4 }}>
              {currentQ.question}
            </h3>

            {/* Radio Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.25rem' }}>
              {currentQ.options.map((opt, oIdx) => {
                const selected = selectedAnswers[currentQIndex] === oIdx;
                return (
                  <button
                    key={opt}
                    onClick={() => handleSelectOption(oIdx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      textAlign: 'left',
                      padding: '1rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      border: '2px solid ' + (selected ? 'var(--color-gold)' : 'var(--color-border)'),
                      backgroundColor: selected ? 'var(--color-gold-light)' : '#FFFFFF',
                      color: 'var(--color-navy-dark)',
                      fontWeight: selected ? 800 : 600,
                      fontSize: '0.96rem',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      border: '2px solid ' + (selected ? 'var(--color-gold-dark)' : 'var(--color-text-muted)'),
                      backgroundColor: selected ? 'var(--color-gold-dark)' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontSize: '0.75rem',
                      flexShrink: 0
                    }}>
                      {selected ? '✓' : String.fromCharCode(65 + oIdx)}
                    </div>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Question Navigation Controls */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
              <button 
                disabled={currentQIndex === 0}
                onClick={() => setCurrentQIndex(prev => prev - 1)}
                className="btn btn-outline"
                style={{ opacity: currentQIndex === 0 ? 0.5 : 1 }}
              >
                <ArrowLeft size={18} />
                <span>Previous</span>
              </button>

              {currentQIndex < examQuestions.length - 1 ? (
                <button 
                  onClick={() => setCurrentQIndex(prev => prev + 1)}
                  className="btn btn-navy"
                >
                  <span>Next Question</span>
                  <ArrowRight size={18} />
                </button>
              ) : (
                <button 
                  onClick={handleSubmitExam}
                  className="btn btn-primary btn-lg"
                >
                  <span>Submit Exam</span>
                  <CheckCircle2 size={18} />
                </button>
              )}
            </div>

          </div>

          {/* Right Column: Question Navigator Grid */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
              QUESTION PALETTE
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.6rem', marginBottom: '1.5rem' }}>
              {examQuestions.map((q, idx) => {
                const answered = selectedAnswers[idx] !== undefined;
                const review = markedForReview[idx];
                const active = currentQIndex === idx;

                let bg = 'var(--color-bg-light)';
                let border = '1px solid var(--color-border)';
                let color = 'var(--color-navy)';

                if (active) {
                  border = '2px solid var(--color-gold)';
                  bg = 'var(--color-navy)';
                  color = 'var(--color-gold)';
                } else if (review) {
                  bg = 'var(--color-gold)';
                  color = 'var(--color-navy-dark)';
                } else if (answered) {
                  bg = '#22c55e';
                  color = '#FFFFFF';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQIndex(idx)}
                    style={{
                      height: '38px',
                      borderRadius: 'var(--radius-sm)',
                      border,
                      backgroundColor: bg,
                      color,
                      fontWeight: 800,
                      fontSize: '0.88rem',
                      cursor: 'pointer'
                    }}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '2px', backgroundColor: '#22c55e' }} />
                <span>Answered</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '2px', backgroundColor: 'var(--color-gold)' }} />
                <span>Marked for Review</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '2px', backgroundColor: 'var(--color-bg-light)', border: '1px solid var(--color-border)' }} />
                <span>Not Visited</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 850px) {
          .exam-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

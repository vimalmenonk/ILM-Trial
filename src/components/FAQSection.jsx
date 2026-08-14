import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is the 14-Day Completion Window for the Screening Exam?',
      a: 'As specified in the official ILMI project rules, candidates are granted a 14-day (2 weeks) completion window starting from their activation date to complete Exam 1 and Exam 2 / Final Assessment. Access automatically expires after the deadline unless extended by an Administrator.'
    },
    {
      q: 'How does the guided Course Finder work?',
      a: 'Course Finder is the main feature of the ILMI platform. It takes you through 3 guided steps: selecting your program goal, specifying your educational qualification (+2, Degree, PG, etc.), and selecting your career interest area to display matching programs.'
    },
    {
      q: 'What details are required during Screening Exam Registration?',
      a: 'The registration form collects Personal Details (Name, DOB, Gender, Mobile, WhatsApp, Email), Educational Details (Qualification, Institution, Course, Year), Address (Address, District, State, PIN Code), and Photo / ID proof before proceeding to payment.'
    },
    {
      q: 'How are results and certificates issued after completing the exam?',
      a: 'Upon completing Exam 1, a detailed score report is generated. After finishing all required assessments, qualified candidates receive an official ILMI Certificate of Completion complete with a unique Certificate Number and digital QR code verification.'
    },
    {
      q: 'Which districts are covered for executive recruitment initiatives?',
      a: 'ILM Career Consultancy currently operates active executive recruitment across 4 Kerala districts: Kasaragod, Kannur, Wayanad, and Kozhikode.'
    }
  ];

  return (
    <section id="faq" className="section bg-light">
      <div className="container" style={{ maxWidth: '840px' }}>
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={14} />
            <span>COMMON QUESTIONS</span>
          </div>
          <h2 className="section-title">
            Frequently Asked Questions
          </h2>
          <p className="section-subtitle">
            Answers regarding registration, the 14-day completion window, exam rules, and certificate verification.
          </p>
          <div className="gold-divider" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={faq.q}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    fontWeight: 800,
                    fontSize: '1.05rem',
                    color: 'var(--color-navy)',
                    backgroundColor: isOpen ? 'var(--color-gold-light)' : '#FFFFFF',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp size={20} color="var(--color-navy)" /> : <ChevronDown size={20} color="var(--color-navy)" />}
                </button>

                {isOpen && (
                  <div style={{
                    padding: '1.25rem 1.5rem',
                    fontSize: '0.96rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.65,
                    borderTop: '1px solid var(--color-border)'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

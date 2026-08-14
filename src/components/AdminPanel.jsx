import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Shield, Users, BookOpen, Clock, CheckCircle2, ArrowLeft, Plus, Edit, Calendar } from 'lucide-react';

export default function AdminPanel() {
  const { navigateTo, registrationData, studentId, setAccessExpiryDate, showToast } = useApp();

  const [activeAdminTab, setActiveAdminTab] = useState('extensions');
  const [extendedDays, setExtendedDays] = useState(7);

  const handleGrantExtension = () => {
    // Add 7 days to accessExpiryDate
    const currentExpiry = new Date('2026-08-26T23:59:59');
    currentExpiry.setDate(currentExpiry.getDate() + Number(extendedDays));
    setAccessExpiryDate(currentExpiry.toISOString());
    showToast(`Granted +${extendedDays} Days completion window extension for Student ID ${studentId}!`, 'success');
  };

  return (
    <section className="section bg-light">
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
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
            <span>Back to Public Website</span>
          </button>

          <span style={{
            fontSize: '0.85rem',
            fontWeight: 800,
            backgroundColor: 'var(--color-navy)',
            color: 'var(--color-gold)',
            padding: '0.4rem 0.85rem',
            borderRadius: 'var(--radius-sm)'
          }}>
            ILMI BACKEND ADMIN PANEL (PDF PAGE 15)
          </span>
        </div>

        <div style={{
          backgroundColor: 'var(--color-navy)',
          color: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem',
          border: '2px solid var(--color-gold)',
          marginBottom: '2rem'
        }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-gold)' }}>
            ILMI Administrative System
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.94rem', marginTop: '0.2rem' }}>
            System control for courses, student registrations, exam results, and 14-day completion window access extensions.
          </p>

          {/* Admin Tabs */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setActiveAdminTab('extensions')}
              className={`btn ${activeAdminTab === 'extensions' ? 'btn-primary' : 'btn-outline-gold'}`}
            >
              <Clock size={16} />
              <span>14-Day Window Extensions</span>
            </button>

            <button 
              onClick={() => setActiveAdminTab('students')}
              className={`btn ${activeAdminTab === 'students' ? 'btn-primary' : 'btn-outline-gold'}`}
            >
              <Users size={16} />
              <span>Student Registrations</span>
            </button>

            <button 
              onClick={() => setActiveAdminTab('courses')}
              className={`btn ${activeAdminTab === 'courses' ? 'btn-primary' : 'btn-outline-gold'}`}
            >
              <BookOpen size={16} />
              <span>Course System</span>
            </button>
          </div>
        </div>

        {/* Tab 1: 14-Day Window Extensions (PDF Page 7) */}
        {activeAdminTab === 'extensions' && (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
              Manual 14-Day Exam Completion Window Extension
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.94rem', marginBottom: '1.75rem' }}>
              As specified in PDF Page 7: "If there is a situation where an extension needs to be given, the Admin should have an option to manually extend it."
            </p>

            <div style={{
              backgroundColor: 'var(--color-bg-light)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-navy)' }}>
                  Student: {registrationData.fullName} ({studentId})
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                  Course: {registrationData.course} • District: {registrationData.district}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <select 
                  value={extendedDays} 
                  onChange={(e) => setExtendedDays(Number(e.target.value))}
                  style={{
                    padding: '0.65rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    fontWeight: 700
                  }}
                >
                  <option value={3}>+ 3 Days Extension</option>
                  <option value={7}>+ 7 Days Extension</option>
                  <option value={14}>+ 14 Days Full Extension</option>
                </select>

                <button onClick={handleGrantExtension} className="btn btn-navy">
                  <Calendar size={16} />
                  <span>Grant Extension</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Students List */}
        {activeAdminTab === 'students' && (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            border: '1px solid var(--color-border)'
          }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1.5rem' }}>
              Registered Student Records
            </h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-navy)', color: '#FFFFFF' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Student ID</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Name</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Course</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>District</th>
                  <th style={{ padding: '0.75rem', textAlign: 'center' }}>Exam Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '0.75rem', fontWeight: 700 }}>{studentId}</td>
                  <td style={{ padding: '0.75rem' }}>{registrationData.fullName}</td>
                  <td style={{ padding: '0.75rem' }}>{registrationData.course}</td>
                  <td style={{ padding: '0.75rem' }}>{registrationData.district}</td>
                  <td style={{ padding: '0.75rem', textAlign: 'center', color: '#22c55e', fontWeight: 800 }}>Qualified</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 3: Courses Catalog */}
        {activeAdminTab === 'courses' && (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            border: '1px solid var(--color-border)'
          }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1.5rem' }}>
              Course Management System
            </h3>
            <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-bg-light)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div>Active Catalog Programs: <strong>4 ILMI Programs Registered</strong></div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

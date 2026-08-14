import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FileText, User, GraduationCap, MapPin, Upload, CheckSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function ExamRegistrationForm() {
  const { registrationData, setRegistrationData, navigateTo, selectedCourse, showToast } = useApp();

  const [formData, setFormData] = useState({
    fullName: registrationData.fullName || '',
    dob: registrationData.dob || '',
    gender: registrationData.gender || 'Male',
    mobileNumber: registrationData.mobileNumber || '',
    whatsappNumber: registrationData.whatsappNumber || '',
    email: registrationData.email || '',
    qualification: registrationData.qualification || 'Degree',
    institution: registrationData.institution || '',
    course: selectedCourse ? selectedCourse.title : (registrationData.course || 'Professional Diploma in Business & Management'),
    yearOfCompletion: registrationData.yearOfCompletion || '2023',
    address: registrationData.address || '',
    district: registrationData.district || 'Kozhikode',
    state: registrationData.state || 'Kerala',
    pinCode: registrationData.pinCode || '',
    declaration: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.declaration) {
      showToast('Please accept the declaration before continuing.', 'error');
      return;
    }
    setRegistrationData(formData);
    showToast('Registration details saved! Proceeding to Payment.', 'success');
    navigateTo('payment');
  };

  return (
    <section className="section bg-light">
      <div className="container" style={{ maxWidth: '880px' }}>
        
        {/* Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={14} />
            <span>STEP 3 OF USER JOURNEY</span>
          </div>
          <h2 className="section-title">
            Screening Exam Registration
          </h2>
          <p className="section-subtitle">
            Fill out the required candidate details specified in the official ILMI project SRS.
          </p>
          <div className="gold-divider" />
        </div>

        <form onSubmit={handleSubmit} style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-md)',
          border: '2px solid var(--color-gold)'
        }}>
          
          {/* Selected Course Banner */}
          <div style={{
            backgroundColor: 'var(--color-navy)',
            color: '#FFFFFF',
            padding: '1.25rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.85rem'
          }}>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-gold)', fontWeight: 800, textTransform: 'uppercase' }}>
                SELECTED SCREENING PROGRAM
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: 800 }}>
                {formData.course}
              </div>
            </div>
            <span style={{
              fontSize: '0.85rem',
              backgroundColor: 'var(--color-gold-light)',
              color: 'var(--color-navy)',
              fontWeight: 800,
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-sm)'
            }}>
              Fee: ₹ 1,500
            </span>
          </div>

          {/* Section 1: Personal Details */}
          <div style={{ marginBottom: '2.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', borderBottom: '2px solid var(--color-bg-light)', paddingBottom: '0.6rem' }}>
              <User size={20} color="var(--color-navy)" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)' }}>
                1. Personal Details
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-grid">
              <div>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.35rem' }}>Full Name *</label>
                <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} placeholder="e.g. Muhammad K" className="form-input" />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.35rem' }}>Date of Birth *</label>
                <input type="date" name="dob" required value={formData.dob} onChange={handleChange} className="form-input" />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.35rem' }}>Gender *</label>
                <select name="gender" value={formData.gender} onChange={handleChange} className="form-input">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.35rem' }}>Email Address *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="muhammad@example.com" className="form-input" />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.35rem' }}>Mobile Number *</label>
                <input type="tel" name="mobileNumber" required value={formData.mobileNumber} onChange={handleChange} placeholder="10-digit mobile" className="form-input" />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.35rem' }}>WhatsApp Number *</label>
                <input type="tel" name="whatsappNumber" required value={formData.whatsappNumber} onChange={handleChange} placeholder="10-digit WhatsApp" className="form-input" />
              </div>
            </div>
          </div>

          {/* Section 2: Educational Details */}
          <div style={{ marginBottom: '2.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', borderBottom: '2px solid var(--color-bg-light)', paddingBottom: '0.6rem' }}>
              <GraduationCap size={20} color="var(--color-navy)" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)' }}>
                2. Educational Details
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-grid">
              <div>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.35rem' }}>Highest Qualification *</label>
                <select name="qualification" value={formData.qualification} onChange={handleChange} className="form-input">
                  <option value="+2">+2 / Higher Secondary</option>
                  <option value="Degree">Degree / Graduation</option>
                  <option value="PG">Post Graduation (PG)</option>
                  <option value="Professional Qualification">Professional Qualification</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.35rem' }}>Institution / College Name *</label>
                <input type="text" name="institution" required value={formData.institution} onChange={handleChange} placeholder="e.g. Kerala University" className="form-input" />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.35rem' }}>Selected Course *</label>
                <input type="text" name="course" required value={formData.course} onChange={handleChange} className="form-input" />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.35rem' }}>Year of Completion *</label>
                <input type="text" name="yearOfCompletion" required value={formData.yearOfCompletion} onChange={handleChange} placeholder="e.g. 2023" className="form-input" />
              </div>
            </div>
          </div>

          {/* Section 3: Address */}
          <div style={{ marginBottom: '2.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', borderBottom: '2px solid var(--color-bg-light)', paddingBottom: '0.6rem' }}>
              <MapPin size={20} color="var(--color-navy)" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)' }}>
                3. Address
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-grid">
              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.35rem' }}>Full Address *</label>
                <input type="text" name="address" required value={formData.address} onChange={handleChange} placeholder="House / Street Name" className="form-input" />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.35rem' }}>District *</label>
                <select name="district" value={formData.district} onChange={handleChange} className="form-input">
                  <option value="Kasaragod">Kasaragod</option>
                  <option value="Kannur">Kannur</option>
                  <option value="Wayanad">Wayanad</option>
                  <option value="Kozhikode">Kozhikode</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.35rem' }}>State *</label>
                <input type="text" name="state" required value={formData.state} onChange={handleChange} className="form-input" />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.35rem' }}>PIN Code *</label>
                <input type="text" name="pinCode" required value={formData.pinCode} onChange={handleChange} placeholder="673001" className="form-input" />
              </div>
            </div>
          </div>

          {/* Section 4: Other (Photo & ID Upload & Declaration) */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', borderBottom: '2px solid var(--color-bg-light)', paddingBottom: '0.6rem' }}>
              <Upload size={20} color="var(--color-navy)" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)' }}>
                4. Documents & Declaration
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }} className="form-grid">
              <div style={{
                backgroundColor: 'var(--color-bg-light)',
                border: '2px dashed var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.25rem' }}>
                  Passport-size Photo *
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
                  JPEG / PNG format (Max 2MB)
                </div>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#22c55e' }}>✓ File Selected</span>
              </div>

              <div style={{
                backgroundColor: 'var(--color-bg-light)',
                border: '2px dashed var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.25rem' }}>
                  ID Proof (Aadhaar / Voter ID)
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
                  Optional / If required
                </div>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#22c55e' }}>✓ File Attached</span>
              </div>
            </div>

            {/* Declaration Checkbox */}
            <div style={{
              backgroundColor: 'var(--color-gold-light)',
              border: '1px solid var(--color-gold-border)',
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.85rem'
            }}>
              <input 
                type="checkbox" 
                name="declaration"
                id="declaration" 
                checked={formData.declaration}
                onChange={handleChange}
                style={{ width: '20px', height: '20px', marginTop: '0.15rem' }}
              />
              <label htmlFor="declaration" style={{ fontSize: '0.92rem', color: 'var(--color-navy-dark)', fontWeight: 600, cursor: 'pointer' }}>
                <strong>Declaration:</strong> I hereby declare that all information provided above is true and accurate to the best of my knowledge. I agree to complete the ILMI 2-Step Screening Assessment within the 14-day completion window.
              </label>
            </div>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary btn-lg"
            style={{ width: '100%' }}
          >
            <span>Continue to Payment</span>
            <ArrowRight size={20} />
          </button>

        </form>

      </div>

      <style>{`
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-navy-dark);
          background-color: #FFFFFF;
        }
        @media (max-width: 600px) {
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const isSuccess = toast.type === 'success';

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      zIndex: 1100,
      backgroundColor: isSuccess ? 'var(--color-navy)' : '#7f1d1d',
      color: '#FFFFFF',
      border: `2px solid ${isSuccess ? 'var(--color-gold)' : '#ef4444'}`,
      borderRadius: 'var(--radius-md)',
      padding: '1rem 1.25rem',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.85rem',
      maxWidth: '420px',
      animation: 'fadeIn 0.3s ease'
    }}>
      {isSuccess ? (
        <CheckCircle2 size={22} color="var(--color-gold)" style={{ flexShrink: 0 }} />
      ) : (
        <AlertCircle size={22} color="#fca5a5" style={{ flexShrink: 0 }} />
      )}
      
      <span style={{ fontSize: '0.94rem', fontWeight: 600, flex: 1, lineHeight: 1.4 }}>
        {toast.message}
      </span>

      <button 
        onClick={onClose}
        style={{
          color: 'rgba(255, 255, 255, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.2rem'
        }}
      >
        <X size={18} />
      </button>
    </div>
  );
}

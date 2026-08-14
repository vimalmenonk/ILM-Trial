import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { useApp } from '../context/AppContext';
import { Menu, X, UserCheck, Shield, BookOpen, Compass, FileText, ArrowRight } from 'lucide-react';

export default function Header() {
  const { currentView, navigateTo, isLoggedIn, studentId } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', view: 'home' },
    { label: 'About ILMI', view: 'about' },
    { label: 'Course Finder', view: 'course-finder' },
    { label: 'Programs', view: 'programs' },
    { label: 'Screening Exam', view: 'screening-exam-reg' },
    { label: 'Contact', view: 'contact' },
    { label: 'FAQ', view: 'faq' },
  ];

  const handleNavClick = (view) => {
    setMobileMenuOpen(false);
    navigateTo(view);
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 950,
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : '#FFFFFF',
      boxShadow: isScrolled ? '0 4px 20px rgba(11, 27, 61, 0.08)' : '0 2px 10px rgba(11, 27, 61, 0.04)',
      borderBottom: '2px solid var(--color-gold-border)',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '84px'
      }}>
        
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left' }}
        >
          <Logo size="normal" showTagline={true} />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            {navItems.map((item) => {
              const active = currentView === item.view;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.view)}
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: active ? 800 : 600,
                    color: active ? 'var(--color-gold-dark)' : 'var(--color-navy)',
                    borderBottom: active ? '2px solid var(--color-gold)' : '2px solid transparent',
                    padding: '0.35rem 0',
                    transition: 'all 0.2s ease',
                    background: 'none'
                  }}
                  className="nav-link-btn"
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginLeft: '0.5rem' }}>
            {isLoggedIn ? (
              <button 
                onClick={() => handleNavClick('student-portal')}
                className="btn btn-navy"
                style={{ fontSize: '0.88rem', padding: '0.65rem 1.25rem' }}
              >
                <UserCheck size={16} />
                <span>Portal ({studentId.split('-')[2]})</span>
              </button>
            ) : (
              <button 
                onClick={() => handleNavClick('student-login')}
                className="btn btn-primary"
                style={{ fontSize: '0.88rem', padding: '0.65rem 1.25rem' }}
              >
                <UserCheck size={16} />
                <span>Student Login</span>
              </button>
            )}

            <button
              onClick={() => handleNavClick('admin-panel')}
              title="Admin Panel"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-bg-light)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-navy)',
                transition: 'all 0.2s ease'
              }}
            >
              <Shield size={18} />
            </button>
          </div>

        </nav>

        {/* Mobile Hamburger Button (Three-line Menu ■) */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Three-line Menu"
          style={{
            display: 'none',
            padding: '0.6rem',
            color: 'var(--color-navy)',
            backgroundColor: 'var(--color-gold-light)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--color-gold-border)'
          }}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* PDF Page 1: Three-line Menu (■) Drawer */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-drawer animate-fade-in"
          style={{
            position: 'absolute',
            top: '84px',
            left: 0,
            width: '100%',
            backgroundColor: '#FFFFFF',
            borderBottom: '4px solid var(--color-gold)',
            boxShadow: '0 15px 30px rgba(11, 27, 61, 0.2)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}
        >
          <div style={{
            fontSize: '0.8rem',
            fontWeight: 800,
            color: 'var(--color-gold-dark)',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            borderBottom: '1px solid var(--color-border)',
            paddingBottom: '0.5rem'
          }}>
            ILMI NAVIGATION MENU (■)
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.view)}
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--color-navy)',
                  textAlign: 'left',
                  padding: '0.6rem 0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: currentView === item.view ? 'var(--color-gold-light)' : 'transparent',
                  border: 'none'
                }}
              >
                • {item.label}
              </button>
            ))}
          </div>

          <div style={{
            borderTop: '1px dashed var(--color-border)',
            paddingTop: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            <button 
              onClick={() => handleNavClick('student-login')}
              className="btn btn-primary btn-lg"
              style={{ width: '100%' }}
            >
              <UserCheck size={18} />
              <span>Student Login Portal</span>
            </button>

            <button 
              onClick={() => handleNavClick('admin-panel')}
              className="btn btn-outline"
              style={{ width: '100%' }}
            >
              <Shield size={18} />
              <span>Admin Panel View</span>
            </button>
          </div>

        </div>
      )}

      <style>{`
        .nav-link-btn:hover {
          color: var(--color-gold-dark) !important;
        }
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { useApp } from '../context/AppContext';
import { Menu, X, UserCheck, Shield } from 'lucide-react';

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
      maxWidth: '100vw',
      zIndex: 950,
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : '#FFFFFF',
      boxShadow: isScrolled ? '0 4px 20px rgba(11, 27, 61, 0.08)' : '0 2px 10px rgba(11, 27, 61, 0.04)',
      borderBottom: '2px solid var(--color-gold-border)',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '76px',
        padding: '0 1rem',
        boxSizing: 'border-box',
        maxWidth: '1240px',
        margin: '0 auto'
      }}>
        
        {/* Brand Logo Link */}
        <button 
          onClick={() => handleNavClick('home')}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            minWidth: 0,
            maxWidth: 'calc(100% - 60px)',
            overflow: 'hidden'
          }}
        >
          <Logo size="normal" showTagline={true} />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {navItems.map((item) => {
              const active = currentView === item.view;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.view)}
                  style={{
                    fontSize: '0.9rem',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginLeft: '0.5rem' }}>
            {isLoggedIn ? (
              <button 
                onClick={() => handleNavClick('student-portal')}
                className="btn btn-navy"
                style={{ fontSize: '0.85rem', padding: '0.55rem 1.1rem' }}
              >
                <UserCheck size={15} />
                <span>Portal ({studentId.split('-')[2]})</span>
              </button>
            ) : (
              <button 
                onClick={() => handleNavClick('student-login')}
                className="btn btn-primary"
                style={{ fontSize: '0.85rem', padding: '0.55rem 1.1rem' }}
              >
                <UserCheck size={15} />
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
                width: '36px',
                height: '36px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-bg-light)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-navy)',
                transition: 'all 0.2s ease'
              }}
            >
              <Shield size={16} />
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
            padding: '0.5rem',
            color: 'var(--color-navy)',
            backgroundColor: 'var(--color-gold-light)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--color-gold-border)',
            flexShrink: 0,
            marginLeft: '0.5rem'
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* PDF Page 1: Three-line Menu (■) Drawer */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-drawer animate-fade-in"
          style={{
            position: 'absolute',
            top: '76px',
            left: 0,
            width: '100%',
            maxWidth: '100vw',
            backgroundColor: '#FFFFFF',
            borderBottom: '4px solid var(--color-gold)',
            boxShadow: '0 15px 30px rgba(11, 27, 61, 0.2)',
            padding: '1.25rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxSizing: 'border-box',
            zIndex: 999
          }}
        >
          <div style={{
            fontSize: '0.78rem',
            fontWeight: 800,
            color: 'var(--color-gold-dark)',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            borderBottom: '1px solid var(--color-border)',
            paddingBottom: '0.4rem'
          }}>
            ILMI NAVIGATION MENU (■)
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.view)}
                style={{
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  color: 'var(--color-navy)',
                  textAlign: 'left',
                  padding: '0.55rem 0.65rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: currentView === item.view ? 'var(--color-gold-light)' : 'transparent',
                  border: 'none',
                  width: '100%',
                  boxSizing: 'border-box'
                }}
              >
                • {item.label}
              </button>
            ))}
          </div>

          <div style={{
            borderTop: '1px dashed var(--color-border)',
            paddingTop: '0.85rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.65rem'
          }}>
            <button 
              onClick={() => handleNavClick('student-login')}
              className="btn btn-primary"
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

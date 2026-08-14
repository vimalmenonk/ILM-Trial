import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CourseFinder from './components/CourseFinder';
import CourseInfoPage from './components/CourseInfoPage';
import ProgramsSection from './components/ProgramsSection';
import ExamRegistrationForm from './components/ExamRegistrationForm';
import PaymentGateway from './components/PaymentGateway';
import StudentLogin from './components/StudentLogin';
import StudentDashboard from './components/StudentDashboard';
import ScreeningExamSimulator from './components/ScreeningExamSimulator';
import ExamResultView from './components/ExamResultView';
import ResultReportPDF from './components/ResultReportPDF';
import CertificateView from './components/CertificateView';
import CertificateVerification from './components/CertificateVerification';
import AdminPanel from './components/AdminPanel';
import RecruitmentSection from './components/RecruitmentSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import Toast from './components/Toast';

function AppContent() {
  const { currentView, toast } = useApp();

  return (
    <div className="ilm-app-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Sticky Navigation Header */}
      <Header />

      {/* Main View Router */}
      <main style={{ flex: 1 }}>
        {currentView === 'home' && (
          <>
            <Hero />
            <CourseFinder />
            <AboutSection />
            <ProgramsSection />
            <RecruitmentSection />
            <FAQSection />
          </>
        )}

        {currentView === 'about' && <AboutSection />}
        {currentView === 'course-finder' && <CourseFinder />}
        {currentView === 'course-info' && <CourseInfoPage />}
        {currentView === 'programs' && <ProgramsSection />}
        {currentView === 'screening-exam-reg' && <ExamRegistrationForm />}
        {currentView === 'payment' && <PaymentGateway />}
        {currentView === 'student-login' && <StudentLogin />}
        {currentView === 'student-portal' && <StudentDashboard />}
        {currentView === 'exam-simulator' && <ScreeningExamSimulator />}
        {currentView === 'exam-result' && <ExamResultView />}
        {currentView === 'result-report' && <ResultReportPDF />}
        {currentView === 'final-result' && <CertificateView />}
        {currentView === 'certificate' && <CertificateView />}
        {currentView === 'certificate-verify' && <CertificateVerification />}
        {currentView === 'contact' && <ContactSection onShowToast={() => {}} />}
        {currentView === 'faq' && <FAQSection />}
        {currentView === 'admin-panel' && <AdminPanel />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Toast */}
      <Toast toast={toast} onClose={() => {}} />

    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

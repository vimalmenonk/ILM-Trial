import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Navigation View State
  // Views: 'home', 'about', 'course-finder', 'course-info', 'programs', 'screening-exam-reg',
  // 'payment', 'student-login', 'student-portal', 'exam-simulator', 'exam-result',
  // 'result-report', 'final-result', 'certificate', 'certificate-verify', 'contact', 'faq', 'admin-panel'
  const [currentView, setCurrentView] = useState('home');
  const [portalTab, setPortalTab] = useState('dashboard'); // 11 PDF Command Menu tabs

  // Guided Course Finder State
  const [finderStep1Goal, setFinderStep1Goal] = useState('');
  const [finderStep2Edu, setFinderStep2Edu] = useState('');
  const [finderStep3Interest, setFinderStep3Interest] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Registration & Student Session State
  const [registrationData, setRegistrationData] = useState({
    fullName: 'Muhammad K',
    dob: '2001-05-15',
    gender: 'Male',
    mobileNumber: '9876543210',
    whatsappNumber: '9876543210',
    email: 'muhammad@example.com',
    qualification: 'Degree',
    institution: 'Kerala University',
    course: 'Professional Diploma in Business & Management',
    yearOfCompletion: '2023',
    address: 'Main Street, Beach Road',
    district: 'Kozhikode',
    state: 'Kerala',
    pinCode: '673001',
    photoUploaded: true,
    idProofUploaded: true,
    declarationAccepted: true
  });

  const [paymentDone, setPaymentDone] = useState(true);
  const [registrationId, setRegistrationId] = useState('ILMI-SCR-2026-000001');
  const [studentId, setStudentId] = useState('ILMI-2026-000001');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 14-Day Completion Window State (PDF Page 7)
  const [accessStartDate, setAccessStartDate] = useState('2026-08-12T09:00:00');
  const [accessExpiryDate, setAccessExpiryDate] = useState('2026-08-26T23:59:59');

  // Exam Simulator & Scores State
  const [currentExamNumber, setCurrentExamNumber] = useState(1); // 1 or 2
  const [exam1Score, setExam1Score] = useState({
    totalQuestions: 50,
    attempted: 48,
    correct: 40,
    wrong: 8,
    score: '40/50',
    percentage: 80,
    status: 'QUALIFIED'
  });
  const [exam2Completed, setExam2Completed] = useState(false);
  const [finalQualified, setFinalQualified] = useState(true);

  // Courses Database based on PDF
  const coursesCatalog = [
    {
      id: 'prof-bus-mgmt',
      title: 'Professional Diploma in Business & Management',
      category: 'Professional Course',
      qualificationReq: 'Degree',
      interestArea: 'Management',
      duration: '6 Months',
      fee: '₹ 1,500 Screening Exam Fee',
      description: 'Comprehensive professional training in operational leadership, business communications, and district-level administrative strategy.',
      syllabus: ['Business Ethics & Governance', 'Strategic Management', 'Data Collection & Analytics', 'Student Relationship Management']
    },
    {
      id: 'cert-finance-acct',
      title: 'Certification in Financial Accounting & Compliance',
      category: 'Certification',
      qualificationReq: '+2',
      interestArea: 'Accounting',
      duration: '3 Months',
      fee: '₹ 1,500 Screening Exam Fee',
      description: 'Practical certification focusing on accounting fundamentals, financial reporting, ledger maintenance, and compliance auditing.',
      syllabus: ['Financial Statements', 'Tally & Digital Ledger Tools', 'Taxation Fundamentals', 'Audit Readiness']
    },
    {
      id: 'degree-tech-dev',
      title: 'Career Program in Technology & Data Systems',
      category: 'Career-oriented Program',
      qualificationReq: '+2',
      interestArea: 'Technology',
      duration: '1 Year',
      fee: '₹ 1,500 Screening Exam Fee',
      description: 'Industry-aligned career program equipping candidates with dataset management, mobile workflow systems, and digital reporting tools.',
      syllabus: ['Database Management', 'Mobile Data Collection Tools', 'Analytics Dashboards', 'IT Infrastructure Basics']
    },
    {
      id: 'skill-legal-admin',
      title: 'Skill Development in Legal & Public Administration',
      category: 'Skill Development',
      qualificationReq: 'Professional Qualification',
      interestArea: 'Law',
      duration: '4 Months',
      fee: '₹ 1,500 Screening Exam Fee',
      description: 'Specialized skill program covering statutory documentation, legal compliance framework, and public grievance handling.',
      syllabus: ['Legal Documentation', 'Regulatory Frameworks', 'Contract Basics', 'Public Administration']
    }
  ];

  // Utility Toast State
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4500);
  };

  const navigateTo = (view, extra = null) => {
    if (extra && extra.course) {
      setSelectedCourse(extra.course);
    }
    if (extra && extra.tab) {
      setPortalTab(extra.tab);
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppContext.Provider value={{
      currentView,
      setCurrentView,
      navigateTo,
      portalTab,
      setPortalTab,
      finderStep1Goal,
      setFinderStep1Goal,
      finderStep2Edu,
      setFinderStep2Edu,
      finderStep3Interest,
      setFinderStep3Interest,
      selectedCourse,
      setSelectedCourse,
      coursesCatalog,
      registrationData,
      setRegistrationData,
      paymentDone,
      setPaymentDone,
      registrationId,
      setRegistrationId,
      studentId,
      setStudentId,
      isLoggedIn,
      setIsLoggedIn,
      accessStartDate,
      accessExpiryDate,
      setAccessExpiryDate,
      currentExamNumber,
      setCurrentExamNumber,
      exam1Score,
      setExam1Score,
      exam2Completed,
      setExam2Completed,
      finalQualified,
      setFinalQualified,
      toast,
      showToast
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}

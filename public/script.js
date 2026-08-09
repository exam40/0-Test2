// ===== GOOGLE FORM =====
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfh9PlBT3YuABzFivtPLhDPe8j8LgwT0j3oV1fPKxIb-vLUrw/viewform';

// ===== SUBJECT CATEGORIES =====
const CATEGORIES = {
  'Languages': ['English Language', 'Chinese', 'Higher Chinese', 'Malay Special Programme', 'Chinese Special Programme', 'Literature in English', 'Literature in Chinese'],
  'Mathematics': ['Mathematics', 'Additional Mathematics'],
  'Sciences': ['Chemistry', 'Physics', 'Biology', 'Science (Phy/Chem)', 'Science (Phy/Bio)', 'Science (Chem/Bio)'],
  'Humanities': ['Social Studies', 'Humanities (SS, Geog)', 'Humanities (SS, Hist)', 'Humanities (SS, Lit)', 'Geography', 'History'],
  'Arts & Electives': ['Art', 'Higher Art', 'Music', 'Design & Technology']
};

const DEFAULT_SUBJECT_COLORS = {
  'English Language': '#2563eb', 'Chinese': '#dc2626', 'Higher Chinese': '#991b1b',
  'Malay Special Programme': '#ea580c', 'Chinese Special Programme': '#c2410c',
  'Literature in English': '#7c3aed', 'Literature in Chinese': '#a21caf',
  'Mathematics': '#059669', 'Additional Mathematics': '#047857',
  'Chemistry': '#d97706', 'Physics': '#4f46e5', 'Biology': '#db2777',
  'Science (Phy/Chem)': '#f97316', 'Science (Phy/Bio)': '#e11d48', 'Science (Chem/Bio)': '#9333ea',
  'Social Studies': '#0891b2', 'Humanities (SS, Geog)': '#0d9488', 'Humanities (SS, Hist)': '#0284c7',
  'Humanities (SS, Lit)': '#6d28d9', 'Geography': '#14b8a6', 'History': '#0ea5e9',
  'Art': '#e11d48', 'Higher Art': '#be123c', 'Music': '#c026d3', 'Design & Technology': '#ca8a04'
};

const COLOR_PALETTE = ['#2563eb','#dc2626','#059669','#d97706','#7c3aed','#db2777','#0891b2','#ea580c','#4f46e5','#ca8a04','#14b8a6','#e11d48','#0284c7','#84cc16','#f97316','#8b5cf6','#06b6d4','#f43f5e','#0ea5e9','#a855f7','#10b981','#eab308','#6366f1','#ec4899'];

const TOPIC_STATUSES = ['Not Started', 'Learning', 'Practised', 'Mastered'];
const TUTORIAL_STEPS = [
  { icon: '📚', title: 'Welcome to Exam Countdown!', desc: 'Track your exam schedule, set study goals, plan daily tasks, and monitor your progress — all in one place.', btn: 'Next →' },
  { icon: '🎯', title: 'Select Your Subjects', desc: 'Go to Settings to choose which exam sets and subjects you\'re taking. Only selected papers will show in your countdown.', btn: 'Next →' },
  { icon: '📅', title: 'Use the Calendar', desc: 'View all your exams on the calendar. Click dates with dots to see paper details. The timeline shows this week\'s schedule at a glance.', btn: 'Next →' },
  { icon: '✏️', title: 'Plan Daily Tasks', desc: 'Use the Daily Study Plan to add tasks for each day. Check them off as you complete them — build a study streak!', btn: 'Next →' },
  { icon: '🎨', title: 'Track Your Progress', desc: 'Mark each paper as Not Started → Learning → Practised → Ready. Add topics to track per-subject progress with visual bars.', btn: 'Next →' },
  { icon: '🎯', title: 'Set a Grade Target', desc: 'Use the Results tab to enter your scores, set a target grade, and see interactively what you still need to achieve it.', btn: 'Done! 🚀' }
];

// ===== NA-LEVEL (Normal Academic) DATA =====
const NA_CATEGORIES = {
  'Languages': ['English Language', 'Chinese', 'Malay', 'Tamil', 'Basic Chinese', 'Basic Malay', 'Basic Tamil', 'Bengali', 'Gujarati', 'Hindi', 'Panjabi', 'Urdu'],
  'Mathematics': ['Mathematics', 'Additional Mathematics'],
  'Sciences': ['Science (Phy/Chem)', 'Science (Phy/Bio)', 'Science (Chem/Bio)'],
  'Humanities': ['Social Studies', 'Humanities (SS, Geog)', 'Humanities (SS, Hist)', 'Humanities (SS, Lit)', 'Geography', 'History', 'Literature in English'],
  'Business & Tech': ['Principles of Accounts', 'Elements of Business Skills'],
  'Arts & Electives': ['Art', 'Music', 'Nutrition & Food Science', 'Design & Technology']
};
const NA_COLORS = {
  'English Language': '#2563eb', 'Chinese': '#dc2626', 'Malay': '#ea580c', 'Tamil': '#c2410c',
  'Basic Chinese': '#991b1b', 'Basic Malay': '#b45309', 'Basic Tamil': '#92400e',
  'Bengali': '#7c3aed', 'Gujarati': '#6d28d9', 'Hindi': '#a21caf', 'Panjabi': '#86198f', 'Urdu': '#9d174d',
  'Mathematics': '#059669', 'Additional Mathematics': '#047857',
  'Science (Phy/Chem)': '#d97706', 'Science (Phy/Bio)': '#e11d48', 'Science (Chem/Bio)': '#9333ea',
  'Social Studies': '#0891b2', 'Humanities (SS, Geog)': '#0d9488', 'Humanities (SS, Hist)': '#0284c7',
  'Humanities (SS, Lit)': '#6d28d9', 'Geography': '#14b8a6', 'History': '#0ea5e9', 'Literature in English': '#7c3aed',
  'Principles of Accounts': '#ca8a04', 'Elements of Business Skills': '#f97316',
  'Art': '#e11d48', 'Music': '#c026d3', 'Nutrition & Food Science': '#84cc16', 'Design & Technology': '#ca8a04'
};

// ===== NT-LEVEL (Normal Technical) DATA =====
const NT_CATEGORIES = {
  'Languages': ['English Language (Syll T)', 'Basic Chinese', 'Basic Malay', 'Basic Tamil'],
  'Mathematics': ['Mathematics (Syll T)'],
  'Sciences': ['Science (Syll T)'],
  'Applied Subjects': ['Computer Applications', 'Design & Technology', 'Mobile Robotics', 'Smart Electrical Technology', 'Retail Operations'],
  'Arts': ['Art', 'Music']
};
const NT_COLORS = {
  'English Language (Syll T)': '#2563eb', 'Basic Chinese': '#991b1b', 'Basic Malay': '#b45309', 'Basic Tamil': '#92400e',
  'Mathematics (Syll T)': '#059669', 'Science (Syll T)': '#d97706',
  'Computer Applications': '#0891b2', 'Design & Technology': '#ca8a04',
  'Mobile Robotics': '#7c3aed', 'Smart Electrical Technology': '#f97316', 'Retail Operations': '#14b8a6',
  'Art': '#e11d48', 'Music': '#c026d3'
};

// ===== A-LEVEL DATA =====
const ALEVEL_CATEGORIES = {
  'H1 Compulsory': ['General Paper'],
  'H1 Mother Tongue': ['H1 Chinese (MTL)', 'H1 Malay (MTL)', 'H1 Tamil (MTL)'],
  'H1 Mathematics & Sciences': ['H1 Mathematics', 'H1 Chemistry', 'H1 Physics', 'H1 Biology'],
  'H1 Humanities & Arts': ['H1 Economics', 'H1 History', 'H1 Geography', 'H1 Literature in English', 'H1 Art'],
  'H2 Mathematics & Sciences': ['H2 Mathematics', 'H2 Further Mathematics', 'H2 Physics', 'H2 Chemistry', 'H2 Biology'],
  'H2 Humanities': ['H2 Economics', 'H2 History', 'H2 Geography', 'H2 Literature in English', 'H2 English Language & Linguistics'],
  'H2 Languages & Arts': ['H2 Chinese Language & Literature', 'H2 Malay Language & Literature', 'H2 Tamil Language & Literature', 'H2 Art', 'H2 Music', 'H2 Theatre Studies & Drama'],
  'H2 Computing & Business': ['H2 Computing', 'H2 Principles of Accounting', 'H2 Management of Business', 'H2 China Studies in English', 'H2 China Studies in Chinese', 'H2 Translation (Chinese)'],
  'H3 Subjects': ['H3 Mathematics', 'H3 Physics', 'H3 Chemistry', 'H3 Biology', 'H3 Economics', 'H3 History', 'H3 Geography', 'H3 Literature'],
  'Knowledge & Inquiry': ['Knowledge & Inquiry'],
  'Foreign Languages': ['French', 'German', 'Japanese', 'Spanish', 'Arabic', 'Chinese B', 'Malay B', 'Tamil B', 'Bengali', 'Gujarati', 'Hindi', 'Panjabi', 'Urdu'],
  'Religious Knowledge': ['Islamic Theology', 'Islamic Law']
};
const ALEVEL_COLORS = {
  'General Paper': '#2563eb', 'H1 Chinese (MTL)': '#dc2626', 'H1 Malay (MTL)': '#ea580c', 'H1 Tamil (MTL)': '#c2410c',
  'H1 Mathematics': '#059669', 'H1 Chemistry': '#d97706', 'H1 Physics': '#4f46e5', 'H1 Biology': '#db2777',
  'H1 Economics': '#0891b2', 'H1 History': '#0ea5e9', 'H1 Geography': '#14b8a6', 'H1 Literature in English': '#7c3aed', 'H1 Art': '#e11d48',
  'H2 Mathematics': '#059669', 'H2 Further Mathematics': '#047857', 'H2 Physics': '#4f46e5', 'H2 Chemistry': '#d97706', 'H2 Biology': '#db2777',
  'H2 Economics': '#0891b2', 'H2 History': '#0ea5e9', 'H2 Geography': '#14b8a6', 'H2 Literature in English': '#7c3aed',
  'H2 English Language & Linguistics': '#6d28d9',
  'H2 Chinese Language & Literature': '#dc2626', 'H2 Malay Language & Literature': '#ea580c', 'H2 Tamil Language & Literature': '#c2410c',
  'H2 Art': '#e11d48', 'H2 Music': '#c026d3', 'H2 Theatre Studies & Drama': '#f97316',
  'H2 Computing': '#0891b2', 'H2 Principles of Accounting': '#ca8a04', 'H2 Management of Business': '#f97316',
  'H2 China Studies in English': '#0284c7', 'H2 China Studies in Chinese': '#024b7c', 'H2 Translation (Chinese)': '#991b1b',
  'H3 Mathematics': '#059669', 'H3 Physics': '#4f46e5', 'H3 Chemistry': '#d97706', 'H3 Biology': '#db2777',
  'H3 Economics': '#0891b2', 'H3 History': '#0ea5e9', 'H3 Geography': '#14b8a6', 'H3 Literature': '#7c3aed',
  'Knowledge & Inquiry': '#8b5cf6',
  'French': '#ec4899', 'German': '#f43f5e', 'Japanese': '#a21caf', 'Spanish': '#f97316', 'Arabic': '#059669',
  'Chinese B': '#dc2626', 'Malay B': '#ea580c', 'Tamil B': '#c2410c',
  'Bengali': '#7c3aed', 'Gujarati': '#6d28d9', 'Hindi': '#a21caf', 'Panjabi': '#86198f', 'Urdu': '#9d174d',
  'Islamic Theology': '#10b981', 'Islamic Law': '#059669'
};

const NA_PAPERS = [
  // Oral - Jul 13-17
  { id:'na-eng-oral', subject:'English Language', code:'1190', paper:'Oral', paperName:'Oral Examination', date:'2026-07-13', startTime:'14:15', endTime:null, mode:'Oral', duration:'20 min', notes:'Candidates take turns on exam day (13-17 Jul). Check your scheduled slot.' },
  { id:'na-chi-oral', subject:'Chinese', code:'1196', paper:'Oral', paperName:'Oral Examination', date:'2026-07-14', startTime:'08:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Candidates take turns on exam day (14-17 Jul).' },
  { id:'na-mal-oral', subject:'Malay', code:'1197', paper:'Oral', paperName:'Oral Examination', date:'2026-07-14', startTime:'08:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Candidates take turns on exam day (14-17 Jul).' },
  { id:'na-tam-oral', subject:'Tamil', code:'1198', paper:'Oral', paperName:'Oral Examination', date:'2026-07-14', startTime:'08:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Candidates take turns on exam day (14-17 Jul).' },
  { id:'na-bch-oral', subject:'Basic Chinese', code:'1202', paper:'Oral', paperName:'Oral Examination', date:'2026-07-14', startTime:'14:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Candidates take turns on exam day.' },
  { id:'na-bma-oral', subject:'Basic Malay', code:'1203', paper:'Oral', paperName:'Oral Examination', date:'2026-07-14', startTime:'14:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Candidates take turns on exam day.' },
  { id:'na-bta-oral', subject:'Basic Tamil', code:'1204', paper:'Oral', paperName:'Oral Examination', date:'2026-07-14', startTime:'14:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Candidates take turns on exam day.' },
  // Written - Sep 14
  { id:'na-eng-p1', subject:'English Language', code:'1190', paper:'Paper 1', paperName:'Writing', date:'2026-09-14', startTime:'08:00', endTime:'09:50', mode:'Written', duration:'1 h 50 min', notes:'' },
  { id:'na-eng-p2', subject:'English Language', code:'1190', paper:'Paper 2', paperName:'Comprehension', date:'2026-09-14', startTime:'10:35', endTime:'12:25', mode:'Written', duration:'1 h 50 min', notes:'' },
  // Humanities (SS combo) - Sep 16
  { id:'na-ssg-p1', subject:'Humanities (SS, Geog)', code:'2125', paper:'Paper 1', paperName:'Social Studies & Geography', date:'2026-09-16', startTime:'08:00', endTime:'09:45', mode:'Written', duration:'1 h 45 min', notes:'' },
  { id:'na-ssh-p1', subject:'Humanities (SS, Hist)', code:'2126', paper:'Paper 1', paperName:'Social Studies & History', date:'2026-09-16', startTime:'08:00', endTime:'09:45', mode:'Written', duration:'1 h 45 min', notes:'' },
  { id:'na-ssl-p1', subject:'Humanities (SS, Lit)', code:'2127', paper:'Paper 1', paperName:'Social Studies & Literature', date:'2026-09-16', startTime:'08:00', endTime:'09:45', mode:'Written', duration:'1 h 45 min', notes:'' },
  // Languages written - Sep 17
  { id:'na-chi-p1', subject:'Chinese', code:'1196', paper:'Paper 1', paperName:'Writing', date:'2026-09-17', startTime:'08:00', endTime:'10:00', mode:'Written', duration:'2 h', notes:'' },
  { id:'na-chi-p2', subject:'Chinese', code:'1196', paper:'Paper 2', paperName:'Language Use & Comprehension', date:'2026-09-17', startTime:'10:45', endTime:'12:15', mode:'Written', duration:'1 h 30 min', notes:'' },
  { id:'na-mal-p1', subject:'Malay', code:'1197', paper:'Paper 1', paperName:'Writing', date:'2026-09-17', startTime:'08:00', endTime:'10:00', mode:'Written', duration:'2 h', notes:'' },
  { id:'na-mal-p2', subject:'Malay', code:'1197', paper:'Paper 2', paperName:'Language Use & Comprehension', date:'2026-09-17', startTime:'10:45', endTime:'12:15', mode:'Written', duration:'1 h 30 min', notes:'' },
  { id:'na-tam-p1', subject:'Tamil', code:'1198', paper:'Paper 1', paperName:'Writing', date:'2026-09-17', startTime:'08:00', endTime:'10:00', mode:'Written', duration:'2 h', notes:'' },
  { id:'na-tam-p2', subject:'Tamil', code:'1198', paper:'Paper 2', paperName:'Language Use & Comprehension', date:'2026-09-17', startTime:'10:45', endTime:'12:15', mode:'Written', duration:'1 h 30 min', notes:'' },
  // Listening - Sep 15
  { id:'na-eng-lc', subject:'English Language', code:'1190', paper:'Listening Comprehension', date:'2026-09-15', startTime:'14:00', endTime:'14:45', mode:'Listening', duration:'45 min', notes:'Candidates seated 30 min before start.' },
  { id:'na-bch-lc', subject:'Basic Chinese', code:'1202', paper:'Listening Comprehension', date:'2026-09-15', startTime:'16:00', endTime:'16:30', mode:'Listening', duration:'30 min', notes:'' },
  { id:'na-bma-lc', subject:'Basic Malay', code:'1203', paper:'Listening Comprehension', date:'2026-09-15', startTime:'16:00', endTime:'16:30', mode:'Listening', duration:'30 min', notes:'' },
  { id:'na-bta-lc', subject:'Basic Tamil', code:'1204', paper:'Listening Comprehension', date:'2026-09-15', startTime:'16:00', endTime:'16:30', mode:'Listening', duration:'30 min', notes:'' },
  // Listening - Sep 16
  { id:'na-chi-lc', subject:'Chinese', code:'1196', paper:'Listening Comprehension', date:'2026-09-16', startTime:'16:00', endTime:'16:30', mode:'Listening', duration:'30 min', notes:'' },
  { id:'na-mal-lc', subject:'Malay', code:'1197', paper:'Listening Comprehension', date:'2026-09-16', startTime:'16:00', endTime:'16:30', mode:'Listening', duration:'30 min', notes:'' },
  { id:'na-tam-lc', subject:'Tamil', code:'1198', paper:'Listening Comprehension', date:'2026-09-16', startTime:'16:00', endTime:'16:30', mode:'Listening', duration:'30 min', notes:'' },
  // Basic languages written - Sep 22
  { id:'na-bch-p1', subject:'Basic Chinese', code:'1202', paper:'Paper 1', date:'2026-09-22', startTime:'08:00', endTime:'08:30', mode:'Written', duration:'30 min', notes:'' },
  { id:'na-bch-p2', subject:'Basic Chinese', code:'1202', paper:'Paper 2', date:'2026-09-22', startTime:'09:15', endTime:'09:55', mode:'Written', duration:'40 min', notes:'' },
  { id:'na-bma-p1', subject:'Basic Malay', code:'1203', paper:'Paper 1', date:'2026-09-22', startTime:'08:00', endTime:'08:30', mode:'Written', duration:'30 min', notes:'' },
  { id:'na-bma-p2', subject:'Basic Malay', code:'1203', paper:'Paper 2', date:'2026-09-22', startTime:'09:15', endTime:'09:55', mode:'Written', duration:'40 min', notes:'' },
  { id:'na-bta-p1', subject:'Basic Tamil', code:'1204', paper:'Paper 1', date:'2026-09-22', startTime:'08:00', endTime:'08:30', mode:'Written', duration:'30 min', notes:'' },
  { id:'na-bta-p2', subject:'Basic Tamil', code:'1204', paper:'Paper 2', date:'2026-09-22', startTime:'09:15', endTime:'09:55', mode:'Written', duration:'40 min', notes:'' },
  // History - Sep 21, Sep 23
  { id:'na-his-p1', subject:'History', code:'2195', paper:'Paper 1', date:'2026-09-21', startTime:'14:00', endTime:'15:50', mode:'Written', duration:'1 h 50 min', notes:'' },
  { id:'na-his-p2', subject:'History', code:'2195', paper:'Paper 2', date:'2026-09-23', startTime:'14:00', endTime:'15:50', mode:'Written', duration:'1 h 50 min', notes:'' },
  // Mathematics - Oct 5, Oct 7
  { id:'na-math-p1', subject:'Mathematics', code:'4045', paper:'Paper 1', date:'2026-10-05', startTime:'08:00', endTime:'10:00', mode:'Written', duration:'2 h', notes:'' },
  { id:'na-math-p2', subject:'Mathematics', code:'4045', paper:'Paper 2', date:'2026-10-07', startTime:'08:00', endTime:'10:00', mode:'Written', duration:'2 h', notes:'' },
  // Additional Mathematics - Oct 6, Oct 9
  { id:'na-amath-p1', subject:'Additional Mathematics', code:'4051', paper:'Paper 1', date:'2026-10-06', startTime:'14:00', endTime:'15:45', mode:'Written', duration:'1 h 45 min', notes:'' },
  { id:'na-amath-p2', subject:'Additional Mathematics', code:'4051', paper:'Paper 2', date:'2026-10-09', startTime:'08:00', endTime:'09:45', mode:'Written', duration:'1 h 45 min', notes:'' },
  // Science (Phy/Chem) - Oct 6, Oct 8
  { id:'na-scpc-p1', subject:'Science (Phy/Chem)', code:'5105', paper:'Paper 1', paperName:'Physics Component', date:'2026-10-06', startTime:'08:00', endTime:'09:15', mode:'Written', duration:'1 h 15 min', notes:'' },
  { id:'na-scpc-p2', subject:'Science (Phy/Chem)', code:'5105', paper:'Paper 2', paperName:'Chemistry Component', date:'2026-10-06', startTime:'08:00', endTime:'09:15', mode:'Written', duration:'1 h 15 min', notes:'' },
  { id:'na-scpc-p3', subject:'Science (Phy/Chem)', code:'5105', paper:'Paper 3', paperName:'Physics Component', date:'2026-10-08', startTime:'08:00', endTime:'09:15', mode:'Written', duration:'1 h 15 min', notes:'' },
  { id:'na-scpc-p4', subject:'Science (Phy/Chem)', code:'5105', paper:'Paper 4', paperName:'Chemistry Component', date:'2026-10-08', startTime:'08:00', endTime:'09:15', mode:'Written', duration:'1 h 15 min', notes:'' },
  // Science (Phy/Bio) - Oct 6, Oct 12
  { id:'na-spb-p1', subject:'Science (Phy/Bio)', code:'5106', paper:'Paper 1', paperName:'Physics Component', date:'2026-10-06', startTime:'08:00', endTime:'09:15', mode:'Written', duration:'1 h 15 min', notes:'' },
  { id:'na-spb-p2', subject:'Science (Phy/Bio)', code:'5106', paper:'Paper 2', paperName:'Biology Component', date:'2026-10-06', startTime:'08:00', endTime:'09:15', mode:'Written', duration:'1 h 15 min', notes:'' },
  { id:'na-spb-p5', subject:'Science (Phy/Bio)', code:'5106', paper:'Paper 5', paperName:'Physics Component', date:'2026-10-12', startTime:'08:00', endTime:'09:15', mode:'Written', duration:'1 h 15 min', notes:'' },
  { id:'na-spb-p6', subject:'Science (Phy/Bio)', code:'5106', paper:'Paper 6', paperName:'Biology Component', date:'2026-10-12', startTime:'08:00', endTime:'09:15', mode:'Written', duration:'1 h 15 min', notes:'' },
  // Science (Chem/Bio) - Oct 8
  { id:'na-scb-p3', subject:'Science (Chem/Bio)', code:'5107', paper:'Paper 3', paperName:'Chemistry Component', date:'2026-10-08', startTime:'08:00', endTime:'09:15', mode:'Written', duration:'1 h 15 min', notes:'' },
  { id:'na-scb-p4', subject:'Science (Chem/Bio)', code:'5107', paper:'Paper 4', paperName:'Biology Component', date:'2026-10-08', startTime:'08:00', endTime:'09:15', mode:'Written', duration:'1 h 15 min', notes:'' },
  // Humanities Paper 2 - Oct 5
  { id:'na-ssg-p2', subject:'Humanities (SS, Geog)', code:'2125', paper:'Paper 2', paperName:'Social Studies & Geography', date:'2026-10-05', startTime:'14:00', endTime:'15:45', mode:'Written', duration:'1 h 45 min', notes:'' },
  { id:'na-ssh-p2', subject:'Humanities (SS, Hist)', code:'2126', paper:'Paper 2', paperName:'Social Studies & History', date:'2026-10-05', startTime:'14:00', endTime:'15:50', mode:'Written', duration:'1 h 50 min', notes:'' },
  // Geography - Oct 8, Oct 13
  { id:'na-geog-p1', subject:'Geography', code:'2246', paper:'Paper 1', date:'2026-10-08', startTime:'14:00', endTime:'15:45', mode:'Written', duration:'1 h 45 min', notes:'' },
  { id:'na-geog-p2', subject:'Geography', code:'2246', paper:'Paper 2', date:'2026-10-13', startTime:'08:00', endTime:'09:45', mode:'Written', duration:'1 h 45 min', notes:'' },
  // Literature in English - Oct 8, Oct 13
  { id:'na-lit-p2', subject:'Literature in English', code:'2197', paper:'Paper 2', date:'2026-10-08', startTime:'14:00', endTime:'15:30', mode:'Written', duration:'1 h 30 min', notes:'' },
  { id:'na-lit-p3', subject:'Literature in English', code:'2197', paper:'Paper 3', date:'2026-10-13', startTime:'14:00', endTime:'15:40', mode:'Written', duration:'1 h 40 min', notes:'' },
  // POA - Oct 7, Oct 9
  { id:'na-poa-p1', subject:'Principles of Accounts', code:'7086', paper:'Paper 1', date:'2026-10-07', startTime:'14:00', endTime:'15:00', mode:'Written', duration:'1 h', notes:'' },
  { id:'na-poa-p2', subject:'Principles of Accounts', code:'7086', paper:'Paper 2', date:'2026-10-09', startTime:'14:30', endTime:'16:30', mode:'Written', duration:'2 h', notes:'' },
  // EBS - Oct 7
  { id:'na-ebs-p1', subject:'Elements of Business Skills', code:'7088', paper:'Paper 1', date:'2026-10-07', startTime:'14:00', endTime:'15:30', mode:'Written', duration:'1 h 30 min', notes:'' },
  // Art - Sep 21
  { id:'na-art-p1', subject:'Art', code:'6015', paper:'Paper 1', paperName:'Drawing & Painting', date:'2026-09-21', startTime:'08:00', endTime:'09:30', mode:'Written', duration:'1 h 30 min', notes:'' },
  // Music - Sep 21
  { id:'na-mus-p1', subject:'Music', code:'6065', paper:'Paper 1', date:'2026-09-21', startTime:'08:00', endTime:'09:00', mode:'Written', duration:'1 h', notes:'' },
  // NFS - Oct 13
  { id:'na-nfs-p1', subject:'Nutrition & Food Science', code:'6077', paper:'Paper 1', date:'2026-10-13', startTime:'08:00', endTime:'09:30', mode:'Written', duration:'1 h 30 min', notes:'' },
  // D&T - Oct 13
  { id:'na-dt-p1', subject:'Design & Technology', code:'6059', paper:'Paper 1', date:'2026-10-13', startTime:'08:00', endTime:'09:30', mode:'Written', duration:'1 h 30 min', notes:'' },
];

const NT_PAPERS = [
  // Oral - Jul 13-17
  { id:'nt-eng-oral', subject:'English Language (Syll T)', code:'1195', paper:'Oral', paperName:'Oral Examination', date:'2026-07-14', startTime:'14:15', endTime:null, mode:'Oral', duration:'20 min', notes:'Candidates take turns on exam day (14-17 Jul). Check your scheduled slot.' },
  { id:'nt-bch-oral', subject:'Basic Chinese', code:'1202', paper:'Oral', date:'2026-07-14', startTime:'14:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Candidates take turns on exam day.' },
  { id:'nt-bma-oral', subject:'Basic Malay', code:'1203', paper:'Oral', date:'2026-07-14', startTime:'14:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Candidates take turns on exam day.' },
  { id:'nt-bta-oral', subject:'Basic Tamil', code:'1204', paper:'Oral', date:'2026-07-14', startTime:'14:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Candidates take turns on exam day.' },
  // English T Papers - Sep 14
  { id:'nt-engt-p1', subject:'English Language (Syll T)', code:'1195', paper:'Paper 1', date:'2026-09-14', startTime:'08:00', endTime:'09:20', mode:'Written', duration:'1 h 20 min', notes:'' },
  { id:'nt-engt-p2', subject:'English Language (Syll T)', code:'1195', paper:'Paper 2', date:'2026-09-14', startTime:'10:35', endTime:'11:55', mode:'Written', duration:'1 h 20 min', notes:'' },
  // Science T - Sep 17, Sep 21
  { id:'nt-sci-p1', subject:'Science (Syll T)', code:'5165', paper:'Paper 1', date:'2026-09-17', startTime:'14:30', endTime:'15:45', mode:'Written', duration:'1 h 15 min', notes:'' },
  { id:'nt-sci-p2', subject:'Science (Syll T)', code:'5165', paper:'Paper 2', date:'2026-09-21', startTime:'14:00', endTime:'15:00', mode:'Written', duration:'1 h', notes:'' },
  // Computer Applications Practical - Sep 18, Sep 24
  { id:'nt-cpa-prac1', subject:'Computer Applications', code:'7018', paper:'Practical', date:'2026-09-18', startTime:'08:00', endTime:'09:30', mode:'Practical', duration:'1 h 30 min', notes:'' },
  { id:'nt-cpa-prac2', subject:'Computer Applications', code:'7018', paper:'Practical', date:'2026-09-24', startTime:'08:00', endTime:'09:30', mode:'Practical', duration:'1 h 30 min', notes:'' },
  // Listening - Sep 15, Sep 16
  { id:'nt-engt-lc', subject:'English Language (Syll T)', code:'1195', paper:'Listening Comprehension', date:'2026-09-16', startTime:'14:00', endTime:'14:45', mode:'Listening', duration:'45 min', notes:'Candidates seated 30 min before start.' },
  { id:'nt-bch-lc', subject:'Basic Chinese', code:'1202', paper:'Listening Comprehension', date:'2026-09-15', startTime:'16:00', endTime:'16:30', mode:'Listening', duration:'30 min', notes:'' },
  { id:'nt-bma-lc', subject:'Basic Malay', code:'1203', paper:'Listening Comprehension', date:'2026-09-15', startTime:'16:00', endTime:'16:30', mode:'Listening', duration:'30 min', notes:'' },
  { id:'nt-bta-lc', subject:'Basic Tamil', code:'1204', paper:'Listening Comprehension', date:'2026-09-15', startTime:'16:00', endTime:'16:30', mode:'Listening', duration:'30 min', notes:'' },
  // Basic languages written - Sep 22
  { id:'nt-bch-p1', subject:'Basic Chinese', code:'1202', paper:'Paper 1', date:'2026-09-22', startTime:'08:00', endTime:'08:30', mode:'Written', duration:'30 min', notes:'' },
  { id:'nt-bch-p2', subject:'Basic Chinese', code:'1202', paper:'Paper 2', date:'2026-09-22', startTime:'09:15', endTime:'09:55', mode:'Written', duration:'40 min', notes:'' },
  { id:'nt-bma-p1', subject:'Basic Malay', code:'1203', paper:'Paper 1', date:'2026-09-22', startTime:'08:00', endTime:'08:30', mode:'Written', duration:'30 min', notes:'' },
  { id:'nt-bma-p2', subject:'Basic Malay', code:'1203', paper:'Paper 2', date:'2026-09-22', startTime:'09:15', endTime:'09:55', mode:'Written', duration:'40 min', notes:'' },
  { id:'nt-bta-p1', subject:'Basic Tamil', code:'1204', paper:'Paper 1', date:'2026-09-22', startTime:'08:00', endTime:'08:30', mode:'Written', duration:'30 min', notes:'' },
  { id:'nt-bta-p2', subject:'Basic Tamil', code:'1204', paper:'Paper 2', date:'2026-09-22', startTime:'09:15', endTime:'09:55', mode:'Written', duration:'40 min', notes:'' },
  // Mathematics T - Oct 6, Oct 9
  { id:'nt-math-p1', subject:'Mathematics (Syll T)', code:'4046', paper:'Paper 1', date:'2026-10-06', startTime:'14:00', endTime:'15:30', mode:'Written', duration:'1 h 30 min', notes:'' },
  { id:'nt-math-p2', subject:'Mathematics (Syll T)', code:'4046', paper:'Paper 2', date:'2026-10-09', startTime:'08:00', endTime:'09:30', mode:'Written', duration:'1 h 30 min', notes:'' },
  // Computer Applications Written - Oct 8
  { id:'nt-cpa-p3', subject:'Computer Applications', code:'7018', paper:'Paper 1', date:'2026-10-08', startTime:'14:00', endTime:'15:15', mode:'Written', duration:'1 h 15 min', notes:'' },
  // D&T T - Oct 13
  { id:'nt-dt-p1', subject:'Design & Technology', code:'6060', paper:'Paper 1', date:'2026-10-13', startTime:'08:00', endTime:'09:00', mode:'Written', duration:'1 h', notes:'' },
  // Mobile Robotics Written - Oct 5
  { id:'nt-mr-p1', subject:'Mobile Robotics', code:'A101', paper:'Paper 1', date:'2026-10-05', startTime:'14:00', endTime:'15:00', mode:'Written', duration:'1 h', notes:'' },
  // Smart Electrical Technology Written - Oct 5
  { id:'nt-set-p1', subject:'Smart Electrical Technology', code:'A201', paper:'Paper 1', date:'2026-10-05', startTime:'14:00', endTime:'15:00', mode:'Written', duration:'1 h', notes:'' },
  // Retail Operations Written - Oct 5
  { id:'nt-ro-p1', subject:'Retail Operations', code:'A301', paper:'Paper 1', date:'2026-10-05', startTime:'14:00', endTime:'15:00', mode:'Written', duration:'1 h', notes:'' },
  // Art - Sep 21
  { id:'nt-art-p1', subject:'Art', code:'6015', paper:'Paper 1', date:'2026-09-21', startTime:'08:00', endTime:'09:30', mode:'Written', duration:'1 h 30 min', notes:'' },
  // Music - Sep 21
  { id:'nt-mus-p1', subject:'Music', code:'6065', paper:'Paper 1', date:'2026-09-21', startTime:'08:00', endTime:'09:00', mode:'Written', duration:'1 h', notes:'' },
];

const ALEVEL_PAPERS = [
  // Mid-Year Mother Tongue - Jun 2
  { id:'al-chib-p1', subject:'Chinese B', code:'8611', paper:'Paper 1', date:'2026-06-02', startTime:'08:00', endTime:'08:50', mode:'Written', duration:'50 min', notes:'Mid-Year MTL B paper.' },
  { id:'al-malb-p1', subject:'Malay B', code:'8613', paper:'Paper 1', date:'2026-06-02', startTime:'08:00', endTime:'08:50', mode:'Written', duration:'50 min', notes:'Mid-Year MTL B paper.' },
  { id:'al-tamb-p1', subject:'Tamil B', code:'8614', paper:'Paper 1', date:'2026-06-02', startTime:'08:00', endTime:'08:50', mode:'Written', duration:'50 min', notes:'Mid-Year MTL B paper.' },
  { id:'al-chi-p1', subject:'H1 Chinese (MTL)', code:'8655', paper:'Paper 1', paperName:'Chinese Language', date:'2026-06-02', startTime:'08:00', endTime:'11:15', mode:'Written', duration:'3 h', notes:'Mid-Year MTL paper.' },
  { id:'al-mal-p1', subject:'H1 Malay (MTL)', code:'8656', paper:'Paper 1', paperName:'Malay Language', date:'2026-06-02', startTime:'08:00', endTime:'11:15', mode:'Written', duration:'3 h', notes:'Mid-Year MTL paper.' },
  { id:'al-tam-p1', subject:'H1 Tamil (MTL)', code:'8657', paper:'Paper 1', paperName:'Tamil Language', date:'2026-06-02', startTime:'08:00', endTime:'11:15', mode:'Written', duration:'3 h', notes:'Mid-Year MTL paper.' },
  // MTL LC - Jul 7
  { id:'al-chi-lc', subject:'H1 Chinese (MTL)', code:'8655', paper:'Listening Comprehension', paperName:'Chinese', date:'2026-07-07', startTime:'14:00', endTime:'14:30', mode:'Listening', duration:'30 min', notes:'Seated 30 min before start.' },
  { id:'al-mal-lc', subject:'H1 Malay (MTL)', code:'8656', paper:'Listening Comprehension', paperName:'Malay', date:'2026-07-07', startTime:'14:00', endTime:'14:30', mode:'Listening', duration:'30 min', notes:'Seated 30 min before start.' },
  { id:'al-tam-lc', subject:'H1 Tamil (MTL)', code:'8657', paper:'Listening Comprehension', paperName:'Tamil', date:'2026-07-07', startTime:'14:00', endTime:'14:30', mode:'Listening', duration:'30 min', notes:'Seated 30 min before start.' },
  { id:'al-chib-lc', subject:'Chinese B', code:'8611', paper:'Listening Comprehension', date:'2026-07-07', startTime:'16:00', endTime:'16:30', mode:'Listening', duration:'30 min', notes:'' },
  // MTL Oral - Jul 8-16
  { id:'al-chi-oral', subject:'H1 Chinese (MTL)', code:'8655', paper:'Oral', paperName:'Chinese', date:'2026-07-08', startTime:'14:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Candidates take turns (8-16 Jul).' },
  { id:'al-mal-oral', subject:'H1 Malay (MTL)', code:'8656', paper:'Oral', paperName:'Malay', date:'2026-07-08', startTime:'14:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Candidates take turns (8-16 Jul).' },
  { id:'al-tam-oral', subject:'H1 Tamil (MTL)', code:'8657', paper:'Oral', paperName:'Tamil', date:'2026-07-08', startTime:'14:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Candidates take turns (8-16 Jul).' },
  // H2 Science Practicals - Oct 14, 19, 22
  { id:'al-chem-prac', subject:'H2 Chemistry', code:'9729', paper:'Paper 4', paperName:'Practical', date:'2026-10-14', startTime:'08:00', endTime:'17:00', mode:'Practical', duration:'2 h 30 min', notes:'Conducted in 3 shifts. Check your assigned shift.' },
  { id:'al-phy-prac', subject:'H2 Physics', code:'9749', paper:'Paper 4', paperName:'Practical', date:'2026-10-19', startTime:'08:00', endTime:'17:00', mode:'Practical', duration:'2 h 30 min', notes:'Conducted in 3 shifts. Check your assigned shift.' },
  { id:'al-bio-prac', subject:'H2 Biology', code:'9744', paper:'Paper 4', paperName:'Practical', date:'2026-10-22', startTime:'08:00', endTime:'17:00', mode:'Practical', duration:'2 h 30 min', notes:'Conducted in 3 shifts. Check your assigned shift.' },
  // GP - Nov 2, Nov 4
  { id:'al-gp-p1', subject:'General Paper', code:'8881', paper:'Paper 1', paperName:'Essay', date:'2026-11-02', startTime:'08:00', endTime:'09:30', mode:'Written', duration:'1 h 30 min', notes:'' },
  { id:'al-gp-p2', subject:'General Paper', code:'8881', paper:'Paper 2', paperName:'Comprehension', date:'2026-11-04', startTime:'08:00', endTime:'09:30', mode:'Written', duration:'1 h 30 min', notes:'' },
  // H2 Mathematics - Nov 3, Nov 6
  { id:'al-h2math-p1', subject:'H2 Mathematics', code:'9758', paper:'Paper 1', date:'2026-11-03', startTime:'08:00', endTime:'11:00', mode:'Written', duration:'3 h', notes:'' },
  { id:'al-h2math-p2', subject:'H2 Mathematics', code:'9758', paper:'Paper 2', date:'2026-11-06', startTime:'08:00', endTime:'11:00', mode:'Written', duration:'3 h', notes:'' },
  // H1 Mathematics - Nov 3
  { id:'al-h1math-p1', subject:'H1 Mathematics', code:'8865', paper:'Paper 1', date:'2026-11-03', startTime:'08:00', endTime:'11:00', mode:'Written', duration:'3 h', notes:'' },
  // H2 Economics - Nov 5
  { id:'al-h2econ-p1', subject:'H2 Economics', code:'8843', paper:'Paper 1', date:'2026-11-05', startTime:'14:00', endTime:'17:00', mode:'Written', duration:'3 h', notes:'' },
  // H1 Economics - Nov 5 (P1), Nov 16 (P2)
  { id:'al-h1econ-p1', subject:'H1 Economics', code:'9570', paper:'Paper 1', date:'2026-11-05', startTime:'14:00', endTime:'16:30', mode:'Written', duration:'2 h 30 min', notes:'' },
  { id:'al-h1econ-p2', subject:'H1 Economics', code:'9570', paper:'Paper 2', date:'2026-11-16', startTime:'08:00', endTime:'10:30', mode:'Written', duration:'2 h 30 min', notes:'' },
  // H2 Chemistry - Nov 10 (P2), Nov 12 (P3), Nov 23 (P1)
  { id:'al-h2chem-p2', subject:'H2 Chemistry', code:'9729', paper:'Paper 2', date:'2026-11-10', startTime:'14:00', endTime:'16:00', mode:'Written', duration:'2 h', notes:'' },
  { id:'al-h2chem-p3', subject:'H2 Chemistry', code:'9729', paper:'Paper 3', date:'2026-11-12', startTime:'08:00', endTime:'10:00', mode:'Written', duration:'2 h', notes:'' },
  { id:'al-h2chem-p1', subject:'H2 Chemistry', code:'9729', paper:'Paper 1', date:'2026-11-23', startTime:'14:00', endTime:'15:00', mode:'Written', duration:'1 h', notes:'' },
  // H1 Chemistry - Nov 10 (P2), Nov 23 (P1)
  { id:'al-h1chem-p2', subject:'H1 Chemistry', code:'8873', paper:'Paper 2', date:'2026-11-10', startTime:'14:00', endTime:'16:00', mode:'Written', duration:'2 h', notes:'' },
  { id:'al-h1chem-p1', subject:'H1 Chemistry', code:'8873', paper:'Paper 1', date:'2026-11-23', startTime:'14:00', endTime:'15:00', mode:'Written', duration:'1 h', notes:'' },
  // H2 Physics - Nov 13 (P2), Nov 17 (P3), Nov 27 (P1)
  { id:'al-h2phy-p2', subject:'H2 Physics', code:'9749', paper:'Paper 2', date:'2026-11-13', startTime:'08:00', endTime:'10:00', mode:'Written', duration:'2 h', notes:'' },
  { id:'al-h2phy-p3', subject:'H2 Physics', code:'9749', paper:'Paper 3', date:'2026-11-17', startTime:'14:00', endTime:'16:00', mode:'Written', duration:'2 h', notes:'' },
  { id:'al-h2phy-p1', subject:'H2 Physics', code:'9749', paper:'Paper 1', date:'2026-11-27', startTime:'08:00', endTime:'09:00', mode:'Written', duration:'1 h', notes:'' },
  // H1 Physics - Nov 13 (P2), Nov 27 (P1)
  { id:'al-h1phy-p2', subject:'H1 Physics', code:'8867', paper:'Paper 2', date:'2026-11-13', startTime:'08:00', endTime:'10:00', mode:'Written', duration:'2 h', notes:'' },
  { id:'al-h1phy-p1', subject:'H1 Physics', code:'8867', paper:'Paper 1', date:'2026-11-27', startTime:'08:00', endTime:'09:00', mode:'Written', duration:'1 h', notes:'' },
  // H2 Biology - Nov 18 (P2), Nov 20 (P3), Nov 26 (P1)
  { id:'al-h2bio-p2', subject:'H2 Biology', code:'9744', paper:'Paper 2', date:'2026-11-18', startTime:'08:00', endTime:'10:00', mode:'Written', duration:'2 h', notes:'' },
  { id:'al-h2bio-p3', subject:'H2 Biology', code:'9744', paper:'Paper 3', date:'2026-11-20', startTime:'14:30', endTime:'16:30', mode:'Written', duration:'2 h', notes:'' },
  { id:'al-h2bio-p1', subject:'H2 Biology', code:'9744', paper:'Paper 1', date:'2026-11-26', startTime:'14:00', endTime:'15:00', mode:'Written', duration:'1 h', notes:'' },
  // H1 Biology - Nov 18 (P2), Nov 26 (P1)
  { id:'al-h1bio-p2', subject:'H1 Biology', code:'8876', paper:'Paper 2', date:'2026-11-18', startTime:'08:00', endTime:'10:00', mode:'Written', duration:'2 h', notes:'' },
  { id:'al-h1bio-p1', subject:'H1 Biology', code:'8876', paper:'Paper 1', date:'2026-11-26', startTime:'14:00', endTime:'15:00', mode:'Written', duration:'1 h', notes:'' },
  // H2 Literature - Nov 4 (P1), Nov 11 (P2)
  { id:'al-h2lit-p1', subject:'H2 Literature in English', code:'9539', paper:'Paper 1', date:'2026-11-04', startTime:'14:00', endTime:'17:00', mode:'Written', duration:'3 h', notes:'' },
  { id:'al-h2lit-p2', subject:'H2 Literature in English', code:'9539', paper:'Paper 2', date:'2026-11-11', startTime:'08:00', endTime:'11:00', mode:'Written', duration:'3 h', notes:'' },
  // H1 Literature - Nov 4
  { id:'al-h1lit-p1', subject:'H1 Literature in English', code:'8841', paper:'Paper 1', date:'2026-11-04', startTime:'14:00', endTime:'17:00', mode:'Written', duration:'3 h', notes:'' },
  // H2 History - Nov 17 (P1), Nov 19 (P2)
  { id:'al-h2his-p1', subject:'H2 History', code:'9174', paper:'Paper 1', date:'2026-11-17', startTime:'08:00', endTime:'11:00', mode:'Written', duration:'3 h', notes:'' },
  { id:'al-h2his-p2', subject:'H2 History', code:'9174', paper:'Paper 2', date:'2026-11-19', startTime:'10:00', endTime:'11:45', mode:'Written', duration:'1 h 45 min', notes:'Revised timing may apply.' },
  // H1 History - Nov 17
  { id:'al-h1his-p1', subject:'H1 History', code:'8838', paper:'Paper 1', date:'2026-11-17', startTime:'08:00', endTime:'11:00', mode:'Written', duration:'3 h', notes:'' },
  // H2 Geography - Nov 23 (P1), Nov 25 (P2)
  { id:'al-h2geog-p1', subject:'H2 Geography', code:'9173', paper:'Paper 1', date:'2026-11-23', startTime:'08:00', endTime:'11:00', mode:'Written', duration:'3 h', notes:'' },
  { id:'al-h2geog-p2', subject:'H2 Geography', code:'9173', paper:'Paper 2', date:'2026-11-25', startTime:'14:00', endTime:'17:00', mode:'Written', duration:'3 h', notes:'' },
  // H1 Geography - Nov 23
  { id:'al-h1geog-p1', subject:'H1 Geography', code:'8834', paper:'Paper 1', date:'2026-11-23', startTime:'08:00', endTime:'11:00', mode:'Written', duration:'3 h', notes:'' },
  // H2 Computing - Oct 7 (Practical), Nov 11
  { id:'al-comp-prac', subject:'H2 Computing', code:'9569', paper:'Paper 3', paperName:'Practical', date:'2026-10-07', startTime:'08:00', endTime:'11:00', mode:'Practical', duration:'3 h', notes:'' },
  { id:'al-comp-p1', subject:'H2 Computing', code:'9569', paper:'Paper 1', date:'2026-11-11', startTime:'14:00', endTime:'17:00', mode:'Written', duration:'3 h', notes:'' },
  // H2 Further Mathematics - Nov 16, Nov 18
  { id:'al-fmath-p1', subject:'H2 Further Mathematics', code:'9649', paper:'Paper 1', date:'2026-11-16', startTime:'14:00', endTime:'17:00', mode:'Written', duration:'3 h', notes:'' },
  { id:'al-fmath-p2', subject:'H2 Further Mathematics', code:'9649', paper:'Paper 2', date:'2026-11-18', startTime:'14:00', endTime:'17:00', mode:'Written', duration:'3 h', notes:'' },
  // H2 English Language & Linguistics - Nov 16, Nov 18
  { id:'al-ell-p1', subject:'H2 English Language & Linguistics', code:'9518', paper:'Paper 1', date:'2026-11-16', startTime:'14:00', endTime:'17:00', mode:'Written', duration:'3 h', notes:'' },
  { id:'al-ell-p2', subject:'H2 English Language & Linguistics', code:'9518', paper:'Paper 2', date:'2026-11-18', startTime:'08:00', endTime:'10:00', mode:'Written', duration:'2 h', notes:'' },
  // H2 Principles of Accounting - Nov 10, Nov 24
  { id:'al-poa-p1', subject:'H2 Principles of Accounting', code:'9737', paper:'Paper 1', date:'2026-11-10', startTime:'08:00', endTime:'11:00', mode:'Written', duration:'3 h', notes:'' },
  { id:'al-poa-p2', subject:'H2 Principles of Accounting', code:'9737', paper:'Paper 2', date:'2026-11-24', startTime:'08:00', endTime:'11:00', mode:'Written', duration:'3 h', notes:'' },
  // H2 Management of Business - Nov 13
  { id:'al-mob-p1', subject:'H2 Management of Business', code:'9738', paper:'Paper 1', date:'2026-11-13', startTime:'14:30', endTime:'17:30', mode:'Written', duration:'3 h', notes:'' },
  // H2 Art - Nov 2
  { id:'al-art-p1', subject:'H2 Art', code:'9755', paper:'Paper 1', date:'2026-11-02', startTime:'14:00', endTime:'17:00', mode:'Written', duration:'3 h', notes:'' },
  // H2 Music - Sep 28-30 (Practical), Nov 2
  { id:'al-mus-prac', subject:'H2 Music', code:'9753', paper:'Practical', date:'2026-09-28', startTime:'08:00', endTime:null, mode:'Practical', duration:'30 min', notes:'Days 1-3 (28-30 Sep). Candidates take turns.' },
  { id:'al-mus-p1', subject:'H2 Music', code:'9753', paper:'Paper 1', date:'2026-11-02', startTime:'14:00', endTime:'17:00', mode:'Written', duration:'3 h', notes:'' },
  // H2 Theatre Studies & Drama - Jul 13-20 (Practical), Nov 3
  { id:'al-tsd-prac', subject:'H2 Theatre Studies & Drama', code:'9519', paper:'Practical', date:'2026-07-13', startTime:'08:00', endTime:null, mode:'Practical', duration:'2 h', notes:'Days 1-6 (13-20 Jul).' },
  { id:'al-tsd-p1', subject:'H2 Theatre Studies & Drama', code:'9519', paper:'Paper 1', date:'2026-11-03', startTime:'14:00', endTime:'17:00', mode:'Written', duration:'3 h', notes:'' },
  // H2 Chinese/Malay/Tamil Language & Literature - Oct 26, Nov 5, Nov 12, Nov 19
  { id:'al-h2chi-26', subject:'H2 Chinese Language & Literature', code:'9571', paper:'Paper 1', date:'2026-10-26', startTime:'08:00', endTime:'11:15', mode:'Written', duration:'3 h 15 min', notes:'' },
  { id:'al-h2chi-5', subject:'H2 Chinese Language & Literature', code:'9571', paper:'Paper 2', date:'2026-11-05', startTime:'08:00', endTime:'09:30', mode:'Written', duration:'1 h 30 min', notes:'' },
  { id:'al-h2chi-12', subject:'H2 Chinese Language & Literature', code:'9571', paper:'Paper 3', date:'2026-11-12', startTime:'14:00', endTime:'14:50', mode:'Written', duration:'50 min', notes:'' },
  { id:'al-h2chi-19', subject:'H2 Chinese Language & Literature', code:'9571', paper:'Paper 4', date:'2026-11-19', startTime:'08:00', endTime:'11:00', mode:'Written', duration:'3 h', notes:'' },
  // Knowledge & Inquiry - Nov 3, Nov 6
  { id:'al-ki-p1', subject:'Knowledge & Inquiry', code:'9559', paper:'Paper 1', date:'2026-11-03', startTime:'14:00', endTime:'17:00', mode:'Written', duration:'3 h', notes:'' },
  { id:'al-ki-p2', subject:'Knowledge & Inquiry', code:'9559', paper:'Paper 2', date:'2026-11-06', startTime:'14:30', endTime:'17:30', mode:'Written', duration:'3 h', notes:'' },
  // Foreign Languages
  { id:'al-fr-oral', subject:'French', code:'9555', paper:'Oral', date:'2026-09-23', startTime:'14:15', endTime:null, mode:'Oral', duration:'20 min', notes:'Candidates take turns (23-25 Sep).' },
  { id:'al-fr-p1', subject:'French', code:'9555', paper:'Paper 1', date:'2026-09-30', startTime:'08:00', endTime:'10:00', mode:'Written', duration:'2 h', notes:'' },
  { id:'al-fr-lc', subject:'French', code:'9555', paper:'Listening Comprehension', date:'2026-10-23', startTime:'08:00', endTime:'09:00', mode:'Listening', duration:'1 h', notes:'' },
  { id:'al-de-oral', subject:'German', code:'9556', paper:'Oral', date:'2026-09-23', startTime:'14:15', endTime:null, mode:'Oral', duration:'20 min', notes:'' },
  { id:'al-de-p1', subject:'German', code:'9556', paper:'Paper 1', date:'2026-09-30', startTime:'08:00', endTime:'10:00', mode:'Written', duration:'2 h', notes:'' },
  { id:'al-de-lc', subject:'German', code:'9556', paper:'Listening Comprehension', date:'2026-11-02', startTime:'08:00', endTime:'09:00', mode:'Listening', duration:'1 h', notes:'' },
  { id:'al-ja-oral', subject:'Japanese', code:'9557', paper:'Oral', date:'2026-09-23', startTime:'14:15', endTime:null, mode:'Oral', duration:'20 min', notes:'' },
  { id:'al-ja-p1', subject:'Japanese', code:'9557', paper:'Paper 1', date:'2026-09-30', startTime:'08:00', endTime:'10:00', mode:'Written', duration:'2 h', notes:'' },
  { id:'al-ja-lc', subject:'Japanese', code:'9557', paper:'Listening Comprehension', date:'2026-10-23', startTime:'10:00', endTime:'11:00', mode:'Listening', duration:'1 h', notes:'' },
  // H3 Subjects (selected)
  { id:'al-h3math-p1', subject:'H3 Mathematics', code:'9820', paper:'Paper 1', date:'2026-11-24', startTime:'14:00', endTime:'17:00', mode:'Written', duration:'3 h', notes:'' },
  { id:'al-h3chem-p1', subject:'H3 Chemistry', code:'9813', paper:'Paper 1', date:'2026-11-26', startTime:'08:00', endTime:'11:15', mode:'Written', duration:'3 h 15 min', notes:'' },
  { id:'al-h3econ-p1', subject:'H3 Economics', code:'9809', paper:'Paper 1', date:'2026-11-26', startTime:'08:00', endTime:'11:15', mode:'Written', duration:'3 h 15 min', notes:'' },
  // Islamic Theology & Law
  { id:'al-islam-p1', subject:'Islamic Theology', code:'9907', paper:'Paper 1', date:'2026-11-02', startTime:'14:00', endTime:'17:00', mode:'Written', duration:'3 h', notes:'' },
  { id:'al-islam-p2', subject:'Islamic Theology', code:'9907', paper:'Paper 2', date:'2026-11-03', startTime:'14:00', endTime:'17:00', mode:'Written', duration:'3 h', notes:'' },
];

// ===== BUILT-IN EXAM DATA =====
const BUILTIN_EXAMS = {
  'o-level': { key: 'o-level', name: 'GCE O-Level 2026', categories: CATEGORIES, colors: DEFAULT_SUBJECT_COLORS, papers: [
    { id:'eng-oral', subject:'English Language', code:'1184', paper:'Oral', paperName:'Oral Examination', date:'2026-07-13', startTime:'14:15', endTime:null, mode:'Oral', duration:'20 min', notes:'Students take turns on exam day (13-17 Jul). Check your scheduled slot.' },
    { id:'eng-lc', subject:'English Language', code:'1184', paper:'LC', paperName:'Listening Comprehension', date:'2026-10-15', startTime:'14:00', endTime:'14:45', mode:'Listening Comprehension', duration:'45 min', notes:'Be seated 30 minutes before start.' },
    { id:'eng-p1', subject:'English Language', code:'1184', paper:'Paper 1', paperName:'Writing', date:'2026-10-19', startTime:'13:30', endTime:'15:20', mode:'Written', duration:'1 hr 50 min', notes:'' },
    { id:'eng-p2', subject:'English Language', code:'1184', paper:'Paper 2', paperName:'Comprehension', date:'2026-10-19', startTime:'16:05', endTime:'17:55', mode:'Written', duration:'1 hr 50 min', notes:'' },
    { id:'chi-p1', subject:'Chinese', code:'1160', paper:'Paper 1', paperName:'Writing', date:'2026-06-02', startTime:'08:00', endTime:'10:00', mode:'Written', duration:'2 hr', notes:'Mid-Year Mother Tongue paper.' },
    { id:'chi-p2', subject:'Chinese', code:'1160', paper:'Paper 2', paperName:'Comprehension', date:'2026-06-02', startTime:'11:00', endTime:'12:30', mode:'Written', duration:'1 hr 30 min', notes:'Mid-Year Mother Tongue paper.' },
    { id:'chi-oral', subject:'Chinese', code:'1160', paper:'Oral', paperName:'Oral Examination', date:'2026-07-13', startTime:'14:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Students take turns on exam day (13-17 Jul).' },
    { id:'chi-lc', subject:'Chinese', code:'1160', paper:'LC', paperName:'Listening Comprehension', date:'2026-07-07', startTime:'14:00', endTime:'14:30', mode:'Listening Comprehension', duration:'30 min', notes:'Be seated 30 min before start.' },
    { id:'hchi-p1', subject:'Higher Chinese', code:'1116', paper:'Paper 1', paperName:'Writing', date:'2026-11-03', startTime:'08:00', endTime:'10:00', mode:'Written', duration:'2 hr', notes:'Year-End paper.' },
    { id:'hchi-p2', subject:'Higher Chinese', code:'1116', paper:'Paper 2', paperName:'Comprehension', date:'2026-11-03', startTime:'11:00', endTime:'12:45', mode:'Written', duration:'1 hr 45 min', notes:'Year-End paper.' },
    { id:'hchi-oral', subject:'Higher Chinese', code:'1116', paper:'Oral', paperName:'Oral Examination', date:'2026-07-13', startTime:'14:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Students take turns on exam day (13-17 Jul).' },
    { id:'hchi-lc', subject:'Higher Chinese', code:'1116', paper:'LC', paperName:'Listening Comprehension', date:'2026-07-07', startTime:'14:00', endTime:'14:30', mode:'Listening Comprehension', duration:'30 min', notes:'Be seated 30 min before start.' },
    { id:'math-p1', subject:'Mathematics', code:'4052', paper:'Paper 1', paperName:'', date:'2026-10-21', startTime:'14:00', endTime:'16:15', mode:'Written', duration:'2 hr 15 min', notes:'' },
    { id:'math-p2', subject:'Mathematics', code:'4052', paper:'Paper 2', paperName:'', date:'2026-10-23', startTime:'14:30', endTime:'16:45', mode:'Written', duration:'2 hr 15 min', notes:'' },
    { id:'amath-p1', subject:'Additional Mathematics', code:'4049', paper:'Paper 1', paperName:'', date:'2026-10-26', startTime:'14:00', endTime:'16:15', mode:'Written', duration:'2 hr 15 min', notes:'' },
    { id:'amath-p2', subject:'Additional Mathematics', code:'4049', paper:'Paper 2', paperName:'', date:'2026-10-28', startTime:'08:00', endTime:'10:15', mode:'Written', duration:'2 hr 15 min', notes:'' },
    { id:'ss-p1', subject:'Social Studies', code:'2260/2261/2262', paper:'Paper 1', paperName:'Social Studies', date:'2026-10-26', startTime:'08:00', endTime:'09:45', mode:'Written', duration:'1 hr 45 min', notes:'For all Combined Humanities candidates.' },
    { id:'humg-p2', subject:'Humanities (SS, Geog)', code:'2260', paper:'Paper 2', paperName:'Geography Elective', date:'2026-10-20', startTime:'14:00', endTime:'15:45', mode:'Written', duration:'1 hr 45 min', notes:'' },
    { id:'humh-p2', subject:'Humanities (SS, Hist)', code:'2261', paper:'Paper 2', paperName:'History Elective', date:'2026-10-20', startTime:'14:00', endTime:'15:50', mode:'Written', duration:'1 hr 50 min', notes:'' },
    { id:'huml-p2', subject:'Humanities (SS, Lit)', code:'2262', paper:'Paper 2', paperName:'Literature Elective', date:'2026-10-29', startTime:'08:00', endTime:'09:40', mode:'Written', duration:'1 hr 40 min', notes:'' },
    { id:'geog-p1', subject:'Geography', code:'2279', paper:'Paper 1', paperName:'', date:'2026-10-22', startTime:'14:00', endTime:'15:45', mode:'Written', duration:'1 hr 45 min', notes:'' },
    { id:'geog-p2', subject:'Geography', code:'2279', paper:'Paper 2', paperName:'', date:'2026-10-27', startTime:'08:00', endTime:'09:45', mode:'Written', duration:'1 hr 45 min', notes:'' },
    { id:'hist-p1', subject:'History', code:'2174', paper:'Paper 1', paperName:'', date:'2026-10-22', startTime:'14:00', endTime:'15:50', mode:'Written', duration:'1 hr 50 min', notes:'' },
    { id:'hist-p2', subject:'History', code:'2174', paper:'Paper 2', paperName:'', date:'2026-10-27', startTime:'08:00', endTime:'09:50', mode:'Written', duration:'1 hr 50 min', notes:'' },
    { id:'lit-p1', subject:'Literature in English', code:'2065', paper:'Paper 1', paperName:'', date:'2026-10-29', startTime:'08:00', endTime:'09:40', mode:'Written', duration:'1 hr 40 min', notes:'' },
    { id:'lit-p2', subject:'Literature in English', code:'2065', paper:'Paper 2', paperName:'', date:'2026-10-27', startTime:'10:30', endTime:'12:00', mode:'Written', duration:'1 hr 30 min', notes:'' },
    { id:'litcn-p1', subject:'Literature in Chinese', code:'2031', paper:'Paper 1', paperName:'', date:'2026-11-05', startTime:'14:00', endTime:'15:30', mode:'Written', duration:'1 hr 30 min', notes:'' },
    { id:'litcn-p2', subject:'Literature in Chinese', code:'2031', paper:'Paper 2', paperName:'', date:'2026-11-04', startTime:'14:00', endTime:'15:40', mode:'Written', duration:'1 hr 40 min', notes:'' },
    { id:'msp-oral', subject:'Malay Special Programme', code:'1133', paper:'Oral', paperName:'Oral Examination', date:'2026-07-22', startTime:'14:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Students take turns on exam day.' },
    { id:'msp-lc', subject:'Malay Special Programme', code:'1133', paper:'LC', paperName:'Listening Comprehension', date:'2026-10-15', startTime:'16:30', endTime:'17:00', mode:'Listening Comprehension', duration:'30 min', notes:'Be seated 30 min before start.' },
    { id:'msp-p1', subject:'Malay Special Programme', code:'1133', paper:'Paper 1', paperName:'', date:'2026-11-05', startTime:'08:00', endTime:'09:45', mode:'Written', duration:'1 hr 45 min', notes:'' },
    { id:'msp-p2', subject:'Malay Special Programme', code:'1133', paper:'Paper 2', paperName:'', date:'2026-11-05', startTime:'10:30', endTime:'11:45', mode:'Written', duration:'1 hr 15 min', notes:'' },
    { id:'csp-oral', subject:'Chinese Special Programme', code:'1166', paper:'Oral', paperName:'Oral Examination', date:'2026-07-22', startTime:'14:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Students take turns on exam day.' },
    { id:'csp-lc', subject:'Chinese Special Programme', code:'1166', paper:'LC', paperName:'Listening Comprehension', date:'2026-10-15', startTime:'16:30', endTime:'17:00', mode:'Listening Comprehension', duration:'30 min', notes:'Be seated 30 min before start.' },
    { id:'csp-p1', subject:'Chinese Special Programme', code:'1166', paper:'Paper 1', paperName:'', date:'2026-11-05', startTime:'08:00', endTime:'09:45', mode:'Written', duration:'1 hr 45 min', notes:'' },
    { id:'csp-p2', subject:'Chinese Special Programme', code:'1166', paper:'Paper 2', paperName:'', date:'2026-11-05', startTime:'10:30', endTime:'11:45', mode:'Written', duration:'1 hr 15 min', notes:'' },
    { id:'chem-prac', subject:'Chemistry', code:'6092', paper:'Practical', paperName:'Science Practical', date:'2026-09-30', startTime:null, endTime:null, mode:'Science Practical', duration:'1 hr 50 min', notes:'Conducted in shifts (08:00-16:50).' },
    { id:'chem-p2', subject:'Chemistry', code:'6092', paper:'Paper 2', paperName:'Structured & Free Response', date:'2026-10-27', startTime:'14:00', endTime:'15:45', mode:'Written', duration:'1 hr 45 min', notes:'' },
    { id:'chem-p1', subject:'Chemistry', code:'6092', paper:'Paper 1', paperName:'Multiple Choice', date:'2026-11-06', startTime:'08:00', endTime:'09:00', mode:'Written', duration:'1 hr', notes:'' },
    { id:'phy-prac', subject:'Physics', code:'6091', paper:'Practical', paperName:'Science Practical', date:'2026-10-05', startTime:null, endTime:null, mode:'Science Practical', duration:'1 hr 50 min', notes:'Conducted in shifts (08:00-16:50).' },
    { id:'phy-p2', subject:'Physics', code:'6091', paper:'Paper 2', paperName:'Structured & Free Response', date:'2026-10-29', startTime:'14:00', endTime:'15:45', mode:'Written', duration:'1 hr 45 min', notes:'' },
    { id:'phy-p1', subject:'Physics', code:'6091', paper:'Paper 1', paperName:'Multiple Choice', date:'2026-11-06', startTime:'14:30', endTime:'15:30', mode:'Written', duration:'1 hr', notes:'' },
    { id:'bio-prac', subject:'Biology', code:'6093', paper:'Practical', paperName:'Science Practical', date:'2026-10-13', startTime:null, endTime:null, mode:'Science Practical', duration:'1 hr 50 min', notes:'Conducted in shifts (08:00-16:50).' },
    { id:'bio-p2', subject:'Biology', code:'6093', paper:'Paper 2', paperName:'Structured & Free Response', date:'2026-10-30', startTime:'08:00', endTime:'09:45', mode:'Written', duration:'1 hr 45 min', notes:'' },
    { id:'bio-p1', subject:'Biology', code:'6093', paper:'Paper 1', paperName:'Multiple Choice', date:'2026-11-10', startTime:'14:00', endTime:'15:00', mode:'Written', duration:'1 hr', notes:'' },
    { id:'sc-pc-prac', subject:'Science (Phy/Chem)', code:'5086', paper:'Practical', paperName:'Science Practical', date:'2026-10-08', startTime:null, endTime:null, mode:'Science Practical', duration:'1 hr 30 min', notes:'Conducted in shifts.' },
    { id:'sc-pc-p3', subject:'Science (Phy/Chem)', code:'5086', paper:'Paper 3', paperName:'Chemistry', date:'2026-10-27', startTime:'14:00', endTime:'15:15', mode:'Written', duration:'1 hr 15 min', notes:'' },
    { id:'sc-pc-p2', subject:'Science (Phy/Chem)', code:'5086', paper:'Paper 2', paperName:'Physics', date:'2026-10-29', startTime:'14:00', endTime:'15:15', mode:'Written', duration:'1 hr 15 min', notes:'' },
    { id:'sc-pc-p1', subject:'Science (Phy/Chem)', code:'5086', paper:'Paper 1', paperName:'Multiple Choice', date:'2026-11-10', startTime:'08:00', endTime:'09:00', mode:'Written', duration:'1 hr', notes:'' },
    { id:'sc-pb-prac', subject:'Science (Phy/Bio)', code:'5087', paper:'Practical', paperName:'Science Practical', date:'2026-10-08', startTime:null, endTime:null, mode:'Science Practical', duration:'1 hr 30 min', notes:'Conducted in shifts.' },
    { id:'sc-pb-p2', subject:'Science (Phy/Bio)', code:'5087', paper:'Paper 2', paperName:'Physics', date:'2026-10-29', startTime:'14:00', endTime:'15:15', mode:'Written', duration:'1 hr 15 min', notes:'' },
    { id:'sc-pb-p4', subject:'Science (Phy/Bio)', code:'5087', paper:'Paper 4', paperName:'Biology', date:'2026-10-30', startTime:'08:00', endTime:'09:15', mode:'Written', duration:'1 hr 15 min', notes:'' },
    { id:'sc-pb-p1', subject:'Science (Phy/Bio)', code:'5087', paper:'Paper 1', paperName:'Multiple Choice', date:'2026-11-10', startTime:'08:00', endTime:'09:00', mode:'Written', duration:'1 hr', notes:'' },
    { id:'sc-cb-prac', subject:'Science (Chem/Bio)', code:'5088', paper:'Practical', paperName:'Science Practical', date:'2026-10-08', startTime:null, endTime:null, mode:'Science Practical', duration:'1 hr 30 min', notes:'Conducted in shifts.' },
    { id:'sc-cb-p3', subject:'Science (Chem/Bio)', code:'5088', paper:'Paper 3', paperName:'Chemistry', date:'2026-10-27', startTime:'14:00', endTime:'15:15', mode:'Written', duration:'1 hr 15 min', notes:'' },
    { id:'sc-cb-p4', subject:'Science (Chem/Bio)', code:'5088', paper:'Paper 4', paperName:'Biology', date:'2026-10-30', startTime:'08:00', endTime:'09:15', mode:'Written', duration:'1 hr 15 min', notes:'' },
    { id:'sc-cb-p1', subject:'Science (Chem/Bio)', code:'5088', paper:'Paper 1', paperName:'Multiple Choice', date:'2026-11-10', startTime:'08:00', endTime:'09:00', mode:'Written', duration:'1 hr', notes:'' },
    { id:'art-p1', subject:'Art', code:'6114', paper:'Paper 1', paperName:'Coursework / Study', date:'2026-11-02', startTime:'08:00', endTime:'10:15', mode:'Written', duration:'2 hr 15 min', notes:'Revised syllabus.' },
    { id:'hart-p1', subject:'Higher Art', code:'6124', paper:'Paper 1', paperName:'Coursework / Study', date:'2026-11-02', startTime:'08:00', endTime:'10:15', mode:'Written', duration:'2 hr 15 min', notes:'Revised syllabus.' },
    { id:'music-prac', subject:'Music', code:'6085', paper:'Practical', paperName:'Practical Examination', date:'2026-09-22', startTime:'08:00', endTime:null, mode:'Practical', duration:'10 min', notes:'Conducted 22-25 Sep. Check scheduled slot.' },
    { id:'music-p1', subject:'Music', code:'6085', paper:'Paper 1', paperName:'Written', date:'2026-11-02', startTime:'08:00', endTime:'09:30', mode:'Written', duration:'1 hr 30 min', notes:'' },
    { id:'dt-p1', subject:'Design & Technology', code:'7059', paper:'Paper 1', paperName:'', date:'2026-11-02', startTime:'08:00', endTime:'10:00', mode:'Written', duration:'2 hr', notes:'' }
  ]},
  'na-level': { key: 'na-level', name: 'GCE NA-Level 2026', categories: NA_CATEGORIES, colors: NA_COLORS, papers: NA_PAPERS },
  'nt-level': { key: 'nt-level', name: 'GCE NT-Level 2026', categories: NT_CATEGORIES, colors: NT_COLORS, papers: NT_PAPERS },
  'a-level': { key: 'a-level', name: 'GCE A-Level 2026', categories: ALEVEL_CATEGORIES, colors: ALEVEL_COLORS, papers: ALEVEL_PAPERS }
};

// ===== INDEXED DB for PDF Notes =====
const DB_NAME = 'ExamNotesDB';
const DB_VERSION = 1;
const STORE_NAME = 'notes';

function openDB() { return new Promise((resolve, reject) => { const req = indexedDB.open(DB_NAME, DB_VERSION); req.onupgradeneeded = (e) => { const db = e.target.result; if (!db.objectStoreNames.contains(STORE_NAME)) db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true }); }; req.onsuccess = () => resolve(req.result); req.onerror = () => reject(req.error); }); }
async function addNoteDB(note) { const db = await openDB(); return new Promise((r, j) => { const tx = db.transaction(STORE_NAME, 'readwrite'); const s = tx.objectStore(STORE_NAME); const req = s.add(note); req.onsuccess = () => r(req.result); req.onerror = () => j(req.error); }); }
async function deleteNoteDB(id) { const db = await openDB(); return new Promise((r, j) => { const tx = db.transaction(STORE_NAME, 'readwrite'); const s = tx.objectStore(STORE_NAME); const req = s.delete(id); req.onsuccess = () => r(); req.onerror = () => j(req.error); }); }
async function getAllNotesDB() { const db = await openDB(); return new Promise((r, j) => { const tx = db.transaction(STORE_NAME, 'readonly'); const s = tx.objectStore(STORE_NAME); const req = s.getAll(); req.onsuccess = () => r(req.result || []); req.onerror = () => j(req.error); }); }
async function getNoteDB(id) { const db = await openDB(); return new Promise((r, j) => { const tx = db.transaction(STORE_NAME, 'readonly'); const s = tx.objectStore(STORE_NAME); const req = s.get(id); req.onsuccess = () => r(req.result); req.onerror = () => j(req.error); }); }

const GOAL_TEMPLATES = ['Complete TYS (past 5 years)', 'Review all lecture notes', 'Practice Section A questions', 'Practice Section B questions', 'Create summary mind maps', 'Do timed practice papers', 'Focus on weak topics', 'Review past mistakes', 'Memorise key formulas', 'Study with flashcards'];
let notesCache = [];
async function loadNotesCache() { try { notesCache = await getAllNotesDB(); } catch { notesCache = []; } }
async function clearNotesDB() { const db = await openDB(); return new Promise((r, j) => { const tx = db.transaction(STORE_NAME, 'readwrite'); const s = tx.objectStore(STORE_NAME); const req = s.clear(); req.onsuccess = () => r(); req.onerror = () => j(req.error); }); }

// ===== STATE =====
const STORAGE_KEY = 'exam_planner_data_v2';
const DAILY_KEY = 'exam_daily_tasks';
const DEFAULTS = { examSets: {}, activeSetId: '', darkMode: false, notifications: false, notificationsEnabled: false, firstVisit: true };
let state = {};
let dailyTasks = {};
let currentDailyDate = new Date();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      state = JSON.parse(raw);
      Object.keys(DEFAULTS).forEach(k => { if (state[k] === undefined) state[k] = DEFAULTS[k]; });
      // Migrate old 'n-level' to 'na-level'
      if (state.examSets['builtin-n-level']) {
        state.examSets['builtin-na-level'] = state.examSets['builtin-n-level'];
        state.examSets['builtin-na-level'].name = 'GCE NA-Level 2026';
        state.examSets['builtin-na-level'].builtinKey = 'na-level';
        delete state.examSets['builtin-n-level'];
        if (state.activeSetId === 'builtin-n-level') state.activeSetId = 'builtin-na-level';
      }
    } else { state = { ...DEFAULTS }; }
  } catch {
    state = { ...DEFAULTS };
    // Fallback: try reading raw data directly
    try { const fb = JSON.parse(localStorage.getItem(STORAGE_KEY)); if (fb) { state = fb; Object.keys(DEFAULTS).forEach(k => { if (state[k] === undefined) state[k] = DEFAULTS[k]; }); } } catch {}
  }
}
let undoStack = [], redoStack = [], lastSnap = null, undoLock = false;
function snapKey() { return JSON.stringify({ s: state, d: dailyTasks }); }
function commitSnapshot() {
  if (undoLock) return;
  const ae = document.activeElement;
  if (ae) {
    if (ae.closest && ae.closest('textarea, [contenteditable="true"]')) return;
    if (ae.tagName === 'INPUT' && ['text','search','email','password','number','date','time','datetime-local','month','range','tel','url','color'].includes(ae.type)) return;
  }
  const cur = snapKey();
  if (lastSnap !== null && cur !== lastSnap) {
    undoStack.push(lastSnap);
    if (undoStack.length > 40) undoStack.shift();
    redoStack = [];
  }
  lastSnap = cur;
}
function persistAll() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
  try { localStorage.setItem(DAILY_KEY, JSON.stringify(dailyTasks)); } catch {}
}
function saveState() { commitSnapshot(); try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {} const ls = document.getElementById('last-saved'); if (ls) ls.textContent = new Date().toLocaleTimeString(); }
function loadDailyTasks() { try { const r = localStorage.getItem(DAILY_KEY); if (r) dailyTasks = JSON.parse(r); else dailyTasks = {}; } catch { dailyTasks = {}; } }
function saveDailyTasks() { commitSnapshot(); try { localStorage.setItem(DAILY_KEY, JSON.stringify(dailyTasks)); } catch {} }
function restoreSnap(data) {
  state = data.s || {};
  Object.keys(DEFAULTS).forEach(k => { if (state[k] === undefined) state[k] = DEFAULTS[k]; });
  dailyTasks = data.d || {};
}
function undo() {
  if (!undoStack.length) { showToast('Nothing to undo'); return; }
  undoLock = true;
  redoStack.push(snapKey());
  restoreSnap(JSON.parse(undoStack.pop()));
  lastSnap = snapKey();
  undoLock = false;
  persistAll(); renderSettings(); refreshAll();
  showToast('Undid last change');
}
function redo() {
  if (!redoStack.length) { showToast('Nothing to redo'); return; }
  undoLock = true;
  undoStack.push(snapKey());
  restoreSnap(JSON.parse(redoStack.pop()));
  lastSnap = snapKey();
  undoLock = false;
  persistAll(); renderSettings(); refreshAll();
  showToast('Redid change');
}
function resetUndo() { undoStack = []; redoStack = []; lastSnap = null; }
function computeStreak() {
  const daySet = new Set(Object.keys(dailyTasks).filter(k => (dailyTasks[k] || []).some(t => t.done)));
  if (!daySet.size) return 0;
  const d = new Date();
  if (!daySet.has(getDailyKey(d))) d.setDate(d.getDate() - 1);
  let streak = 0;
  for (let i = 0; i < 366; i++) {
    if (!daySet.has(getDailyKey(d))) break;
    streak++;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}
function openPrintView() {
  const area = document.getElementById('print-area');
  const selected = getSelectedExams().filter(e => getExamStatus(e) !== 'past').sort((a, b) => dateStrToSG(a.date) - dateStrToSG(b.date));
  let html = `<div class="print-title">Revision Timetable</div>
    <div class="print-date">Generated ${new Date().toLocaleDateString('en-SG', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Singapore' })}</div>`;
  html += `<div class="print-h2">Upcoming Examinations</div>`;
  if (!selected.length) html += '<p>No upcoming exams selected.</p>';
  else {
    let lastDate = '';
    selected.forEach(e => {
      if (e.date !== lastDate) { lastDate = e.date; html += `<div class="print-date-row">${formatDate(e.date)}</div>`; }
      html += `<div class="print-exam"><span class="print-exam-subject">${e.subject}</span><span class="print-exam-paper">${e.paper}${e.paperName && e.paperName !== e.paper ? ' &mdash; ' + e.paperName : ''}</span><span class="print-exam-time">${formatTime(e.startTime)}</span></div>`;
    });
  }
  html += `<div class="print-h2">Daily Study Plan (next 7 days)</div>`;
  const d = new Date();
  for (let i = 0; i < 7; i++) {
    const k = getDailyKey(d);
    const tasks = dailyTasks[k] || [];
    html += `<div class="print-day"><span class="print-day-label">${d.toLocaleDateString('en-SG', { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'Asia/Singapore' })}</span><span class="print-day-tasks">${tasks.length ? tasks.map(t => `${t.done ? '&#9745;' : '&#9744;'} ${t.text}${t.time ? ' (' + t.time + ')' : ''}`).join('<br>') : '<span class="print-none">No tasks</span>'}</span></div>`;
    d.setDate(d.getDate() + 1);
  }
  area.innerHTML = html;
  document.body.classList.add('printing');
  window.print();
  setTimeout(() => document.body.classList.remove('printing'), 2000);
}
function getDailyKey(date) { return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`; }

// ===== ERROR LOGGING =====
const ERROR_LOG_KEY = 'exam_app_errors';
window.addEventListener('error', (e) => logError(e.message, e.filename, e.lineno));
window.addEventListener('unhandledrejection', (e) => logError('Unhandled rejection: ' + ((e.reason && e.reason.message) || e.reason)));
function logError(msg, src, line) {
  try {
    const arr = JSON.parse(localStorage.getItem(ERROR_LOG_KEY) || '[]');
    arr.push({ t: new Date().toISOString(), msg: String(msg).slice(0, 300), src: src ? src + (line ? ':' + line : '') : '' });
    if (arr.length > 50) arr.shift();
    localStorage.setItem(ERROR_LOG_KEY, JSON.stringify(arr));
  } catch {}
}
function getErrorLog() { try { return JSON.parse(localStorage.getItem(ERROR_LOG_KEY) || '[]'); } catch { return []; } }

// ===== LAZY LOADING (OCR libraries only load when needed) =====
const LIB_URLS = {
  pdfjs: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
  pdfWorker: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js',
  tesseract: 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js'
};
function loadScriptOnce(src) {
  return new Promise((resolve, reject) => {
    if (window.__loadedScripts && window.__loadedScripts[src]) { resolve(); return; }
    if (!window.__loadedScripts) window.__loadedScripts = {};
    const s = document.createElement('script');
    s.src = src; s.async = true;
    s.onload = () => { window.__loadedScripts[src] = true; resolve(); };
    s.onerror = () => reject(new Error('Failed to load ' + src));
    document.head.appendChild(s);
  });
}

// ===== PROFILES (named autosaved snapshots) =====
const PROFILES_KEY = 'exam_profiles';
function getProfiles() { try { return JSON.parse(localStorage.getItem(PROFILES_KEY) || '{}'); } catch { return {}; } }
function saveProfile(name) {
  const profiles = getProfiles();
  profiles[name] = { s: state, d: dailyTasks, savedAt: new Date().toISOString() };
  try { localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles)); } catch {}
}
function loadProfile(name) {
  const p = getProfiles()[name];
  if (!p) return;
  if (!confirm('Load profile "' + name + '" and replace your current data?')) return;
  restoreSnap(p);
  persistAll(); resetUndo(); refreshAll(); renderSettings();
  showToast('Loaded profile "' + name + '"');
}
function deleteProfile(name) {
  const p = getProfiles(); delete p[name];
  try { localStorage.setItem(PROFILES_KEY, JSON.stringify(p)); } catch {}
}

// ===== YEARLY EXAM DATA IMPORT =====
function importExamDataFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      const source = data.BUILTIN_EXAMS || data;
      const updated = [];
      Object.entries(source).forEach(([key, val]) => {
        if (BUILTIN_EXAMS[key] && val && Array.isArray(val.papers)) {
          BUILTIN_EXAMS[key] = { ...BUILTIN_EXAMS[key], name: val.name || BUILTIN_EXAMS[key].name, papers: val.papers, categories: val.categories || BUILTIN_EXAMS[key].categories, colors: val.colors || BUILTIN_EXAMS[key].colors };
          updated.push(key);
        }
      });
      if (!updated.length) { showToast('No recognized exam data found in that file.', 4000); return; }
      updated.forEach(key => {
        const id = 'builtin-' + key;
        const set = state.examSets[id];
        if (set) {
          const ids = BUILTIN_EXAMS[key].papers.map(p => p.id);
          set.selectedIds = (set.selectedIds || []).filter(x => ids.includes(x));
        }
      });
      saveState(); refreshAll(); renderSettings();
      showToast('Exam data updated for: ' + updated.join(', '));
    } catch (err) { showToast('Invalid exam data file.', 4000); logError('Import exam data: ' + err.message); }
  };
  reader.readAsText(file);
}

// ===== ACHIEVEMENTS / MILESTONES =====
function computeAchievements() {
  const streak = computeStreak();
  const enabled = Object.values(state.examSets).filter(s => s.enabled !== false).length;
  const progress = Object.values(state.examSets).reduce((o, s) => Object.assign(o, s.progress || {}), {});
  const mastered = Object.values(progress).filter(v => v === 'green').length;
  const anyTaskDone = Object.values(dailyTasks).some(list => list.some(t => t.done));
  const resultsEntered = Object.values(state.examSets).reduce((n, s) => n + Object.keys((s.resultScores || {})).length, 0);
  return [
    { icon: '🌱', name: 'First Steps', desc: 'Complete the setup wizard', done: !state.firstVisit && enabled > 0 },
    { icon: '📝', name: 'First Task Done', desc: 'Check off your first daily study task', done: anyTaskDone },
    { icon: '🔥', name: '7-Day Streak', desc: 'Study 7 days in a row', done: streak >= 7 },
    { icon: '🔥', name: '30-Day Streak', desc: 'Study 30 days in a row', done: streak >= 30 },
    { icon: '🎓', name: 'Mastery Hunter', desc: 'Master 5 papers', done: mastered >= 5 },
    { icon: '📚', name: 'Note Taker', desc: 'Upload 3 PDF notes', done: notesCache.length >= 3 },
    { icon: '🎯', name: 'Score Keeper', desc: 'Enter scores in the Results tab', done: resultsEntered >= 1 },
    { icon: '🏅', name: 'Perfect Ten', desc: 'Enter scores for 10 papers', done: resultsEntered >= 10 }
  ];
}
function renderAchievements() {
  const cont = document.getElementById('achievements-content');
  if (!cont) return;
  const achs = computeAchievements();
  const earned = achs.filter(a => a.done).length;
  cont.innerHTML = `<div class="achieve-count">${earned}/${achs.length} earned</div><div class="achieve-grid">${achs.map(a => `<div class="achieve-card${a.done ? ' earned' : ''}"><span class="achieve-icon">${a.icon}</span><div class="achieve-info"><div class="achieve-name">${a.name}</div><div class="achieve-desc">${a.desc}</div></div><span class="achieve-status">${a.done ? '✅' : '🔒'}</span></div>`).join('')}</div>`;
  const newOnes = achs.filter(a => a.done).map(a => a.name);
  saveEarnedAchievements(newOnes);
}
const ACH_KEY = 'exam_achievements_earned';
function getEarnedAchievements() { try { return JSON.parse(localStorage.getItem(ACH_KEY) || '[]'); } catch { return []; } }
function saveEarnedAchievements(names) { try { localStorage.setItem(ACH_KEY, JSON.stringify(names)); } catch {} }
function checkAchievements() {
  const earned = computeAchievements().filter(a => a.done).map(a => a.name);
  const prev = getEarnedAchievements();
  const newly = earned.filter(n => !prev.includes(n));
  if (newly.length) { saveEarnedAchievements(earned); showToast(`🏆 Achievement unlocked: ${newly.join(', ')}`, 4500); }
}
function escHtml(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m])); }

function renderProfiles() {
  const cont = document.getElementById('profile-list');
  if (!cont) return;
  const profiles = getProfiles();
  const names = Object.keys(profiles).sort();
  if (!names.length) { cont.innerHTML = '<p class="settings-hint" style="margin:0">No profiles saved yet.</p>'; return; }
  cont.innerHTML = names.map(n => {
    const p = profiles[n];
    const t = p.savedAt ? new Date(p.savedAt).toLocaleString() : 'unknown time';
    return `<div class="profile-row"><div class="profile-info"><div class="profile-name">${escHtml(n)}</div><div class="profile-time">Saved ${escHtml(t)}</div></div><button type="button" class="btn btn-small btn-secondary" data-profile-load="${escHtml(n)}">Load</button><button type="button" class="btn btn-small btn-danger" data-profile-del="${escHtml(n)}">Delete</button></div>`;
  }).join('');
  cont.querySelectorAll('[data-profile-load]').forEach(b => b.addEventListener('click', () => loadProfile(b.dataset.profileLoad)));
  cont.querySelectorAll('[data-profile-del]').forEach(b => b.addEventListener('click', () => { if (confirm('Delete profile "' + b.dataset.profileDel + '"?')) { deleteProfile(b.dataset.profileDel); renderProfiles(); showToast('Profile deleted.'); } }));
}

// ===== HYPOTHETICAL SCORE SIMULATOR =====
function simulatorHtml(r, setId, subject) {
  if (r.remCount === 0 || !r.achievable) return '';
  const sid = setId + '-' + subject.replace(/[^a-z0-9]/gi, '_');
  const avg = Math.max(0, Math.min(100, Math.round(r.needRel)));
  return `<div class="results-sim"><div class="results-sim-title">🎛️ Hypothetical scores &mdash; what if the remaining papers average...</div>
    <input type="range" class="results-sim-input" data-set="${setId}" data-subject="${subject}" min="0" max="100" step="1" value="${avg}" aria-label="Hypothetical average score on remaining papers">
    <div class="results-sim-out" id="results-sim-out-${sid}">${simOutText(r, avg)}</div></div>`;
}
function simOutText(r, avg) {
  const finalPct = r.knownPts / r.totalW + (r.remW / r.totalW) * avg;
  return `→ final ~<strong>${finalPct.toFixed(1)}%</strong> &middot; likely grade <strong>${gradeBand(r.scale, finalPct).join('&ndash;')}</strong> (estimate)`;
}
function updateSimOut(setId, subject, val) {
  const r = computeSubjectResult(setId, subject);
  const sid = setId + '-' + subject.replace(/[^a-z0-9]/gi, '_');
  const el = document.getElementById('results-sim-out-' + sid);
  if (el) el.innerHTML = simOutText(r, Number(val));
}

function getEnabledSetIds() {
  return Object.entries(state.examSets).filter(([id, s]) => s.enabled !== false).map(([id]) => id);
}

function getAllEnabledPapers() {
  const ids = getEnabledSetIds();
  const papers = [];
  ids.forEach(id => {
    const set = state.examSets[id];
    if (!set) return;
    const builtin = set.type === 'builtin' ? BUILTIN_EXAMS[set.builtinKey] : null;
    const allPapers = builtin ? builtin.papers : (set.papers || []);
    const selected = set.selectedIds || [];
    allPapers.filter(p => selected.includes(p.id)).forEach(p => papers.push(p));
  });
  return papers;
}

function getSetPapers(setId) {
  const set = state.examSets[setId];
  if (!set) return [];
  if (set.type === 'builtin') {
    const builtin = BUILTIN_EXAMS[set.builtinKey];
    return builtin ? builtin.papers : [];
  }
  return set.papers || [];
}

function getSetCategories(setId) {
  const set = state.examSets[setId];
  if (!set || set.type !== 'builtin') return {};
  const builtin = BUILTIN_EXAMS[set.builtinKey];
  return builtin ? builtin.categories || {} : {};
}

function getSetSubjectColors(setId) {
  const set = state.examSets[setId];
  if (!set) return {};
  const builtin = set.type === 'builtin' ? BUILTIN_EXAMS[set.builtinKey] : null;
  const baseColors = builtin ? { ...builtin.colors } : {};
  return { ...baseColors, ...(set.subjectColors || {}) };
}

function getActivePapers() { return getSetPapers(state.activeSetId); }
function getActiveCategories() { return getSetCategories(state.activeSetId); }
function getActiveColors() { return getSetSubjectColors(state.activeSetId); }
function getActiveSet() { return state.examSets[state.activeSetId]; }

function getDefaultColor(subject) { return DEFAULT_SUBJECT_COLORS[subject] || '#6b7280'; }

function getSelectedExams() { return getAllEnabledPapers(); }

function getSetProgress(setId) { const s = state.examSets[setId]; return s ? s.progress || {} : {}; }
function getSetNotes(setId) { const s = state.examSets[setId]; return s ? s.notes || {} : {}; }
function getSetGoals(setId) { const s = state.examSets[setId]; return s ? s.goals || {} : {}; }
function getActiveProgress() { return getSetProgress(state.activeSetId); }
function getActiveNotes() { return getSetNotes(state.activeSetId); }
function getActiveGoals() { return getSetGoals(state.activeSetId); }

// ===== RESULTS & GRADE TARGET =====
const GRADING_SYSTEMS = {
  'o-level': { name: 'O-Level', defaultGrade: 'C6', grades: [['A1',75],['A2',70],['B3',65],['B4',60],['C5',55],['C6',50],['D7',45],['E8',40],['F9',0]] },
  'na-level': { name: 'NA-Level', defaultGrade: '5', grades: [['1',75],['2',70],['3',65],['4',60],['5',50],['6',0]] },
  'nt-level': { name: 'NT-Level', defaultGrade: 'D', grades: [['A',75],['B',70],['C',60],['D',50],['E',0]] },
  'a-level': { name: 'A-Level', defaultGrade: 'D', grades: [['A',70],['B',60],['C',55],['D',50],['E',45],['S',40],['U',0]] }
};
const GRADING_DEFAULT_KEY = 'o-level';

const SUBJECT_WEIGHT_DEFAULTS = {
  'o-level': {
    '1184': [['Paper 1',35],['Paper 2',35],['LC',10],['Oral',20]],
    '1160': [['Paper 1',35],['Paper 2',35],['LC',10],['Oral',20]],
    '1116': [['Paper 1',35],['Paper 2',35],['LC',10],['Oral',20]],
    '4052': [['Paper 1',50],['Paper 2',50]],
    '4049': [['Paper 1',50],['Paper 2',50]],
    '6092': [['Paper 1',30],['Paper 2',50],['Practical',20]],
    '6091': [['Paper 1',30],['Paper 2',50],['Practical',20]],
    '6093': [['Paper 1',30],['Paper 2',50],['Practical',20]]
  }
};

function getSetExamKey(setId) {
  const set = state.examSets[setId];
  if (set && set.type === 'builtin' && set.builtinKey && GRADING_SYSTEMS[set.builtinKey]) return set.builtinKey;
  return GRADING_DEFAULT_KEY;
}
function getResultsScale(setId) { return GRADING_SYSTEMS[getSetExamKey(setId)] || GRADING_SYSTEMS[GRADING_DEFAULT_KEY]; }

function getResultState(setId) {
  const set = state.examSets[setId];
  if (set) { if (!set.resultWeights) set.resultWeights = {}; if (!set.resultScores) set.resultScores = {}; if (!set.resultTargets) set.resultTargets = {}; }
  return set;
}
function defaultWeightsForPapers(papers, code, examKey) {
  const spec = (SUBJECT_WEIGHT_DEFAULTS[examKey] || {})[code] || null;
  const weights = {}; let assigned = 0;
  if (spec) spec.forEach(([label, w]) => { const p = papers.find(pp => pp.paper === label); if (p) { weights[p.id] = w; assigned += w; } });
  const unassigned = papers.filter(p => weights[p.id] === undefined);
  const rem = 100 - assigned;
  if (unassigned.length) unassigned.forEach(p => weights[p.id] = rem / unassigned.length);
  return weights;
}
function getSubjectWeights(setId, subject) {
  const set = getResultState(setId);
  const papers = getSetPapers(setId).filter(p => p.subject === subject);
  const defaults = defaultWeightsForPapers(papers, papers[0] ? papers[0].code : '', getSetExamKey(setId));
  const stored = set ? (set.resultWeights || {}) : {};
  const weights = {};
  papers.forEach(p => { const v = stored[p.id]; weights[p.id] = (v !== undefined && v !== '' && !isNaN(Number(v))) ? Number(v) : (defaults[p.id] !== undefined ? defaults[p.id] : 0); });
  return weights;
}
function computeSubjectResult(setId, subject) {
  const set = getResultState(setId);
  const scale = getResultsScale(setId);
  const papers = getSetPapers(setId).filter(p => p.subject === subject);
  const weights = getSubjectWeights(setId, subject);
  const scores = set ? (set.resultScores || {}) : {};
  const target = set ? (set.resultTargets[subject] || scale.defaultGrade) : scale.defaultGrade;
  const grade = scale.grades.find(g => g[0] === target);
  const minPct = grade ? grade[1] : 50;
  let knownPts = 0, knownW = 0, remW = 0, remCount = 0;
  papers.forEach(p => { const w = weights[p.id] || 0; const s = scores[p.id]; if (s !== undefined && s !== '' && !isNaN(Number(s))) { knownPts += w * Number(s); knownW += w; } else { remW += w; remCount++; } });
  const totalW = papers.reduce((a, p) => a + (weights[p.id] || 0), 0) || 100;
  const currentPct = knownW > 0 ? knownPts / knownW : null;
  const projectedPct = totalW > 0 ? knownPts / totalW : null;
  const needRel = remW > 0 ? (minPct * totalW - knownPts) / remW : (knownPts >= minPct * totalW ? 0 : 100);
  const achievable = needRel <= 100;
  return { papers, weights, scores, target, minPct, knownPts, knownW, remW, remCount, currentPct, projectedPct, needRel, achievable, scale };
}
function scoreOf(r, id) { const s = r.scores[id]; return (s !== undefined && s !== '' && !isNaN(Number(s))) ? Number(s) : null; }
function fmt(n) { return String(Math.round(n * 100) / 100); }
function gradeAt(scale, pct) { for (const g of scale.grades) if (pct >= g[1]) return g[0]; return scale.grades[scale.grades.length - 1][0]; }
function gradeBand(scale, pct) { return [gradeAt(scale, pct - 3), gradeAt(scale, pct + 3)]; }
function contribText(w, s) { const v = w * s / 100; return v < 0.05 ? '&lt;0.1%' : v.toFixed(1) + '%'; }
function resultsStatusHtml(r) {
  if (r.knownW === 0) return `<div class="results-status muted">No scores entered yet &mdash; add your scores below to see what you need for <strong>${r.target}</strong>.</div>`;
  if (r.remW <= 0) {
    const ok = r.currentPct >= r.minPct;
    return `<div class="results-status ${ok ? 'ok' : 'bad'}">${ok ? 'On track' : 'Below target'} &mdash; final weighted score <strong>${r.currentPct.toFixed(1)}%</strong>${ok ? ' hits' : ' is below'} the <strong>${r.minPct}%</strong> needed for <strong>${r.target}</strong>.</div>`;
  }
  if (!r.achievable) return `<div class="results-status bad"><strong>${r.target}</strong> is out of reach &mdash; even 100% on the remaining paper${r.remCount > 1 ? 's' : ''} only reaches <strong>${Math.min(100, (r.knownPts + r.remW * 100) / r.totalW).toFixed(1)}%</strong>.</div>`;
  if (r.needRel <= 0) return `<div class="results-status ok">Already on track for <strong>${r.target}</strong> &mdash; keep it up!</div>`;
  return `<div class="results-status need">To hit <strong>${r.target}</strong> (${r.minPct}%), the remaining paper${r.remCount > 1 ? 's' : ''} must average about <strong>${Math.min(100, r.needRel).toFixed(1)}%</strong>.</div>`;
}
function resultsStatsHtml(r) {
  const projected = r.knownW > 0 ? r.projectedPct.toFixed(1) + '%' : '&ndash;';
  const band = r.knownW > 0 ? gradeBand(r.scale, r.projectedPct).join('&ndash;') : '';
  let rem;
  if (r.remW <= 0) rem = '<div class="stat-value">Done</div><div class="stat-sub">all papers entered</div>';
  else if (!r.achievable) rem = '<div class="stat-value">No</div><div class="stat-sub">target out of reach</div>';
  else if (r.needRel <= 0) rem = '<div class="stat-value">On track</div><div class="stat-sub">target secured</div>';
  else rem = `<div class="stat-value">~${Math.min(100, r.needRel).toFixed(0)}%</div><div class="stat-sub">avg needed on ${r.remCount} remaining paper${r.remCount > 1 ? 's' : ''}</div>`;
  return `<div class="results-stats">
    <div class="stat"><div class="stat-label">Projected so far</div><div class="stat-value">${projected}</div><div class="stat-sub">${band ? 'est. grade ' + band : 'enter scores to see'}</div></div>
    <div class="stat"><div class="stat-label">Target</div><div class="stat-value">${r.target}</div><div class="stat-sub">${r.minPct}% weighted (est.)</div></div>
    <div class="stat"><div class="stat-label">Remaining</div>${rem}</div>
  </div>`;
}
function resultsProgressHtml(r) {
  const hasScores = r.knownW > 0;
  const pct = hasScores ? Math.max(0, Math.min(100, r.projectedPct)) : 0;
  let cls = 'need';
  if (r.remW <= 0) cls = r.currentPct >= r.minPct ? 'ok' : 'bad';
  else if (!r.achievable) cls = 'bad';
  else if (r.needRel <= 0) cls = 'ok';
  const fill = hasScores ? `<div class="progress-fill ${cls}" style="width:${pct}%"></div>` : '';
  const marker = `<div class="progress-target" style="left:${Math.max(0, Math.min(100, r.minPct))}%" title="Target ${r.target}: ${r.minPct}%"><span class="progress-marker-dot"></span></div>`;
  return `<div class="results-progress"><div class="progress-track">${fill}${marker}</div><div class="progress-labels"><span>0%</span><span>100%</span></div><div class="progress-legend">Bar = projected score so far &middot; dot = target for <strong>${r.target}</strong></div></div>`;
}
function resultsPapersHtml(r, setId, subject) {
  const rows = r.papers.map(p => {
    const w = r.weights[p.id] || 0;
    const s = scoreOf(r, p.id);
    const contrib = s !== null ? contribText(w, s) : '&ndash;';
    const name = p.paper + (p.paperName && p.paperName !== p.paper ? ' <span class="results-paper-sub">' + p.paperName + '</span>' : '');
    return `<tr><td class="results-paper">${name}</td><td><input type="number" min="0" max="100" step="0.5" class="results-weight-input" data-set="${setId}" data-paper="${p.id}" value="${Number(w).toFixed(w % 1 ? 1 : 0)}" aria-label="Weighting for ${p.paper}"></td><td><input type="number" min="0" max="100" step="0.5" class="results-score-input" data-set="${setId}" data-paper="${p.id}" placeholder="&ndash;" value="${s !== null ? s : ''}" aria-label="Score for ${p.paper}"></td><td class="results-contrib" data-set="${setId}" data-paper="${p.id}">${contrib}</td></tr>`;
  }).join('');
  return `<div class="results-papers-wrap"><h4>Papers</h4><table class="results-papers"><thead><tr><th scope="col">Paper</th><th scope="col">Weight</th><th scope="col">Score %</th><th scope="col">% of final</th></tr></thead><tbody>${rows}</tbody></table></div>`;
}
function mathHtml(r) {
  const totalW = r.totalW || 100;
  const knownContrib = r.knownPts / totalW;
  const openFrac = r.remW / totalW;
  let explain;
  if (r.remW <= 0) explain = `Your final weighted score is <strong>${fmt(r.currentPct)}%</strong>, which ${r.currentPct >= r.minPct ? 'meets' : 'is below'} the ${r.minPct}% needed for <strong>${r.target}</strong>.`;
  else if (!r.achievable) explain = `Even scoring 100% on every remaining paper reaches only <strong>${fmt((r.knownPts + r.remW * 100) / totalW)}%</strong> &mdash; below the ${r.minPct}% needed for <strong>${r.target}</strong>.`;
  else if (r.needRel <= 0) explain = `Your entered papers already contribute <strong>${fmt(knownContrib)}%</strong>, so <strong>${r.target}</strong> is already secured.`;
  else explain = `Your entered papers contribute <strong>${fmt(knownContrib)}%</strong> toward the final. The remaining papers make up <strong>${fmt(openFrac * 100)}%</strong> of the final grade, so they must average about <strong>${fmt(Math.min(100, r.needRel))}%</strong> to reach the ${r.minPct}% needed for <strong>${r.target}</strong>.`;
  const breakdown = r.papers.filter(p => scoreOf(r, p.id) !== null).map(p => {
    const w = r.weights[p.id] || 0, s = scoreOf(r, p.id);
    return `<li><strong>${p.paper}</strong>: ${fmt(s)}% &times; ${fmt(w)}% weight = ${fmt((w * s) / totalW)}% of the final grade</li>`;
  }).join('');
  const avgRow = r.knownW > 0 ? `<li><strong>Weighted score of entered papers</strong>: &Sigma;(score &times; weight) &divide; ${fmt(r.knownW)} (weights entered) = ${fmt(r.currentPct)}%</li>` : '';
  return `<details class="results-math"><summary>How is this calculated?</summary>
    <p>Your grade is a <strong>weighted average</strong>: <code>Final % = &Sigma;(paper score &times; paper weight) &divide; &Sigma;(weight)</code>.</p>
    <p>Target <strong>${r.target}</strong> needs at least <strong>${r.minPct}%</strong> weighted score (boundaries below are estimates).</p>
    <p>${explain}</p>
    ${breakdown ? `<ul class="results-math-breakdown">${breakdown}${avgRow}</ul>` : ''}
    <p class="results-math-disclaimer">Grade boundaries are estimates from recent years and may not match the official SEAB grades for your year.</p>
  </details>`;
}
function renderResultsSubject(setId, subject) {
  const r = computeSubjectResult(setId, subject);
  const scale = getResultsScale(setId);
  const color = getSubjectColor(subject, setId);
  const targetOptions = scale.grades.map(([g, min]) => `<option value="${g}" ${r.target === g ? 'selected' : ''}>${g} (${min}% est.)</option>`).join('');
  const sid = setId + '-' + subject.replace(/[^a-z0-9]/gi, '_');
  return `<div class="results-card" id="results-card-${sid}" style="border-left-color:${color}">
    <div class="results-card-head">
      <div class="results-subject" style="color:${color}">${subject}</div>
      <label class="results-target"><span>Target</span><select class="results-target-select" data-set="${setId}" data-subject="${subject}">${targetOptions}</select></label>
    </div>
    <div class="results-summary" id="results-summary-${sid}">
      ${resultsStatusHtml(r)}
      ${resultsStatsHtml(r)}
      ${resultsProgressHtml(r)}
    </div>
    ${resultsPapersHtml(r, setId, subject)}
    ${simulatorHtml(r, setId, subject)}
    ${mathHtml(r)}
    <div class="results-note">Weights come from syllabus defaults where known &mdash; edit to match yours. Grade boundaries shown are <strong>estimates</strong>.</div>
  </div>`;
}
function resultsTableHtml(id, set) {
  const papers = getSetPapers(id).filter(p => (set.selectedIds || []).includes(p.id));
  const subjects = [...new Set(papers.map(p => p.subject))].sort();
  if (!subjects.length) return '';
  const rows = subjects.map(subj => {
    const r = computeSubjectResult(id, subj);
    let status, cls;
    if (r.knownW === 0) { status = 'Enter scores'; cls = 'muted'; }
    else if (r.remW <= 0) { status = r.currentPct >= r.minPct ? 'On track' : 'Below target'; cls = r.currentPct >= r.minPct ? 'ok' : 'bad'; }
    else if (!r.achievable) { status = 'Not achievable'; cls = 'bad'; }
    else if (r.needRel <= 0) { status = 'On track'; cls = 'ok'; }
    else { status = `Need ~${Math.min(100, r.needRel).toFixed(0)}%`; cls = 'need'; }
    const cur = r.knownW > 0 ? r.projectedPct.toFixed(0) + '%' : '&ndash;';
    return `<tr><td>${subj}</td><td>${r.target}</td><td>${cur}</td><td class="res-tbl-${cls}">${status}</td></tr>`;
  }).join('');
  return `<div class="results-table-wrap"><h4>Subject overview</h4><table class="results-table"><thead><tr><th scope="col">Subject</th><th scope="col">Target</th><th scope="col">Projected</th><th scope="col">Status</th></tr></thead><tbody>${rows}</tbody></table><div class="results-table-note">Projected % is from entered scores only. Grade boundaries are estimates.</div></div>`;
}
function renderResults() {
  const container = document.getElementById('results-exam-sets');
  if (!container) return;
  const sets = Object.entries(state.examSets).filter(([id, s]) => s.enabled !== false && (s.selectedIds || []).length);
  if (!sets.length) { container.innerHTML = '<p style="color:var(--text2);font-size:14px;text-align:center;padding:24px">Enable an exam set and select subjects in Settings to use the Results planner.</p>'; return; }
  let html = '<div class="results-disclaimer">⚠️ <strong>Grade boundaries are estimates</strong> based on recent years and may change. Confirm the official boundaries with your school or SEAB before relying on them.</div>';
  sets.forEach(([id, set]) => {
    const scale = getResultsScale(id);
    const papers = getSetPapers(id).filter(p => (set.selectedIds || []).includes(p.id));
    const subjects = [...new Set(papers.map(p => p.subject))].sort();
    html += `<div class="results-set"><div class="results-set-title"><h3>${set.name}</h3><span class="results-scale-badge">${scale.name} grading (est.)</span></div>${resultsTableHtml(id, set)}`;
    if (!subjects.length) html += '<p style="color:var(--text2);font-size:13px">No subjects selected for this exam set.</p>';
    else subjects.forEach(subj => html += renderResultsSubject(id, subj));
    html += '</div>';
  });
  html += '<p class="results-seab"><a href="https://www.seab.gov.sg" target="_blank" rel="noopener noreferrer">Official SEAB exam information ↗</a> &middot; Confirm all dates and grade boundaries with your school.</p>';
  container.innerHTML = html;
}
function updateResultsCard(setId, subject) {
  const r = computeSubjectResult(setId, subject);
  const sid = setId + '-' + subject.replace(/[^a-z0-9]/gi, '_');
  const card = document.getElementById('results-card-' + sid);
  if (!card) return;
  const sum = card.querySelector('.results-summary');
  if (sum) sum.innerHTML = resultsStatusHtml(r) + resultsStatsHtml(r) + resultsProgressHtml(r);
  r.papers.forEach(p => {
    const s = scoreOf(r, p.id);
    const cell = card.querySelector(`.results-contrib[data-set="${setId}"][data-paper="${p.id}"]`);
    if (cell) cell.innerHTML = s !== null ? contribText(r.weights[p.id] || 0, s) : '&ndash;';
  });
  const simBox = card.querySelector('.results-sim');
  const applicable = r.remCount > 0 && r.achievable;
  if (simBox) {
    if (!applicable) { simBox.remove(); return; }
    const input = simBox.querySelector('input.results-sim-input');
    if (input) updateSimOut(setId, subject, input.value);
  } else if (applicable) {
    const el = document.createElement('div');
    el.innerHTML = simulatorHtml(r, setId, subject);
    const node = el.firstElementChild;
    const math = card.querySelector('.results-math');
    if (math) math.before(node); else card.appendChild(node);
  }
}

let colorIdx = 0;
function nextColor() { const c = COLOR_PALETTE[colorIdx % COLOR_PALETTE.length]; colorIdx++; return c; }

// ===== EXAM SET MANAGEMENT =====
function ensureBuiltinExams(activeKeys) {
  const allBuiltinKeys = Object.keys(BUILTIN_EXAMS);
  let changed = false;
  allBuiltinKeys.forEach(key => {
    const id = 'builtin-' + key;
    if (!state.examSets[id] && BUILTIN_EXAMS[key]) {
      state.examSets[id] = { name: BUILTIN_EXAMS[key].name, type: 'builtin', builtinKey: key, enabled: false, selectedIds: [], progress: {}, notes: {}, goals: {}, topics: {}, subjectColors: {} };
      changed = true;
    }
  });
  if (activeKeys) {
    allBuiltinKeys.forEach(key => {
      const id = 'builtin-' + key;
      if (state.examSets[id]) {
        state.examSets[id].enabled = activeKeys.includes(key);
      }
    });
  }
  if (changed) saveState();
}

function createCustomExamSet(name, papers) {
  const id = 'custom-' + Date.now().toString(36) + Math.random().toString(36).slice(2,6);
  const uniqueSubjects = [...new Set(papers.map(p => p.subject))];
  const colors = {};
  colorIdx = 0;
  uniqueSubjects.forEach(s => { colors[s] = nextColor(); });
  state.examSets[id] = {
    name, type: 'custom', enabled: true, papers: papers.map((p, i) => ({
      id: id + '-p' + i, subject: p.subject, code: p.code || '', paper: p.paper || '',
      paperName: p.paperName || p.paper || '', date: p.date, startTime: p.startTime || null,
      endTime: null, mode: 'Written', duration: '', notes: ''
    })),
    selectedIds: papers.map((_, i) => id + '-p' + i), progress: {}, notes: {}, goals: {}, topics: {}, subjectColors: colors
  };
  state.activeSetId = id;
  saveState();
  
  refreshAll();
  showToast('Exam set "' + name + '" created with ' + papers.length + ' entries.');
}

function deleteExamSet(id) {
  const set = state.examSets[id];
  if (!set) return;
  if (set.type === 'builtin') {
    set.enabled = !set.enabled;
    saveState();  refreshAll();
    showToast(set.enabled ? 'Enabled: ' + set.name : 'Disabled: ' + set.name);
    return;
  }
  if (!confirm('Delete exam set "' + set.name + '"? This cannot be undone.')) return;
  delete state.examSets[id];
  if (state.activeSetId === id) {
    const keys = Object.keys(state.examSets);
    state.activeSetId = keys[0] || '';
  }
  saveState();  refreshAll();
}

function switchExamSet(id) {
  if (id === state.activeSetId) return;
  state.activeSetId = id;
  saveState();
  renderSettings();
  refreshAll();
}

// ===== DATE HELPERS =====
function nowSG() { const now = new Date(); const sgOffset = 8 * 60; const localOffset = now.getTimezoneOffset(); return new Date(now.getTime() + (localOffset + sgOffset) * 60000); }
function dateStrToSG(dateStr) { const [y, m, d] = dateStr.split('-').map(Number); return new Date(Date.UTC(y, m - 1, d)); }
function daysBetween(a, b) { return Math.round((a.getTime() - b.getTime()) / 86400000); }
function getExamStatus(exam) { const now = nowSG(); const todayStart = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())); const examDay = dateStrToSG(exam.date); if (examDay < todayStart) return 'past'; if (examDay.getTime() === todayStart.getTime()) return 'today'; return 'upcoming'; }
function daysUntilExam(exam) { const todayStart = new Date(Date.UTC(nowSG().getFullYear(), nowSG().getMonth(), nowSG().getDate())); return daysBetween(dateStrToSG(exam.date), todayStart); }
function formatDate(dateStr) { return dateStrToSG(dateStr).toLocaleDateString('en-SG', { weekday:'short', day:'numeric', month:'short', year:'numeric', timeZone:'Asia/Singapore' }); }
function formatTime(t) { if (!t) return ''; const [h, m] = t.split(':'); const hour = parseInt(h); return `${hour % 12 || 12}:${m} ${hour >= 12 ? 'PM' : 'AM'}`; }

// ===== GOALS CRUD =====
function getGoals(setId, subject) { const g = getSetGoals(setId); return g[subject] || []; }
function addGoal(setId, subject, text) { if (!text.trim()) return; const set = state.examSets[setId]; if (!set) return; if (!set.goals[subject]) set.goals[subject] = []; set.goals[subject].push({ id: Date.now().toString(36) + Math.random().toString(36).slice(2,6), text: text.trim(), completed: false }); saveState(); }
function toggleGoal(setId, subject, goalId) { const g = getSetGoals(setId); if (!g[subject]) return; const goal = g[subject].find(x => x.id === goalId); if (goal) { goal.completed = !goal.completed; saveState(); } }
function deleteGoal(setId, subject, goalId) { const g = getSetGoals(setId); if (!g[subject]) return; g[subject] = g[subject].filter(x => x.id !== goalId); if (!g[subject].length) delete g[subject]; saveState(); }

// ===== RENDER HELPERS =====
function getSubjectColor(subject, setId) { const colors = setId ? getSetSubjectColors(setId) : getActiveColors(); return colors[subject] || getDefaultColor(subject); }
function getPeriodProgress() {
  const selected = getSelectedExams();
  if (!selected.length) return { pct: 0, totalDays: 0, elapsedDays: 0, remainingDays: 0 };
  const dates = selected.map(e => dateStrToSG(e.date)).sort((a, b) => a - b);
  const first = dates[0], last = dates[dates.length - 1];
  const total = daysBetween(last, first); const elapsed = daysBetween(nowSG(), first);
  if (total <= 0) return { pct: 1, totalDays: 1, elapsedDays: 1, remainingDays: 0 };
  return { pct: Math.max(0, Math.min(1, elapsed / total)), totalDays: total, elapsedDays: Math.max(0, elapsed), remainingDays: Math.max(0, total - elapsed) };
}
function computeInsights() {
  const selected = getSelectedExams();
  if (!selected.length) return { busyWeek: null, examsThisWeek: 0, upcomingCount: 0, subjectCount: 0, totalPapers: 0 };
  const now = nowSG();
  const today = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  const weekEnd = new Date(today.getTime() + 7 * 86400000);
  const examsThisWeek = selected.filter(e => { const d = dateStrToSG(e.date); return d >= today && d <= weekEnd; });
  const weekDays = {};
  selected.filter(e => getExamStatus(e) !== 'past').forEach(e => {
    const d = dateStrToSG(e.date);
    const weekStart = new Date(d.getTime() - d.getDay() * 86400000);
    const wk = weekStart.toISOString().slice(0,10);
    if (!weekDays[wk]) weekDays[wk] = 0;
    weekDays[wk]++;
  });
  let maxWeek = null, maxCount = 0;
  Object.entries(weekDays).forEach(([wk, cnt]) => { if (cnt > maxCount) { maxCount = cnt; maxWeek = wk; } });
  const subjects = new Set(selected.map(e => e.subject));
  return {
    busyWeek: maxWeek ? { week: new Date(maxWeek + 'T00:00:00'), count: maxCount } : null,
    examsThisWeek: examsThisWeek.length,
    upcomingCount: selected.filter(e => getExamStatus(e) !== 'past').length,
    subjectCount: subjects.size,
    totalPapers: selected.length
  };
}

function getStatusBadge(status) { const m = { upcoming:'Upcoming', today:'Today', past:'Completed' }; return `<span class="exam-badge badge-${status}">${m[status]}</span>`; }
function getCountdownHTML(exam, days) { const s = getExamStatus(exam); if (s === 'past') return '<div class="exam-countdown countdown-past">Completed</div>'; if (s === 'today') return '<div class="exam-countdown countdown-today">Today!</div>'; let cls = 'countdown-normal'; if (days <= 7) cls = 'countdown-danger'; else if (days <= 30) cls = 'countdown-warning'; return `<div class="exam-countdown ${cls}">${days}</div><div class="exam-countdown-label">days remaining</div>`; }
function getTrafficHTML(examId, p) { const levels = ['red', 'yellow', 'blue', 'green'], labels = ['Not Started', 'Learning', 'Practised', 'Ready']; const current = p[examId] || 'red'; return `<div class="traffic-lights" data-exam="${examId}">${levels.map((l, i) => `<span class="traffic-light traffic-${l}${l === current ? ' active' : ''}" data-level="${l}" title="${labels[i]}"></span>`).join('')}<span class="traffic-label">${labels[levels.indexOf(current)]}</span></div>`; }
function getTrafficSelectHTML(examId, p) { const levels = ['red', 'yellow', 'blue', 'green'], labels = ['Not Started', 'Learning', 'Practised', 'Ready']; const current = p[examId] || 'red'; return levels.map((l, i) => `<span class="traffic-light traffic-${l}${l === current ? ' active' : ''}" data-level="${l}" title="${labels[i]}"></span>`).join(''); }

let tutorialStep = 0;
function showTutorial() {
  tutorialStep = 0;
  document.getElementById('tutorial-overlay').classList.remove('hidden');
  renderTutorialStep();
}
function hideTutorial() { document.getElementById('tutorial-overlay').classList.add('hidden'); }
function renderTutorialStep() {
  const step = TUTORIAL_STEPS[tutorialStep];
  if (!step) { hideTutorial(); return; }
  document.getElementById('tutorial-content').innerHTML = `
    <div class="tutorial-icon">${step.icon}</div>
    <h2>${step.title}</h2>
    <p>${step.desc}</p>
    <div class="tutorial-step-indicators">
      ${TUTORIAL_STEPS.map((_, i) => `<span class="tutorial-dot${i === tutorialStep ? ' active' : ''}"></span>`).join('')}
    </div>
    <div class="tutorial-actions">
      ${tutorialStep > 0 ? '<button id="tutorial-prev" class="btn btn-secondary">← Back</button>' : ''}
      <button id="tutorial-next" class="btn btn-primary">${step.btn}</button>
    </div>`;
  document.getElementById('tutorial-next')?.addEventListener('click', () => {
    tutorialStep++;
    if (tutorialStep >= TUTORIAL_STEPS.length) { hideTutorial(); return; }
    renderTutorialStep();
  });
  document.getElementById('tutorial-prev')?.addEventListener('click', () => { tutorialStep--; renderTutorialStep(); });
}

function renderInsights() {
  const insights = computeInsights();
  const bar = document.getElementById('insight-bar');
  if (insights.totalPapers === 0) { bar.classList.add('hidden'); return; }
  bar.classList.remove('hidden');
  bar.innerHTML = `
    <div class="insight-card insight-month"><span class="insight-value">${insights.examsThisWeek}</span><span class="insight-label">Exams This Week</span></div>
    <div class="insight-card insight-subjects"><span class="insight-value">${insights.subjectCount}</span><span class="insight-label">Subjects</span></div>
    <div class="insight-card insight-papers"><span class="insight-value">${insights.upcomingCount}</span><span class="insight-label">Upcoming Papers</span></div>`;
}

function renderPlanWeekly() {
  const container = document.getElementById('plan-weekly-content');
  if (!container) return;
  const selected = getSelectedExams().filter(e => getExamStatus(e) !== 'past');
  const now = nowSG();
  const today = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  const weekStart = new Date(today.getTime() - today.getDay() * 86400000);
  const weekEnd = new Date(weekStart.getTime() + 6 * 86400000);
  const weekExams = selected.filter(e => { const d = dateStrToSG(e.date); return d >= weekStart && d <= weekEnd; }).sort((a, b) => dateStrToSG(a.date) - dateStrToSG(b.date));
  if (!weekExams.length) { container.innerHTML = '<p style="font-size:13px;color:var(--text2);text-align:center;padding:12px">No exams this week. Great time to get ahead!</p>'; return; }
  container.innerHTML = weekExams.map(ex => {
    const d = dateStrToSG(ex.date);
    const dayName = d.toLocaleDateString('en-SG', { weekday:'short', timeZone:'Asia/Singapore' });
    const color = getSubjectColor(ex.subject, findExamSetForPaper(ex.id));
    return `<div class="plan-weekly-item" data-id="${ex.id}"><span class="plan-weekly-day">${dayName}</span><span class="plan-weekly-subj" style="color:${color}">${ex.subject}</span><span class="plan-weekly-paper">${ex.paper}</span></div>`;
  }).join('');
  container.querySelectorAll('.plan-weekly-item').forEach(el => { el.addEventListener('click', () => showExamDetail(el.dataset.id)); });
}

function renderDailyPlanner() {
  const planner = document.getElementById('daily-planner');
  const selected = getSelectedExams();
  if (!selected.length) { planner.classList.add('hidden'); return; }
  planner.classList.remove('hidden');
  const dateKey = getDailyKey(currentDailyDate);
  document.getElementById('daily-date-label').textContent = currentDailyDate.toLocaleDateString('en-SG', { weekday:'short', day:'numeric', month:'short', year:'numeric', timeZone:'Asia/Singapore' });
  const tasks = dailyTasks[dateKey] || [];
  const container = document.getElementById('daily-tasks');
  if (!tasks.length) {
    container.innerHTML = '<p style="color:var(--text2);font-size:13px;text-align:center;padding:16px">No tasks for this day. Add your first study task above!</p>';
  } else {
    const done = tasks.filter(t => t.done).length;
    container.innerHTML = tasks.map((t, i) => `<div class="daily-task${t.done ? ' done' : ''}"><input type="checkbox" class="daily-check" data-idx="${i}" ${t.done ? 'checked' : ''}><span class="daily-task-text">${t.text}</span>${t.time ? `<span class="daily-task-time">${t.time}</span>` : ''}<button class="btn-small daily-delete" data-idx="${i}">&times;</button></div>`).join('');
    container.querySelectorAll('.daily-check').forEach(cb => { cb.addEventListener('change', () => { const idx = parseInt(cb.dataset.idx); if (dailyTasks[dateKey] && dailyTasks[dateKey][idx]) { dailyTasks[dateKey][idx].done = cb.checked; saveDailyTasks(); renderDailyPlanner(); } }); });
    container.querySelectorAll('.daily-delete').forEach(btn => { btn.addEventListener('click', () => { const idx = parseInt(btn.dataset.idx); if (dailyTasks[dateKey]) { dailyTasks[dateKey].splice(idx, 1); if (!dailyTasks[dateKey].length) delete dailyTasks[dateKey]; saveDailyTasks(); renderDailyPlanner(); } }); });
  }
  document.getElementById('daily-stats').textContent = tasks.length ? `🔥 ${computeStreak()}-day study streak &middot; ✅ ${tasks.filter(t=>t.done).length}/${tasks.length} tasks completed` : '';
}

function renderHero() {
  const selected = getSelectedExams().filter(e => getExamStatus(e) !== 'past');
  const hero = document.getElementById('hero'), card = document.getElementById('hero-card');
  if (!selected.length) { hero.classList.add('hidden'); return; }
  hero.classList.remove('hidden');
  selected.sort((a, b) => dateStrToSG(a.date) - dateStrToSG(b.date));
  const next = selected[0], days = daysUntilExam(next), status = getExamStatus(next), prog = getPeriodProgress();
  const seasonInfo = prog.totalDays > 0 ? `Day ${Math.min(prog.elapsedDays + 1, prog.totalDays)} of ${prog.totalDays}` : '';
  const remains = prog.remainingDays > 0 ? ` &middot; ${prog.remainingDays}d to go` : '';
  const insights = computeInsights();
  const insightsHtml = insights.busyWeek ? `<div class="hero-insights"><span class="hero-insight-item">📅 <span class="hero-insight-value">${insights.examsThisWeek}</span> this week</span><span class="hero-insight-item">📝 <span class="hero-insight-value">${insights.subjectCount}</span> subjects</span></div>` : '';
  // Dynamic banner color based on next exam's subject
  const nextColor = getSubjectColor(next.subject, findExamSetForPaper(next.id));
  card.style.background = `linear-gradient(135deg, ${nextColor}, ${nextColor}dd)`;
  if (status === 'past') card.innerHTML = `<div class="hero-label">All Examinations</div><div class="hero-countdown">&#10003;</div><div class="hero-unit">COMPLETED</div><div class="hero-subject">All exams are done!</div><div class="hero-progress-bar"><div class="hero-progress-fill" style="width:100%"></div></div><div class="hero-progress-text">Exam Season ${seasonInfo}</div>${insightsHtml}`;
  else if (status === 'today') card.innerHTML = `<div class="hero-label">Next Examination</div><div class="hero-countdown">0</div><div class="hero-unit">TODAY</div><div class="hero-subject">${next.subject} ${next.paper}</div><div class="hero-date">${formatDate(next.date)}</div><div class="hero-progress-bar"><div class="hero-progress-fill" style="width:${prog.pct*100}%"></div></div><div class="hero-progress-text">Exam Season ${seasonInfo}${remains}</div>${insightsHtml}`;
  else card.innerHTML = `<div class="hero-label">Next Examination</div><div class="hero-countdown">${days}</div><div class="hero-unit">DAYS</div><div class="hero-subject">${next.subject} ${next.paper}</div><div class="hero-date">${formatDate(next.date)}</div><div class="hero-progress-bar"><div class="hero-progress-fill" style="width:${prog.pct*100}%"></div></div><div class="hero-progress-text">Exam Season ${seasonInfo}${remains}</div>${insightsHtml}`;
}

function renderStatsBar() {
  const selected = getSelectedExams();
  const bar = document.getElementById('stats-bar');
  if (!selected.length) { bar.classList.add('hidden'); return; }
  bar.classList.remove('hidden');
  document.getElementById('stat-exams').textContent = selected.length;
  document.getElementById('stat-subjects').textContent = new Set(selected.map(e => e.subject)).size;
  const p = getPeriodProgress();
  document.getElementById('stat-days-until').textContent = p.remainingDays > 0 ? `${p.remainingDays}d` : 'Done!';
}

function findExamSetForPaper(paperId) {
  for (const [id, set] of Object.entries(state.examSets)) {
    const papers = getSetPapers(id);
    if (papers.some(p => p.id === paperId)) return id;
  }
  return null;
}

function renderExamCard(exam) {
  const days = daysUntilExam(exam), status = getExamStatus(exam);
  const setId = findExamSetForPaper(exam.id);
  const set = setId ? state.examSets[setId] : null;
  const setName = set ? set.name : '';
  const color = getSubjectColor(exam.subject, setId);
  const timeStr = exam.startTime ? formatTime(exam.startTime) + (exam.endTime ? ' - ' + formatTime(exam.endTime) : '') : '';
  const modeTag = exam.mode !== 'Written' ? `<span style="font-size:11px;color:var(--text2);background:var(--surface2);padding:1px 6px;border-radius:4px;margin-left:6px">${exam.mode}</span>` : '';
  const hasNotes = notesCache.some(n => n.examId === exam.id || n.subject === exam.subject);
  const setNote = setId ? getSetNotes(setId)[exam.id] || '' : '';
  const setBadge = setName ? `<span class="exam-set-badge">${setName}</span>` : '';
  return `<div class="exam-card status-${status}" data-id="${exam.id}"><div class="exam-card-accent" style="background:${color}"></div><div class="exam-card-header"><div class="exam-subject"><span class="exam-subject-dot" style="background:${color}"></span>${exam.subject}${modeTag}${setBadge}</div>${getStatusBadge(status)}</div><div class="exam-paper">${exam.paper}${exam.paperName ? ' &mdash; ' + exam.paperName : ''}</div><div class="exam-date">${formatDate(exam.date)}${timeStr ? ' &middot; ' + timeStr : ''}</div>${getCountdownHTML(exam, days)}${getTrafficHTML(exam.id, setId ? getSetProgress(setId) : {})}${setNote ? `<div class="note-indicator has-notes">📝 ${setNote.slice(0, 50)}${setNote.length > 50 ? '...' : ''}</div>` : ''}${hasNotes ? `<div class="note-indicator has-notes">📎 Notes attached</div>` : ''}</div>`;
}

function renderGoalsList(setId) {
  const selected = getAllEnabledPapers();
  const section = document.getElementById('goals-section'), container = document.getElementById('goals-container'), toggleBtn = document.getElementById('btn-goals-toggle');
  if (!selected.length) { section.classList.add('hidden'); return; }
  section.classList.remove('hidden');
  const subjSet = [...new Set(selected.map(e => e.subject))].sort();
  const set = state.examSets[setId];
  const isCollapsed = set ? (set.goalsCollapsed !== false) : true;
  toggleBtn.textContent = isCollapsed ? 'Show' : 'Hide';
  if (isCollapsed) { container.classList.add('hidden'); container.innerHTML = ''; return; }
  container.classList.remove('hidden');
  let html = '';
  subjSet.forEach(subj => {
    const color = getSubjectColor(subj, setId), goals = getGoals(setId, subj);
    html += `<div class="goal-subject-group"><div class="goal-subject-title"><span style="width:8px;height:8px;border-radius:50%;background:${color};display:inline-block"></span>${subj}</div>`;
    if (goals.length) goals.forEach(g => { html += `<div class="goal-item"><input type="checkbox" class="goal-check" data-set="${setId}" data-subject="${subj}" data-id="${g.id}" ${g.completed ? 'checked' : ''}><span class="goal-text${g.completed ? ' done' : ''}">${g.text}</span><button class="goal-delete" data-set="${setId}" data-subject="${subj}" data-id="${g.id}" title="Delete goal">&times;</button></div>`; });
    html += `<div class="goal-add-row"><input type="text" class="goal-new-input" data-set="${setId}" data-subject="${subj}" placeholder="Add a study goal..." maxlength="200"><select class="goal-template-select" data-subject="${subj}"><option value="">Template...</option>${GOAL_TEMPLATES.map(t => `<option value="${t}">${t}</option>`).join('')}</select><button class="btn btn-primary goal-add-btn" data-set="${setId}" data-subject="${subj}">+ Add</button></div></div>`;
  });
  container.innerHTML = html;
  container.querySelectorAll('.goal-check').forEach(cb => { cb.addEventListener('change', () => { toggleGoal(cb.dataset.set, cb.dataset.subject, cb.dataset.id); renderGoalsList(setId); }); });
  container.querySelectorAll('.goal-delete').forEach(btn => { btn.addEventListener('click', () => { deleteGoal(btn.dataset.set, btn.dataset.subject, btn.dataset.id); renderGoalsList(setId); }); });
  container.querySelectorAll('.goal-template-select').forEach(sel => { sel.addEventListener('change', () => { if (sel.value) { sel.closest('.goal-add-row').querySelector('.goal-new-input').value = sel.value; sel.value = ''; } }); });
  container.querySelectorAll('.goal-add-btn').forEach(btn => { btn.addEventListener('click', () => { const row = btn.closest('.goal-add-row'); const inp = row.querySelector('.goal-new-input'); addGoal(btn.dataset.set, btn.dataset.subject, inp.value); inp.value = ''; renderGoalsList(setId); }); });
  container.querySelectorAll('.goal-new-input').forEach(inp => { inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') { addGoal(inp.dataset.set, inp.dataset.subject, inp.value); inp.value = ''; renderGoalsList(setId); } }); });
}

function renderList() {
  const exams = getSelectedExams();
  const sortBy = document.getElementById('sort-by').value;
  const filterSubj = document.getElementById('filter-subject').value;
  const searchQ = document.getElementById('search-exams').value.toLowerCase().trim();
  const view = document.querySelector('.view-tab.active')?.dataset?.view || 'upcoming';
  let filtered = exams;
  if (filterSubj) filtered = filtered.filter(e => e.subject === filterSubj);
  if (searchQ) filtered = filtered.filter(e => e.subject.toLowerCase().includes(searchQ) || e.paper.toLowerCase().includes(searchQ) || e.paperName.toLowerCase().includes(searchQ));
  if (view === 'upcoming') filtered = filtered.filter(e => { const s = getExamStatus(e); return s === 'upcoming' || s === 'today'; });
  filtered.sort((a, b) => sortBy === 'subject' ? (a.subject.localeCompare(b.subject) || dateStrToSG(a.date) - dateStrToSG(b.date)) : dateStrToSG(a.date) - dateStrToSG(b.date));
  const container = document.getElementById('exam-list'), empty = document.getElementById('empty-state');
  if (!filtered.length) { container.innerHTML = ''; empty.classList.remove('hidden'); return; }
  empty.classList.add('hidden');
  container.innerHTML = filtered.map(renderExamCard).join('');
}

let calDate = new Date(); calDate.setHours(0, 0, 0, 0);
let selectedCalDate = null;

function renderTimeline() {
  const selected = getSelectedExams().filter(e => getExamStatus(e) !== 'past');
  const container = document.getElementById('timeline-content');
  const section = document.getElementById('cal-timeline');
  if (!selected.length) { section.classList.add('hidden'); return; }
  const now = nowSG();
  const today = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  const weekStart = new Date(today.getTime() - today.getDay() * 86400000);
  const weekEnd = new Date(weekStart.getTime() + 6 * 86400000);
  const weekExams = selected.filter(e => { const d = dateStrToSG(e.date); return d >= weekStart && d <= weekEnd; }).sort((a, b) => dateStrToSG(a.date) - dateStrToSG(b.date));
  if (!weekExams.length) { section.classList.add('hidden'); return; }
  section.classList.remove('hidden');
  container.innerHTML = weekExams.map(ex => {
    const color = getSubjectColor(ex.subject, findExamSetForPaper(ex.id));
    const d = dateStrToSG(ex.date);
    const dayName = d.toLocaleDateString('en-SG', { weekday:'short', timeZone:'Asia/Singapore' });
    return `<div class="timeline-slot"><span class="timeline-time">${dayName}</span><div class="timeline-bar"><div class="timeline-fill" style="width:100%;background:${color}"></div></div><span class="timeline-subject" style="color:${color}">${ex.subject} ${ex.paper}</span></div>`;
  }).join('');
}

function renderCalendar() {
  const year = calDate.getFullYear(), month = calDate.getMonth();
  document.getElementById('cal-month-year').textContent = new Date(year, month).toLocaleDateString('en-SG', { month:'long', year:'numeric', timeZone:'Asia/Singapore' });
  const firstDay = new Date(year, month, 1).getDay(), daysInMonth = new Date(year, month + 1, 0).getDate(), daysInPrev = new Date(year, month, 0).getDate();
  const selected = getSelectedExams();
  const today = new Date(nowSG().getFullYear(), nowSG().getMonth(), nowSG().getDate());
  let html = '';
  ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].forEach(d => { html += `<div class="cal-day-header">${d}</div>`; });
  for (let i = firstDay - 1; i >= 0; i--) html += `<div class="cal-day other-month">${daysInPrev - i}</div>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const dateObj = new Date(year, month, d), isToday = dateObj.getTime() === today.getTime();
    const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const examsToday = selected.filter(e => e.date === dateStr);
    const dayTasks = dailyTasks[dateStr] || [];
    const hasTasks = dayTasks.length > 0;
    let cls = 'cal-day';
    if (isToday) cls += ' today';
    if (examsToday.length) cls += ' has-exam';
    if (selectedCalDate === dateStr) cls += ' selected';
    if (hasTasks) cls += ' has-goal';
    html += `<div class="${cls}" data-date="${dateStr}">${d}`;
    if (examsToday.length) { html += `<div class="cal-dots">`; examsToday.forEach(ex => { html += `<span class="cal-dot" style="background:${getSubjectColor(ex.subject, findExamSetForPaper(ex.id))}" title="${ex.subject} ${ex.paper}"></span>`; }); html += `</div>`; }
    else if (hasTasks) { html += `<div class="cal-dots"><span class="cal-dot" style="background:var(--success)" title="${dayTasks.length} task(s)"></span></div>`; }
    else if (!isToday && year === calDate.getFullYear() && month === calDate.getMonth()) html += `<div class="cal-no-exams-label">none</div>`;
    html += `</div>`;
  }
  for (let i = 1; i <= (7 - (firstDay + daysInMonth) % 7) % 7; i++) html += `<div class="cal-day other-month">${i}</div>`;
  document.getElementById('cal-grid').innerHTML = html;
  document.getElementById('cal-exam-detail').innerHTML = '<p class="cal-no-selection">Click a date with exam dots to see details.</p>';
  document.querySelectorAll('.cal-day:not(.other-month)').forEach(el => { el.addEventListener('click', () => { selectedCalDate = el.dataset.date; renderCalendar(); const dateStr = el.dataset.date; const examsToday = getSelectedExams().filter(e => e.date === dateStr); const dayTasks = dailyTasks[dateStr] || []; const panel = document.getElementById('cal-exam-detail'); let html = `<div style="font-size:15px;font-weight:700;margin-bottom:10px">${formatDate(dateStr)}</div>`; if (examsToday.length) { html += `<div style="font-size:12px;font-weight:600;color:var(--text2);margin-bottom:6px">EXAMS</div>`; html += examsToday.map(ex => `<div class="cal-exam-item" data-id="${ex.id}"><span class="subj-dot" style="background:${getSubjectColor(ex.subject, findExamSetForPaper(ex.id))}"></span><span><strong>${ex.subject}</strong> ${ex.paper}${ex.startTime ? ' &middot; ' + formatTime(ex.startTime) : ''}</span></div>`).join(''); } if (dayTasks.length) { html += `<div style="font-size:12px;font-weight:600;color:var(--text2);margin:8px 0 6px">STUDY PLAN</div>`; html += dayTasks.map(t => `<div class="cal-task-item"><span class="cal-task-status">${t.done ? '✅' : '⬜'}</span><span>${t.text}${t.time ? ' <span class="cal-task-time">' + t.time + '</span>' : ''}</span></div>`).join(''); } if (!examsToday.length && !dayTasks.length) { html += `<p class="cal-no-selection">Nothing scheduled on ${formatDate(dateStr)}.</p>`; } panel.innerHTML = html; panel.querySelectorAll('.cal-exam-item').forEach(item => { item.addEventListener('click', () => showExamDetail(item.dataset.id)); }); }); });
}

function renderSettings() {
  renderProfiles(); renderAchievements();
  const setId = state.activeSetId;
  const set = state.examSets[setId];
  if (!set) return;

  // Exam sets list with enable/disable
  const setContainer = document.getElementById('settings-exam-sets');
  let setHtml = '<div class="exam-set-list">';
  Object.entries(state.examSets).forEach(([id, es]) => {
    const isEnabled = es.enabled !== false;
    setHtml += `<div class="exam-set-card"><span>${es.name} <span style="font-size:11px;color:var(--text2)">(${es.type})</span></span><label class="toggle-row" style="display:inline-flex;width:auto;border:none;padding:0;justify-content:flex-start"><input type="checkbox" class="exam-set-toggle" data-id="${id}" ${isEnabled ? 'checked' : ''}><span class="toggle-slider${isEnabled ? ' active' : ''}"></span></label><button class="btn btn-small exam-set-switch" data-id="${id}" ${id === setId ? 'disabled' : ''}>Select</button>${es.type === 'builtin' ? '' : '<button class="btn btn-small btn-danger exam-set-delete" data-id="' + id + '">&times;</button>'}</div>`;
  });
  setHtml += '</div>';
  setContainer.innerHTML = setHtml;
  setContainer.querySelectorAll('.exam-set-toggle').forEach(cb => { cb.addEventListener('change', () => { const s = state.examSets[cb.dataset.id]; if (s) { s.enabled = cb.checked; saveState(); refreshAll(); } const slider = cb.nextElementSibling; if (slider && slider.classList.contains('toggle-slider')) { slider.classList.toggle('active', cb.checked); } }); });
  setContainer.querySelectorAll('.exam-set-switch').forEach(btn => { btn.addEventListener('click', () => { switchExamSet(btn.dataset.id); }); });
  setContainer.querySelectorAll('.exam-set-delete').forEach(btn => { btn.addEventListener('click', () => { deleteExamSet(btn.dataset.id); renderSettings(); }); });

  // Subjects for active set
  const papers = getActivePapers();
  const subjContainer = document.getElementById('settings-subjects');
  if (!papers.length && set.type === 'builtin') {
    subjContainer.innerHTML = '<p style="color:var(--text2);font-size:14px">This built-in exam set has no paper dates yet. Use <strong>Paste from Sheets</strong> or <strong>OCR Import</strong> to add them, or create a custom exam set.</p>';
  } else if (papers.length && set.type === 'builtin') {
    const cats = getActiveCategories();
    const groupsByCat = {};
    Object.entries(cats).forEach(([cat, subjects]) => {
      const entries = subjects.map(s => {
        const pts = papers.filter(e => e.subject === s);
        if (!pts.length) return null;
        return `<div class="setup-group" data-subject="${s}"><div class="setup-group-header"><input type="checkbox" class="subject-check" ${pts.every(p => set.selectedIds.includes(p.id)) ? 'checked' : ''}><label>${s}</label></div><div class="setup-papers">${pts.map(p => `<div class="setup-paper"><input type="checkbox" class="paper-check" data-id="${p.id}" ${set.selectedIds.includes(p.id) ? 'checked' : ''}><label>${p.paper}${p.paperName ? ' &mdash; ' + p.paperName : ''}</label></div>`).join('')}</div></div>`;
      }).filter(Boolean);
      if (entries.length) groupsByCat[cat] = entries.join('');
    });
    ['Languages','Mathematics','Sciences','Humanities','Arts & Electives','Applied Subjects','Business & Tech','H1 Compulsory','H1 Mother Tongue','H1 Mathematics & Sciences','H1 Humanities & Arts','H2 Mathematics & Sciences','H2 Humanities','H2 Languages & Arts','H2 Computing & Business','H3 Subjects','Knowledge & Inquiry','Foreign Languages','Religious Knowledge','Others'].forEach(cat => { if (groupsByCat[cat]) subjContainer.innerHTML += `<div class="setup-category"><div class="setup-category-title">${cat}</div>${groupsByCat[cat]}</div>`; });
    subjContainer.querySelectorAll('.subject-check').forEach(cb => { cb.addEventListener('change', () => { cb.closest('.setup-group').querySelectorAll('.paper-check').forEach(p => p.checked = cb.checked); }); });
    subjContainer.querySelectorAll('.paper-check').forEach(cb => { cb.addEventListener('change', () => { const g = cb.closest('.setup-group'); g.querySelector('.subject-check').checked = g.querySelectorAll('.paper-check').length === g.querySelectorAll('.paper-check:checked').length; }); });
  } else if (papers.length) {
    const uniqueSubj = [...new Set(papers.map(p => p.subject))];
    subjContainer.innerHTML = uniqueSubj.map(s => {
      const pts = papers.filter(e => e.subject === s);
      return `<div class="setup-group" data-subject="${s}"><div class="setup-group-header"><input type="checkbox" class="subject-check" ${pts.every(p => set.selectedIds.includes(p.id)) ? 'checked' : ''}><label>${s}</label></div><div class="setup-papers">${pts.map(p => `<div class="setup-paper"><input type="checkbox" class="paper-check" data-id="${p.id}" ${set.selectedIds.includes(p.id) ? 'checked' : ''}><label>${p.paper || formatDate(p.date)}</label></div>`).join('')}</div></div>`;
    }).join('');
    subjContainer.querySelectorAll('.subject-check').forEach(cb => { cb.addEventListener('change', () => { cb.closest('.setup-group').querySelectorAll('.paper-check').forEach(p => p.checked = cb.checked); }); });
    subjContainer.querySelectorAll('.paper-check').forEach(cb => { cb.addEventListener('change', () => { const g = cb.closest('.setup-group'); g.querySelector('.subject-check').checked = g.querySelectorAll('.paper-check').length === g.querySelectorAll('.paper-check:checked').length; }); });
  } else {
    subjContainer.innerHTML = '<p style="color:var(--text2);font-size:14px">No papers in this exam set. Add them in the custom exam editor, or paste from Sheets.</p>';
  }

  // Colors
  const colorContainer = document.getElementById('settings-colors');
  const allSubj = [...new Set(papers.map(e => e.subject))].sort();
  colorContainer.innerHTML = allSubj.map(s => `<div class="color-row"><label>${s}</label><input type="color" class="subject-color-input" data-subject="${s}" value="${getSubjectColor(s, setId)}"></div>`).join('');

}

async function renderNotes() {
  await loadNotesCache();
  const allNotes = notesCache, container = document.getElementById('notes-list'), empty = document.getElementById('notes-empty');
  // Populate subject dropdown
  const subjSelect = document.getElementById('notes-upload-subject');
  if (subjSelect) {
    const subjects = [...new Set(getSelectedExams().map(e => e.subject))].sort();
    subjSelect.innerHTML = '<option value="">Select subject...</option>' + subjects.map(s => `<option value="${s}">${s}</option>`).join('');
  }
  if (!allNotes.length) { container.innerHTML = ''; empty.classList.remove('hidden'); return; }
  empty.classList.add('hidden');
  container.innerHTML = allNotes.map(n => `<div class="note-card"><div class="note-icon">&#128196;</div><div class="note-info"><div class="note-subject" style="color:${getSubjectColor(n.subject, n.examId ? findExamSetForPaper(n.examId) : null)}">${n.subject}</div><div class="note-paper">${n.paper || 'General notes'}</div><div class="note-filename">${n.filename}</div><div class="note-date">Uploaded ${new Date(n.uploadDate).toLocaleDateString('en-SG', { day:'numeric', month:'short', year:'numeric', timeZone:'Asia/Singapore' })}</div></div><div class="note-actions"><button class="btn btn-primary note-download" data-id="${n.id}">Download</button><button class="btn btn-danger note-delete" data-id="${n.id}">Delete</button></div></div>`).join('');
  container.querySelectorAll('.note-download').forEach(btn => { btn.addEventListener('click', async () => { const note = await getNoteDB(parseInt(btn.dataset.id)); if (note) { const blob = new Blob([note.filedata], { type: note.filetype || 'application/pdf' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = note.filename; a.click(); URL.revokeObjectURL(url); } }); });
  container.querySelectorAll('.note-delete').forEach(btn => { btn.addEventListener('click', async () => { if (confirm('Delete this note?')) { await deleteNoteDB(parseInt(btn.dataset.id)); await loadNotesCache(); renderNotes(); refreshAll(); } }); });
}

function showExamDetail(examId) {
  const setId = findExamSetForPaper(examId);
  if (!setId) return;
  const set = state.examSets[setId];
  if (!set) return;
  const exam = getSetPapers(setId).find(e => e.id === examId);
  if (!exam) return;
  const days = daysUntilExam(exam), status = getExamStatus(exam), color = getSubjectColor(exam.subject, setId);
  const timeStr = exam.startTime ? formatTime(exam.startTime) + (exam.endTime ? ' &ndash; ' + formatTime(exam.endTime) : '') : (exam.mode === 'Science Practical' || exam.mode === 'Practical') ? 'Multiple shifts (see notes)' : '';
  const note = (set.notes || {})[exam.id] || '';
  const modal = document.getElementById('modal-body');
  modal.innerHTML = `<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px"><span style="width:12px;height:12px;border-radius:50%;background:${color};display:inline-block"></span><span class="detail-value">${exam.subject}${exam.code ? ' (' + exam.code + ')' : ''}</span></div><div class="detail-field"><div class="detail-label">Paper</div><div class="detail-value">${exam.paper}${exam.paperName ? ' &mdash; ' + exam.paperName : ''}</div></div><div class="detail-field"><div class="detail-label">Date</div><div class="detail-value">${formatDate(exam.date)}</div></div>${exam.mode ? `<div class="detail-field"><div class="detail-label">Mode</div><div class="detail-value">${exam.mode}${exam.duration ? ' &middot; ' + exam.duration : ''}</div></div>` : ''}${timeStr ? `<div class="detail-field"><div class="detail-label">Time</div><div class="detail-value">${timeStr}</div></div>` : ''}<div class="detail-countdown ${status === 'past' ? 'countdown-past' : status === 'today' ? 'countdown-today' : days <= 7 ? 'countdown-danger' : days <= 30 ? 'countdown-warning' : 'countdown-normal'}">${status === 'past' ? 'Completed' : status === 'today' ? 'Today!' : days + ' days remaining'}</div>${exam.notes ? `<div class="detail-field"><div class="detail-label">Notes</div><div class="detail-value" style="font-size:14px;color:var(--text2)">${exam.notes}</div></div>` : ''}<div class="detail-traffic"><h4>Preparation Progress</h4><div class="traffic-select" data-exam="${exam.id}">${getTrafficSelectHTML(exam.id, set.progress || {})}</div></div><div class="topic-progress-section" data-exam-topics="1"><h4>📋 Topic Progress</h4><div id="topic-list"></div><div class="topic-add-row"><input type="text" id="topic-input" placeholder="Add a topic..." maxlength="100"><button id="topic-add-btn" class="btn btn-primary">+ Add</button></div></div><div class="detail-notes"><label class="detail-label" for="detail-note-input">Personal Notes</label><textarea id="detail-note-input" placeholder="Add your notes here...">${note}</textarea></div><div class="detail-upload"><h4>Upload PDF Notes</h4><p style="font-size:13px;color:var(--text2);margin-bottom:8px">Choose a PDF file, then pick where to attach it.</p><input type="file" id="note-upload-input" accept=".pdf" style="display:block;margin-bottom:8px;font-size:13px"><div style="display:flex;gap:8px;flex-wrap:wrap"><button id="btn-upload-note" class="btn btn-primary" style="flex:1"><span style="font-size:16px">&#128196;</span> Attach to this paper</button><button id="btn-upload-subject-note" class="btn btn-secondary" style="flex:1"><span style="font-size:16px">&#128194;</span> Attach to ${exam.subject} (all papers)</button></div><div id="uploaded-files-container" class="uploaded-files"></div></div>`;
  document.getElementById('exam-modal').classList.remove('hidden');
  modal.querySelectorAll('.traffic-light').forEach(el => { el.addEventListener('click', () => { const level = el.dataset.level; if (!set.progress) set.progress = {}; set.progress[exam.id] = level; saveState(); modal.querySelectorAll('.traffic-light').forEach(l => l.classList.toggle('active', l.dataset.level === level)); refreshAll(); }); });
  modal.querySelector('#detail-note-input').addEventListener('input', () => { if (!set.notes) set.notes = {}; set.notes[exam.id] = modal.querySelector('#detail-note-input').value; saveState(); refreshAll(); });
  const fileInput = modal.querySelector('#note-upload-input');
  modal.querySelector('#btn-upload-note').addEventListener('click', async () => { if (!fileInput.files.length) return alert('Please select a PDF file first.'); await uploadNote(fileInput.files[0], exam.subject, exam.paper, exam.id); fileInput.value = ''; renderUploadedFiles(exam); });
  modal.querySelector('#btn-upload-subject-note').addEventListener('click', async () => { if (!fileInput.files.length) return alert('Please select a PDF file first.'); await uploadNote(fileInput.files[0], exam.subject, 'General notes', null); fileInput.value = ''; renderUploadedFiles(exam); });
  // Topic progress
  renderTopics(exam.id, setId);
  modal.querySelector('#topic-input')?.addEventListener('keydown', (e) => { if (e.key === 'Enter') addTopic(exam.id, setId); });
  modal.querySelector('#topic-add-btn')?.addEventListener('click', () => addTopic(exam.id, setId));
  renderUploadedFiles(exam);
}

async function uploadNote(file, subject, paper, examId) { const filedata = await file.arrayBuffer(); await addNoteDB({ subject, paper, examId, filename: file.name, filetype: file.type || 'application/pdf', filedata, uploadDate: new Date().toISOString() }); await loadNotesCache(); }

function renderTopics(examId, setId) {
  const set = state.examSets[setId];
  if (!set) return;
  if (!set.topics) set.topics = {};
  const topics = set.topics[examId] || [];
  const list = document.getElementById('topic-list');
  if (!list) return;
  if (!topics.length) { list.innerHTML = '<p style="font-size:13px;color:var(--text2);text-align:center;padding:8px">No topics yet. Add topics to track your progress.</p>'; return; }
  list.innerHTML = topics.map((t, i) => `<div class="topic-row"><span class="topic-name">${t.name}</span><button class="topic-status s${TOPIC_STATUSES.indexOf(t.status) === -1 ? 0 : TOPIC_STATUSES.indexOf(t.status)}" data-idx="${i}">${t.status}</button><button class="btn-small topic-delete" data-idx="${i}">&times;</button></div>`).join('');
  list.querySelectorAll('.topic-status').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx);
      const curIdx = TOPIC_STATUSES.indexOf(topics[idx].status);
      topics[idx].status = TOPIC_STATUSES[(curIdx + 1) % TOPIC_STATUSES.length];
      saveState();
      renderTopics(examId, setId);
    });
  });
  list.querySelectorAll('.topic-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx);
      topics.splice(idx, 1);
      if (!topics.length) delete set.topics[examId];
      saveState();
      renderTopics(examId, setId);
    });
  });
}

function addTopic(examId, setId) {
  const set = state.examSets[setId];
  if (!set) return;
  const input = document.getElementById('topic-input');
  if (!input || !input.value.trim()) return;
  if (!set.topics) set.topics = {};
  if (!set.topics[examId]) set.topics[examId] = [];
  set.topics[examId].push({ name: input.value.trim(), status: 'Not Started' });
  input.value = '';
  saveState();
  renderTopics(examId, setId);
}

async function renderUploadedFiles(exam) {
  const allNotes = await getAllNotesDB();
  const related = allNotes.filter(n => n.examId === exam.id || (n.subject === exam.subject && !n.examId));
  const container = document.getElementById('uploaded-files-container');
  if (!related.length) { container.innerHTML = ''; return; }
  container.innerHTML = related.map(n => `<div class="uploaded-file"><span>&#128196;</span><span>${n.filename}</span><span style="font-size:11px;color:var(--text2)">${new Date(n.uploadDate).toLocaleDateString('en-SG', { day:'numeric', month:'short' })}</span><button class="btn btn-small note-download" data-id="${n.id}">Open</button><button class="btn btn-small btn-danger note-delete" data-id="${n.id}">&times;</button></div>`).join('');
  container.querySelectorAll('.note-download').forEach(btn => { btn.addEventListener('click', async () => { const note = await getNoteDB(parseInt(btn.dataset.id)); if (note) { const blob = new Blob([note.filedata], { type: note.filetype || 'application/pdf' }); window.open(URL.createObjectURL(blob), '_blank'); } }); });
  container.querySelectorAll('.note-delete').forEach(btn => { btn.addEventListener('click', async () => { await deleteNoteDB(parseInt(btn.dataset.id)); await loadNotesCache(); renderUploadedFiles(exam); renderNotes(); refreshAll(); }); });
}

function applySettings() {
  const setId = state.activeSetId;
  const set = state.examSets[setId];
  if (!set) return;
  const ids = [];
  document.querySelectorAll('#settings-subjects .paper-check:checked').forEach(cb => ids.push(cb.dataset.id));
  set.selectedIds = ids;
  document.querySelectorAll('.subject-color-input').forEach(inp => { set.subjectColors[inp.dataset.subject] = inp.value; });
  state.darkMode = document.getElementById('settings-darkmode').checked;
  state.notifications = document.getElementById('settings-notifications').checked;
  saveState(); refreshAll(); showToast('Settings saved.');
  document.getElementById('settings-modal').classList.add('hidden');
}

// ===== NOTIFICATIONS =====
function requestNotificationPermission() { if (!('Notification' in window)) return false; if (Notification.permission === 'granted') return true; if (Notification.permission === 'denied') return false; Notification.requestPermission(); return false; }
function checkAndNotify() {
  if (!state.notifications || !state.notificationsEnabled) return;
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  getSelectedExams().forEach(ex => { const days = daysUntilExam(ex); if ((days === 7 || days === 3 || days === 1 || days === 0) && days >= 0) { const key = `notified_${ex.id}_${days}`; if (!localStorage.getItem(key)) { const msg = days === 0 ? `${ex.subject} ${ex.paper} is TODAY!` : `${ex.subject} ${ex.paper} in ${days} day${days > 1 ? 's' : ''}!`; try { new Notification('Exam Countdown', { body: msg }); } catch {} localStorage.setItem(key, '1'); } } });
}

function exportData() {
  const data = { examSets: {}, darkMode: state.darkMode, notifications: state.notifications, exportedAt: new Date().toISOString() };
  Object.entries(state.examSets).forEach(([id, set]) => {
    data.examSets[id] = {
      name: set.name, type: set.type, builtinKey: set.builtinKey, enabled: set.enabled,
      selectedIds: set.selectedIds, progress: set.progress, notes: set.notes,
      goals: set.goals, topics: set.topics, subjectColors: set.subjectColors, papers: set.papers,
      resultWeights: set.resultWeights, resultScores: set.resultScores, resultTargets: set.resultTargets
    };
  });
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = `exam-config-${new Date().toISOString().slice(0,10)}.json`; a.click(); URL.revokeObjectURL(url);
}
function exportICS() {
  const exams = getAllEnabledPapers().filter(e => getExamStatus(e) !== 'past');
  let ics = 'BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//ExamCountdown//SG//EN\r\nCALSCALE:GREGORIAN\r\n';
  const now = new Date().toISOString().replace(/[-:]/g, '').slice(0, 15) + 'Z';
  exams.forEach(e => {
    const d = dateStrToSG(e.date);
    const dateStr = d.toISOString().slice(0, 10).replace(/-/g, '');
    const start = e.startTime ? `${dateStr}T${e.startTime.replace(':', '')}00` : `${dateStr}T090000`;
    const end = e.endTime ? `${dateStr}T${e.endTime.replace(':', '')}00` : `${dateStr}T100000`;
    const subj = (e.subject + ' ' + e.paper).replace(/[;,]/g, ' ').trim();
    ics += `BEGIN:VEVENT\r\nUID:exam-${e.id}@examcountdown\r\nDTSTAMP:${now}\r\nDTSTART:${start}\r\nDTEND:${end}\r\nSUMMARY:${subj}\r\nEND:VEVENT\r\n`;
  });
  ics += 'END:VCALENDAR';
  const blob = new Blob([ics], { type: 'text/calendar' });
  const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'revision-timetable.ics'; a.click(); URL.revokeObjectURL(url);
  showToast('Calendar exported (.ics)');
}

function exportResultsCSV() {
  const rows = [['Exam Set', 'Subject', 'Target', 'Paper', 'Weight %', 'Score %', 'Contribution %', 'Projected %', 'Status']];
  Object.entries(state.examSets).forEach(([id, set]) => {
    if (set.enabled === false || !(set.selectedIds || []).length) return;
    const papers = getSetPapers(id).filter(p => (set.selectedIds || []).includes(p.id));
    if (!papers.length) return;
    const subjects = [...new Set(papers.map(p => p.subject))].sort();
    subjects.forEach(subj => {
      const r = computeSubjectResult(id, subj);
      let status;
      if (r.knownW === 0) status = 'Enter scores';
      else if (r.remW <= 0) status = r.currentPct >= r.minPct ? 'On track' : 'Below target';
      else if (!r.achievable) status = 'Not achievable';
      else if (r.needRel <= 0) status = 'On track';
      else status = `Need ~${Math.min(100, r.needRel).toFixed(0)}%`;
      const proj = r.knownW > 0 ? r.projectedPct.toFixed(1) : '';
      papers.filter(p => p.subject === subj).forEach(p => {
        const s = scoreOf(r, p.id);
        rows.push([set.name, subj, r.target, p.paper, (r.weights[p.id] || 0), s === null ? '' : s, s === null ? '' : (r.weights[p.id] * s / 100).toFixed(1), proj, status]);
      });
    });
  });
  const csv = rows.map(r => r.map(v => { const s = String(v ?? ''); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; }).join(',')).join('\r\n');
  const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'exam-results.csv'; a.click(); URL.revokeObjectURL(url);
  showToast('Results exported (.csv)');
}

function importData(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.examSets) {
        Object.entries(data.examSets).forEach(([id, set]) => {
          state.examSets[id] = set;
          if (!state.activeSetId) state.activeSetId = id;
        });
      }
      if (data.darkMode !== undefined) state.darkMode = data.darkMode;
      if (data.notifications !== undefined) state.notifications = data.notifications;
      saveState();  refreshAll(); showToast('Configuration imported successfully!');
    } catch { showToast('Invalid file format.', 4000); }
  };
  reader.readAsText(file);
}

function updateTitle() {
  const selected = getSelectedExams().filter(e => getExamStatus(e) !== 'past');
  if (!selected.length) { document.title = 'Exam Countdown Planner'; return; }
  selected.sort((a, b) => dateStrToSG(a.date) - dateStrToSG(b.date));
  const days = daysUntilExam(selected[0]);
  if (days === 0) document.title = '📢 TODAY - Exam Countdown';
  else document.title = `${days}d to ${selected[0].subject} - Exam Countdown`;
}

function showToast(msg, duration) { const t = document.getElementById('toast'); t.textContent = msg; t.classList.remove('hidden'); clearTimeout(t._timer); t._timer = setTimeout(() => t.classList.add('hidden'), duration || 3000); }

function refreshAll() {
  document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
  const darkCb = document.getElementById('settings-darkmode');
  const notifCb = document.getElementById('settings-notifications');
  if (darkCb) darkCb.checked = state.darkMode;
  if (notifCb) notifCb.checked = state.notifications;
  
  const filterSel = document.getElementById('filter-subject');
  const currentVal = filterSel.value;
  const subjSet = new Set(getSelectedExams().map(e => e.subject));
  filterSel.innerHTML = '<option value="">All Subjects</option>' + [...subjSet].sort().map(s => `<option value="${s}">${s}</option>`).join('');
  filterSel.value = currentVal || '';
  renderHero(); renderInsights();
  renderDailyPlanner(); renderPlanWeekly();
  if (document.getElementById('goals-section').classList.contains('hidden') === false || true) {
    renderGoalsList(state.activeSetId);
  }
  renderList(); renderCalendar(); renderTimeline();
if (document.getElementById('notes-view').classList.contains('active')) renderNotes();
  if (document.getElementById('results-view').classList.contains('active')) renderResults();
  checkAchievements();
}

// ===== OCR =====
async function runOCR(file) {
  const statusEl = document.getElementById('ocr-status'), uploadArea = document.getElementById('ocr-upload-area'), resultsDiv = document.getElementById('ocr-results'), entriesDiv = document.getElementById('ocr-entries');
  statusEl.classList.remove('hidden'); uploadArea.classList.add('hidden'); resultsDiv.classList.add('hidden');
  statusEl.textContent = 'Processing...';
try {
    let imageData;
    if (file.type === 'application/pdf') {
      statusEl.textContent = 'Loading PDF reader...';
      await loadScriptOnce(LIB_URLS.pdfjs);
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = LIB_URLS.pdfWorker;
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 2 });
      const canvas = document.createElement('canvas'); canvas.width = viewport.width; canvas.height = viewport.height;
      await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
      imageData = canvas.toDataURL('image/png');
    } else {
      const img = new Image();
      imageData = await new Promise((resolve) => { img.onload = () => { const c = document.createElement('canvas'); c.width = img.width; c.height = img.height; c.getContext('2d').drawImage(img, 0, 0); resolve(c.toDataURL('image/png')); }; img.src = URL.createObjectURL(file); });
    }
    statusEl.textContent = 'Loading OCR engine (first use only)...';
    await loadScriptOnce(LIB_URLS.tesseract);
    statusEl.textContent = 'Running OCR (may take a moment)...';
    const { data: { text } } = await window.Tesseract.recognize(imageData, 'eng', { logger: m => { if (m.status === 'recognizing text') statusEl.textContent = `OCR: ${Math.round(m.progress * 100)}%`; } });
    statusEl.textContent = 'Parsing dates...';
    const lines = text.split('\n').filter(l => l.trim());
    const extracted = parseExamLines(lines);
    if (!extracted.length) { statusEl.textContent = 'Could not find any exam entries. Try Paste from Sheets instead.'; uploadArea.classList.remove('hidden'); return; }
    statusEl.textContent = `Found ${extracted.length} entries. Review below.`;
    entriesDiv.innerHTML = extracted.map((entry, i) => `<div class="ocr-entry"><input class="ocr-date-input" type="date" value="${entry.date}" data-idx="${i}"><input class="ocr-subject-input" type="text" value="${entry.subject}" placeholder="Subject" data-idx="${i}"><input class="ocr-paper-input" type="text" value="${entry.paper || ''}" placeholder="Paper" data-idx="${i}"><input class="ocr-time-input" type="time" value="${entry.time || ''}" data-idx="${i}"></div>`).join('');
    resultsDiv.classList.remove('hidden');
  } catch (e) { statusEl.textContent = 'Error: ' + e.message; uploadArea.classList.remove('hidden'); }
}

function parseExamLines(lines) {
  const results = [];
  const datePatterns = [/(\d{1,2})\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s*(\d{4})?/gi, /(\d{4})[-/](\d{1,2})[-/](\d{1,2})/g, /(\d{1,2})[-/](\d{1,2})[-/](\d{4})/g];
  const monthMap = { jan:0, feb:1, mar:2, apr:3, may:4, jun:5, jul:6, aug:7, sep:8, oct:9, nov:10, dec:11 };
  const dayNames = ['mon','tue','wed','thu','fri','sat','sun','monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || line.length < 3) continue;
    let dateStr = '', dateFound = false;
    for (const pattern of datePatterns) {
      const m = pattern.exec(line);
      if (m) {
        if (m[2] && monthMap[m[2].toLowerCase().slice(0,3)] !== undefined) { const day = m[1].padStart(2,'0'); const month = String(monthMap[m[2].toLowerCase().slice(0,3)] + 1).padStart(2,'0'); const year = m[3] || '2026'; dateStr = `${year}-${month}-${day}`; }
        else if (m[1].length === 4) dateStr = `${m[1]}-${m[2].padStart(2,'0')}-${m[3].padStart(2,'0')}`;
        else dateStr = `${m[3]}-${m[2].padStart(2,'0')}-${m[1].padStart(2,'0')}`;
        dateFound = true; break;
      }
    }
    if (!dateFound) continue;
    let subject = line.replace(/^\d{1,2}\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s*(\d{4})?\s*/gi, '').replace(/^\d{4}[-/]\d{1,2}[-/]\d{1,2}\s*/g, '').replace(/^\d{1,2}[-/]\d{1,2}[-/]\d{4}\s*/g, '');
    dayNames.forEach(d => { subject = subject.replace(new RegExp(d, 'gi'), ''); });
    subject = subject.replace(/\d{1,2}:\d{2}(?:\s*(?:am|pm))?/gi, '').replace(/[|(){}\[\]]/g, ' ').replace(/\s+/g, ' ').trim();
    const timeMatch = line.match(/(\d{1,2}:\d{2})(?:\s*(?:am|pm))?/i);
    if (dateStr && subject && subject.length > 1 && !results.some(r => r.date === dateStr && r.subject === subject)) results.push({ date: dateStr, subject, paper: '', time: timeMatch ? timeMatch[1] : '' });
  }
  return results;
}

// ===== SHEETS IMPORT =====
function parseSheetData(text) {
  const lines = text.split('\n').filter(l => l.trim());
  const results = [];
  const datePattern = /(\d{1,2})\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s*(\d{4})?/i;
  const monthMap = { jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11 };
  const isoDate = /^\d{4}-\d{2}-\d{2}$/;

  lines.forEach(line => {
    // Split by tab or comma
    const parts = line.split(/\t|,(?=(?:[^"]*"[^"]*")*[^"]*$)/).map(p => p.trim().replace(/^"|"$/g, ''));
    if (parts.length < 2) return;

    let date = '', subject = '', paper = '', time = '';
    let dateFound = false;

    // Look for a date in any column
    for (let col = 0; col < parts.length; col++) {
      const val = parts[col];
      if (isoDate.test(val)) { date = val; dateFound = true; break; }
      const m = val.match(datePattern);
      if (m) {
        const day = m[1].padStart(2, '0');
        const month = String((monthMap[m[2].toLowerCase().slice(0,3)] || 0) + 1).padStart(2, '0');
        const year = m[3] || '2026';
        date = `${year}-${month}-${day}`;
        dateFound = true;
        break;
      }
    }
    if (!dateFound) return;

    // Remaining non-date, non-time fields are subject/paper
    const nonDateParts = parts.filter(p => !p.match(datePattern) && !isoDate.test(p) && !p.match(/\d{1,2}:\d{2}/));
    if (nonDateParts.length >= 1) subject = nonDateParts[0];
    if (nonDateParts.length >= 2) paper = nonDateParts[1];

    // Find time
    for (const p of parts) {
      const t = p.match(/(\d{1,2}:\d{2})/);
      if (t) { time = t[1]; break; }
    }

    if (date && subject) results.push({ date, subject, paper, time });
  });
  return results;
}

const SETUP_FLAG_KEY = 'exam_setup_complete';

// ===== INIT =====
(async () => {
  loadState();

  // First visit detection — atomic localStorage flag, can't be corrupted by state issues
  const setupDone = localStorage.getItem(SETUP_FLAG_KEY) === '1';
  if (setupDone) state.firstVisit = false;
  if (state.firstVisit) {
    document.getElementById('setup-overlay').classList.remove('hidden');

    // Step 1: Exam type selection -> Step 2: Subject selection
    document.getElementById('setup-next').addEventListener('click', () => {
      try {
      const checked = [...document.querySelectorAll('.setup-type-cb:checked')].map(cb => cb.value);
      if (!checked.length) { showToast('Select at least one exam type.'); return; }
      ensureBuiltinExams(checked);
      // Ensure all builtin sets exist (unchecked ones stay disabled)
      Object.keys(BUILTIN_EXAMS).forEach(key => {
        const id = 'builtin-' + key;
        if (!state.examSets[id]) {
          state.examSets[id] = { name: BUILTIN_EXAMS[key].name, type: 'builtin', builtinKey: key, enabled: false, selectedIds: [], progress: {}, notes: {}, goals: {}, topics: {}, subjectColors: {} };
        }
      });
      document.getElementById('setup-step-1').classList.add('hidden');
      document.getElementById('setup-step-2').classList.remove('hidden');
      document.getElementById('setup-desc').textContent = 'Select your subjects for each exam.';
      // Render subject categories for all checked exam sets
      const container = document.getElementById('setup-subjects-container');
      let html = '';
      checked.forEach(key => {
        const builtin = BUILTIN_EXAMS[key];
        if (!builtin) return;
        html += `<h3 style="margin:16px 0 8px;font-size:15px">${builtin.name}</h3>`;
        html += `<p class="settings-hint" style="margin-bottom:8px">Check the subjects you are taking.</p>`;
        Object.entries(builtin.categories).forEach(([cat, subjects]) => {
          const allPapers = builtin.papers;
          const catSubjects = subjects.filter(s => allPapers.some(p => p.subject === s));
          if (!catSubjects.length) return;
          html += `<div class="setup-category"><div class="setup-category-title">${cat}</div>`;
          catSubjects.forEach(s => {
            const pts = allPapers.filter(p => p.subject === s);
            if (!pts.length) { html += `<div class="setup-group" style="padding:6px 14px"><label style="font-weight:600;font-size:14px">${s}</label></div>`; return; }
            html += `<div class="setup-group" data-subject="${s}"><div class="setup-group-header"><input type="checkbox" class="subject-check"><label>${s}</label></div><div class="setup-papers">${pts.filter(p => p.id).map(p => `<div class="setup-paper"><input type="checkbox" class="paper-check" data-id="${p.id}" data-key="${key}"><label>${p.paper}${p.paperName && p.paperName !== p.paper ? ' &mdash; ' + p.paperName : ''}</label></div>`).join('')}</div></div>`;
          });
          html += `</div>`;
        });
      });
      html += `<p style="font-size:13px;color:var(--text2);margin-top:16px;padding:12px;background:var(--surface2);border-radius:8px">You can also add your own custom exam sets (e.g. school tests, mock exams) later in <strong>Settings</strong>.</p>`;
      container.innerHTML = html;
      // Wire up subject/parent checkboxes
      container.querySelectorAll('.subject-check').forEach(cb => {
        cb.addEventListener('change', () => {
          cb.closest('.setup-group').querySelectorAll('.paper-check').forEach(p => p.checked = cb.checked);
        });
      });
      container.querySelectorAll('.paper-check').forEach(cb => {
        cb.addEventListener('change', () => {
          const g = cb.closest('.setup-group');
          g.querySelector('.subject-check').checked = g.querySelectorAll('.paper-check').length === g.querySelectorAll('.paper-check:checked').length;
        });
      });
      } catch (e) { showToast('An error occurred. Please try again.', 4000); console.error(e); }
    });

    document.getElementById('setup-save').addEventListener('click', () => {
      const checked = [...document.querySelectorAll('.setup-type-cb:checked')].map(cb => cb.value);
      if (!checked.length) {
        state.activeSetId = 'custom-default';
        state.examSets['custom-default'] = { name: 'My Exams', type: 'custom', enabled: true, papers: [], selectedIds: [], progress: {}, notes: {}, goals: {}, topics: {}, subjectColors: {} };
      } else {
        // Apply selected subject/paper IDs
        const selectedMap = {};
        document.querySelectorAll('#setup-subjects-container .paper-check:checked').forEach(cb => {
          const key = cb.dataset.key;
          if (!selectedMap[key]) selectedMap[key] = [];
          selectedMap[key].push(cb.dataset.id);
        });
        Object.entries(selectedMap).forEach(([key, ids]) => {
          const id = 'builtin-' + key;
          if (state.examSets[id]) state.examSets[id].selectedIds = ids;
        });
        // Pick first checked exam as active
        state.activeSetId = 'builtin-' + checked[0];
      }
      state.firstVisit = false;
      try { localStorage.setItem(SETUP_FLAG_KEY, '1'); } catch {}
      saveState();
      document.getElementById('setup-overlay').classList.add('hidden');
      document.getElementById('app').classList.remove('hidden');
      refreshAll();
      setTimeout(() => showTutorial(), 500);
    });
  } else {
    ensureBuiltinExams(['o-level', 'na-level', 'nt-level', 'a-level']);
    document.getElementById('app').classList.remove('hidden');
  }

  if (state.darkMode) document.documentElement.setAttribute('data-theme', 'dark');

  // View tabs
  const tabsWrap = document.querySelector('.view-tabs');
  if (tabsWrap) tabsWrap.setAttribute('role', 'tablist');
  document.querySelectorAll('.view-tab').forEach(tab => { tab.setAttribute('role', 'tab'); tab.setAttribute('aria-selected', String(tab.classList.contains('active'))); tab.addEventListener('click', () => { document.querySelectorAll('.view-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); }); tab.classList.add('active'); tab.setAttribute('aria-selected', 'true'); document.querySelectorAll('.view-content').forEach(v => v.classList.remove('active')); const view = tab.dataset.view; if (view === 'calendar') document.getElementById('calendar-view').classList.add('active'); else if (view === 'notes') { document.getElementById('notes-view').classList.add('active'); renderNotes(); } else if (view === 'plan') document.getElementById('plan-view').classList.add('active'); else if (view === 'results') { document.getElementById('results-view').classList.add('active'); renderResults(); } else document.getElementById('list-view').classList.add('active'); const navMap = { upcoming: 'upcoming', all: 'upcoming', plan: 'plan', calendar: 'calendar', results: 'results', notes: 'notes' }; document.querySelectorAll('#bottom-nav .nav-item').forEach(n => n.classList.toggle('active', n.dataset.view === navMap[view])); const listToggle = document.getElementById('btn-list-all'); if (listToggle) listToggle.textContent = view === 'all' ? 'Upcoming' : 'All Exams'; refreshAll(); }); });

  document.querySelectorAll('.modal-close').forEach(btn => { btn.addEventListener('click', () => { const o = btn.closest('.overlay'); if (o && o.id !== 'setup-overlay') o.classList.add('hidden'); }); });
  document.querySelectorAll('.overlay').forEach(o => { o.setAttribute('role', 'dialog'); o.setAttribute('aria-modal', 'true'); o.addEventListener('click', (e) => { if (e.target === o && o.id !== 'setup-overlay') o.classList.add('hidden'); }); });

  // Exam card clicks
  document.getElementById('exam-list').addEventListener('click', (e) => { const card = e.target.closest('.exam-card'); if (card) showExamDetail(card.dataset.id); });

  document.getElementById('cal-prev').addEventListener('click', () => { calDate.setMonth(calDate.getMonth() - 1); renderCalendar(); });
  document.getElementById('cal-next').addEventListener('click', () => { calDate.setMonth(calDate.getMonth() + 1); renderCalendar(); });

  document.getElementById('btn-empty-settings').addEventListener('click', () => { document.querySelector('.view-tab[data-view="all"]')?.click(); document.getElementById('settings-modal').classList.remove('hidden'); renderSettings(); });

  // Settings
  document.getElementById('btn-settings').addEventListener('click', () => { document.getElementById('settings-modal').classList.remove('hidden'); renderSettings(); });
  document.getElementById('settings-save').addEventListener('click', applySettings);
  document.getElementById('btn-wipe-data').addEventListener('click', () => {
    if (confirm('This will permanently delete ALL your data (exam sets, progress, notes, goals). Are you sure?')) {
      if (confirm('Really? You can undo this with Ctrl+Z / the undo button.')) {
        state.firstVisit = true;
        state.examSets = {};
        state.activeSetId = null;
        state.darkMode = false;
        state.notifications = false;
        state.notificationsEnabled = false;
        saveState();
        try { localStorage.removeItem(DAILY_KEY); } catch {}
        try { localStorage.removeItem(SETUP_FLAG_KEY); } catch {}
        clearNotesDB();
        document.getElementById('settings-modal').classList.add('hidden');
        document.getElementById('app').classList.add('hidden');
        document.getElementById('setup-overlay').classList.remove('hidden');
        location.reload();
      }
    }
  });

  // Dark mode
  document.getElementById('btn-darkmode').addEventListener('click', () => { state.darkMode = !state.darkMode; saveState(); refreshAll(); });
  document.getElementById('settings-darkmode').addEventListener('change', () => { state.darkMode = document.getElementById('settings-darkmode').checked; document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light'); saveState(); });

  // Notifications
  document.getElementById('btn-notifications').addEventListener('click', () => {
    if (!('Notification' in window)) { showToast('Notifications not supported.'); return; }
    if (Notification.permission === 'denied') { showToast('Notifications were blocked.', 4000); return; }
    if (Notification.permission === 'granted') { state.notificationsEnabled = true; state.notifications = true; saveState(); showToast('Notifications enabled!'); return; }
    Notification.requestPermission().then(perm => { if (perm === 'granted') { state.notificationsEnabled = true; state.notifications = true; saveState(); showToast('Notifications enabled!'); } });
  });
  document.getElementById('settings-notifications').addEventListener('change', () => { state.notifications = document.getElementById('settings-notifications').checked; saveState(); });
  document.getElementById('notif-close').addEventListener('click', () => { document.getElementById('notification-banner').classList.add('hidden'); });

  // Exam switcher removed — exam set source shown on each card

  // Goals toggle
  document.getElementById('btn-goals-toggle').addEventListener('click', () => { const set = state.examSets[state.activeSetId]; if (set) { if (set.goalsCollapsed === undefined) set.goalsCollapsed = false; else set.goalsCollapsed = !set.goalsCollapsed; saveState(); renderGoalsList(state.activeSetId); } });

  // Filter / sort / search
  document.getElementById('filter-subject').addEventListener('change', () => refreshAll());
  document.getElementById('sort-by').addEventListener('change', () => renderList());
  document.getElementById('search-exams').addEventListener('input', () => renderList());
  document.getElementById('btn-list-all').addEventListener('click', () => {
    const cur = document.querySelector('.view-tab.active')?.dataset.view || 'upcoming';
    const target = cur === 'all' ? 'upcoming' : 'all';
    document.querySelector(`.view-tab[data-view="${target}"]`)?.click();
  });

  // Export / Import
  document.getElementById('btn-export').addEventListener('click', () => document.getElementById('export-modal').classList.remove('hidden'));
  document.getElementById('btn-do-export').addEventListener('click', exportData);
  document.getElementById('btn-do-ics').addEventListener('click', exportICS);
  document.getElementById('btn-do-results-csv').addEventListener('click', exportResultsCSV);
  document.getElementById('btn-do-import').addEventListener('click', () => { const f = document.getElementById('import-file').files[0]; if (f) importData(f); else showToast('Select a JSON file first.'); });

  // Profiles
  document.getElementById('btn-profile-save').addEventListener('click', () => {
    const name = document.getElementById('profile-name-input').value.trim();
    if (!name) { showToast('Enter a profile name.'); return; }
    saveProfile(name); renderProfiles(); document.getElementById('profile-name-input').value = '';
    showToast('Profile "' + name + '" saved.');
  });

  // Exam data update
  document.getElementById('btn-exam-data-import').addEventListener('click', () => {
    const f = document.getElementById('exam-data-file').files[0];
    if (f) importExamDataFile(f); else showToast('Select a JSON exam-data file first.');
  });

  // Changelog / About / Errors
  document.getElementById('btn-show-changelog').addEventListener('click', () => { document.getElementById('changelog-modal').classList.remove('hidden'); });
  document.getElementById('btn-show-about').addEventListener('click', () => { const log = getErrorLog(); document.getElementById('error-log').innerHTML = log.length ? log.map(l => `<div class="error-row"><span class="error-time">${new Date(l.t).toLocaleString()}</span>${l.src ? `<span class="error-src">${l.src}</span>` : ''}<div class="error-msg">${l.msg}</div></div>`).join('') : '<p class="settings-hint">No errors logged. 🎉</p>'; document.getElementById('about-modal').classList.remove('hidden'); });
  document.getElementById('btn-show-errors').addEventListener('click', () => document.getElementById('btn-show-about').click());
  document.getElementById('btn-clear-errors').addEventListener('click', () => { try { localStorage.removeItem(ERROR_LOG_KEY); } catch {} document.getElementById('btn-show-about').click(); showToast('Error log cleared.'); });

  // Undo / Redo buttons
  document.getElementById('btn-undo').addEventListener('click', undo);
  document.getElementById('btn-redo').addEventListener('click', redo);

  // Print timetable
  document.getElementById('btn-print-timetable').addEventListener('click', openPrintView);
  window.addEventListener('afterprint', () => document.body.classList.remove('printing'));

  // Feedback
  document.getElementById('btn-feedback').addEventListener('click', () => document.getElementById('feedback-modal').classList.remove('hidden'));
  document.getElementById('btn-feedback-open').addEventListener('click', () => { window.open(state.googleFormUrl || GOOGLE_FORM_URL, '_blank'); });

  // Exam set management
  document.getElementById('btn-add-exam-set').addEventListener('click', () => {
    document.getElementById('exam-set-modal-title').textContent = 'New Custom Exam Set';
    document.getElementById('exam-set-name').value = '';
    document.getElementById('exam-set-entries').innerHTML = '<div class="exam-set-row"><input type="text" class="es-subject" placeholder="Subject" style="flex:2"><input type="text" class="es-paper" placeholder="Paper" style="flex:1"><input type="date" class="es-date" style="flex:1"><input type="time" class="es-time" placeholder="Time" style="flex:0.7"><button class="btn btn-small btn-danger es-remove">&times;</button></div>';
    document.getElementById('exam-set-modal').classList.remove('hidden');
  });
  document.getElementById('btn-add-entry').addEventListener('click', () => {
    const container = document.getElementById('exam-set-entries');
    const row = document.createElement('div'); row.className = 'exam-set-row';
    row.innerHTML = '<input type="text" class="es-subject" placeholder="Subject" style="flex:2"><input type="text" class="es-paper" placeholder="Paper" style="flex:1"><input type="date" class="es-date" style="flex:1"><input type="time" class="es-time" placeholder="Time" style="flex:0.7"><button class="btn btn-small btn-danger es-remove">&times;</button>';
    container.appendChild(row);
    row.querySelector('.es-remove').addEventListener('click', () => row.remove());
  });
  document.getElementById('btn-save-exam-set').addEventListener('click', () => {
    const name = document.getElementById('exam-set-name').value.trim();
    if (!name) { showToast('Please enter a name.'); return; }
    const rows = document.querySelectorAll('#exam-set-entries .exam-set-row');
    const papers = [];
    rows.forEach(row => { const s = row.querySelector('.es-subject').value.trim(); const p = row.querySelector('.es-paper').value.trim(); const d = row.querySelector('.es-date').value; const t = row.querySelector('.es-time').value; if (s && d) papers.push({ subject: s, paper: p, paperName: p, date: d, startTime: t || null }); });
    if (!papers.length) { showToast('Add at least one subject with a date.'); return; }
    createCustomExamSet(name, papers);
    document.getElementById('exam-set-modal').classList.add('hidden');
  });
  document.querySelectorAll('.es-remove').forEach(btn => { btn.addEventListener('click', () => btn.closest('.exam-set-row').remove()); });

  // OCR
  document.getElementById('btn-import-timetable').addEventListener('click', () => {
    document.getElementById('ocr-modal').classList.remove('hidden');
    document.getElementById('ocr-upload-area').classList.remove('hidden');
    document.getElementById('ocr-results').classList.add('hidden');
    document.getElementById('ocr-status').classList.add('hidden');
    document.getElementById('ocr-entries').innerHTML = '';
    document.getElementById('ocr-file-input').value = '';
  });
  document.getElementById('btn-ocr-start').addEventListener('click', async () => { const file = document.getElementById('ocr-file-input').files[0]; if (!file) { showToast('Please select a file.'); return; } await runOCR(file); });
  document.getElementById('btn-ocr-save').addEventListener('click', () => {
    const entries = document.querySelectorAll('#ocr-entries .ocr-entry');
    const papers = [];
    entries.forEach(row => { const d = row.querySelector('.ocr-date-input').value; const s = row.querySelector('.ocr-subject-input').value.trim(); const p = row.querySelector('.ocr-paper-input').value.trim(); const t = row.querySelector('.ocr-time-input').value; if (d && s) papers.push({ subject: s, paper: p, paperName: p, date: d, startTime: t || null }); });
    if (!papers.length) { showToast('No valid entries.'); return; }
    createCustomExamSet('Imported ' + new Date().toLocaleDateString('en-SG'), papers);
    document.getElementById('ocr-modal').classList.add('hidden');
  });
  document.getElementById('btn-ocr-cancel').addEventListener('click', () => { document.getElementById('ocr-modal').classList.add('hidden'); });

  // Sheets import
  document.getElementById('btn-import-sheets').addEventListener('click', () => {
    document.getElementById('sheets-modal').classList.remove('hidden');
    document.getElementById('sheets-preview').classList.add('hidden');
    document.getElementById('sheets-paste-area').value = '';
    document.getElementById('sheets-set-name').value = '';
  });
  document.getElementById('btn-sheets-parse').addEventListener('click', () => {
    const text = document.getElementById('sheets-paste-area').value;
    if (!text.trim()) { showToast('Paste your exam data first.'); return; }
    const entries = parseSheetData(text);
    const preview = document.getElementById('sheets-entries');
    if (!entries.length) { showToast('Could not parse any entries. Check the format.'); return; }
    preview.innerHTML = entries.map((e, i) => `<div class="ocr-entry"><span style="font-size:13px;min-width:100px">${e.date}</span><span style="font-size:13px;flex:1">${e.subject}</span><span style="font-size:13px;min-width:80px">${e.paper || ''}</span><span style="font-size:13px;min-width:60px">${e.time || ''}</span></div>`).join('');
    preview.dataset.entries = JSON.stringify(entries);
    document.getElementById('sheets-preview').classList.remove('hidden');
    showToast(`Found ${entries.length} entries.`);
  });
  document.getElementById('btn-sheets-save').addEventListener('click', () => {
    const name = document.getElementById('sheets-set-name').value.trim() || ('Sheets ' + new Date().toLocaleDateString('en-SG'));
    const preview = document.getElementById('sheets-entries');
    if (!preview.dataset.entries) { showToast('Parse the data first.'); return; }
    const entries = JSON.parse(preview.dataset.entries);
    createCustomExamSet(name, entries);
    document.getElementById('sheets-modal').classList.add('hidden');
  });

  // Tutorial
  document.getElementById('tutorial-close').addEventListener('click', hideTutorial);
  document.getElementById('settings-show-tutorial').addEventListener('click', showTutorial);


  // Notes Upload from Notes Tab
  document.getElementById('btn-notes-upload').addEventListener('click', async () => {
    const fileInput = document.getElementById('notes-upload-input');
    const subjectSelect = document.getElementById('notes-upload-subject');
    if (!fileInput.files.length) { showToast('Select a PDF file first.'); return; }
    if (!subjectSelect.value) { showToast('Select a subject.'); return; }
    await uploadNote(fileInput.files[0], subjectSelect.value, 'General notes', null);
    fileInput.value = '';
    showToast('Note uploaded!');
    renderNotes();
  });

  // Daily Planner
  loadDailyTasks();
  document.getElementById('daily-prev').addEventListener('click', () => { currentDailyDate.setDate(currentDailyDate.getDate() - 1); renderDailyPlanner(); });
  document.getElementById('daily-next').addEventListener('click', () => { currentDailyDate.setDate(currentDailyDate.getDate() + 1); renderDailyPlanner(); });
  document.getElementById('daily-add-btn').addEventListener('click', () => {
    const key = getDailyKey(currentDailyDate);
    const input = document.getElementById('daily-task-input');
    const time = document.getElementById('daily-task-time').value;
    if (!input.value.trim()) return;
    if (!dailyTasks[key]) dailyTasks[key] = [];
    dailyTasks[key].push({ text: input.value.trim(), time, done: false });
    input.value = '';
    saveDailyTasks();
    renderDailyPlanner();
  });
  document.getElementById('daily-task-input').addEventListener('keydown', (e) => { if (e.key === 'Enter') document.getElementById('daily-add-btn').click(); });

  // Bottom Navigation
  document.querySelectorAll('#bottom-nav .nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const view = item.dataset.view;
      document.querySelectorAll('#bottom-nav .nav-item').forEach(n => n.classList.remove('active'));
      item.classList.add('active');
      if (view === 'plan') {
        document.querySelectorAll('.view-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.view-content').forEach(v => v.classList.remove('active'));
        const planTab = document.querySelector('.view-tab[data-view="plan"]');
        if (planTab) planTab.click();
      } else if (view === 'settings') {
        document.getElementById('settings-modal').classList.remove('hidden');
        renderSettings();
      } else {
        document.querySelectorAll('.view-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.view-content').forEach(v => v.classList.remove('active'));
        document.getElementById('list-view').classList.add('active');
        const tab = document.querySelector(`.view-tab[data-view="${view}"]`);
        if (tab) tab.click();
      }
    });
  });

// Results view inputs
  const resultsView = document.getElementById('results-view');
  resultsView.addEventListener('input', (e) => {
    const t = e.target;
    if (t.classList.contains('results-score-input') || t.classList.contains('results-weight-input')) {
      const set = state.examSets[t.dataset.set]; if (!set) return;
      const key = t.classList.contains('results-score-input') ? 'resultScores' : 'resultWeights';
      const val = t.value;
      if (val === '' || val === null) {
        delete set[key][t.dataset.paper];
      } else if (!isNaN(Number(val))) {
        const clamped = Math.min(100, Math.max(0, Number(val)));
        set[key][t.dataset.paper] = clamped;
        if (t.value !== String(clamped)) t.value = String(clamped);
      }
      saveState();
      const paper = getSetPapers(t.dataset.set).find(p => p.id === t.dataset.paper);
      if (paper) updateResultsCard(t.dataset.set, paper.subject);
      return;
    }
    if (t.classList.contains('results-target-select')) {
      const set = state.examSets[t.dataset.set]; if (!set) return;
      set.resultTargets[t.dataset.subject] = t.value;
      saveState();
      updateResultsCard(t.dataset.set, t.dataset.subject);
      return;
    }
    if (t.classList.contains('results-sim-input')) {
      updateSimOut(t.dataset.set, t.dataset.subject, t.value);
    }
  });
  resultsView.addEventListener('change', (e) => {
    const t = e.target;
    if (!t.classList || !t.classList.contains('results-target-select')) return;
    const set = state.examSets[t.dataset.set]; if (!set) return;
    set.resultTargets[t.dataset.subject] = t.value;
    saveState();
    updateResultsCard(t.dataset.set, t.dataset.subject);
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') document.querySelectorAll('.overlay:not(.hidden)').forEach(o => { if (o.id !== 'setup-overlay') o.classList.add('hidden'); });
    if ((e.ctrlKey || e.metaKey) && (e.key === 'z' || e.key === 'Z')) {
      const t = e.target;
      if (t && (t.closest('textarea') || (t.tagName === 'INPUT' && t.type === 'text'))) return;
      e.preventDefault();
      if (e.shiftKey) redo(); else undo();
      return;
    }
    if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || e.key === 'Y')) {
      const t = e.target;
      if (t && (t.closest('textarea') || (t.tagName === 'INPUT' && t.type === 'text'))) return;
      e.preventDefault();
      redo();
      return;
    }
    if (e.key === '?' && !e.ctrlKey && !e.metaKey) showToast('Shortcuts: ? Help | Ctrl+Z Undo | Ctrl+Y Redo | Esc Close modal | D Dark mode', 4000);
    if ((e.key === 'd' || e.key === 'D') && !e.ctrlKey && !e.metaKey && !e.target.closest('input,textarea,select')) { state.darkMode = !state.darkMode; saveState(); refreshAll(); }
  });

  window.matchMedia('print').addEventListener('change', (mql) => { if (mql.matches) document.querySelectorAll('.overlay').forEach(o => o.classList.add('hidden')); });

  setInterval(() => { checkAndNotify(); }, 60000);
  checkAndNotify();

  // PWA: register service worker (only when served over http(s); ignored on file://)
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    });
  }

  // PWA install prompt
  let deferredInstall = null;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstall = e;
    window.__deferredInstall = e;
    showInstallBanner(true);
  });
  window.addEventListener('appinstalled', () => { deferredInstall = null; window.__deferredInstall = null; showInstallBanner(false); });

  // Initial render if not first visit
  if (!state.firstVisit) {
    refreshAll();
  }
})();

function showInstallBanner(show) {
  if (show) {
    const setup = document.getElementById('setup-overlay');
    if (setup && !setup.classList.contains('hidden')) return;
  }
  let b = document.getElementById('install-banner');
  if (!b) {
    b = document.createElement('div');
    b.id = 'install-banner';
    b.className = 'hidden';
    b.innerHTML = '<span class="install-banner-text">Install this app for offline use and quick access.</span><button type="button" class="btn btn-primary install-banner-btn">Install</button><button type="button" class="btn btn-icon install-banner-dismiss" aria-label="Dismiss install prompt">&times;</button>';
    document.body.appendChild(b);
    b.querySelector('.install-banner-btn').addEventListener('click', async () => { const prompt = window.__deferredInstall; if (prompt) { prompt.prompt(); await prompt.userChoice; window.__deferredInstall = null; showInstallBanner(false); } });
    b.querySelector('.install-banner-dismiss').addEventListener('click', () => showInstallBanner(false));
  }
  b.classList.toggle('hidden', !show);
}



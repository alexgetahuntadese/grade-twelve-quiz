
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Index from './pages/Index';
import Subject from './pages/Subject';
import Quiz from './pages/Quiz';
import Grade10 from './pages/Grade10';
import Grade11 from './pages/Grade11';
import Grade12 from './pages/Grade12';
import Grade11Subject from './pages/Grade11Subject';
import Grade11Quiz from './pages/Grade11Quiz';
import Grade12Subject from './pages/Grade12Subject';
import Grade12Quiz from './pages/Grade12Quiz';
import OfflineIndicator from './components/OfflineIndicator';
import { register as registerSW } from './utils/serviceWorker';

function App() {
  useEffect(() => {
    registerSW();
  }, []);

  return (
    <Router>
      {/* The error may occur if OfflineIndicator is called as a function, not as a component! */}
      <OfflineIndicator />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/grade-10" element={<Grade10 />} />
        <Route path="/grade-11" element={<Grade11 />} />
        <Route path="/grade-12" element={<Grade12 />} />
        <Route path="/subject/:subject" element={<Subject />} />
        <Route path="/quiz/:subject/:chapter/:difficulty" element={<Quiz />} />
        <Route path="/grade11/:subject" element={<Grade11Subject />} />
        <Route path="/grade11/:subject/:chapter/:difficulty" element={<Grade11Quiz />} />
        <Route path="/grade12/:subject" element={<Grade12Subject />} />
        <Route path="/grade12/:subject/:chapter/:difficulty" element={<Grade12Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;


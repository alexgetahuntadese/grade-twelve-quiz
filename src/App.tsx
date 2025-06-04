
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Subject from './pages/Subject';
import Quiz from './pages/Quiz';
import Grade11Subject from './pages/Grade11Subject';
import Grade11Quiz from './pages/Grade11Quiz';
import Grade12Subject from './pages/Grade12Subject';
import Grade12Quiz from './pages/Grade12Quiz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
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

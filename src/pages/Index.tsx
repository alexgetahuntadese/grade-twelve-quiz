
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Trophy, User, Clock } from 'lucide-react';
import SubjectCard from '@/components/SubjectCard';
import QuizInterface from '@/components/QuizInterface';
import ScoreBoard from '@/components/ScoreBoard';

const Index = () => {
  const [currentView, setCurrentView] = useState('home'); // home, quiz, results
  const [selectedSubject, setSelectedSubject] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const subjects = [
    {
      id: 'mathematics',
      name: 'Mathematics',
      description: 'Algebra, Calculus, Geometry & Statistics',
      icon: '📐',
      color: 'bg-blue-500',
      questions: 15
    },
    {
      id: 'physics',
      name: 'Physics',
      description: 'Mechanics, Electricity & Modern Physics',
      icon: '⚡',
      color: 'bg-purple-500',
      questions: 12
    },
    {
      id: 'chemistry',
      name: 'Chemistry',
      description: 'Organic, Inorganic & Physical Chemistry',
      icon: '🧪',
      color: 'bg-green-500',
      questions: 14
    },
    {
      id: 'biology',
      name: 'Biology',
      description: 'Cell Biology, Genetics & Ecology',
      icon: '🧬',
      color: 'bg-emerald-500',
      questions: 13
    },
    {
      id: 'english',
      name: 'English',
      description: 'Grammar, Literature & Comprehension',
      icon: '📚',
      color: 'bg-red-500',
      questions: 10
    },
    {
      id: 'history',
      name: 'Ethiopian History',
      description: 'Ancient, Medieval & Modern Ethiopia',
      icon: '🏛️',
      color: 'bg-yellow-500',
      questions: 11
    }
  ];

  const handleSubjectSelect = (subjectId: string) => {
    setSelectedSubject(subjectId);
    setCurrentView('quiz');
  };

  const handleQuizComplete = (score: number, total: number) => {
    setUserScore(score);
    setTotalQuestions(total);
    setCurrentView('results');
  };

  const handleReturnHome = () => {
    setCurrentView('home');
    setSelectedSubject('');
    setUserScore(0);
    setTotalQuestions(0);
  };

  if (currentView === 'quiz') {
    return (
      <QuizInterface 
        subject={selectedSubject}
        onComplete={handleQuizComplete}
        onBack={handleReturnHome}
      />
    );
  }

  if (currentView === 'results') {
    return (
      <ScoreBoard 
        score={userScore}
        total={totalQuestions}
        subject={selectedSubject}
        onReturnHome={handleReturnHome}
        onRetakeQuiz={() => setCurrentView('quiz')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-red-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b-4 border-gradient-to-r from-green-500 via-yellow-500 to-red-500">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">🇪🇹</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">EthioQuiz</h1>
                <p className="text-sm text-gray-600">Grade 12 Preparation Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Student</span>
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Master Your Grade 12 Subjects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prepare for your Ethiopian Grade 12 examinations with our comprehensive quiz platform. 
            Test your knowledge across all major subjects and track your progress.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <BookOpen className="w-12 h-12 text-blue-500 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-800">{subjects.length}</h3>
              <p className="text-gray-600">Subjects Available</p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-800">75+</h3>
              <p className="text-gray-600">Practice Questions</p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Clock className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-800">Real-time</h3>
              <p className="text-gray-600">Progress Tracking</p>
            </CardContent>
          </Card>
        </div>

        {/* Subject Selection */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Choose Your Subject
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                onSelect={handleSubjectSelect}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 py-8 border-t border-gray-200">
          <p className="text-gray-600">
            Good luck with your Grade 12 preparation! 🌟
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

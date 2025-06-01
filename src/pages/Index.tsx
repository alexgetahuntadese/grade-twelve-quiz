import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Trophy, User, Clock, ArrowLeft } from 'lucide-react';
import SubjectCard from '@/components/SubjectCard';
import ChapterList from '@/components/ChapterList';
import DifficultySelector from '@/components/DifficultySelector';
import QuizInterface from '@/components/QuizInterface';
import ScoreBoard from '@/components/ScoreBoard';
import LanguageSelector from '@/components/LanguageSelector';
import { getTotalQuestionsBySubject, getChaptersBySubject } from '@/data/questions';
import { useTranslation } from '@/contexts/TranslationContext';

const Index = () => {
  const { t } = useTranslation();
  const [currentView, setCurrentView] = useState('home'); // home, categories, subjects, chapters, difficulty, quiz, results
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [userScore, setUserScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [chapterName, setChapterName] = useState('');

  const naturalSciences = [
    {
      id: 'mathematics',
      name: t('mathematics'),
      description: t('mathematicsDesc'),
      icon: '📐',
      color: 'bg-blue-500',
      questions: getTotalQuestionsBySubject('mathematics')
    },
    {
      id: 'physics',
      name: t('physics'),
      description: t('physicsDesc'),
      icon: '⚡',
      color: 'bg-purple-500',
      questions: getTotalQuestionsBySubject('physics')
    },
    {
      id: 'chemistry',
      name: t('chemistry'),
      description: t('chemistryDesc'),
      icon: '🧪',
      color: 'bg-green-500',
      questions: getTotalQuestionsBySubject('chemistry')
    },
    {
      id: 'biology',
      name: t('biology'),
      description: t('biologyDesc'),
      icon: '🧬',
      color: 'bg-emerald-500',
      questions: getTotalQuestionsBySubject('biology')
    },
    {
      id: 'technical-drawing',
      name: 'Technical Drawing',
      description: 'Technical drawing and drafting skills',
      icon: '📏',
      color: 'bg-cyan-500',
      questions: getTotalQuestionsBySubject('technical-drawing')
    }
  ];

  const socialSciences = [
    {
      id: 'history',
      name: t('history'),
      description: t('historyDesc'),
      icon: '🏛️',
      color: 'bg-yellow-500',
      questions: getTotalQuestionsBySubject('history')
    },
    {
      id: 'geography',
      name: 'Geography',
      description: 'Study of Earth\'s physical features and human societies',
      icon: '🌍',
      color: 'bg-indigo-500',
      questions: getTotalQuestionsBySubject('geography')
    },
    {
      id: 'economics',
      name: 'Economics',
      description: 'Study of production, distribution, and consumption',
      icon: '💰',
      color: 'bg-amber-500',
      questions: getTotalQuestionsBySubject('economics')
    },
    {
      id: 'general-business',
      name: 'General Business',
      description: 'Business fundamentals and entrepreneurship',
      icon: '💼',
      color: 'bg-slate-500',
      questions: getTotalQuestionsBySubject('general-business')
    }
  ];

  const commonCourses = [
    {
      id: 'english',
      name: t('english'),
      description: t('englishDesc'),
      icon: '📚',
      color: 'bg-red-500',
      questions: getTotalQuestionsBySubject('english')
    },
    {
      id: 'civics',
      name: 'Civics',
      description: 'Government, citizenship, and civic responsibility',
      icon: '🏛️',
      color: 'bg-blue-600',
      questions: getTotalQuestionsBySubject('civics')
    },
    {
      id: 'physical-education',
      name: 'Physical Education',
      description: 'Physical fitness, health, and wellness',
      icon: '⚽',
      color: 'bg-orange-500',
      questions: getTotalQuestionsBySubject('physical-education')
    },
    {
      id: 'information-technology',
      name: 'Information Technology',
      description: 'Computer basics and information technology',
      icon: '💻',
      color: 'bg-gray-600',
      questions: getTotalQuestionsBySubject('information-technology')
    },
    {
      id: 'national-language',
      name: 'National Language',
      description: 'Ethiopian national language - Amharic',
      icon: '🇪🇹',
      color: 'bg-green-600',
      questions: getTotalQuestionsBySubject('national-language')
    }
  ];

  const categories = [
    {
      id: 'natural_sciences',
      name: 'Natural Sciences',
      description: 'Mathematics, Physics, Chemistry, Biology, and Technical Drawing',
      icon: '🔬',
      color: 'bg-blue-600',
      subjects: naturalSciences
    },
    {
      id: 'social_sciences',
      name: 'Social Sciences',
      description: 'History, Geography, Economics, and Business Studies',
      icon: '🌐',
      color: 'bg-green-600',
      subjects: socialSciences
    },
    {
      id: 'common_courses',
      name: 'Common Courses',
      description: 'English, Civics, Physical Education, IT, and National Language',
      icon: '📖',
      color: 'bg-purple-600',
      subjects: commonCourses
    }
  ];

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentView('subjects');
  };

  const handleSubjectSelect = (subjectId: string) => {
    setSelectedSubject(subjectId);
    setCurrentView('chapters');
  };

  const handleChapterSelect = (chapterId: string) => {
    setSelectedChapter(chapterId);
    setCurrentView('difficulty');
  };

  const handleDifficultySelect = (difficulty: 'easy' | 'medium' | 'hard') => {
    setSelectedDifficulty(difficulty);
    setCurrentView('quiz');
  };

  const handleQuizComplete = (score: number, total: number, chapterName: string, difficulty: string) => {
    setUserScore(score);
    setTotalQuestions(total);
    setChapterName(chapterName);
    setCurrentView('results');
  };

  const handleReturnHome = () => {
    setCurrentView('home');
    setSelectedCategory('');
    setSelectedSubject('');
    setSelectedChapter('');
    setSelectedDifficulty('easy');
    setUserScore(0);
    setTotalQuestions(0);
    setChapterName('');
  };

  const handleBackToCategories = () => {
    setCurrentView('home');
    setSelectedCategory('');
    setSelectedSubject('');
  };

  const handleBackToSubjects = () => {
    setCurrentView('subjects');
    setSelectedSubject('');
    setSelectedChapter('');
  };

  const handleBackToChapters = () => {
    setCurrentView('chapters');
    setSelectedChapter('');
    setSelectedDifficulty('easy');
    setUserScore(0);
    setTotalQuestions(0);
    setChapterName('');
  };

  const handleBackToDifficulty = () => {
    setCurrentView('difficulty');
    setSelectedDifficulty('easy');
  };

  if (currentView === 'quiz') {
    return (
      <QuizInterface 
        subject={selectedSubject}
        chapterId={selectedChapter}
        difficulty={selectedDifficulty}
        onComplete={handleQuizComplete}
        onBack={handleBackToDifficulty}
      />
    );
  }

  if (currentView === 'results') {
    return (
      <ScoreBoard 
        score={userScore}
        total={totalQuestions}
        subject={selectedSubject}
        chapterName={chapterName}
        onReturnHome={handleReturnHome}
        onRetakeQuiz={() => setCurrentView('difficulty')}
        onBackToChapters={handleBackToChapters}
      />
    );
  }

  if (currentView === 'difficulty') {
    const currentCategory = categories.find(c => c.id === selectedCategory);
    const currentSubjects = currentCategory?.subjects || [];
    const currentSubject = currentSubjects.find(s => s.id === selectedSubject);
    const chapters = getChaptersBySubject(selectedSubject);
    const currentChapter = chapters.find(ch => ch.id === selectedChapter);
    
    return (
      <DifficultySelector 
        subject={selectedSubject}
        subjectName={currentSubject?.name || ''}
        chapterId={selectedChapter}
        chapterName={currentChapter?.name || ''}
        onBack={handleBackToChapters}
        onDifficultySelect={handleDifficultySelect}
      />
    );
  }

  if (currentView === 'chapters') {
    const currentCategory = categories.find(c => c.id === selectedCategory);
    const currentSubjects = currentCategory?.subjects || [];
    const currentSubject = currentSubjects.find(s => s.id === selectedSubject);
    return (
      <ChapterList 
        subject={selectedSubject}
        subjectName={currentSubject?.name || ''}
        onBack={handleBackToSubjects}
        onChapterSelect={handleChapterSelect}
      />
    );
  }

  if (currentView === 'subjects') {
    const currentCategory = categories.find(c => c.id === selectedCategory);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-red-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b-4 border-gradient-to-r from-green-500 via-yellow-500 to-red-500">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Button variant="outline" onClick={handleBackToCategories} className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Categories</span>
                </Button>
                <div className="text-3xl">{currentCategory?.icon}</div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">{currentCategory?.name}</h1>
                  <p className="text-sm text-gray-600">{currentCategory?.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <LanguageSelector />
                <Badge variant="outline" className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{t('student')}</span>
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Choose a Subject
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select a subject from {currentCategory?.name} to start your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategory?.subjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                onSelect={handleSubjectSelect}
              />
            ))}
          </div>
        </div>
      </div>
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
                <h1 className="text-2xl font-bold text-gray-800">{t('appName')}</h1>
                <p className="text-sm text-gray-600">{t('appDescription')}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSelector />
              <Badge variant="outline" className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{t('student')}</span>
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t('heroTitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('heroDescription')}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <BookOpen className="w-12 h-12 text-blue-500 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-800">{naturalSciences.length + socialSciences.length + commonCourses.length}</h3>
              <p className="text-gray-600">{t('subjectsAvailable')}</p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-800">3</h3>
              <p className="text-gray-600">Subject Categories</p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Clock className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-800">{t('focusedLearning')}</h3>
              <p className="text-gray-600">{t('focusedLearning')}</p>
            </CardContent>
          </Card>
        </div>

        {/* Category Selection */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Choose a Category
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((category) => (
              <Card key={category.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <CardTitle className="text-2xl font-bold">{category.name}</CardTitle>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-center text-sm text-gray-600">
                    <span>{category.subjects.length} Subjects Available</span>
                  </div>
                  
                  <Button 
                    onClick={() => handleCategorySelect(category.id)}
                    className="w-full group-hover:bg-gray-800 transition-colors text-lg py-3"
                  >
                    Explore {category.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 py-8 border-t border-gray-200">
          <p className="text-gray-600">
            {t('footerText')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

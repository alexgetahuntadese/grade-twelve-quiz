
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Calculator, Atom, Dna, Wrench, History, Globe, DollarSign, Users, Scale, Heart, Monitor, Languages, GraduationCap } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const regularSubjects = [
    { id: 'mathematics', name: 'Mathematics', icon: Calculator, color: 'bg-blue-500' },
    { id: 'physics', name: 'Physics', icon: Atom, color: 'bg-purple-500' },
    { id: 'chemistry', name: 'Chemistry', icon: Atom, color: 'bg-green-500' },
    { id: 'biology', name: 'Biology', icon: Dna, color: 'bg-emerald-500' },
    { id: 'english', name: 'English', icon: BookOpen, color: 'bg-red-500' },
    { id: 'history', name: 'History', icon: History, color: 'bg-amber-500' },
    { id: 'geography', name: 'Geography', icon: Globe, color: 'bg-cyan-500' },
    { id: 'technical-drawing', name: 'Technical Drawing', icon: Wrench, color: 'bg-gray-500' },
    { id: 'economics', name: 'Economics', icon: DollarSign, color: 'bg-yellow-500' },
    { id: 'general-business', name: 'General Business', icon: Users, color: 'bg-indigo-500' },
    { id: 'civics', name: 'Civics', icon: Scale, color: 'bg-rose-500' },
    { id: 'physical-education', name: 'Physical Education', icon: Heart, color: 'bg-pink-500' },
    { id: 'information-technology', name: 'Information Technology', icon: Monitor, color: 'bg-slate-500' },
    { id: 'national-language', name: 'National Language', icon: Languages, color: 'bg-orange-500' }
  ];

  const grade11Subjects = [
    { id: 'mathematics', name: 'Advanced Mathematics', icon: Calculator, color: 'bg-blue-600' },
    { id: 'physics', name: 'Advanced Physics', icon: Atom, color: 'bg-purple-600' },
    { id: 'chemistry', name: 'Advanced Chemistry', icon: Atom, color: 'bg-green-600' },
    { id: 'biology', name: 'Advanced Biology', icon: Dna, color: 'bg-emerald-600' },
    { id: 'english', name: 'Advanced English', icon: BookOpen, color: 'bg-red-600' },
    { id: 'history', name: 'Advanced History', icon: History, color: 'bg-amber-600' },
    { id: 'geography', name: 'Advanced Geography', icon: Globe, color: 'bg-cyan-600' },
    { id: 'technical-drawing', name: 'Advanced Technical Drawing', icon: Wrench, color: 'bg-gray-600' },
    { id: 'economics', name: 'Advanced Economics', icon: DollarSign, color: 'bg-yellow-600' },
    { id: 'general-business', name: 'Advanced Business', icon: Users, color: 'bg-indigo-600' },
    { id: 'civics', name: 'Advanced Civics', icon: Scale, color: 'bg-rose-600' },
    { id: 'physical-education', name: 'Advanced PE', icon: Heart, color: 'bg-pink-600' },
    { id: 'information-technology', name: 'Advanced IT', icon: Monitor, color: 'bg-slate-600' },
    { id: 'national-language', name: 'Advanced National Language', icon: Languages, color: 'bg-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Educational Quiz Platform</h1>
          <p className="text-gray-600">Test your knowledge across various subjects</p>
        </div>

        {/* Regular Subjects Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            Regular Subjects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {regularSubjects.map((subject) => {
              const IconComponent = subject.icon;
              return (
                <Card key={subject.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className={`w-12 h-12 ${subject.color} rounded-lg flex items-center justify-center mb-2`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{subject.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      onClick={() => navigate(`/subject/${subject.id}`)}
                      className="w-full"
                    >
                      Start Quiz
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Grade 11 Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6" />
            Grade 11 - Advanced Level
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {grade11Subjects.map((subject) => {
              const IconComponent = subject.icon;
              return (
                <Card key={`grade11-${subject.id}`} className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-amber-200">
                  <CardHeader className="pb-3">
                    <div className={`w-12 h-12 ${subject.color} rounded-lg flex items-center justify-center mb-2`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{subject.name}</CardTitle>
                    <CardDescription className="text-amber-600 font-medium">Grade 11 Level</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      onClick={() => navigate(`/grade11/${subject.id}`)}
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                    >
                      Start Advanced Quiz
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

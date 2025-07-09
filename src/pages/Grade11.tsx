
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calculator, Atom, Leaf, Globe, History, Palette, Users, Heart, Computer, Languages, Briefcase, Flag, Wrench } from 'lucide-react';

const Grade11: React.FC = () => {
  const navigate = useNavigate();

  const naturalScienceSubjects = [
    {
      id: 'biology',
      name: 'Biology',
      description: 'Life processes, genetics, and ecosystem studies',
      icon: Leaf,
      color: 'bg-emerald-600',
      questions: 140
    },
    {
      id: 'chemistry',
      name: 'Chemistry',
      description: 'Chemical reactions, organic chemistry, and molecular structure',
      icon: Atom,
      color: 'bg-green-600',
      questions: 125
    },
    {
      id: 'physics',
      name: 'Physics',
      description: 'Mechanics, thermodynamics, and electromagnetic theory',
      icon: Atom,
      color: 'bg-purple-600',
      questions: 130
    },
    {
      id: 'technical-drawing',
      name: 'Technical Drawing (TD)',
      description: 'Engineering drawing and technical design principles',
      icon: Wrench,
      color: 'bg-gray-600',
      questions: 80
    }
  ];

  const socialScienceSubjects = [
    {
      id: 'geography',
      name: 'Geography',
      description: 'Physical and human geography of Ethiopia and the world',
      icon: Globe,
      color: 'bg-cyan-600',
      questions: 110
    },
    {
      id: 'history',
      name: 'History',
      description: 'Ethiopian and world history from ancient to modern times',
      icon: History,
      color: 'bg-amber-600',
      questions: 120
    },
    {
      id: 'economics',
      name: 'Economics',
      description: 'Economic principles, development, and Ethiopian economy',
      icon: Briefcase,
      color: 'bg-orange-600',
      questions: 105
    },
    {
      id: 'general-business',
      name: 'General Business',
      description: 'Business fundamentals, entrepreneurship, and management',
      icon: Users,
      color: 'bg-slate-600',
      questions: 95
    }
  ];

  const commonCourseSubjects = [
    {
      id: 'english',
      name: 'English',
      description: 'Advanced English language and literature',
      icon: Languages,
      color: 'bg-red-600',
      questions: 115
    },
    {
      id: 'civics',
      name: 'Civics',
      description: 'Ethiopian civics, democracy, and citizenship',
      icon: Flag,
      color: 'bg-blue-600',
      questions: 100
    },
    {
      id: 'physical-education',
      name: 'Physical Education',
      description: 'Sports, health, and physical fitness',
      icon: Heart,
      color: 'bg-pink-600',
      questions: 90
    },
    {
      id: 'mathematics',
      name: 'Mathematics',
      description: 'Advanced algebra, geometry, and mathematical analysis',
      icon: Calculator,
      color: 'bg-blue-600',
      questions: 150
    },
    {
      id: 'information-technology',
      name: 'IT (Information Technology)',
      description: 'Computer skills, programming, and digital literacy',
      icon: Computer,
      color: 'bg-indigo-600',
      questions: 85
    },
    {
      id: 'national-language',
      name: 'National Language / Mother Tongue',
      description: 'Amharic and regional language studies',
      icon: Languages,
      color: 'bg-emerald-700',
      questions: 95
    }
  ];

  const handleNavigation = (path: string) => {
    try {
      navigate(path);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  const SubjectSection = ({ title, subjects, bgColor }: { title: string; subjects: any[]; bgColor: string }) => (
    <div className="mb-8">
      <div className={`${bgColor} text-white p-4 rounded-t-lg`}>
        <h2 className="text-2xl font-bold text-center">{title}</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 bg-white border-2 border-t-0 border-amber-200 rounded-b-lg">
        {subjects.map((subject) => {
          const IconComponent = subject.icon;
          return (
            <Card 
              key={subject.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-amber-200"
              onClick={() => handleNavigation(`/grade11/${subject.id}`)}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${subject.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg font-bold">{subject.name}</CardTitle>
                <CardDescription className="text-sm">
                  {subject.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="text-center">
                  <div className="bg-gray-100 rounded-full px-3 py-1">
                    <span className="text-xs font-medium text-gray-700">{subject.questions} Questions</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium py-2 rounded-lg transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigation(`/grade11/${subject.id}`);
                  }}
                >
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Button 
            onClick={() => handleNavigation('/')} 
            variant="outline"
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Grade 11 New Curriculum</h1>
            <p className="text-xl text-gray-600 mb-2">Ethiopian Educational System - Preparatory Level</p>
            <p className="text-lg text-gray-500">Choose your stream: Natural Science, Social Science, or Common Courses</p>
          </div>
        </div>

        <SubjectSection 
          title="Natural Science TextBook" 
          subjects={naturalScienceSubjects}
          bgColor="bg-green-600"
        />

        <SubjectSection 
          title="Social Science TextBook" 
          subjects={socialScienceSubjects}
          bgColor="bg-blue-600"
        />

        <SubjectSection 
          title="Common Course TextBook" 
          subjects={commonCourseSubjects}
          bgColor="bg-purple-600"
        />
      </div>
    </div>
  );
};

export default Grade11;

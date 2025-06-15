
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useNavigate } from 'react-router-dom';
import { Star, Award, BookOpen, Users, TrendingUp, GraduationCap } from 'lucide-react';
import ChatGPT from '@/components/ChatGPT';

const Index = () => {
  const navigate = useNavigate();

  const grades = [
    {
      id: 'grade-10',
      title: 'Grade 10',
      description: 'Foundation level courses to build strong academic basics',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      route: '/grade-10',
      subjects: '8+ Subjects',
      features: ['Mathematics', 'Physics', 'Chemistry', 'Biology']
    },
    {
      id: 'grade-11',
      title: 'Grade 11',
      description: 'Advanced topics preparing for final examinations',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      route: '/grade-11',
      subjects: '10+ Subjects',
      features: ['Advanced Math', 'Advanced Physics', 'Economics', 'Business']
    },
    {
      id: 'grade-12',
      title: 'Grade 12',
      description: 'University entrance preparation and advanced concepts',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      route: '/grade-12',
      subjects: '12+ Subjects',
      features: ['Calculus', 'Advanced Sciences', 'IT', 'Agriculture']
    }
  ];

  const features = [
    {
      title: 'Interactive Quizzes',
      description: 'Engaging multiple-choice questions with instant feedback',
      icon: '🎯'
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your learning progress across all subjects',
      icon: '📊'
    },
    {
      title: 'AI Study Assistant',
      description: 'Get personalized help with ChatGPT integration',
      icon: '🤖'
    },
    {
      title: 'Comprehensive Coverage',
      description: 'All Ethiopian curriculum subjects and chapters',
      icon: '📚'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-16">
          <div className="flex justify-center mb-6">
            <GraduationCap className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Educational Quiz Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8">Master your knowledge across all academic levels</p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full px-4 py-2 shadow-md">
              <Star className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium">Interactive Learning</span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2 shadow-md">
              <Award className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium">Track Progress</span>
            </div>
          </div>
        </div>

        {/* Features Cards */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Platform?</h2>
            <p className="text-lg text-gray-600">Experience the best in online education</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-2">{feature.icon}</div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Grade Levels Carousel */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Grade Level</h2>
            <p className="text-lg text-gray-600">Select your academic level to access tailored quizzes and study materials</p>
          </div>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {grades.map((grade) => {
                const IconComponent = grade.icon;
                return (
                  <CarouselItem key={grade.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card 
                        className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 bg-white/80 backdrop-blur-sm overflow-hidden h-full"
                        onClick={() => navigate(grade.route)}
                      >
                        <CardHeader className="text-center pb-4">
                          <div className={`w-20 h-20 bg-gradient-to-r ${grade.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                            <IconComponent className="w-10 h-10 text-white" />
                          </div>
                          <CardTitle className="text-2xl font-bold text-gray-800">{grade.title}</CardTitle>
                          <CardDescription className="text-gray-600 text-base leading-relaxed">
                            {grade.description}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                          <div className="flex items-center justify-center">
                            <div className="bg-gray-100 rounded-full px-4 py-2">
                              <span className="text-sm font-medium text-gray-700">{grade.subjects}</span>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <p className="text-sm font-medium text-gray-700">Key Subjects:</p>
                            <div className="flex flex-wrap gap-1">
                              {grade.features.map((feature, idx) => (
                                <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <Button 
                            className={`w-full bg-gradient-to-r ${grade.color} hover:shadow-lg text-white font-medium py-3 rounded-lg transition-all duration-300 group-hover:scale-105`}
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(grade.route);
                            }}
                          >
                            Explore {grade.title}
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* ChatGPT Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">AI Study Assistant</h2>
            <p className="text-lg text-gray-600">Get personalized help with your studies using ChatGPT</p>
          </div>
          <ChatGPT />
        </div>

        {/* Footer Section */}
        <div className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-500">Choose your grade level to get started with your learning journey!</p>
        </div>
      </div>
    </div>
  );
};

export default Index;

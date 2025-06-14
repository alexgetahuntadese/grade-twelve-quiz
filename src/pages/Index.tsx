import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Calculator, Atom, Dna, Wrench, History, Globe, DollarSign, Users, Scale, Heart, Monitor, Languages, GraduationCap, Star, Award, MessageCircle, Send } from 'lucide-react';
import ChatButton from '@/components/ChatButton';
import { useState } from 'react';
import ChatInterface from '@/components/ChatInterface';

const Index = () => {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      setIsChatOpen(true);
      setChatMessage('');
    }
  };

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

  const grade12Subjects = [
    { id: 'mathematics', name: 'Expert Mathematics', icon: Calculator, color: 'bg-blue-800' },
    { id: 'physics', name: 'Expert Physics', icon: Atom, color: 'bg-purple-800' },
    { id: 'chemistry', name: 'Expert Chemistry', icon: Atom, color: 'bg-green-800' },
    { id: 'biology', name: 'Expert Biology', icon: Dna, color: 'bg-emerald-800' },
    { id: 'english', name: 'Expert English', icon: BookOpen, color: 'bg-red-800' },
    { id: 'history', name: 'Expert History', icon: History, color: 'bg-amber-800' },
    { id: 'geography', name: 'Expert Geography', icon: Globe, color: 'bg-cyan-800' },
    { id: 'technical-drawing', name: 'Expert Technical Drawing', icon: Wrench, color: 'bg-gray-800' },
    { id: 'economics', name: 'Expert Economics', icon: DollarSign, color: 'bg-yellow-800' },
    { id: 'general-business', name: 'Expert Business', icon: Users, color: 'bg-indigo-800' },
    { id: 'civics', name: 'Expert Civics', icon: Scale, color: 'bg-rose-800' },
    { id: 'physical-education', name: 'Expert PE', icon: Heart, color: 'bg-pink-800' },
    { id: 'information-technology', name: 'Expert IT', icon: Monitor, color: 'bg-slate-800' },
    { id: 'national-language', name: 'Expert National Language', icon: Languages, color: 'bg-orange-800' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Educational Quiz Platform
          </h1>
          <p className="text-xl text-gray-600 mb-6">Master your knowledge across all academic levels</p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full px-4 py-2 shadow-md">
              <Star className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium">Grade 11 Advanced</span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2 shadow-md">
              <Award className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium">Grade 12 Expert</span>
            </div>
          </div>
        </div>

        {/* Chat Section - Google-like search interface */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-2xl">
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Ask Your AI Study Assistant</h2>
                  <p className="text-gray-600">Get instant help with any subject or study question</p>
                </div>
                
                <form onSubmit={handleChatSubmit} className="space-y-4">
                  <div className="relative">
                    <Input
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      placeholder="Ask me anything about mathematics, physics, history, or any other subject..."
                      className="w-full h-14 text-lg pl-6 pr-16 rounded-full border-2 border-gray-200 focus:border-blue-500 shadow-lg"
                    />
                    <Button 
                      type="submit"
                      size="icon"
                      className="absolute right-2 top-2 h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </form>
                
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="rounded-full"
                    onClick={() => { setChatMessage("Help me with calculus problems"); setIsChatOpen(true); }}
                  >
                    Calculus Help
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="rounded-full"
                    onClick={() => { setChatMessage("Explain photosynthesis"); setIsChatOpen(true); }}
                  >
                    Biology Questions
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="rounded-full"
                    onClick={() => { setChatMessage("Study tips for exams"); setIsChatOpen(true); }}
                  >
                    Study Tips
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="rounded-full"
                    onClick={() => { setChatMessage("Ethiopian history timeline"); setIsChatOpen(true); }}
                  >
                    History Help
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Grade 11 Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
              <Star className="w-8 h-8 text-amber-600" />
              Grade 11 - Advanced Level
            </h2>
            <p className="text-gray-600">Challenge yourself with advanced concepts and deeper understanding</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {grade11Subjects.map((subject) => {
              const IconComponent = subject.icon;
              return (
                <Card key={`grade11-${subject.id}`} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-amber-400 bg-gradient-to-br from-amber-50 to-orange-50">
                  <CardHeader className="pb-3">
                    <div className={`w-14 h-14 ${subject.color} rounded-xl flex items-center justify-center mb-3 shadow-lg`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-lg">{subject.name}</CardTitle>
                    <CardDescription className="text-amber-700 font-medium">Grade 11 Advanced</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      onClick={() => navigate(`/grade11/${subject.id}`)}
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-md"
                    >
                      Start Advanced Quiz
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Grade 12 Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
              <Award className="w-8 h-8 text-purple-600" />
              Grade 12 - Expert Level
            </h2>
            <p className="text-gray-600">Master the most challenging concepts and prepare for higher education</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {grade12Subjects.map((subject) => {
              const IconComponent = subject.icon;
              return (
                <Card key={`grade12-${subject.id}`} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-purple-400 bg-gradient-to-br from-purple-50 to-pink-50">
                  <CardHeader className="pb-3">
                    <div className={`w-14 h-14 ${subject.color} rounded-xl flex items-center justify-center mb-3 shadow-lg`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-lg">{subject.name}</CardTitle>
                    <CardDescription className="text-purple-700 font-medium">Grade 12 Expert</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      onClick={() => navigate(`/grade12/${subject.id}`)}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-md"
                    >
                      Start Expert Quiz
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-500">Choose your level and start your learning journey today!</p>
        </div>
      </div>
      
      <ChatButton />
      <ChatInterface 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </div>
  );
};

export default Index;

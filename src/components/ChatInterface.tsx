import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, Bot, User, X } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m your AI study assistant. I can help you with questions about your subjects, explain concepts, or provide study tips. How can I help you today?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return 'Hello! I\'m here to help you with your studies. What subject would you like to explore today?';
    }
    
    if (lowerMessage.includes('math') || lowerMessage.includes('mathematics')) {
      return 'Mathematics is a fascinating subject! Whether you\'re working on algebra, geometry, calculus, or statistics, I can help explain concepts and solve problems. What specific topic would you like to discuss?';
    }
    
    if (lowerMessage.includes('history')) {
      return 'History helps us understand the world around us! I can help with topics like ancient civilizations, medieval periods, world wars, or Ethiopian history. What historical period interests you?';
    }
    
    if (lowerMessage.includes('physics')) {
      return 'Physics explains how the universe works! From mechanics and thermodynamics to electromagnetism and quantum physics, I can help break down complex concepts. What physics topic would you like to explore?';
    }
    
    if (lowerMessage.includes('chemistry')) {
      return 'Chemistry is the science of matter and its interactions! Whether it\'s organic, inorganic, physical chemistry, or biochemistry, I can help explain reactions, formulas, and concepts. What chemistry topic interests you?';
    }
    
    if (lowerMessage.includes('biology')) {
      return 'Biology is the study of life! From cell biology and genetics to ecology and evolution, I can help explain biological processes and concepts. What aspect of biology would you like to learn about?';
    }
    
    if (lowerMessage.includes('study') || lowerMessage.includes('exam') || lowerMessage.includes('test')) {
      return 'Here are some effective study tips: 1) Create a study schedule and stick to it, 2) Use active recall and spaced repetition, 3) Take regular breaks, 4) Form study groups, 5) Practice with quizzes like the ones on this platform. What specific study challenge are you facing?';
    }
    
    if (lowerMessage.includes('quiz') || lowerMessage.includes('practice')) {
      return 'The quiz platform offers great practice opportunities! You can choose from different difficulty levels (easy, medium, hard) and various subjects. Regular practice helps reinforce learning. Would you like tips on how to approach different types of questions?';
    }
    
    if (lowerMessage.includes('help') || lowerMessage.includes('confused') || lowerMessage.includes('difficult')) {
      return 'I understand that learning can be challenging sometimes. Break down complex topics into smaller parts, don\'t hesitate to ask questions, and practice regularly. What specific topic or concept would you like me to help clarify?';
    }
    
    return 'That\'s an interesting question! While I can provide general guidance on academic subjects and study techniques, I\'d recommend exploring the quiz sections for hands-on practice. Feel free to ask me about specific subjects like mathematics, history, physics, chemistry, or biology!';
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl h-[600px] flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-blue-600" />
            AI Study Assistant
          </CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0">
          <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${
                    message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  
                  <div className={`max-w-[70%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about your studies..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                size="icon"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatInterface;

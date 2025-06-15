
import React from 'react';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Sparkles } from 'lucide-react';

const ChatHeader = () => {
  return (
    <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
      <CardTitle className="flex items-center gap-3 text-2xl">
        <div className="relative">
          <MessageCircle className="w-8 h-8" />
          <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-yellow-300" />
        </div>
        ChatGPT Assistant
        <Badge variant="secondary" className="ml-auto bg-white/20 text-white border-white/30">
          GPT-4o Mini
        </Badge>
      </CardTitle>
      <CardDescription className="text-blue-100 text-lg">
        Your AI-powered study companion. Get instant help with any subject or question.
      </CardDescription>
    </CardHeader>
  );
};

export default ChatHeader;


import React from 'react';
import { Bot, User } from 'lucide-react';
import { Message } from '@/hooks/useChatGPT';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const { role, content } = message;
  const isUser = role === 'user';

  return (
    <div
      className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!isUser && (
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <Bot className="w-4 h-4 text-white" />
        </div>
      )}
      <div
        className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${
          isUser
            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
            : 'bg-white border border-gray-200'
        }`}
      >
        <div className={`text-xs font-medium mb-2 ${
          isUser ? 'text-blue-100' : 'text-gray-500'
        }`}>
          {isUser ? 'You' : 'ChatGPT'}
        </div>
        <div className="whitespace-pre-wrap leading-relaxed">{content}</div>
      </div>
      {isUser && (
        <div className="bg-gradient-to-br from-gray-400 to-gray-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <User className="w-4 h-4 text-white" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;

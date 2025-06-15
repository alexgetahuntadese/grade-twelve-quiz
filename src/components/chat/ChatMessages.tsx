
import React from 'react';
import { MessageCircle, Loader2, Bot } from 'lucide-react';
import ChatMessage from './ChatMessage';
import { Message } from '@/hooks/useChatGPT';

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, isLoading }) => {
  return (
    <div className="border-2 border-gray-200 rounded-xl p-6 min-h-[400px] max-h-[500px] overflow-y-auto bg-gradient-to-b from-white to-gray-50">
      {messages.length === 0 ? (
        <div className="text-center text-gray-500 mt-16">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Start Your AI Conversation</h3>
          <p className="text-sm">Ask me anything about your studies, homework, or any topic!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-4 max-w-[80%] shadow-sm">
                <div className="flex items-center gap-3">
                  <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
                  <span className="text-gray-600">ChatGPT is thinking...</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatMessages;

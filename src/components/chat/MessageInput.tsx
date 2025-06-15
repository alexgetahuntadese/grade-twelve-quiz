
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Send } from 'lucide-react';

interface MessageInputProps {
  inputMessage: string;
  setInputMessage: (message: string) => void;
  sendMessage: () => void;
  clearChat: () => void;
  isLoading: boolean;
  hasApiKey: boolean;
  hasMessages: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({
  inputMessage,
  setInputMessage,
  sendMessage,
  clearChat,
  isLoading,
  hasApiKey,
  hasMessages,
}) => {
  return (
    <div className="flex gap-3 p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
      <Textarea
        placeholder="Ask me anything about your studies..."
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
          }
        }}
        className="flex-1 min-h-[80px] border-0 bg-white shadow-sm resize-none focus:ring-2 focus:ring-blue-500"
        disabled={isLoading || !hasApiKey}
      />
      <div className="flex flex-col gap-2">
        <Button 
          onClick={sendMessage} 
          disabled={isLoading || !inputMessage.trim() || !hasApiKey}
          className="h-12 w-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </Button>
        <Button 
          onClick={clearChat} 
          variant="outline" 
          size="sm"
          disabled={!hasMessages}
          className="h-10 w-12 text-xs border-2 hover:bg-gray-100"
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default MessageInput;

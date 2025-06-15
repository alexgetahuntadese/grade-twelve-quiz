
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useChatGPT } from '@/hooks/useChatGPT';
import ChatHeader from './chat/ChatHeader';
import ApiKeyInput from './chat/ApiKeyInput';
import ChatMessages from './chat/ChatMessages';
import MessageInput from './chat/MessageInput';
import ProTips from './chat/ProTips';

const ChatGPT = () => {
  const {
    apiKey,
    setApiKey,
    showApiKey,
    setShowApiKey,
    messages,
    inputMessage,
    setInputMessage,
    isLoading,
    error,
    saveApiKey,
    sendMessage,
    clearChat,
  } = useChatGPT();

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl border-0 bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm">
      <ChatHeader />
      
      <CardContent className="space-y-6 p-6">
        <ApiKeyInput
          apiKey={apiKey}
          setApiKey={setApiKey}
          showApiKey={showApiKey}
          setShowApiKey={setShowApiKey}
          saveApiKey={saveApiKey}
        />

        {error && (
          <Alert variant="destructive" className="border-red-200 bg-red-50">
            <AlertDescription className="text-red-800">{error}</AlertDescription>
          </Alert>
        )}

        <ChatMessages messages={messages} isLoading={isLoading} />

        <MessageInput
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          sendMessage={sendMessage}
          clearChat={clearChat}
          isLoading={isLoading}
          hasApiKey={!!apiKey.trim()}
          hasMessages={messages.length > 0}
        />

        <ProTips />
      </CardContent>
    </Card>
  );
};

export default ChatGPT;

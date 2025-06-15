
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, Loader2, Key, Eye, EyeOff } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatGPT = () => {
  const [apiKey, setApiKey] = useState(() => {
    // Try to get API key from localStorage
    return localStorage.getItem('openai_api_key') || '';
  });
  const [showApiKey, setShowApiKey] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const saveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem('openai_api_key', apiKey.trim());
      setError('');
    }
  };

  const sendMessage = async () => {
    if (!apiKey.trim()) {
      setError('Please enter your OpenAI API key first');
      return;
    }

    if (!inputMessage.trim()) {
      setError('Please enter a message');
      return;
    }

    const userMessage: Message = { role: 'user', content: inputMessage };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputMessage('');
    setIsLoading(true);
    setError('');

    try {
      console.log('Sending request to OpenAI API...');
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey.trim()}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: newMessages,
          max_tokens: 1000,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Received response from OpenAI:', data);
      
      if (data.choices && data.choices[0] && data.choices[0].message) {
        const assistantMessage: Message = {
          role: 'assistant',
          content: data.choices[0].message.content
        };
        setMessages([...newMessages, assistantMessage]);
      } else {
        throw new Error('Invalid response format from OpenAI API');
      }
    } catch (err) {
      console.error('Error calling OpenAI API:', err);
      setError(err instanceof Error ? err.message : 'Failed to get response from ChatGPT');
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setError('');
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="w-6 h-6" />
          ChatGPT Assistant
        </CardTitle>
        <CardDescription>
          Chat with OpenAI's GPT model. Enter your OpenAI API key and start typing your message below.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* API Key Input */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Key className="w-4 h-4" />
            <span className="text-sm font-medium">OpenAI API Key</span>
          </div>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Input
                type={showApiKey ? "text" : "password"}
                placeholder="Enter your OpenAI API key (sk-...)"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3"
                onClick={() => setShowApiKey(!showApiKey)}
              >
                {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </div>
            <Button onClick={saveApiKey} variant="outline" size="sm">
              Save
            </Button>
          </div>
          <div className="text-xs text-gray-500">
            Your API key is stored locally in your browser and never sent to our servers.
            Get your key from <a href="https://platform.openai.com/account/api-keys" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">OpenAI Platform</a>.
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Chat Messages */}
        <div className="border rounded-lg p-4 min-h-[300px] max-h-[400px] overflow-y-auto bg-gray-50">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 mt-8">
              <MessageCircle className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Start a conversation with ChatGPT!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white border'
                    }`}
                  >
                    <div className="text-sm font-medium mb-1">
                      {message.role === 'user' ? 'You' : 'ChatGPT'}
                    </div>
                    <div className="whitespace-pre-wrap">{message.content}</div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border rounded-lg p-3 max-w-[80%]">
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>ChatGPT is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Message Input */}
        <div className="flex gap-2">
          <Textarea
            placeholder="Type your message here..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            className="flex-1 min-h-[60px]"
            disabled={isLoading || !apiKey.trim()}
          />
          <div className="flex flex-col gap-2">
            <Button 
              onClick={sendMessage} 
              disabled={isLoading || !inputMessage.trim() || !apiKey.trim()}
              className="px-4"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </Button>
            <Button 
              onClick={clearChat} 
              variant="outline" 
              size="sm"
              disabled={messages.length === 0}
            >
              Clear
            </Button>
          </div>
        </div>

        {/* Info */}
        <div className="text-xs text-gray-500 bg-gray-100 p-3 rounded">
          <p><strong>Note:</strong> Press Enter to send a message, Shift+Enter for new line.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatGPT;

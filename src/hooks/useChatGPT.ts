
import { useState } from 'react';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const useChatGPT = () => {
  const [apiKey, setApiKey] = useState(() => {
    // Try to get API key from localStorage
    return typeof window !== 'undefined' ? localStorage.getItem('openai_api_key') || '' : '';
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
        if (response.status === 401) {
          const errorData = await response.json();
          const message = errorData?.error?.message || 'Authentication failed. Please check your API key.';
          throw new Error(message);
        }
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

  return {
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
  };
};

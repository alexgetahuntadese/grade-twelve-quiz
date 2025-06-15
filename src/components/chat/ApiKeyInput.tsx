
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Key, Eye, EyeOff } from 'lucide-react';

interface ApiKeyInputProps {
  apiKey: string;
  setApiKey: (key: string) => void;
  showApiKey: boolean;
  setShowApiKey: (show: boolean) => void;
  saveApiKey: () => void;
}

const ApiKeyInput: React.FC<ApiKeyInputProps> = ({
  apiKey,
  setApiKey,
  showApiKey,
  setShowApiKey,
  saveApiKey,
}) => {
  return (
    <div className="space-y-3 p-4 bg-gray-50 rounded-lg border">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-blue-100 rounded-full">
          <Key className="w-4 h-4 text-blue-600" />
        </div>
        <span className="text-sm font-semibold text-gray-700">OpenAI API Configuration</span>
      </div>
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Input
            type={showApiKey ? "text" : "password"}
            placeholder="Enter your OpenAI API key (sk-...)"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="pr-12 h-11 border-2 focus:border-blue-500 transition-colors"
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9 hover:bg-gray-100"
            onClick={() => setShowApiKey(!showApiKey)}
          >
            {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </Button>
        </div>
        <Button 
          onClick={saveApiKey} 
          variant="outline" 
          className="h-11 px-6 border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50"
        >
          Save Key
        </Button>
      </div>
      <div className="text-xs text-gray-500 bg-white p-3 rounded border-l-4 border-l-blue-400">
        <span className="font-medium">🔒 Privacy Note:</span> Your API key is stored locally in your browser and never sent to our servers.
        <br />
        <span className="font-medium">Get your key:</span> <a href="https://platform.openai.com/account/api-keys" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">OpenAI Platform →</a>
      </div>
    </div>
  );
};

export default ApiKeyInput;

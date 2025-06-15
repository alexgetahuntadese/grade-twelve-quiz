
import React from 'react';
import { Sparkles } from 'lucide-react';

const ProTips = () => {
  return (
    <div className="text-xs text-gray-600 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-4 h-4 text-blue-500" />
        <span className="font-semibold">Pro Tips:</span>
      </div>
      <div className="grid md:grid-cols-2 gap-2">
        <p><strong>Enter:</strong> Send message</p>
        <p><strong>Shift+Enter:</strong> New line</p>
        <p><strong>Example:</strong> "Explain photosynthesis"</p>
        <p><strong>Example:</strong> "Help with math homework"</p>
      </div>
    </div>
  );
};

export default ProTips;

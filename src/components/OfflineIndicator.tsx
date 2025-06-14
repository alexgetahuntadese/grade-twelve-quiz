
import React from 'react';
import { WifiOff, Wifi, Download, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useOfflineStatus } from '@/hooks/useOfflineStatus';

const OfflineIndicator = () => {
  const { isOnline, isOffline, hasOfflineContent, canUseApp } = useOfflineStatus();

  if (isOnline && !hasOfflineContent) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {isOffline && (
        <Badge 
          variant={hasOfflineContent ? "secondary" : "destructive"} 
          className="flex items-center gap-2"
        >
          <WifiOff className="w-4 h-4" />
          {hasOfflineContent ? 'Offline Mode' : 'No Internet'}
        </Badge>
      )}
      
      {hasOfflineContent && (
        <Badge variant="outline" className="flex items-center gap-2 bg-green-50 border-green-200">
          <CheckCircle className="w-4 h-4 text-green-600" />
          <span className="text-green-700">Offline Ready</span>
        </Badge>
      )}

      {isOffline && !hasOfflineContent && (
        <Badge variant="secondary" className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          <span>Premium: Download for offline</span>
        </Badge>
      )}
    </div>
  );
};

export default OfflineIndicator;

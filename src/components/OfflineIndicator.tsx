
import React from 'react';
import { WifiOff, Wifi, Download, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useOfflineStatus } from '@/hooks/useOfflineStatus';

const OfflineIndicator = () => {
  let status = {
    isOnline: true,
    isOffline: false,
    hasOfflineContent: false,
    canUseApp: true
  };

  try {
    status = useOfflineStatus();
    console.log("OfflineIndicator status:", status);
  } catch (e) {
    console.error("OfflineIndicator crashed:", e);
    // Render fallback if hook fails
    return (
      <div className="fixed top-4 right-4 z-50 bg-red-200 text-red-900 font-bold px-4 py-2 rounded">
        OfflineStatus error: {String(e)}
      </div>
    );
  }

  if (status.isOnline && !status.hasOfflineContent) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {status.isOffline && (
        <Badge 
          variant={status.hasOfflineContent ? "secondary" : "destructive"} 
          className="flex items-center gap-2"
        >
          <WifiOff className="w-4 h-4" />
          {status.hasOfflineContent ? 'Offline Mode' : 'No Internet'}
        </Badge>
      )}

      {status.hasOfflineContent && (
        <Badge variant="outline" className="flex items-center gap-2 bg-green-50 border-green-200">
          <CheckCircle className="w-4 h-4 text-green-600" />
          <span className="text-green-700">Offline Ready</span>
        </Badge>
      )}

      {status.isOffline && !status.hasOfflineContent && (
        <Badge variant="secondary" className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          <span>Premium: Download for offline</span>
        </Badge>
      )}
    </div>
  );
};

export default OfflineIndicator;

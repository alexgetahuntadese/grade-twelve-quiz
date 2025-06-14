
import React, { useState, useEffect } from 'react';
import { isAppDownloadedForOffline } from '@/utils/offlineDownload';

export const useOfflineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [hasOfflineContent, setHasOfflineContent] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check if offline content is available
    setHasOfflineContent(isAppDownloadedForOffline());

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return {
    isOnline,
    isOffline: !isOnline,
    hasOfflineContent,
    canUseApp: isOnline || hasOfflineContent
  };
};

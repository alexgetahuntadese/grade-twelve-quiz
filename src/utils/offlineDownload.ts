
interface OfflineContent {
  subjects: any[];
  questions: any[];
  metadata: {
    downloadDate: number;
    version: string;
    totalSize: number;
  };
}

const OFFLINE_CONTENT_KEY = 'quiz_app_offline_content';
const DOWNLOAD_PROGRESS_KEY = 'quiz_app_download_progress';

export const downloadCompleteApp = async (onProgress?: (progress: number) => void): Promise<boolean> => {
  try {
    // Simulate downloading all content (in a real app, this would fetch from API)
    const steps = [
      'Downloading subjects...',
      'Downloading questions...',
      'Downloading assets...',
      'Processing content...',
      'Finalizing download...'
    ];

    for (let i = 0; i < steps.length; i++) {
      // Simulate download progress
      await new Promise(resolve => setTimeout(resolve, 1000));
      const progress = ((i + 1) / steps.length) * 100;
      onProgress?.(progress);
      
      // Save progress
      localStorage.setItem(DOWNLOAD_PROGRESS_KEY, JSON.stringify({
        step: steps[i],
        progress
      }));
    }

    // Create offline content package
    const offlineContent: OfflineContent = {
      subjects: [], // In real implementation, this would contain all subject data
      questions: [], // All questions from all subjects
      metadata: {
        downloadDate: Date.now(),
        version: '1.0.0',
        totalSize: 50 * 1024 * 1024 // 50MB estimated
      }
    };

    // Store offline content
    localStorage.setItem(OFFLINE_CONTENT_KEY, JSON.stringify(offlineContent));
    localStorage.removeItem(DOWNLOAD_PROGRESS_KEY);
    
    console.log('Complete app downloaded for offline use');
    return true;
  } catch (error) {
    console.error('Failed to download app for offline use:', error);
    return false;
  }
};

export const getOfflineContent = (): OfflineContent | null => {
  try {
    const content = localStorage.getItem(OFFLINE_CONTENT_KEY);
    return content ? JSON.parse(content) : null;
  } catch (error) {
    console.error('Failed to get offline content:', error);
    return null;
  }
};

export const getDownloadProgress = () => {
  try {
    const progress = localStorage.getItem(DOWNLOAD_PROGRESS_KEY);
    return progress ? JSON.parse(progress) : null;
  } catch (error) {
    return null;
  }
};

export const deleteOfflineContent = () => {
  try {
    localStorage.removeItem(OFFLINE_CONTENT_KEY);
    localStorage.removeItem(DOWNLOAD_PROGRESS_KEY);
    console.log('Offline content deleted');
  } catch (error) {
    console.error('Failed to delete offline content:', error);
  }
};

export const getOfflineContentSize = (): string => {
  const content = getOfflineContent();
  if (!content) return '0 MB';
  
  const sizeInMB = (content.metadata.totalSize / (1024 * 1024)).toFixed(1);
  return `${sizeInMB} MB`;
};

export const isAppDownloadedForOffline = (): boolean => {
  return getOfflineContent() !== null;
};

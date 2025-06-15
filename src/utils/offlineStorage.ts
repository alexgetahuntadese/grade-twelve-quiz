
interface OfflineQuizData {
  subject: string;
  chapter: string;
  difficulty: string;
  questions: any[];
  progress: {
    currentQuestionIndex: number;
    answers: { [key: number]: string };
    score: number;
  };
  timestamp: number;
}

const STORAGE_KEY = 'quiz_offline_data';

export const saveQuizToOfflineStorage = (data: OfflineQuizData) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    console.log('Quiz data saved to offline storage');
  } catch (error) {
    console.error('Failed to save quiz data offline:', error);
  }
};

export const getQuizFromOfflineStorage = (): OfflineQuizData | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to get quiz data from offline storage:', error);
    return null;
  }
};

export const clearOfflineStorage = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    console.log('Offline storage cleared');
  } catch (error) {
    console.error('Failed to clear offline storage:', error);
  }
};

export const isOnline = () => {
  return navigator.onLine;
};

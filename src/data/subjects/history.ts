
import { Chapter } from '../types';
import { foundationHistoryChapters } from './history/grade10';
import { grade11HistoryChapters } from './history/grade11';
import { grade12HistoryChapters } from './history/grade12/index';

export const historyChapters: Chapter[] = [
  ...foundationHistoryChapters,
  ...grade11HistoryChapters,
  ...grade12HistoryChapters
];

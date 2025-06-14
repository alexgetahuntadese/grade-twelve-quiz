
import { Chapter } from '../types';
import { grade10HistoryChapters } from './history/grade10';
import { grade11HistoryChapters } from './history/grade11';
import { grade12HistoryChapters } from './history/grade12';

export const historyChapters: Chapter[] = [
  ...grade10HistoryChapters,
  ...grade11HistoryChapters,
  ...grade12HistoryChapters
];

import { Chapter } from '../../../types';
import { unit1CapitalismNationalism } from './unit1-capitalism-nationalism';
import { unit2AfricaColonial } from './unit2-africa-colonial';

// Import remaining units from the original file temporarily
import { grade12HistoryChapters } from '../grade12';

export const grade12HistoryChaptersNew: Chapter[] = [
  unit1CapitalismNationalism,
  unit2AfricaColonial,
  // Keep the remaining 7 units from the original file
  ...grade12HistoryChapters.slice(2)
];


import { Chapter } from '../types';
import { foundationGeographyChapters } from './geography/foundation';
import { grade11GeographyChapters } from './geography/grade11';
import { grade12EthiopianGeographyChapters } from './geography/grade12-ethiopian';

export const geographyChapters: Chapter[] = [
  ...foundationGeographyChapters,
  ...grade11GeographyChapters,
  ...grade12EthiopianGeographyChapters
];


export interface Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation?: string;
}

export interface Chapter {
  id: string;
  name: string;
  description: string;
  questions: Question[];
}

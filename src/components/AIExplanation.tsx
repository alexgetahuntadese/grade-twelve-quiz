
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Languages, Loader2 } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface AIExplanationProps {
  question: string;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  subject: string;
}

const AIExplanation = ({ 
  question, 
  selectedAnswer, 
  correctAnswer, 
  isCorrect, 
  subject 
}: AIExplanationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'om'>('en');
  const [explanation, setExplanation] = useState<{en: string, om: string}>({en: '', om: ''});
  const [isLoading, setIsLoading] = useState(false);

  const generateExplanation = async (lang: 'en' | 'om') => {
    setIsLoading(true);
    
    try {
      // Simulate AI explanation generation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const englishExplanation = isCorrect 
        ? `Correct! "${correctAnswer}" is the right answer because it directly relates to the core concepts in ${subject}. This demonstrates your understanding of the fundamental principles.`
        : `The correct answer is "${correctAnswer}". You selected "${selectedAnswer}", which is not correct. In ${subject}, this concept is important because it forms the foundation for more advanced topics.`;
      
      const oromoExplanation = isCorrect
        ? `Sirrii! "${correctAnswer}" deebiin sirrii dha sababiin isaas gaa'ela bu'uuraa ${subject} keessatti argamu waliin wal qabatee. Kun hubannoo kee bu'uuraa agarsiisa.`
        : `Deebiin sirrii "${correctAnswer}" dha. Ati "${selectedAnswer}" filatte, kunis sirrii miti. ${subject} keessatti yaadni kun barbaachisaa dha sababiin isaas bu'uura gosoota ol'aanaa ta'eef.`;

      setExplanation({
        en: englishExplanation,
        om: oromoExplanation
      });
    } catch (error) {
      console.error('Error generating explanation:', error);
      setExplanation({
        en: 'Unable to generate explanation at this time.',
        om: 'Yeroo ammaa ibsa kennuu hin dandeenye.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && !explanation.en && !explanation.om) {
      generateExplanation(language);
    }
  }, [isOpen]);

  const handleLanguageSwitch = () => {
    const newLang = language === 'en' ? 'om' : 'en';
    setLanguage(newLang);
    
    if (!explanation[newLang] && !isLoading) {
      generateExplanation(newLang);
    }
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full mt-4 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 hover:from-blue-100 hover:to-purple-100 transition-all duration-200"
        >
          <Lightbulb className="w-4 h-4 mr-2 text-yellow-600" />
          💡 {language === 'en' ? 'Explanation' : 'Ibsa'}
          <div className="ml-auto">
            {isOpen ? '▲' : '▼'}
          </div>
        </Button>
      </CollapsibleTrigger>
      
      <CollapsibleContent className="mt-3">
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <Badge 
                variant={isCorrect ? "default" : "destructive"} 
                className={isCorrect ? "bg-green-500" : "bg-red-500"}
              >
                {language === 'en' 
                  ? (isCorrect ? 'Correct Answer' : 'Incorrect Answer')
                  : (isCorrect ? 'Deebii Sirrii' : 'Deebii Sirrii Miti')
                }
              </Badge>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLanguageSwitch}
                className="flex items-center gap-2 text-sm hover:bg-white/50"
              >
                <Languages className="w-4 h-4" />
                {language === 'en' ? 'Switch to Oromo' : 'Gara Afaan Ingilizii'}
              </Button>
            </div>
            
            <div className="space-y-3">
              {isLoading ? (
                <div className="flex items-center justify-center py-4">
                  <Loader2 className="w-5 h-5 animate-spin mr-2 text-blue-600" />
                  <span className="text-sm text-gray-600">
                    {language === 'en' ? 'Generating explanation...' : 'Ibsa qopheessaa jira...'}
                  </span>
                </div>
              ) : (
                <div className="text-sm leading-relaxed text-gray-800 bg-white/70 p-3 rounded-lg border border-amber-100">
                  {explanation[language] || (language === 'en' ? 'Click to generate explanation...' : 'Ibsa argachuuf cuqaasi...')}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default AIExplanation;

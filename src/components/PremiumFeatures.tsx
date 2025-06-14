
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Download, Trash2, CheckCircle, Crown, WifiOff } from 'lucide-react';
import { 
  downloadCompleteApp, 
  getOfflineContent, 
  getDownloadProgress, 
  deleteOfflineContent, 
  getOfflineContentSize,
  isAppDownloadedForOffline 
} from '@/utils/offlineDownload';
import { toast } from 'sonner';

interface PremiumFeaturesProps {
  isPremiumUser: boolean;
}

const PremiumFeatures: React.FC<PremiumFeaturesProps> = ({ isPremiumUser }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadStep, setDownloadStep] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [contentSize, setContentSize] = useState('0 MB');

  useEffect(() => {
    // Check if app is already downloaded
    setIsDownloaded(isAppDownloadedForOffline());
    setContentSize(getOfflineContentSize());

    // Check for ongoing download
    const progress = getDownloadProgress();
    if (progress) {
      setIsDownloading(true);
      setDownloadProgress(progress.progress);
      setDownloadStep(progress.step);
    }
  }, []);

  const handleDownload = async () => {
    if (!isPremiumUser) {
      toast.error('Premium subscription required for offline downloads');
      return;
    }

    setIsDownloading(true);
    setDownloadProgress(0);

    const success = await downloadCompleteApp((progress) => {
      setDownloadProgress(progress);
      const currentProgress = getDownloadProgress();
      if (currentProgress) {
        setDownloadStep(currentProgress.step);
      }
    });

    setIsDownloading(false);
    
    if (success) {
      setIsDownloaded(true);
      setContentSize(getOfflineContentSize());
      toast.success('App downloaded successfully! You can now use it completely offline.');
    } else {
      toast.error('Download failed. Please try again.');
    }
  };

  const handleDeleteOfflineContent = () => {
    deleteOfflineContent();
    setIsDownloaded(false);
    setContentSize('0 MB');
    toast.success('Offline content deleted');
  };

  if (!isPremiumUser) {
    return (
      <Card className="border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-yellow-600" />
            <CardTitle className="text-yellow-800">Premium Feature</CardTitle>
          </div>
          <CardDescription>
            Upgrade to Premium to download the complete app for offline use
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <WifiOff className="w-4 h-4" />
              <span>Complete offline access to all subjects and questions</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Download className="w-4 h-4" />
              <span>Download once, use anywhere without internet</span>
            </div>
            <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
              Upgrade to Premium
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Download className="w-5 h-5 text-blue-600" />
            <CardTitle className="text-blue-800">Offline Download</CardTitle>
          </div>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            <Crown className="w-3 h-3 mr-1" />
            Premium
          </Badge>
        </div>
        <CardDescription>
          Download the complete app with all content for offline use
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {isDownloaded && (
            <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-700">
                App downloaded ({contentSize}) - Ready for offline use
              </span>
            </div>
          )}

          {isDownloading && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{downloadStep}</span>
                <span>{Math.round(downloadProgress)}%</span>
              </div>
              <Progress value={downloadProgress} className="w-full" />
            </div>
          )}

          <div className="flex gap-2">
            {!isDownloaded && !isDownloading && (
              <Button onClick={handleDownload} className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Download App
              </Button>
            )}
            
            {isDownloaded && (
              <>
                <Button 
                  onClick={handleDownload} 
                  variant="outline"
                  className="flex-1"
                  disabled={isDownloading}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Re-download
                </Button>
                <Button 
                  onClick={handleDeleteOfflineContent}
                  variant="destructive"
                  size="icon"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </>
            )}
          </div>

          <div className="text-xs text-gray-500">
            • Download size: ~50MB
            • Includes all subjects and questions
            • Works completely offline
            • Updates require re-download
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PremiumFeatures;

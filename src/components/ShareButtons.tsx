import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { XIcon, LinkedinIcon, CopyIcon, CheckIcon } from "lucide-react";
import { Alert, AlertDescription } from '@/components/ui/alert';

const ShareButtonGroup: React.FC = () => {
  const [showCopiedMessage, setShowCopiedMessage] = useState<boolean>(false);

  const handleShare = (platform: 'twitter' | 'linkedin'): void => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Check out this awesome content!");

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
        break;
    }
  };

  const handleCopy = (): void => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setShowCopiedMessage(true);
      setTimeout(() => setShowCopiedMessage(false), 2000);
    });
  };

  return (
    <div className="space-y-4 py-2">
      <div className="flex space-x-2">
        <Button onClick={() => handleShare('twitter')} variant="outline">
          <XIcon className="w-4 h-4 mr-2" />
          Share on Twitter
        </Button>
        <Button onClick={() => handleShare('linkedin')} variant="outline">
          <LinkedinIcon className="w-4 h-4 mr-2" />
          Share on LinkedIn
        </Button>
        <Button onClick={handleCopy} variant="outline">
          {showCopiedMessage ? (
            <CheckIcon className="w-4 h-4 mr-2" />
          ) : (
            <CopyIcon className="w-4 h-4 mr-2" />
          )}
          {showCopiedMessage ? 'Copied!' : 'Copy Link'}
        </Button>
      </div>
      {showCopiedMessage && (
        <Alert>
          <AlertDescription>Link copied to clipboard!</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default ShareButtonGroup;
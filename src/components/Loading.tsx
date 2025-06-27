import React from 'react';
import { useTranslation } from 'react-i18next';

interface LoadingProps {
  tip?: string;
}

const Loading: React.FC<LoadingProps> = ({ tip }) => {
  const { t } = useTranslation();
  const loadingText = tip || t('common.loading');
  
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-2 text-gray-600">{loadingText}</p>
      </div>
    </div>
  );
};

export default Loading; 
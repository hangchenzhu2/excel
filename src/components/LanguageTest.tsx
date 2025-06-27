import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageTest: React.FC = () => {
  const { t, i18n } = useTranslation();

  const testKeys = [
    'header.title',
    'header.home',
    'header.chartMaker',
    'home.title',
    'home.subtitle',
    'home.getStarted',
    'chartMaker.title',
    'footer.copyright'
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Language Test</h2>
      <p className="mb-4">Current Language: <b className="text-blue-600">{i18n.language}</b></p>
      
      <div className="space-y-2">
        {testKeys.map(key => (
          <div key={key} className="flex items-center space-x-4 p-2 bg-gray-50 rounded">
            <span className="text-sm text-gray-500 w-32">{key}:</span>
            <span className="flex-1">{t(key)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageTest; 
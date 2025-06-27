import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">📊</span>
              </div>
              <div>
                <div className="text-xl font-bold">{t('header.title')}</div>
                <div className="text-blue-200 text-sm">Professional Charts</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-800/50 px-3 py-1 rounded-full text-sm">
                <span className="text-blue-200">✨</span> Free Forever
              </div>
              <div className="bg-purple-800/50 px-3 py-1 rounded-full text-sm">
                <span className="text-purple-200">🚀</span> No Registration
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-200">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">{t('footer.home')}</li>
              <li className="hover:text-white transition-colors cursor-pointer">{t('footer.chartMaker')}</li>
              <li className="hover:text-white transition-colors cursor-pointer">{t('footer.features')}</li>
              <li className="hover:text-white transition-colors cursor-pointer">{t('footer.howItWorks')}</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-200">{t('footer.support')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">{t('footer.help')}</li>
              <li className="hover:text-white transition-colors cursor-pointer">{t('footer.faq')}</li>
              <li className="hover:text-white transition-colors cursor-pointer">{t('footer.contact')}</li>
              <li className="hover:text-white transition-colors cursor-pointer">{t('footer.privacy')}</li>
              <li className="hover:text-white transition-colors cursor-pointer">{t('footer.terms')}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            {t('footer.copyright')}
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="text-gray-400 text-sm">
              Made with ❤️ for data visualization
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm">Online & Ready</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
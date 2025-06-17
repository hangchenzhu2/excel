import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">📊</span>
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Excel Chart Maker
                </div>
                <div className="text-xs text-gray-500 -mt-1">Professional Charts</div>
              </div>
            </Link>
          </div>
          <nav>
            <ul className="flex items-center space-x-8">
              <li>
                <Link
                  to="/"
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                    location.pathname === '/' 
                      ? 'bg-blue-50 text-blue-600 font-semibold' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Home
                  {location.pathname === '/' && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 rounded-full"></div>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  to="/chart-maker"
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                    location.pathname === '/chart-maker' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="flex items-center">
                    Chart Maker
                    {location.pathname !== '/chart-maker' && (
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    )}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header; 
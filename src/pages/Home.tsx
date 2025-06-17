import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const features = [
    { title: 'Upload Excel Files', description: 'Upload your Excel files directly (.xlsx, .xls, .csv) for instant chart creation' },
    { title: 'Download Charts', description: 'Export your charts as high-quality PNG, SVG files or share with direct links' },
    { title: 'Multiple Chart Types', description: 'Create 9 different chart types including bar, line, pie, radar, and advanced visualizations' }
  ];
  
  const chartTypes = [
    // 基础图表
    { 
      title: '📊 Bar Charts', 
      description: 'Perfect for comparing categories and showing discrete data values',
      category: 'Basic Charts',
      useCases: 'Sales comparison, survey results, categorical data'
    },
    { 
      title: '📈 Line Charts', 
      description: 'Ideal for showing trends, changes over time, and continuous data',
      category: 'Basic Charts',
      useCases: 'Time series, stock prices, temperature changes'
    },
    { 
      title: '📉 Area Charts', 
      description: 'Filled line charts that emphasize magnitude of change over time',
      category: 'Basic Charts',
      useCases: 'Revenue growth, population changes, cumulative data'
    },
    
    // 圆形图表
    { 
      title: '🥧 Pie Charts', 
      description: 'Show proportions and percentages of a whole dataset',
      category: 'Circular Charts',
      useCases: 'Market share, budget allocation, survey responses'
    },
    { 
      title: '🍩 Doughnut Charts', 
      description: 'Modern pie charts with center space for additional information',
      category: 'Circular Charts',
      useCases: 'Performance metrics, completion rates, resource usage'
    },
    { 
      title: '🎯 Polar Area Charts', 
      description: 'Circular bar charts that show data in a radial format',
      category: 'Circular Charts',
      useCases: 'Seasonal data, directional analysis, cyclic patterns'
    },
    
    // 高级图表
    { 
      title: '🕸️ Radar Charts', 
      description: 'Multi-dimensional data visualization for comparing multiple variables',
      category: 'Advanced Charts',
      useCases: 'Performance evaluation, skill assessment, product comparison'
    },
    { 
      title: '⚪ Scatter Plots', 
      description: 'Show correlation and relationships between two variables',
      category: 'Advanced Charts',
      useCases: 'Correlation analysis, outlier detection, regression analysis'
    },
    { 
      title: '🫧 Bubble Charts', 
      description: 'Three-dimensional data visualization with X, Y, and size dimensions',
      category: 'Advanced Charts',
      useCases: 'Risk vs return, market analysis, portfolio visualization'
    }
  ];
  
  return (
    <div className="space-y-16">
      {/* Hero Section with Gradient Background */}
      <section className="relative text-center py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -mx-4 -my-8 rounded-3xl"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Free Online Tool
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
            Excel Chart Maker
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto font-light">
            Transform your Excel data into <span className="font-semibold text-blue-600">stunning visualizations</span>
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Create professional charts in seconds with our easy-to-use online tool. No software installation required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/chart-maker">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="flex items-center">
                  Start Creating Charts
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </Link>
            <div className="flex items-center text-gray-600">
              <div className="flex -space-x-2 mr-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-sm">Trusted by 10,000+ users</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Our Chart Maker?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to make data visualization simple and professional
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const icons = ['📤', '💾', '📊'];
            const colors = ['blue', 'green', 'purple'];
            return (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-gray-200">
                  <div className={`w-16 h-16 bg-${colors[index]}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <span className="text-3xl">{icons[index]}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  <div className={`mt-4 w-12 h-1 bg-gradient-to-r from-${colors[index]}-500 to-${colors[index]}-600 rounded-full`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      
      {/* Chart Types Showcase */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 rounded-3xl"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              9 Chart Types Available
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Supported Chart Types
            </h2>
            <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto font-light">
              Create professional charts from your Excel data with our comprehensive collection of visualization types.
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each chart type is optimized for different data scenarios and business needs.
            </p>
          </div>
          
          {/* 按类别分组显示图表类型 */}
          <div className="space-y-12">
            {/* 基础图表 */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold mb-3 text-blue-600">📊 Basic Charts</h3>
                <p className="text-gray-600">Essential chart types for everyday data visualization</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {chartTypes.filter(chart => chart.category === 'Basic Charts').map((chart, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 group-hover:border-blue-200 group-hover:-translate-y-2">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <span className="text-2xl">{chart.title.split(' ')[0]}</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">{chart.title.substring(2)}</h4>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{chart.description}</p>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-blue-700">
                          <b className="text-blue-800">Best for:</b> {chart.useCases}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 圆形图表 */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold mb-3 text-green-600">🎯 Circular Charts</h3>
                <p className="text-gray-600">Perfect for showing proportions and percentages</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {chartTypes.filter(chart => chart.category === 'Circular Charts').map((chart, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100 group-hover:border-green-200 group-hover:-translate-y-2">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <span className="text-2xl">{chart.title.split(' ')[0]}</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">{chart.title.substring(2)}</h4>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{chart.description}</p>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm text-green-700">
                          <b className="text-green-800">Best for:</b> {chart.useCases}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 高级图表 */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold mb-3 text-purple-600">🚀 Advanced Charts</h3>
                <p className="text-gray-600">Sophisticated visualizations for complex data analysis</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {chartTypes.filter(chart => chart.category === 'Advanced Charts').map((chart, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 group-hover:border-purple-200 group-hover:-translate-y-2">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <span className="text-2xl">{chart.title.split(' ')[0]}</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">{chart.title.substring(2)}</h4>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{chart.description}</p>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="text-sm text-purple-700">
                          <b className="text-purple-800">Best for:</b> {chart.useCases}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 功能特色 */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl transform rotate-1"></div>
            <div className="relative bg-white p-10 rounded-3xl shadow-2xl transform -rotate-1">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Powerful Chart Features</h3>
                <p className="text-lg text-gray-600">Everything you need to create professional visualizations</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: '🎨', title: 'Custom Colors', desc: 'Professional color palettes and custom styling options', color: 'pink' },
                  { icon: '📱', title: 'Responsive Design', desc: 'Charts adapt perfectly to all screen sizes and devices', color: 'blue' },
                  { icon: '💾', title: 'Export Options', desc: 'Download as PNG, SVG, or share with direct links', color: 'green' },
                  { icon: '⚡', title: 'Real-time Preview', desc: 'See changes instantly as you modify your data', color: 'yellow' }
                ].map((feature, index) => (
                  <div key={index} className="text-center group">
                    <div className={`w-20 h-20 bg-${feature.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-4xl">{feature.icon}</span>
                    </div>
                    <h4 className="text-lg font-bold mb-3 text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 使用指南 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">How to Create Charts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get from data to beautiful charts in just three simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                icon: '📤',
                title: 'Upload Your Data',
                desc: 'Upload Excel files (.xlsx, .xls) or CSV files. Our system automatically detects columns and data types for optimal chart creation.',
                color: 'blue'
              },
              {
                step: '02',
                icon: '🎯',
                title: 'Choose Chart Type',
                desc: 'Select from 9 different chart types. Each type is designed for specific data scenarios with helpful descriptions and use cases.',
                color: 'green'
              },
              {
                step: '03',
                icon: '✨',
                title: 'Customize & Export',
                desc: 'Adjust colors, titles, and settings. Export your charts as PNG, SVG, or share them with direct links for presentations.',
                color: 'purple'
              }
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className={`absolute top-0 left-0 text-8xl font-bold text-${step.color}-100 -z-10 group-hover:scale-110 transition-transform duration-300`}>
                  {step.step}
                </div>
                <div className="relative z-10 pt-12">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${step.color}-400 to-${step.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {step.desc}
                  </p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Create Amazing Charts?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Transform your Excel spreadsheet data into professional, interactive charts with our free online Excel chart maker. 
              Whether you need to create bar charts for sales data, line charts for trends, pie charts for proportions, or advanced 
              visualizations like radar charts and bubble charts, our tool makes it simple and fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link to="/chart-maker">
                <button className="group px-10 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-50 transition-all duration-300 text-lg font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  <span className="flex items-center">
                    Start Creating Charts Now
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </Link>
              <div className="flex items-center text-blue-100">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No registration required • 100% Free
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">9</div>
                <div className="text-blue-200">Chart Types</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">10K+</div>
                <div className="text-blue-200">Happy Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-blue-200">Free to Use</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">∞</div>
                <div className="text-blue-200">Charts Created</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 
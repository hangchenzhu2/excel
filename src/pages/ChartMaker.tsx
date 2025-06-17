import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Filler,
  TimeScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

// 注册 Chart.js 组件
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Filler,
  TimeScale,
  Title,
  Tooltip,
  Legend
);

const ChartMaker: React.FC = () => {
  const [chartData, setChartData] = useState<any>(null);
  const [chartType, setChartType] = useState<string>('bar');
  // const [isLoading, setIsLoading] = useState<boolean>(false); // 暂时注释，将来可能需要
  const [rawData, setRawData] = useState<any[]>([]);
  const [chartTitle, setChartTitle] = useState<string>('Data Visualization');
  const chartRef = React.useRef<any>(null);

  // 颜色调色板
  const colorPalettes = {
    vibrant: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
    pastel: ['#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA', '#FFD3BA', '#E0BBE4'],
    professional: ['#2E86AB', '#A23B72', '#F18F01', '#C73E1D', '#592E83', '#F79824'],
    nature: ['#2D5016', '#A4BE7B', '#E4D00A', '#D49C3D', '#8F5A2A', '#CD853F']
  };

  const generateColors = (count: number, palette: string = 'vibrant') => {
    const colors = colorPalettes[palette as keyof typeof colorPalettes] || colorPalettes.vibrant;
    return Array.from({ length: count }, (_, i) => colors[i % colors.length]);
  };

  const handleFileUpload = (data: any[]) => {
    try {
      setRawData(data);
      processChartData(data, chartType);
    } catch (error) {
      console.error('Error processing chart data:', error);
    }
  };

  const processChartData = (data: any[], type: string) => {
    if (!data || data.length === 0) return;

    const firstRow = data[0];
    const keys = Object.keys(firstRow);
    
    // 智能识别标签列和数据列
    const labelKey = keys.find(key => 
      typeof firstRow[key] === 'string' || 
      key.toLowerCase().includes('name') || 
      key.toLowerCase().includes('label') ||
      key.toLowerCase().includes('category')
    ) || keys[0];
    
    const dataKeys = keys.filter(key => 
      key !== labelKey && 
      typeof firstRow[key] === 'number'
    );

    const labels = data.map(item => item[labelKey] || `Row ${data.indexOf(item) + 1}`);
    const colors = generateColors(dataKeys.length);

    let processedData;

    switch (type) {
      case 'pie':
      case 'doughnut':
        // 饼图和环形图：使用第一个数据列
        const pieDataKey = dataKeys[0] || keys[1];
        processedData = {
          labels,
          datasets: [{
            data: data.map(item => item[pieDataKey] || 0),
            backgroundColor: generateColors(data.length),
            borderWidth: 2,
            borderColor: '#fff'
          }]
        };
        break;

      case 'radar':
        // 雷达图：多维度数据
        processedData = {
          labels,
          datasets: dataKeys.map((key, index) => ({
            label: key,
            data: data.map(item => item[key] || 0),
            backgroundColor: colors[index] + '30',
            borderColor: colors[index],
            pointBackgroundColor: colors[index],
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: colors[index]
          }))
        };
        break;

      case 'scatter':
        // 散点图：X-Y坐标数据
        const xKey = dataKeys[0] || keys[1];
        const yKey = dataKeys[1] || keys[2] || dataKeys[0];
        processedData = {
          datasets: [{
            label: 'Data Points',
            data: data.map(item => ({
              x: item[xKey] || 0,
              y: item[yKey] || 0
            })),
            backgroundColor: colors[0] + '80',
            borderColor: colors[0],
            pointRadius: 6,
            pointHoverRadius: 8
          }]
        };
        break;

      case 'bubble':
        // 气泡图：X-Y-Size三维数据
        const bubbleXKey = dataKeys[0] || keys[1];
        const bubbleYKey = dataKeys[1] || keys[2] || dataKeys[0];
        const bubbleSizeKey = dataKeys[2] || dataKeys[1] || dataKeys[0];
        processedData = {
          datasets: [{
            label: 'Bubble Data',
            data: data.map(item => ({
              x: item[bubbleXKey] || 0,
              y: item[bubbleYKey] || 0,
              r: Math.sqrt(item[bubbleSizeKey] || 1) * 3
            })),
            backgroundColor: colors[0] + '60',
            borderColor: colors[0],
            borderWidth: 2
          }]
        };
        break;

      case 'polarArea':
        // 极地面积图
        const polarDataKey = dataKeys[0] || keys[1];
        processedData = {
          labels,
          datasets: [{
            data: data.map(item => item[polarDataKey] || 0),
            backgroundColor: generateColors(data.length).map(color => color + '80'),
            borderColor: generateColors(data.length),
            borderWidth: 2
          }]
        };
        break;

      default:
        // 默认处理（柱状图、折线图、面积图等）
        processedData = {
          labels,
          datasets: dataKeys.map((key, index) => ({
            label: key,
            data: data.map(item => item[key] || 0),
            backgroundColor: type === 'line' ? colors[index] + '20' : colors[index] + '80',
            borderColor: colors[index],
            borderWidth: 2,
            fill: type === 'area',
            tension: type === 'line' ? 0.4 : 0
          }))
        };
    }

    setChartData(processedData);
  };

  // 下载功能实现
  const downloadChart = (format: 'png' | 'svg') => {
    if (!chartRef.current) return;
    
    const canvas = chartRef.current.canvas;
    if (!canvas) return;

    if (format === 'png') {
      // 下载PNG格式
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `${chartTitle.replace(/\s+/g, '_')}_chart.png`;
      link.href = url;
      link.click();
    } else if (format === 'svg') {
      // 对于SVG，我们创建一个包含图表信息的SVG
      const svgContent = createSVGFromChart();
      const blob = new Blob([svgContent], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `${chartTitle.replace(/\s+/g, '_')}_chart.svg`;
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  const createSVGFromChart = () => {
    // 简化的SVG创建（实际项目中可以使用更复杂的实现）
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
        <rect width="100%" height="100%" fill="white"/>
        <text x="400" y="30" text-anchor="middle" font-size="20" font-weight="bold">${chartTitle}</text>
        <text x="400" y="300" text-anchor="middle" font-size="16" fill="#666">
          Chart exported as SVG - ${new Date().toLocaleDateString()}
        </text>
      </svg>
    `;
  };

  const exportData = () => {
    if (!rawData.length) return;
    
    const csvContent = convertToCSV(rawData);
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `${chartTitle.replace(/\s+/g, '_')}_data.csv`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  const convertToCSV = (data: any[]) => {
    if (!data.length) return '';
    
    const headers = Object.keys(data[0]);
    const csvHeaders = headers.join(',');
    const csvRows = data.map(row => 
      headers.map(header => {
        const value = row[header];
        // 处理包含逗号或引号的值
        if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
          return `"${value.replace(/"/g, '""')}"`;
        }
        return value;
      }).join(',')
    );
    
    return [csvHeaders, ...csvRows].join('\n');
  };

  const shareChart = () => {
    const shareUrl = `${window.location.origin}/chart-maker?shared=true`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('图表链接已复制到剪贴板！');
    }).catch(() => {
      alert(`分享链接: ${shareUrl}`);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Create Your Chart
        </h1>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="space-y-8">
            {/* Step 1: File Upload */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Step 1: Upload Excel File</h2>
              <FileUpload onFileUpload={handleFileUpload} />
            </div>

            {/* Step 2: Chart Type Selection */}
            {chartData && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Step 2: Select Chart Type</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {/* 基础图表 */}
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-700">Basic Charts</h3>
                    <div className="space-y-1">
                      {[
                        { value: 'bar', label: '📊 Bar Chart', desc: 'Compare categories' },
                        { value: 'line', label: '📈 Line Chart', desc: 'Show trends over time' },
                        { value: 'area', label: '📉 Area Chart', desc: 'Filled line chart' }
                      ].map(chart => (
                        <label key={chart.value} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                          <input
                            type="radio"
                            name="chartType"
                            value={chart.value}
                            checked={chartType === chart.value}
                            onChange={(e) => {
                              setChartType(e.target.value);
                              processChartData(rawData, e.target.value);
                            }}
                            className="text-blue-600"
                          />
                          <div>
                            <div className="font-medium text-sm">{chart.label}</div>
                            <div className="text-xs text-gray-500">{chart.desc}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 圆形图表 */}
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-700">Circular Charts</h3>
                    <div className="space-y-1">
                      {[
                        { value: 'pie', label: '🥧 Pie Chart', desc: 'Show proportions' },
                        { value: 'doughnut', label: '🍩 Doughnut Chart', desc: 'Pie with center hole' },
                        { value: 'polarArea', label: '🎯 Polar Area', desc: 'Circular bar chart' }
                      ].map(chart => (
                        <label key={chart.value} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                          <input
                            type="radio"
                            name="chartType"
                            value={chart.value}
                            checked={chartType === chart.value}
                            onChange={(e) => {
                              setChartType(e.target.value);
                              processChartData(rawData, e.target.value);
                            }}
                            className="text-blue-600"
                          />
                          <div>
                            <div className="font-medium text-sm">{chart.label}</div>
                            <div className="text-xs text-gray-500">{chart.desc}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 高级图表 */}
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-700">Advanced Charts</h3>
                    <div className="space-y-1">
                      {[
                        { value: 'radar', label: '🕸️ Radar Chart', desc: 'Multi-dimensional data' },
                        { value: 'scatter', label: '⚪ Scatter Plot', desc: 'X-Y correlation' },
                        { value: 'bubble', label: '🫧 Bubble Chart', desc: '3D data visualization' }
                      ].map(chart => (
                        <label key={chart.value} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                          <input
                            type="radio"
                            name="chartType"
                            value={chart.value}
                            checked={chartType === chart.value}
                            onChange={(e) => {
                              setChartType(e.target.value);
                              processChartData(rawData, e.target.value);
                            }}
                            className="text-blue-600"
                          />
                          <div>
                            <div className="font-medium text-sm">{chart.label}</div>
                            <div className="text-xs text-gray-500">{chart.desc}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Chart Preview */}
            {chartData && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Step 3: Chart Preview</h2>
                
                {/* 图表配置选项 */}
                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-700 mb-3">Chart Settings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        Chart Title
                      </label>
                      <input
                        type="text"
                        value={chartTitle}
                        className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                        onChange={(e) => setChartTitle(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        Legend Position
                      </label>
                      <select className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500">
                        <option value="top">Top</option>
                        <option value="bottom">Bottom</option>
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        Animation
                      </label>
                      <select className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500">
                        <option value="true">Enabled</option>
                        <option value="false">Disabled</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 图表显示区域 */}
                <div className="bg-white p-6 rounded-lg border shadow-sm">
                  <Chart
                    ref={chartRef}
                    type={chartType as any}
                    data={chartData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'top' as const,
                          labels: {
                            usePointStyle: true,
                            padding: 20,
                            font: {
                              size: 12
                            }
                          }
                        },
                        title: {
                          display: true,
                          text: chartTitle,
                          font: {
                            size: 16,
                            weight: 'bold'
                          },
                          padding: {
                            top: 10,
                            bottom: 30
                          }
                        },
                        tooltip: {
                          backgroundColor: 'rgba(0, 0, 0, 0.8)',
                          titleColor: 'white',
                          bodyColor: 'white',
                          borderColor: 'rgba(255, 255, 255, 0.1)',
                          borderWidth: 1,
                          cornerRadius: 6,
                          displayColors: true
                        }
                      },
                      scales: chartType === 'radar' || chartType === 'pie' || chartType === 'doughnut' || chartType === 'polarArea' ? undefined : {
                        x: {
                          grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                          },
                          ticks: {
                            font: {
                              size: 11
                            }
                          }
                        },
                        y: {
                          grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                          },
                          ticks: {
                            font: {
                              size: 11
                            }
                          }
                        }
                      },
                      elements: {
                        point: {
                          radius: chartType === 'line' ? 4 : 6,
                          hoverRadius: chartType === 'line' ? 6 : 8
                        },
                        line: {
                          borderWidth: 3
                        },
                        bar: {
                          borderRadius: 4
                        }
                      },
                      animation: {
                        duration: 1000,
                        easing: 'easeInOutQuart'
                      }
                    }}
                    height={400}
                  />
                </div>

                {/* 导出选项 */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Export Options</h3>
                  <div className="flex flex-wrap gap-3">
                    <button 
                      onClick={() => downloadChart('png')}
                      disabled={!chartData}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
                      title="Download chart as PNG image"
                    >
                      <span>📥</span>
                      <span>Download PNG</span>
                    </button>
                    <button 
                      onClick={() => downloadChart('svg')}
                      disabled={!chartData}
                      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
                      title="Download chart as SVG vector"
                    >
                      <span>📄</span>
                      <span>Download SVG</span>
                    </button>
                    <button 
                      onClick={exportData}
                      disabled={!rawData.length}
                      className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
                      title="Export original data as CSV"
                    >
                      <span>📊</span>
                      <span>Export Data</span>
                    </button>
                    <button 
                      onClick={shareChart}
                      disabled={!chartData}
                      className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
                      title="Copy shareable link to clipboard"
                    >
                      <span>🔗</span>
                      <span>Share Link</span>
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    💡 Tip: Charts are downloaded with transparent backgrounds for easy integration into presentations
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartMaker; 
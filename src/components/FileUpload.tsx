import React, { useRef } from 'react';
import * as XLSX from 'xlsx';

interface FileUploadProps {
  onFileUpload: (data: any[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        
        onFileUpload(jsonData);
      } catch (error) {
        console.error('解析Excel文件时出错:', error);
        alert('文件解析失败，请确保上传的是有效的Excel文件');
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
      <input
        ref={fileInputRef}
        type="file"
        accept=".xlsx,.xls,.csv"
        onChange={handleFileChange}
        className="hidden"
      />
      <div className="space-y-4">
        <div className="text-4xl text-gray-400">📊</div>
        <div>
          <p className="text-lg font-medium text-gray-700 mb-2">
            Click to upload Excel file
          </p>
          <p className="text-sm text-gray-500">
            Support .xlsx, .xls, .csv formats
          </p>
        </div>
        <button
          onClick={handleClick}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Choose File
        </button>
      </div>
    </div>
  );
};

export default FileUpload; 
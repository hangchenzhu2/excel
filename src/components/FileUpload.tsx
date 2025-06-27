import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import * as XLSX from 'xlsx';

interface FileUploadProps {
  onFileUpload: (data: any[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const { t } = useTranslation();
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
        console.error('Error parsing Excel file:', error);
        alert(t('chartMaker.uploadSection.uploadError'));
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
            {t('chartMaker.uploadSection.dragDrop')}
          </p>
          <p className="text-sm text-gray-500">
            {t('chartMaker.uploadSection.supportedFormats')}
          </p>
        </div>
        <button
          onClick={handleClick}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          {t('common.upload')}
        </button>
      </div>
    </div>
  );
};

export default FileUpload; 
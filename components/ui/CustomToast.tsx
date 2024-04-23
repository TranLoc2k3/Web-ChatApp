import React from 'react';

export interface ToastProps {
  title?: string;
  description: string;
  duration?: number;
  variant?: 'success' | 'info' | 'warning' | 'error' | 'default';
}

const CustomToast: React.FC<ToastProps> = ({
  title = '',
  description,
  duration = 3000,
  variant = 'default',
}) => {
  let bgColorClass = '';
  switch (variant) {
    case 'success':
      bgColorClass = 'bg-green-200';
      break;
    case 'error':
      bgColorClass = 'bg-red-200';
      break;
    case 'info':
      bgColorClass = 'bg-blue-200';
      break;
    default:
      bgColorClass = 'bg-gray-200';
      break;
  }

  return (
    <div className={`p-4 rounded-md shadow-md ${bgColorClass}`}>
      {title && <h2 className="text-lg font-semibold mb-1">{title}</h2>}
      <p>{description}</p>
    </div>
  );
};

export default CustomToast;

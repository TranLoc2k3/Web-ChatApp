import React from 'react';
import CustomToast,{ToastProps} from './CustomToast';

const useToast = () => {
  const toast = ({ title, description, duration, variant }: ToastProps) => {
    // Thêm logic để hiển thị Toast ở đây, ví dụ sử dụng một thư viện Toast
    // Ví dụ:
    showToast(<CustomToast title={title} description={description} variant={variant} />, duration);
  };

  return { toast };
};

export default useToast;

import { useState } from 'react';

export const useEntryForm = (onSubmit) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    emotion: '',
    content: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // 에러 상태 초기화
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = '제목을 입력해주세요';
    }
    if (!formData.date) {
      newErrors.date = '날짜를 선택해주세요';
    }
    if (!formData.content.trim()) {
      newErrors.content = '내용을 입력해주세요';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit(formData);
      return true;
    }
    return false;
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit
  };
}; 
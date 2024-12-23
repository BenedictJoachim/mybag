import React from 'react';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, placeholder }) => (
  <div className="flex flex-col gap-2">
    <label className="text-gray-700">{label}</label>
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="p-2 border rounded focus:outline-blue-500"
    />
  </div>
);

export default InputField;

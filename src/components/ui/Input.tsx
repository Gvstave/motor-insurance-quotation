import React from "react";

interface InputProps {
  name: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
}

export default function Input({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  required = true,
}: InputProps) {
  return (
    <div className="mb-4">
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
        className={`w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
}

import React, { FC } from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: FC<IProps> = ({ children, className, onClick }) => (
  <button
    onClick={onClick}
    type="button"
    className={`bg-purple-600 hover:bg-purple-500 text-white py-2 px-5 text-center ${className}`}
  >
    {children}
  </button>
);

export default Button;

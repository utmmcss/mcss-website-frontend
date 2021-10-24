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
    className={`bg-purple-700 text-white py-2 px-5 text-center rounded-md ripple ${className}`}
  >
    {children}
  </button>
);

export default Button;

import React, { FC } from 'react';
import classNames from 'classnames';

interface IProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: FC<IProps> = ({ children, className = '', onClick }) => (
  <button
    onClick={onClick}
    type="button"
    className={classNames('text-white py-2 px-5 text-center', className, {
      'bg-purple-600 hover:bg-purple-500': !className.includes('bg'),
    })}
  >
    {children}
  </button>
);

export default Button;

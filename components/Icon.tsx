import React, { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variations?: 'outlined' | 'filled' | 'round' | 'sharp' | 'two-tone';
}

// refer to https://fonts.google.com/icons for available fonts
// eslint-disable-next-line object-curly-newline
const Icon: FC<IProps> = ({ children, className, size = 'md', variations = 'filled' }) => (
  <span
    className={`material-icons${
      variations === 'filled' ? '' : `-${variations}`
    } ${className} ${size}`}
  >
    {children}
  </span>
);

export default Icon;

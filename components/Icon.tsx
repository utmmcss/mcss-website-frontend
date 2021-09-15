import React, { FC, ReactNode } from 'react';

interface IProps {
  /** children will be the name of the icon you wish to include.
   * refer to refer to https://fonts.google.com/icons for available icons */
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variations?: 'outlined' | 'filled' | 'round' | 'sharp' | 'two-tone';
}

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

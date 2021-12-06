import { FC, ReactNode } from 'react';
import Button from './Button';

interface IProps {
  children: ReactNode;
  icon: ReactNode;
  className?: string;
  onClick?: () => void;
  iconPos?: 'left' | 'right';
}

const IconButton: FC<IProps> = ({ children, icon, className, onClick, iconPos = 'right' }) => (
  <Button className={className} onClick={onClick}>
    <div className="flex items-center justify-center">
      {iconPos === 'left' && icon}
      <div className="text-left">{children}</div>
      {iconPos === 'right' && icon}
    </div>
  </Button>
);

export default IconButton;

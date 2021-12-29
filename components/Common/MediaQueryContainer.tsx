import { FC } from 'react';
import classNames from 'classnames';

interface IProps {
  showOnMobile?: boolean;
  hideOnMobile?: boolean;
  children: JSX.Element;
  className?: string;
}

const MediaQueryContainer: FC<IProps> = ({ children, showOnMobile, hideOnMobile, className }) => (
  <div
    className={classNames(className, {
      'md:hidden': showOnMobile,
      'hidden md:block': hideOnMobile,
    })}
  >
    {children}
  </div>
);

export default MediaQueryContainer;

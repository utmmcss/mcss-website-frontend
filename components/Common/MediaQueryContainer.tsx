import { FC } from 'react';
import classNames from 'classnames';

interface IProps {
  showOnMobile?: boolean;
  hideOnMobile?: boolean;
  children: JSX.Element;
}

const MediaQueryContainer: FC<IProps> = ({ children, showOnMobile, hideOnMobile }) => (
  <div
    className={classNames({ 'md:hidden': showOnMobile, 'hidden md:block': hideOnMobile })}
  >
    {children}
  </div>
);

export default MediaQueryContainer;

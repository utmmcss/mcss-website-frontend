/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';
import Image from 'next/image';

interface IProps {
  /** width and height of avatar */
  size?: number;
  className?: string;
  imgSrc: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

const Avatar: FC<IProps> = ({
  size = 100,
  className,
  imgSrc,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
    className={className}
  >
    <Image alt="avatar" src={imgSrc} layout="fixed" width={size} height={size} priority />
  </div>
);

export default Avatar;

import React, { FC } from 'react';
import Image from 'next/image';

interface IProps {
  /** width and height of avatar */
  size?: number;
  className?: string;
}

const Avatar: FC<IProps> = ({ size = 100, className }) => (
  <div className={className}>
    <Image
      alt="avatar"
      src={`https://i.pravatar.cc/${size}`}
      layout="fixed"
      width={size}
      height={size}
    />
  </div>
);

export default Avatar;

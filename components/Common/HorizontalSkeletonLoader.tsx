import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface IProps {
  numSkeletons?: number;
  count?: number;
  className?: string;
}

const HorizontalSkeletonLoader: FC<IProps> = ({
  numSkeletons = 3,
  count = 5,
  className = 'w-1/4',
}) => (
  <div className="flex justify-around">
    {[...Array(numSkeletons)].map(() => (
      <div className={className}>
        <Skeleton count={count} />
      </div>
    ))}
  </div>
);

export default HorizontalSkeletonLoader;

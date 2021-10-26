import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  className?: string;
}

const SectionWrapper: FC<IProps> = ({ children, title, subtitle, className }) => (
  <div className={`my-20 ${className}`}>
    <hr className="mt-3 w-8 h-1 text-center mx-auto mb-2 bg-purple-600" />
    <p className="text-center text-gray-400 mb-2">{title}</p>
    <h1 className="text-4xl text-center font-bold mb-5">{subtitle}</h1>
    {children}
  </div>
);

export default SectionWrapper;

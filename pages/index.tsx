import { FC } from 'react';

interface TestProps {
  title: string;
}

const TestComp: FC<TestProps> = ({ title }) => <div>{title}</div>;

const Home: FC = () => (
  <div>
    <TestComp />
  </div>
);

export default Home;

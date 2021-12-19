import { FC } from 'react';
import TextLoop from 'react-text-loop';

const Tag: FC<{ categories: string[] }> = ({ categories }) => (
  <div className="tag">
    {categories.length === 1 ? (
      categories[0]
    ) : (
      <TextLoop>
        {categories.map((category) => (
          <div>{category}</div>
        ))}
      </TextLoop>
    )}
  </div>
);

export default Tag;

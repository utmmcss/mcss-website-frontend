import { FC } from 'react';
import TextLoop from 'react-text-loop';

/**
 * @param categories a list of strings be be cycled through in the tag
 * @description you will need to implement a class called tag, see
 * `_EventSection.scss` for example
 */
const Tag: FC<{ categories: string[] }> = ({ categories }) => (
  <div className="tag">
    {categories.length === 1 ? (
      categories[0]
    ) : (
      <TextLoop>
        {categories.map((category, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i}>{category}</div>
        ))}
      </TextLoop>
    )}
  </div>
);

export default Tag;

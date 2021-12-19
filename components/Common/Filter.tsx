import { FC } from 'react';

interface FilterProps {
  options: Omit<Option, 'clicked'>[];
  selectedOptions: string[];
}

interface Option {
  name: string;
  onClick: () => void;
  clicked: boolean;
}

const OptionButton: FC<Option> = ({ name, clicked, onClick }) => (
  <button type="button" onClick={onClick} className="m-5">
    <p style={{ color: clicked ? '#7d25af' : '#7d7b76' }}>{name}</p>
  </button>
);

const Filter: FC<FilterProps> = ({ options, selectedOptions }) => (
  <div className="ml-10 mr-10">
    {options.map(({ name, onClick }) => (
      <OptionButton
        key={name}
        name={name}
        onClick={onClick}
        clicked={selectedOptions.includes(name)}
      />
    ))}
  </div>
);

export default Filter;

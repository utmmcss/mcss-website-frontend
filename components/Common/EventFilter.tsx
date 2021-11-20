import React, { FC, useState } from 'react';

interface Props {
  optionNames: Array<string>
}

interface OptionButtonProps {
  optionName: string
}

const OptionButton: FC<OptionButtonProps> = ({ optionName } : OptionButtonProps) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <button type="button" onClick={handleClick} className="m-5">
      {clicked
        ? <p style={{ color: '#7d25af' }}>{optionName}</p>
        : <p style={{ color: '#7d7b76' }}>{optionName}</p>}
    </button>
  );
};

const EventFilter: FC<Props> = ({ optionNames }: Props) => {
  const options = optionNames.map((option: string) => (
    <OptionButton optionName={option} />
  ));
  return (
    <div className="ml-10 mr-10">
      <>{options}</>
    </div>
  );
};

export default EventFilter;

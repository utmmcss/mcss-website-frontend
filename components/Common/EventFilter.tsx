import React, { FC, useState } from 'react';

interface Props {
  optionNames: Array<string>
}

interface OptionButtonProps {
  optionName: string
}

const OptionButton: FC<OptionButtonProps> = ({ optionName } : OptionButtonProps) => {
  const [clicked, setClicked] = useState(false);

  return (
    <button type="button" onClick={() => setClicked(!clicked)} className="m-5">
      <p style={{ color: clicked ? '#7d25af' : '#7d7b76' }}>{optionName}</p>
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

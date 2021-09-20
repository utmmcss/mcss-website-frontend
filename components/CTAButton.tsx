import React, { FC } from 'react';

interface ButtonProps {
  icon?: JSX.Element;
  text: string;
  icon_pos?: 'left' | 'right';
}

const CTAButton:FC<ButtonProps> = ({ icon, icon_pos = 'right', text }) => (
  <button type="button" className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-10 mt-3">
    {icon_pos === 'left' && icon}
    <span>{text}</span>
    {icon_pos === 'right' && icon}
  </button>
);

export default CTAButton;

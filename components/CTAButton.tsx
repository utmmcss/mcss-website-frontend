interface ButtonProps {
  icon?: JSX.Element;
  text: string;
  icon_pos?: 'left' | 'right';
}

const CTAButton = ({ icon, icon_pos = 'right', text }: ButtonProps) => (
  <button type="button" className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-10 mt-3">
    {icon_pos === 'left' && icon}
    <span>{text}</span>
    {icon_pos === 'right' && icon}
  </button>
);

CTAButton.defaultProps = {
  icon: null,
  icon_pos: null,
};

export default CTAButton;

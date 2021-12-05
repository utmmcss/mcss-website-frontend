import { FC } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// see https://react-slick.neostack.com/docs/api for API
type SliderType = Slider['props'];

const CustomSlider: FC<SliderType> = ({ children, ...props }) => (
  <Slider {...props}>{children}</Slider>
);

export default CustomSlider;

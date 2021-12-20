import { FC } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type SliderType = Slider['props'];

/**
 * @description see https://react-slick.neostack.com/docs/api for API
 */
const CustomSlider: FC<SliderType> = ({ children, ...props }) => (
  <Slider {...props}>{children}</Slider>
);

export default CustomSlider;

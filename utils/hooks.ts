import { useState, useEffect } from 'react';

function useWindowDimensions() {
  const [height, setHeight] = useState(1000);
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);

    function updateDimensions() {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return { height, width };
}

// eslint-disable-next-line import/prefer-default-export
export const useIsMobile = (): boolean => useWindowDimensions().width < 768;

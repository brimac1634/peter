import { useEffect, useState, useRef } from 'react';

export const useScrollY = () => {
    const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
      function handleScroll() {
        setScrollY(window.scrollY)
      };
  
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return scrollY
}

export const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
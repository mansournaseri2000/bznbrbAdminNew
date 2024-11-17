// components/LazyLoadWrapper.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

// components/LazyLoadWrapper.tsx

// components/LazyLoadWrapper.tsx

interface LazyLoadWrapperProps {
  children: JSX.Element;
}

const LazyLoadWrapper = ({ children }: LazyLoadWrapperProps) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect after it's loaded
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ width: '100%' }} ref={ref}>
      {isVisible ? children : null}
    </div>
  );
};

export default LazyLoadWrapper;

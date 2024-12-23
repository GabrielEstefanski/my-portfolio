import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const AnimatedContainer = styled.div`
  opacity: 0;
  transform: translateY(-40px);
  transition: opacity 2.0s ease-out, transform 2.0s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FadeInOnScroll = ({ children, threshold = 0.1, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [threshold]);

  return (
    <AnimatedContainer
      ref={containerRef}
      className={`${className} ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </AnimatedContainer>
  );
};

export default FadeInOnScroll;

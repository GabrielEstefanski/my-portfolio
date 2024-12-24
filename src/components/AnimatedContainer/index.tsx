import { useEffect, useState, useRef } from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';

const AnimatedContainer = styled.div`
  opacity: 0;
  transform: translateY(-40px);
  transition: opacity 1.5s ease-out, transform 1.5s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;


const FadeInOnScroll = ({ children, threshold = 0.1, className = '' }: { children: ReactNode, threshold?: number, className?: string }) => {
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

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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

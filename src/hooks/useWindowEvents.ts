import { useState, useEffect, useCallback } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

interface ScrollPosition {
  x: number;
  y: number;
}

interface UseWindowEventsOptions {
  debounceTime?: number;
  onResize?: (size: WindowSize) => void;
  onScroll?: (position: ScrollPosition) => void;
}

type DebouncedFunction<T extends (...args: unknown[]) => unknown> = (
  ...args: Parameters<T>
) => void;

export const useWindowEvents = (options: UseWindowEventsOptions = {}) => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: window.scrollX,
    y: window.scrollY,
  });

  const debounce = useCallback(
    <T extends (...args: unknown[]) => unknown>(
      func: T,
      wait: number
    ): DebouncedFunction<T> => {
      let timeout: NodeJS.Timeout;
      return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
      };
    },
    []
  );

  const handleResize = useCallback(
    debounce(() => {
      const newSize = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      setWindowSize(newSize);
      options.onResize?.(newSize);
    }, options.debounceTime || 250),
    [options.debounceTime, options.onResize]
  );

  const handleScroll = useCallback(
    debounce(() => {
      const newPosition = {
        x: window.scrollX,
        y: window.scrollY,
      };
      setScrollPosition(newPosition);
      options.onScroll?.(newPosition);
    }, options.debounceTime || 250),
    [options.debounceTime, options.onScroll]
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleResize, handleScroll]);

  return {
    windowSize,
    scrollPosition,
  };
}; 
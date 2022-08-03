import { useEffect, useRef, useState } from 'react';

export function useIsVisible({ once, threshold } = {}) {
  const [isVisible, setIsVisible] = useState(false);

  const elementRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          if (once) return observer.disconnect();
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold,
      }
    );

    observer.current.observe(elementRef.current);
  }, [once, threshold]);

  return { isVisible, elementRef };
}

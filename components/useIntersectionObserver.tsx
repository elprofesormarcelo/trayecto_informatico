import { useState, useEffect, RefObject } from 'react';

interface ObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Un custom hook que detecta cuando un elemento referenciado entra en el viewport.
 * @param elementRef La referencia al elemento a observar.
 * @param options Opciones de configuración para el Intersection Observer.
 * @returns Un booleano que indica si el elemento es visible.
 */
const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  }: ObserverOptions = {}
): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const node = elementRef?.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (triggerOnce) {
            observer.unobserve(node);
          }
        } else {
          if (!triggerOnce) {
            setIntersecting(false);
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, threshold, rootMargin, triggerOnce]);

  return isIntersecting;
};

export default useIntersectionObserver;

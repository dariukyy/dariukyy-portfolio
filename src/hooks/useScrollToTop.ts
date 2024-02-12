import { useRef, useCallback, useState, useEffect } from "react";

export const useScrollToTop = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isAtTop, setIsAtTop] = useState(true);

  const checkIsAtTop = useCallback(() => {
    if (ref.current) {
      setIsAtTop(ref.current.scrollTop === 0);
    }
  }, []);

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", checkIsAtTop);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", checkIsAtTop);
      }
    };
  }, [checkIsAtTop]);

  const scrollToTop = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return [ref, scrollToTop, isAtTop] as const;
};

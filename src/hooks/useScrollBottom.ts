import { useState, useEffect, RefObject, useCallback } from "react";

export const useScrollBottom = (ref: RefObject<HTMLDivElement>): boolean => {
  const [isBottom, setIsBottom] = useState(false);
  const threshold = 80; // 5rem = 80px if root font size is 16px

  const handleScroll = useCallback((): void => {
    if (ref.current) {
      const scrollHeight = ref.current.scrollHeight;
      const scrollTop = ref.current.scrollTop;
      const clientHeight = ref.current.clientHeight;
      setIsBottom(scrollTop + clientHeight >= scrollHeight - threshold);
    }
  }, [ref]);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
      return () => {
        element.removeEventListener("scroll", handleScroll);
      };
    }
  }, [ref, handleScroll]);

  return isBottom;
};

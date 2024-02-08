import { useEffect, useRef, MutableRefObject } from "react";

export function useOutsideClick(
  handler: () => void,
  listenCapturing: boolean = true
): MutableRefObject<null | HTMLUListElement> {
  const ref = useRef<null | HTMLUListElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    }
    function handleEscPress(e: KeyboardEvent) {
      if (e.code === "Escape") handler();
    }
    document.addEventListener("click", handleClick, listenCapturing);
    document.addEventListener("keydown", handleEscPress, listenCapturing);

    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
      document.removeEventListener("keydown", handleEscPress, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return ref;
}

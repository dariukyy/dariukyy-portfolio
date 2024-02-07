import { useEffect, useState } from "react";

function useSidebarWidth(): string {
  const [sidebarWidth, setSidebarWidth] = useState("4.8rem");

  useEffect(() => {
    function handleResize() {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setSidebarWidth("17rem");
      } else {
        setSidebarWidth("4.8rem");
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return sidebarWidth;
}

export default useSidebarWidth;

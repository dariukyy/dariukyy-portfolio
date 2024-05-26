import { useEffect } from "react";

function ProgressBar({
  setScrollPercentage,
  scrollPercentage,
}: {
  setScrollPercentage: (scrollPercentage: number) => void;
  scrollPercentage: number;
}) {
  useEffect(() => {
    function handleScroll() {
      const scrollContainer = document.querySelector(".ScrollComponent");
      if (scrollContainer) {
        const scrollPosition = scrollContainer.scrollTop;
        const totalScrollHeight =
          scrollContainer.scrollHeight - scrollContainer.clientHeight;
        const scrollPercent = (scrollPosition / totalScrollHeight) * 100;
        setScrollPercentage(scrollPercent);
      }
    }

    const scrollContainer = document.querySelector(".ScrollComponent");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [setScrollPercentage]);

  return (
    <div
      id="progress-container"
      style={{
        zIndex: 100,
        height: "6px",
        width: "100%",
        backgroundColor: "transparent",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <div
        className="progress-fill"
        style={{
          zIndex: 100,
          height: "100%",
          width: `${scrollPercentage}%`,
          backgroundColor: "var(--color-brand-500)",
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;

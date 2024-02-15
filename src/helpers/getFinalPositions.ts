export function getFinalPositions(path: string) {
  if (path === "/about") {
    return {
      finalPositionForBubble1: {
        top: "18%",
        right: "0%",
        bottom: "20%",
        left: "-70%",
      },
      finalPositionForBubble2: {
        top: "-22%",
        right: "0%",
        bottom: "0%",
        left: "18%",
      },
    };
  } else if (path === "/contact") {
    return {
      finalPositionForBubble1: {
        top: "16%",
        right: "0%",
        bottom: "20%",
        left: "-73%",
      },
      finalPositionForBubble2: {
        top: "-26%",
        right: "0%",
        bottom: "0%",
        left: "10%",
      },
    };
  } else if (path === "/skills") {
    return {
      finalPositionForBubble1: {
        top: "8%",
        right: "0%",
        bottom: "20%",
        left: "-46%",
      },
      finalPositionForBubble2: {
        top: "-20%",
        right: "0%",
        bottom: "0%",
        left: "31%",
      },
    };
  }
}

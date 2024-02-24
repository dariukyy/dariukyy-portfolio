import { Toaster } from "react-hot-toast";
import useSidebarWidth from "../hooks/useSideBarWidth";

function ToasterComponent() {
  const sideBarWidth = useSidebarWidth();

  return (
    <Toaster
      position="top-center"
      gutter={12}
      containerStyle={{
        marginLeft: sideBarWidth,
      }}
      toastOptions={{
        success: {
          duration: 3000,
        },
        error: {
          duration: 5000,
        },
        style: {
          fontSize: "16px",
          maxWidth: "500px",
          padding: "16px 24px",
          backgroundColor: "var(--color-grey-0)",
          color: "var(--color-grey-700)",
        },
      }}
    />
  );
}

export default ToasterComponent;

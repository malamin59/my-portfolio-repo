import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // slight delay to wait for render
      }
    }
  }, [location]);

  return null;
};

export default ScrollToHashElement;

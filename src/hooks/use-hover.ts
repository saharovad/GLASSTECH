import { useEffect, useRef, useState } from "react";

export const useHover = <T extends HTMLElement>() => {
  const element = useRef<T>(null);
  const [hovered, setHovered] = useState<boolean>(false);
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", () => setHovered(true));
      element.current.addEventListener("mouseleave", () => setHovered(false));
    }
    return () => {
      setHovered(false);
    };
  }, []);

  return { hovered, element };
};

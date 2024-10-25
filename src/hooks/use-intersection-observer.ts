import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) setVisible(true);
        else setVisible(false);
      });
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return { ref, visible };
};

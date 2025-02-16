import { useEffect, useState } from "react";

type ScreenWidthNames = "small" | "medium" | "large";

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [screenWidthName, setScreenWidthName] =
    useState<ScreenWidthNames>("medium");

  useEffect(() => {
    const handleChange = () => {
      const width = window.innerWidth;
      setScreenWidth(width);

      if (width < 500) {
        setScreenWidthName("small");
      } else if (width < 1024) {
        setScreenWidthName("medium");
      } else {
        setScreenWidthName("large");
      }
    };

    addEventListener("resize", handleChange);

    handleChange();

    return () => {
      removeEventListener("resize", handleChange);
    };
  }, []);

  return [screenWidth, screenWidthName];
};

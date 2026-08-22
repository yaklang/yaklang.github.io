import { useEffect, useState } from "react";
import { useHomeSlideIndex } from "./HomeSlideContext";

/**
 * Keep expensive media out of SSR and the initial network waterfall. Once its
 * screen has actually been visited, keep it available for the rest of the visit.
 */
export const useLoadWhenHomeSlide = (slideIndex: number): boolean => {
  const activeIndex = useHomeSlideIndex();
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (activeIndex === slideIndex) setShouldLoad(true);
  }, [activeIndex, slideIndex]);

  return shouldLoad;
};

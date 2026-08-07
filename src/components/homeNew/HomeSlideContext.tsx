import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";

interface HomeSlideActions {
  setActiveIndex: (index: number) => void;
  goToSlide: (index: number) => void;
  registerSwiper: (slideTo: ((index: number) => void) | null) => void;
}

/** -1：无 Provider（非首页）；0+：当前整屏下标 */
const HomeSlideIndexContext = createContext<number>(-1);
/** 导航只关心是否在 Hero，单独订阅避免 1→2→3 时重渲染 */
const HomeSlideIsHeroContext = createContext(false);
const HomeSlideActionsContext = createContext<HomeSlideActions | null>(null);

const NOOP_ACTIONS: HomeSlideActions = {
  setActiveIndex: () => {},
  goToSlide: () => {},
  registerSwiper: () => {},
};

export const HomeSlideProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeIndex, setActiveIndexState] = useState(0);
  const slideToRef = useRef<((index: number) => void) | null>(null);

  const setActiveIndex = useCallback((index: number) => {
    setActiveIndexState((prev) => (prev === index ? prev : index));
  }, []);

  const registerSwiper = useCallback(
    (slideTo: ((index: number) => void) | null) => {
      slideToRef.current = slideTo;
    },
    [],
  );

  const goToSlide = useCallback((index: number) => {
    slideToRef.current?.(index);
  }, []);

  const actions = useMemo(
    () => ({ setActiveIndex, goToSlide, registerSwiper }),
    [setActiveIndex, goToSlide, registerSwiper],
  );

  const isHero = activeIndex === 0;

  return (
    <HomeSlideActionsContext.Provider value={actions}>
      <HomeSlideIndexContext.Provider value={activeIndex}>
        <HomeSlideIsHeroContext.Provider value={isHero}>
          {children}
        </HomeSlideIsHeroContext.Provider>
      </HomeSlideIndexContext.Provider>
    </HomeSlideActionsContext.Provider>
  );
};

/** 仅订阅当前屏下标 */
export function useHomeSlideIndex(): number {
  return useContext(HomeSlideIndexContext);
}

/** 仅订阅是否 Hero 屏（导航样式用） */
export function useHomeSlideIsHero(): boolean {
  return useContext(HomeSlideIsHeroContext);
}

/** 稳定 actions，不随 activeIndex 变化而重渲染 */
export function useHomeSlideActions(): HomeSlideActions {
  return useContext(HomeSlideActionsContext) ?? NOOP_ACTIONS;
}

/** @deprecated 会同时订阅 index + actions；优先用上面几个钩子 */
export function useHomeSlide(): HomeSlideActions & { activeIndex: number } {
  const activeIndex = useHomeSlideIndex();
  const actions = useHomeSlideActions();
  const ctx = useContext(HomeSlideActionsContext);
  if (!ctx) {
    return {
      activeIndex: -1,
      ...NOOP_ACTIONS,
    };
  }
  return { activeIndex, ...actions };
}

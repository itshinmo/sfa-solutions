import { useCallback, useSyncExternalStore } from "react";

export const MOBILE_BREAKPOINT = 768;

/**
 * Subscribes to a CSS media query using `useSyncExternalStore`.
 *
 * Unlike a `useState` + `useEffect` implementation this never renders a wrong
 * value during the first paint and shares the browser's single listener.
 */
export const useMediaQuery = (query: string) => {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const mediaQueryList = window.matchMedia(query);

      mediaQueryList.addEventListener("change", onStoreChange);

      return () => mediaQueryList.removeEventListener("change", onStoreChange);
    },
    [query],
  );

  const getSnapshot = useCallback(
    () => window.matchMedia(query).matches,
    [query],
  );

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
};

export const useIsMobile = () =>
  useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

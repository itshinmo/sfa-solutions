import { ROUTES } from "@/constants/routes";
import { useCallback, useSyncExternalStore } from "react";
import { useLocation } from "react-router";

const HEADER_ELEMENT_ID = "site-header";
const HERO_ELEMENT_ID = "home-hero";
const FALLBACK_HEADER_HEIGHT = 80;

const getElement = (id: string) =>
  typeof document === "undefined" ? null : document.getElementById(id);

const getHeaderHeight = () =>
  getElement(HEADER_ELEMENT_ID)?.offsetHeight ?? FALLBACK_HEADER_HEIGHT;

/**
 * Returns `true` while the sticky header sits on top of the homepage hero.
 *
 * The header can then render transparently with light text. Once the hero has
 * scrolled past the header, it switches back to its solid background.
 */
export const useIsHeaderOverHero = () => {
  const { pathname } = useLocation();
  const isHome = pathname === ROUTES.HOME;

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const hero = getElement(HERO_ELEMENT_ID);

      if (!isHome || !hero) {
        return () => {};
      }

      const observer = new IntersectionObserver(() => onStoreChange(), {
        rootMargin: `-${getHeaderHeight()}px 0px 0px 0px`,
        threshold: 0,
      });

      observer.observe(hero);

      return () => observer.disconnect();
    },
    [isHome],
  );

  const getSnapshot = useCallback(() => {
    if (!isHome) {
      return false;
    }

    const hero = getElement(HERO_ELEMENT_ID);

    if (!hero) {
      return false;
    }

    return hero.getBoundingClientRect().bottom > getHeaderHeight();
  }, [isHome]);

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
};

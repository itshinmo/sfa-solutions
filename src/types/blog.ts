import type { ComponentType, LazyExoticComponent } from "react";

export type Blog = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  Component: LazyExoticComponent<ComponentType>;
};

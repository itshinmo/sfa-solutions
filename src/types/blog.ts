import type { JSX } from "react";

export type BlogData = {
  id: string;
  title: string;
  description: string;
  component: JSX.Element;
  thumbnail?: string;
};

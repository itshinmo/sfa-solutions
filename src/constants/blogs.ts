import STTThumbnail from "@/assets/blogs/soil-texture-triangle/thumbnail.jpeg";
import SODThumbnail from "@/assets/blogs/symphony-of-droplets/image1.jpeg";
import type { Blog } from "@/types/blog";
import { lazy } from "react";

/**
 * Blog metadata. `Component` is lazy-loaded so article code and images are
 * only downloaded when a visitor opens the article.
 */
export const BLOGS: readonly Blog[] = [
  {
    id: "soil-texture-triangle",
    title: "Soil Texture Triangle",
    description:
      "A detailed guide to the 12 soil texture classes, explaining their physical properties, water behavior, irrigation needs, and effects on plant growth and root development.",
    Component: lazy(
      () => import("@/pages/BlogsPage/articles/SoilTextureTriangle"),
    ),
    thumbnail: STTThumbnail,
  },
  {
    id: "symphony-of-droplets",
    title: "Symphony of Droplets",
    description:
      "A deep exploration of irrigation evolution, showing how physics, engineering, and precision agriculture improve water efficiency from traditional surface irrigation to advanced drip and subsurface systems.",
    Component: lazy(
      () => import("@/pages/BlogsPage/articles/SymphonyOfDroplets"),
    ),
    thumbnail: SODThumbnail,
  },
];

export const getBlogById = (id: string) => BLOGS.find(blog => blog.id === id);

export default BLOGS;

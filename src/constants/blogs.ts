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
    contentNamespace: "blog-soil-texture-triangle",
    Component: lazy(
      () => import("@/pages/BlogsPage/articles/SoilTextureTriangle"),
    ),
    thumbnail: STTThumbnail,
  },
  {
    id: "symphony-of-droplets",
    contentNamespace: "blog-symphony-of-droplets",
    Component: lazy(
      () => import("@/pages/BlogsPage/articles/SymphonyOfDroplets"),
    ),
    thumbnail: SODThumbnail,
  },
];

export const getBlogById = (id: string) => BLOGS.find(blog => blog.id === id);

export default BLOGS;

import STTThumbnail from "@/assets/blogs/soil-texture-triangle/thumbnail.jpeg";
import SODThumbnail from "@/assets/blogs/symphony-of-droplets/image1.jpeg";
import SODImage2 from "@/assets/blogs/symphony-of-droplets/image2.jpeg";
import SODImage3 from "@/assets/blogs/symphony-of-droplets/image3.jpeg";
import type { Blog } from "@/types/blog";

/**
 * Blog metadata. `contentNamespace` points at the localized article content
 * and `template` selects how that content is rendered.
 */
export const BLOGS: readonly Blog[] = [
  {
    id: "soil-texture-triangle",
    contentNamespace: "blog-soil-texture-triangle",
    template: "reference",
    thumbnail: STTThumbnail,
  },
  {
    id: "symphony-of-droplets",
    contentNamespace: "blog-symphony-of-droplets",
    template: "narrative",
    thumbnail: SODThumbnail,
    images: {
      image1: SODThumbnail,
      image2: SODImage2,
      image3: SODImage3,
    },
  },
];

export const getBlogById = (id: string) => BLOGS.find(blog => blog.id === id);

export default BLOGS;

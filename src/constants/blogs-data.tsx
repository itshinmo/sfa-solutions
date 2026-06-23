import STTThumbnail from "@/assets/blogs/soil-texture-triangle/thumbnail.jpeg";
import SODThumbnail from "@/assets/blogs/symphony-of-droplets/image1.jpeg";
import SoilTextureTriangle from "@/components/blogs/SoilTextureTriangle";
import SymphonyOfDroplets from "@/components/blogs/SymphonyOfDroplets";
import type { BlogData } from "@/types/blog";

const BLOGS_DATA: BlogData[] = [
  {
    id: "soil-texture-triangle",
    title: "Soil Texture Triangle",
    description:
      "A detailed guide to the 12 soil texture classes, explaining their physical properties, water behavior, irrigation needs, and effects on plant growth and root development.",
    component: <SoilTextureTriangle />,
    thumbnail: STTThumbnail,
  },
  {
    id: "symphony-of-droplets",
    title: "Symphony of Droplets",
    description:
      "A deep exploration of irrigation evolution, showing how physics, engineering, and precision agriculture improve water efficiency from traditional surface irrigation to advanced drip and subsurface systems.",
    component: <SymphonyOfDroplets />,
    thumbnail: SODThumbnail,
  },
] as const;

export default BLOGS_DATA;

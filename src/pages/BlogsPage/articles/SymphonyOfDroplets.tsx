import img1 from "@/assets/blogs/symphony-of-droplets/image1.jpeg";
import img2 from "@/assets/blogs/symphony-of-droplets/image2.jpeg";
import img3 from "@/assets/blogs/symphony-of-droplets/image3.jpeg";
import { useBlogContent } from "@/hooks";
import type {
  NarrativeArticleContent,
  NarrativeArticleImage,
} from "@/types/blog";

const CONTENT_NAMESPACE = "blog-symphony-of-droplets";

const ARTICLE_IMAGES: Record<NarrativeArticleImage, string> = {
  image1: img1,
  image2: img2,
  image3: img3,
};

const SymphonyOfDroplets = () => {
  const content = useBlogContent<NarrativeArticleContent>(CONTENT_NAMESPACE);

  return (
    <main className="flex flex-col justify-center gap-y-8 py-12">
      <section className="blogcontainer flex flex-col justify-center gap-y-8">
        <h1 className="h1 text-start!">{content.title}</h1>

        {content.intro.map(paragraph => (
          <p
            key={paragraph}
            className="p font-medium"
          >
            {paragraph}
          </p>
        ))}
      </section>

      {content.blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        if (block.type === "image") {
          return (
            <div
              key={key}
              className="blogcontainer mx-auto w-full"
            >
              <div className="image-container">
                <img
                  src={ARTICLE_IMAGES[block.image]}
                  alt={block.alt}
                />
              </div>
            </div>
          );
        }

        if (block.type === "heading") {
          return (
            <h2
              key={key}
              className="blogcontainer h2 text-start!"
            >
              {block.text}
            </h2>
          );
        }

        return (
          <p
            key={key}
            className="blogcontainer p font-medium"
          >
            {block.text}
          </p>
        );
      })}
    </main>
  );
};

export default SymphonyOfDroplets;

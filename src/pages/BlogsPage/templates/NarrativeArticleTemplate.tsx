import { useBlogContent } from "@/hooks";
import type {
  BlogContentNamespace,
  NarrativeArticleContent,
  NarrativeArticleImage,
} from "@/types/blog";

type Props = {
  namespace: BlogContentNamespace;
  images?: Partial<Record<NarrativeArticleImage, string>>;
};

/**
 * Template for narrative articles made of ordered blocks: paragraphs,
 * headings, and images.
 */
export const NarrativeArticleTemplate = ({ images, namespace }: Props) => {
  const content = useBlogContent<NarrativeArticleContent>(namespace);

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
          const image = images?.[block.image];

          if (!image) {
            return null;
          }

          return (
            <div
              key={key}
              className="blogcontainer mx-auto w-full"
            >
              <div className="image-container">
                <img
                  src={image}
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

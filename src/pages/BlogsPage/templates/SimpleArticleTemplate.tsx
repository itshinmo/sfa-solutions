import { useBlogContent } from "@/hooks";
import type { BlogContentNamespace, SimpleArticleContent } from "@/types/blog";

type Props = {
  namespace: BlogContentNamespace;
};

/**
 * Minimal template for short posts: intro followed by plain titled sections.
 * Useful for announcements or short guides that do not need media.
 */
export const SimpleArticleTemplate = ({ namespace }: Props) => {
  const content = useBlogContent<SimpleArticleContent>(namespace);

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

      {content.sections.map(section => (
        <section
          key={section.title}
          className="blogcontainer flex flex-col justify-center gap-y-4"
        >
          <h2 className="h2 text-start!">{section.title}</h2>

          {section.paragraphs.map(paragraph => (
            <p
              key={paragraph}
              className="p font-medium"
            >
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </main>
  );
};

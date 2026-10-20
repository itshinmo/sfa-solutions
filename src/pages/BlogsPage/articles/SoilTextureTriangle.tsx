import STTThumbnail from "@/assets/blogs/soil-texture-triangle/thumbnail.jpeg";
import { useBlogContent } from "@/hooks";
import type { ReferenceArticleContent } from "@/types/blog";
import { useTranslation } from "react-i18next";

const CONTENT_NAMESPACE = "blog-soil-texture-triangle";

const SoilTextureTriangle = () => {
  const content = useBlogContent<ReferenceArticleContent>(CONTENT_NAMESPACE);

  const { t } = useTranslation("blog");

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

        <div className="mx-auto w-full max-w-xs">
          <div className="image-container">
            <img
              src={STTThumbnail}
              alt={content.coverAlt}
            />
          </div>
        </div>
      </section>

      {content.sections.map(section => (
        <section
          key={section.title}
          className="blogcontainer flex flex-col justify-center"
        >
          <h2 className="h2 mb-4">{section.title}</h2>

          <div className="flex flex-col justify-center gap-y-8">
            {section.subsections.map(subsection => (
              <section
                key={subsection.title}
                className="flex flex-col justify-center ps-6"
              >
                <h3 className="h3">{subsection.title}</h3>

                <div className="flex flex-col justify-center ps-6">
                  <div className="mb-6 flex flex-col justify-center gap-4">
                    {subsection.paragraphs.map(paragraph => (
                      <p
                        key={paragraph}
                        className="p font-medium"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {subsection.management && (
                    <>
                      <h4 className="h4">{t("management")}:</h4>

                      <p className="p font-medium">{subsection.management}</p>
                    </>
                  )}
                </div>
              </section>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default SoilTextureTriangle;

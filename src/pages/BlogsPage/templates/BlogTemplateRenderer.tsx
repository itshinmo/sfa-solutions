import type { Blog } from "@/types/blog";
import { NarrativeArticleTemplate } from "./NarrativeArticleTemplate";
import { ReferenceArticleTemplate } from "./ReferenceArticleTemplate";
import { SimpleArticleTemplate } from "./SimpleArticleTemplate";

type Props = {
  blog: Blog;
};

/**
 * Selects the layout for an article. Adding a new blog only requires a content
 * namespace and a template choice in `src/constants/blogs.ts`.
 */
export const BlogTemplateRenderer = ({ blog }: Props) => {
  switch (blog.template) {
    case "reference":
      return (
        <ReferenceArticleTemplate
          namespace={blog.contentNamespace}
          coverImage={blog.thumbnail}
        />
      );

    case "narrative":
      return (
        <NarrativeArticleTemplate
          namespace={blog.contentNamespace}
          images={blog.images}
        />
      );

    case "simple":
      return <SimpleArticleTemplate namespace={blog.contentNamespace} />;

    default:
      return null;
  }
};

import { getBlogById } from "@/constants/blogs";
import { useBlogContent, usePageTitle } from "@/hooks";
import { NotFoundContent } from "@/pages/NotFoundPage/NotFoundContent";
import type { Blog } from "@/types/blog";
import { useParams } from "react-router";
import { BlogTemplateRenderer } from "./templates";

type BlogArticleProps = {
  blog: Blog;
};

const BlogArticle = ({ blog }: BlogArticleProps) => {
  const content = useBlogContent<{ title: string; description: string }>(
    blog.contentNamespace,
  );

  usePageTitle(content.title, content.description);

  return <BlogTemplateRenderer blog={blog} />;
};

export const BlogPostPage = () => {
  const { blogId = "" } = useParams<{ blogId: string }>();

  const blog = getBlogById(blogId);

  if (!blog) {
    return (
      <main className="maincontainer flex min-h-[50vh] items-center justify-center py-12">
        <NotFoundContent />
      </main>
    );
  }

  return <BlogArticle blog={blog} />;
};

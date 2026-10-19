import { getBlogById } from "@/constants/blogs";
import { usePageTitle } from "@/hooks";
import { NotFoundContent } from "@/pages/NotFoundPage/NotFoundContent";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

export const BlogPostPage = () => {
  const { blogId = "" } = useParams<{ blogId: string }>();

  const { t } = useTranslation("common");

  const blog = getBlogById(blogId);

  usePageTitle(blog?.title ?? t("not-found-title"), blog?.description);

  if (!blog) {
    return (
      <main className="maincontainer flex min-h-[50vh] items-center justify-center py-12">
        <NotFoundContent />
      </main>
    );
  }

  const { Component } = blog;

  return <Component />;
};

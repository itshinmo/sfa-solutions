import { BLOGS } from "@/constants/blogs";
import { usePageTitle } from "@/hooks";
import { useTranslation } from "react-i18next";
import { BlogCard } from "./components/BlogCard";

export const BlogsPage = () => {
  const { t } = useTranslation(["common", "blog"]);

  usePageTitle(t("blog:title"), t("blog:subtitle"));

  return (
    <main className="flex flex-col">
      <section className="maincontainer flex flex-col items-center py-12">
        <h1 className="h1 mb-4">{t("blog:title")}</h1>

        <p className="text-description mb-10 max-w-2xl text-center">
          {t("blog:subtitle")}
        </p>

        {BLOGS.length > 0 ? (
          <div className="flex w-full flex-row flex-wrap items-center justify-center gap-4">
            {BLOGS.map(blog => (
              <BlogCard
                key={blog.id}
                blog={blog}
              />
            ))}
          </div>
        ) : (
          <p className="text-description">{t("blog:empty")}</p>
        )}
      </section>
    </main>
  );
};

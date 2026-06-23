import BLOGS_DATA from "@/constants/blogs-data";
import BlogCard from "@/pages/BlogsPage/components/BlogCard";

export const BlogsPage = () => {
  const renderAllBlogCards = () => {
    return BLOGS_DATA.map(blogData => {
      return <BlogCard blogData={blogData} />;
    });
  };

  return (
    <main className="flex flex-col">
      <section className="maincontainer flex flex-row flex-wrap items-center justify-center gap-4 py-12">
        {renderAllBlogCards()}
      </section>
    </main>
  );
};

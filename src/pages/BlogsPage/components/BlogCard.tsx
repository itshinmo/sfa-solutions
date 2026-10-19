import { Card, CardContent } from "@/components/ui/card";
import { getBlogPath } from "@/constants/routes";
import type { Blog } from "@/types/blog";
import { useTranslation } from "react-i18next";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router";

type Props = {
  blog: Blog;
};

export const BlogCard = (props: Props) => {
  const { blog } = props;
  const { description, id, title, thumbnail } = blog;

  const { t } = useTranslation("common");

  const href = getBlogPath(id);

  return (
    <Card className="h-[25rem] w-full max-w-[26rem] md:h-[22rem] md:w-[20rem]">
      <CardContent className="size-full">
        <article className="flex size-full flex-col">
          <div className="border-border aspect-video w-full overflow-hidden rounded-md border">
            <Link
              to={href}
              tabIndex={-1}
              aria-hidden="true"
            >
              <div className="image-container">
                <img
                  src={thumbnail}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Link>
          </div>

          <div className="mt-3 flex flex-1 flex-col gap-y-2 overflow-hidden">
            <h2 className="text-primary h4">
              <Link
                to={href}
                className="hover:underline"
              >
                {title}
              </Link>
            </h2>

            <p className="text-description line-clamp-4 text-xs">
              {description}
            </p>
          </div>

          <div className="mt-3 text-xs font-medium">
            <Link
              to={href}
              className="text-primary flex w-fit flex-row items-center gap-x-2 transition hover:brightness-75 active:translate-y-0.5"
            >
              <span>{t("read-more")}</span>
              <FaChevronRight className="rtl:rotate-180" />
            </Link>
          </div>
        </article>
      </CardContent>
    </Card>
  );
};

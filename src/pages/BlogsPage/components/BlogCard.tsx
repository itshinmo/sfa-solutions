import { Card, CardAction, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks";
import type { BlogData } from "@/types/blog";
import { cn } from "@/utils";
import { motion } from "motion/react";
import { useMemo } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router";

type Props = {
  blogData: BlogData;
};

const BlogCard = (props: Props) => {
  const { blogData } = props;
  const { description, id, title, thumbnail } = blogData;

  const href = useMemo(() => `${id}`, [id]);

  const isMobile = useIsMobile();

  return (
    <motion.div
      className={cn(isMobile ? "h-[25rem] w-[26rem]" : "h-[22rem] w-[20rem]")}
    >
      <Card className="size-full">
        <CardContent className="size-full">
          <article className="size-full">
            <div className="border-border aspect-video w-full overflow-hidden rounded-md border">
              <Link to={href}>
                <div className="image-container">
                  <img
                    src={thumbnail}
                    alt={`${title} thumbnail`}
                  />
                </div>
              </Link>
            </div>

            <div className="mt-3 flex flex-col justify-between gap-y-2">
              <h2 className="text-primary h4">
                <Link to={href}>{title}</Link>
              </h2>

              <p className="text-description line-clamp-4 text-xs">
                {description}
              </p>
            </div>
          </article>
        </CardContent>

        <CardAction>
          <div className="ps-4 text-xs font-medium">
            <Link
              to={href}
              className="text-primary flex w-fit flex-row items-center gap-x-2 transition-transform hover:brightness-75 active:translate-y-0.5 active:brightness-50"
            >
              <span>READ MORE...</span>
              <FaChevronRight />
            </Link>
          </div>
        </CardAction>
      </Card>
    </motion.div>
  );
};

export default BlogCard;

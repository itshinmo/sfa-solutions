import animation from "@/assets/404/404-animation.gif";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { useIsMobile } from "@/hooks";
import { cn } from "@/utils";

export const NotFoundPage = () => {
  const isMobile = useIsMobile();

  return (
    <main className="flex h-screen w-screen justify-center bg-white">
      <div
        className={cn(
          "flex size-fit flex-col items-center justify-center",
          isMobile ? "mt-36" : undefined,
        )}
      >
        <img
          src={animation}
          alt=""
        />

        <div className="flex -translate-y-20 flex-col items-center gap-y-4">
          <h1 className="h1">Page Not Found</h1>

          <a href={ROUTES.HOME}>
            <Button
              variant="default"
              size="lg"
              className="bg-[#5599f6]!"
            >
              Go Back Home
            </Button>
          </a>
        </div>
      </div>
    </main>
  );
};

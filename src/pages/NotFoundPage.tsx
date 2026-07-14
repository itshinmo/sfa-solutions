import animation from "@/assets/404/404-animation.gif";
import dropletFilled from "@/assets/404/sad-filled.svg";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { useIsMobile } from "@/hooks";
import { cn } from "@/utils";

export const NotFoundPage = () => {
  const isMobile = useIsMobile();

  const test = (
    <div className="mt-36 flex size-fit flex-col items-center justify-center">
      <img
        src={dropletFilled}
        alt=""
      />

      <div className="flex flex-col items-center">
        <h1 className="h1">404</h1>

        <p className="p">Page Not Found</p>

        <a href={ROUTES.HOME}>
          <Button
            color="primary"
            variant="default"
          >
            Go Back Home
          </Button>
        </a>
      </div>
    </div>
  );

  return (
    <main className="flex h-screen w-screen justify-center bg-white">
      <div
        className={cn(
          "flex size-fit flex-col items-center justify-center",
          isMobile ? "mt-36" : "",
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

import { TeamIcon } from "@/components";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/20 shadow-sm backdrop-blur-md">
      <div className="maincontainer flex h-20 items-center justify-between">
        <div className="flex flex-row items-center gap-x-3">
          <div className="border-primary overflow-hidden rounded-xl border-2">
            <TeamIcon className="size-8" />
          </div>

          <div>
            <h5 className="text-foreground text-2xl font-bold tracking-tight">
              SFA Solutions
            </h5>

            <p className="text-muted-foreground -mt-1 text-[10px]">
              Smart Farm Aqua
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-x-4">
          <Button
            color="primary"
            variant="default"
            size="lg"
            className="font-semibold"
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

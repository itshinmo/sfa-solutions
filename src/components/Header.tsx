import { TeamIcon } from "@/components";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-background desktopContainer sticky top-0 z-50 flex flex-row items-center justify-between border-b py-4">
      <div className="flex flex-row items-center gap-x-3">
        <TeamIcon />

        <h5 className="text-primary text-2xl font-bold">SFA Solutions</h5>
      </div>

      <nav></nav>

      <div className="flex gap-x-2">
        <Button
          color="primary"
          variant="outline"
          size="lg"
        >
          Login
        </Button>
      </div>
    </header>
  );
};

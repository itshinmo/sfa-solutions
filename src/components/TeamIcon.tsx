import { cn } from "@/utils";
import imgSrc from "/public/images/sfa-512x512.png";

type Props = {
  className?: string;
};

export const TeamIcon = (props: Props) => {
  const { className } = props;

  const _fallBack = (
    <div
      className={cn(
        "bg-primary flex size-10 items-center justify-center rounded-lg",
        className,
      )}
    >
      <span className="text-primary-foreground text-center text-2xl font-bold">
        S
      </span>
    </div>
  );

  return (
    <div className={cn("image-container", className)}>
      <img
        src={imgSrc}
        alt="sfa-logo"
      />
    </div>
  );
};

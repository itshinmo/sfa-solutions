import imgSrc from "@/assets/sfa-512x512.png";
import { cn } from "@/utils";

type Props = {
  className?: string;
};

export const TeamIcon = (props: Props) => {
  const { className } = props;

  return (
    <div className={cn("image-container", className)}>
      <img
        src={imgSrc}
        alt="sfa-logo"
      />
    </div>
  );
};

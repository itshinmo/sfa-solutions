import classes from "@/styles/button.module.css";
import { cn } from "@/utils";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("", {
  variants: {
    color: {
      default: "",
      primary: "",
    },
    variant: {
      default: "",
      outline: "",
    },
    size: {
      default: "",
      xs: "",
      sm: "",
      lg: "",
      icon: "",
      "icon-xs": "",
      "icon-sm": "",
      "icon-lg": "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    color: "default",
  },
});

function Button({
  className,
  variant = "default",
  size = "default",
  color = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        classes.root,
        classes[`color--${color}`],
        classes[`variant--${variant}`],
        classes[`size--${size}`],
        className,
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };

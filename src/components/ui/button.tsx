import classes from "@/styles/button.module.css";
import { cn } from "@/utils";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(classes.root, {
  variants: {
    color: {
      default: classes["color--default"],
      primary: classes["color--primary"],
    },
    variant: {
      default: classes["variant--default"],
      outline: classes["variant--outline"],
      ghost: classes["variant--ghost"],
    },
    size: {
      default: classes["size--default"],
      xs: classes["size--xs"],
      sm: classes["size--sm"],
      lg: classes["size--lg"],
      icon: classes["size--icon"],
      "icon-xs": classes["size--icon-xs"],
      "icon-sm": classes["size--icon-sm"],
      "icon-lg": classes["size--icon-lg"],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    color: "default",
  },
});

type ButtonProps = ButtonPrimitive.Props & VariantProps<typeof buttonVariants>;

function Button({
  className,
  variant = "default",
  size = "default",
  color = "default",
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ color, variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };

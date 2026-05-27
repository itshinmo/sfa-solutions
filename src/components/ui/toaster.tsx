import { useTheme } from "next-themes";
import { CiCircleCheck, CiCircleInfo } from "react-icons/ci";
import { FiAlertTriangle, FiLoader } from "react-icons/fi";
import { LuOctagonX } from "react-icons/lu";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CiCircleCheck className="size-4" />,
        info: <CiCircleInfo className="size-4" />,
        warning: <FiAlertTriangle className="size-4" />,
        error: <LuOctagonX className="size-4" />,
        loading: <FiLoader className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

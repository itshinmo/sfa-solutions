import { Button, type buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { VariantProps } from "class-variance-authority";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";

type Props = {
  className?: string;
} & VariantProps<typeof buttonVariants>;

export const LanguageChanger = (props: Props) => {
  const {
    className,
    color = "default",
    size = "default",
    variant = "default",
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const { t, i18n } = useTranslation("common");

  const handleOnOpenchange = (open: boolean) => {
    setIsOpen(open);
  };

  const handleOnEnglishClick = () => {
    i18n.changeLanguage("en");
  };

  const handleOnFarsiClick = () => {
    i18n.changeLanguage("fa");
  };

  const renderChevron = () => {
    if (isOpen) return <FaChevronUp />;

    return <FaChevronDown />;
  };

  return (
    <DropdownMenu
      open={isOpen}
      onOpenChange={handleOnOpenchange}
    >
      <DropdownMenuTrigger
        render={
          <Button
            variant={variant}
            color={color}
            size={size}
            className={className}
          >
            <GrLanguage />
            <span>{i18n.language}</span>
            {renderChevron()}
          </Button>
        }
      />

      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>{t("languages")}</DropdownMenuLabel>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={handleOnEnglishClick}
          >
            {t("english")}
          </DropdownMenuItem>

          <DropdownMenuItem
            className="cursor-pointer"
            onClick={handleOnFarsiClick}
          >
            {t("farsi")}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

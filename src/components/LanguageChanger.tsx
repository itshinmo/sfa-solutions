import { Button, type buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { SupportedLanguage } from "@/i18n/resources";
import type { VariantProps } from "class-variance-authority";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";

type Props = {
  className?: string;
} & VariantProps<typeof buttonVariants>;

const LANGUAGES: readonly {
  value: SupportedLanguage;
  labelKey: "english" | "farsi";
}[] = [
  { value: "en", labelKey: "english" },
  { value: "fa", labelKey: "farsi" },
];

export const LanguageChanger = (props: Props) => {
  const {
    className,
    color = "default",
    size = "default",
    variant = "default",
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const { t, i18n } = useTranslation("common");

  const currentLanguage =
    (i18n.resolvedLanguage ?? i18n.language) === "fa" ? "fa" : "en";

  const currentLabel = t(
    LANGUAGES.find(language => language.value === currentLanguage)?.labelKey ??
      "english",
  );

  const handleLanguageChange = (language: SupportedLanguage) => {
    void i18n.changeLanguage(language);
  };

  return (
    <DropdownMenu
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DropdownMenuTrigger
        render={
          <Button
            variant={variant}
            color={color}
            size={size}
            className={className}
            aria-label={t("languages")}
          >
            <GrLanguage />
            <span className="hidden sm:inline">{currentLabel}</span>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </Button>
        }
      />

      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>{t("languages")}</DropdownMenuLabel>

          {LANGUAGES.map(language => (
            <DropdownMenuItem
              key={language.value}
              className="cursor-pointer"
              onClick={() => handleLanguageChange(language.value)}
            >
              {t(language.labelKey)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

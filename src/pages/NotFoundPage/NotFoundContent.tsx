import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/utils";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

type Props = {
  className?: string;
};

export const NotFoundContent = (props: Props) => {
  const { className } = props;

  const { t } = useTranslation("common");

  return (
    <div
      className={cn(
        "flex max-w-md flex-col items-center gap-y-4 text-center",
        className,
      )}
    >
      <h1 className="h1">{t("not-found-title")}</h1>

      <p className="text-description">{t("not-found-description")}</p>

      <Button
        variant="default"
        size="lg"
        className="bg-[#5599f6]! font-semibold"
        nativeButton={false}
        render={<Link to={ROUTES.HOME} />}
      >
        {t("back-home")}
      </Button>
    </div>
  );
};

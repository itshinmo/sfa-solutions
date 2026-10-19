import { FeedbackForm } from "@/components/forms/FeedbackForm";
import { FeedbackTable } from "@/components/tables/FeedbackTable";
import { Separator } from "@/components/ui/separator";
import { usePageTitle } from "@/hooks";
import { useTranslation } from "react-i18next";

export const FeedbackPage = () => {
  const { t } = useTranslation("feedback");

  usePageTitle(t("title"), t("subtitle"));

  return (
    <main className="flex flex-col">
      <section className="maincontainer py-12">
        <div className="mx-auto flex max-w-xl flex-col">
          <FeedbackForm />
        </div>

        <Separator
          orientation="horizontal"
          className="my-12 h-px"
        />

        <div className="mx-auto flex max-w-4xl flex-col">
          <FeedbackTable />
        </div>
      </section>
    </main>
  );
};

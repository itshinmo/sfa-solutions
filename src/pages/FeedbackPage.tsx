import { FeedbackForm } from "@/components/forms/FeedbackForm";
import { FeedbackTable } from "@/components/tables/FeedbackTable";
import { Separator } from "@/components/ui/separator";

export const FeedbackPage = () => {
  return (
    <main className="flex flex-col">
      <section className="maincontainer">
        <div className="mx-auto mt-12 flex max-w-xl flex-col">
          <FeedbackForm />
        </div>

        <Separator
          orientation="horizontal"
          className="my-12 h-1!"
        />

        <div className="mx-auto flex max-w-xl flex-col">
          <FeedbackTable />
        </div>
      </section>
    </main>
  );
};

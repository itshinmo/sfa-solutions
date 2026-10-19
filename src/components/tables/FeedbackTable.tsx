import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/utils";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { SAMPLE_FEEDBACK, type FeedbackRecord } from "./feedback-data";

type Props = {
  items?: readonly FeedbackRecord[];
};

export const FeedbackTable = (props: Props) => {
  const { items = SAMPLE_FEEDBACK } = props;

  const { t, i18n } = useTranslation("feedback");

  const dateFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat(i18n.resolvedLanguage ?? "en", {
        dateStyle: "medium",
      }),
    [i18n.resolvedLanguage],
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("table.title")}</CardTitle>
        <CardDescription>{t("table.description")}</CardDescription>
      </CardHeader>

      <CardContent>
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead className="border-e">
                {t("table.columns.title")}
              </TableHead>
              <TableHead className="border-e">
                {t("table.columns.category")}
              </TableHead>
              <TableHead className="border-e">
                {t("table.columns.status")}
              </TableHead>
              <TableHead>{t("table.columns.submitted")}</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {items.length > 0 ? (
              items.map(item => (
                <TableRow key={item.id}>
                  <TableCell className="border-e font-medium">
                    {item.title}
                  </TableCell>
                  <TableCell className="border-e">
                    {t(`categories.${item.category}`)}
                  </TableCell>
                  <TableCell className="border-e">
                    <span
                      className={cn(
                        "inline-flex rounded-full px-2 py-0.5 text-xs font-semibold",
                        item.status === "resolved"
                          ? "bg-successful/15 text-successful"
                          : "bg-primary/10 text-primary",
                      )}
                    >
                      {t(`table.status.${item.status}`)}
                    </span>
                  </TableCell>
                  <TableCell>
                    {dateFormatter.format(new Date(item.submittedAt))}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-muted-foreground h-24 text-center"
                >
                  {t("table.empty")}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

import { ImageField } from "@/components/fields/ImageField";
import { InputField } from "@/components/fields/InputField";
import { SelectField } from "@/components/fields/SelectField";
import { TextareaField } from "@/components/fields/TextareaField";
import {
  createFeedbackSchema,
  FEEDBACK_CATEGORY_VALUES,
  type FeedbackFormValues,
} from "@/components/forms/feedback-schema";
import { Button } from "@/components/ui/button";
import { submitFeedback } from "@/services/feedback";
import type { SelectOption } from "@/types/fields";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

export const FeedbackForm = () => {
  const { t } = useTranslation("feedback");

  const schema = useMemo(() => createFeedbackSchema(t), [t]);

  const categoryOptions = useMemo<SelectOption[]>(
    () =>
      FEEDBACK_CATEGORY_VALUES.map(category => ({
        value: category,
        label: t(`categories.${category}`),
      })),
    [t],
  );

  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      category: undefined,
      title: "",
      content: "",
      img: null,
    },
  });

  const mutation = useMutation({
    mutationFn: submitFeedback,
    onSuccess: () => {
      toast.success(t("success"));
      form.reset();
    },
    onError: () => {
      toast.error(t("error"));
    },
  });

  const onSubmit = (values: FeedbackFormValues) => {
    mutation.mutate({
      category: values.category,
      title: values.title,
      content: values.content,
      image: values.img,
    });
  };

  return (
    <FormProvider {...form}>
      <form
        noValidate
        className="flex flex-col gap-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div>
          <h2 className="h2 mb-1">{t("title")}</h2>
          <p className="text-description">{t("subtitle")}</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <SelectField<FeedbackFormValues>
            name="category"
            label={t("category")}
            options={categoryOptions}
            placeholder={t("category-placeholder")}
          />

          <InputField<FeedbackFormValues>
            name="title"
            label={t("title-label")}
            placeholder={t("title-placeholder")}
          />
        </div>

        <TextareaField<FeedbackFormValues>
          name="content"
          label={t("content")}
          placeholder={t("content-placeholder")}
        />

        <ImageField<FeedbackFormValues>
          name="img"
          label={t("image")}
          description={t("image-description")}
        />

        <Button
          type="submit"
          variant="default"
          color="primary"
          size="lg"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? t("submitting") : t("submit")}
        </Button>
      </form>
    </FormProvider>
  );
};

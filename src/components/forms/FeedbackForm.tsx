import { ImageField } from "@/components/fields/ImageField";
import { InputField } from "@/components/fields/InputField";
import { SelectField } from "@/components/fields/SelectField";
import { TextareaField } from "@/components/fields/TextareaField";
import { Button } from "@/components/ui/button";
import type { SelectOption } from "@/types/fields";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import z from "zod";

const SETTINGS = {
  min: 3,
  minError: "Enter more than 3 characters!",
} as const;

const feedbackFormSchema = z.object({
  category: z.string().nonempty().nonoptional(),
  title: z.string().min(SETTINGS.min, { error: SETTINGS.minError }),
  content: z.string().min(SETTINGS.min, { error: SETTINGS.minError }),
  img: z.instanceof(File).optional().nullable(),
});

type FeedbackFormSchema = z.infer<typeof feedbackFormSchema>;

const TICKET_CATEGORIES: SelectOption[] = [
  {
    value: "website",
    label: "Website",
  },
  {
    value: "app",
    label: "App",
  },
  {
    value: "payment",
    label: "Payment",
  },
];

export const FeedbackForm = () => {
  const form = useForm<FeedbackFormSchema>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      category: "",
      title: "",
      content: "",
      img: null,
    },
  });

  const onSubmit = async (values: FeedbackFormSchema) => {
    const formData = new FormData();

    formData.append("category", values.category);
    formData.append("title", values.title);
    formData.append("content", values.content);

    if (values.img) {
      formData.append("img", values.img);
    }

    console.log("success", formData);
  };

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h2 className="h2 mb-6">Feedback</h2>

        <div className="flex flex-row gap-x-4">
          <SelectField<FeedbackFormSchema>
            name="category"
            label="Category"
            options={TICKET_CATEGORIES}
            placeholder="Select category"
          />

          <InputField<FeedbackFormSchema>
            name="title"
            label="Title"
            placeholder="performance issue"
          />
        </div>

        <TextareaField<FeedbackFormSchema>
          name="content"
          label="Issue"
          placeholder="Type here."
        />

        <ImageField<FeedbackFormSchema>
          name="img"
          label="Image"
        />

        <Button
          type="submit"
          variant="default"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};

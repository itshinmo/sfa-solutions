import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { useController, type FieldValues, type Path } from "react-hook-form";

type TextareaFieldProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  description?: string;
  placeholder?: string;
};

export const TextareaField = <T extends FieldValues>(
  props: TextareaFieldProps<T>,
) => {
  const { name, label, description, placeholder } = props;

  const { field, fieldState } = useController({ name });

  return (
    <Field
      data-invalid={fieldState.invalid}
      orientation="responsive"
    >
      <FieldLabel htmlFor={`textarea-${name}-${label}`}>{label}</FieldLabel>

      {description && <FieldDescription>{description}</FieldDescription>}

      <Textarea
        {...field}
        id={`textarea-${name}-${label}`}
        aria-invalid={fieldState.invalid}
        placeholder={placeholder}
      />

      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  );
};

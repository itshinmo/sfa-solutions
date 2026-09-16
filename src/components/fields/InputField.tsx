import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useController, type FieldValues, type Path } from "react-hook-form";

type InputFieldProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  description?: string;
  placeholder?: string;
};

export const InputField = <T extends FieldValues>(
  props: InputFieldProps<T>,
) => {
  const { name, label, description, placeholder } = props;

  const { field, fieldState } = useController({ name });

  return (
    <Field
      data-invalid={fieldState.invalid}
      orientation="responsive"
    >
      <FieldLabel htmlFor={`input-${name}-${label}`}>{label}</FieldLabel>

      {description && <FieldDescription>{description}</FieldDescription>}

      <Input
        {...field}
        id={`input-${name}-${label}`}
        aria-invalid={fieldState.invalid}
        placeholder={placeholder}
      />

      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  );
};

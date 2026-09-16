import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { SelectOption } from "@/types/fields";
import { useController, type FieldValues, type Path } from "react-hook-form";

type SelectFieldProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  options: SelectOption[];
  description?: string;
  placeholder?: string;
};

export const SelectField = <T extends FieldValues>(
  props: SelectFieldProps<T>,
) => {
  const { name, label, options, description, placeholder } = props;

  const { field, fieldState } = useController({ name });

  const renderOptions = () => {
    return options.map(option => (
      <SelectItem
        key={option.value}
        label={option.label}
        value={option.value}
      >
        {option.label}
      </SelectItem>
    ));
  };

  return (
    <Field
      orientation="responsive"
      data-invalid={fieldState.invalid}
    >
      <FieldLabel htmlFor={`select-${name}-${label}`}>{label}</FieldLabel>

      {description && <FieldDescription>{description}</FieldDescription>}

      <Select
        name={field.name}
        value={field.value}
        onValueChange={field.onChange}
      >
        <SelectTrigger
          id={`select-${name}-${label}`}
          aria-invalid={fieldState.invalid}
        >
          <SelectValue placeholder={placeholder}>
            {options.find(option => option.value === field.value)?.label}
          </SelectValue>
        </SelectTrigger>

        <SelectContent>{renderOptions()}</SelectContent>
      </Select>

      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  );
};

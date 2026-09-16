import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils";
import { useEffect, useRef, useState } from "react";
import { useController, type FieldValues, type Path } from "react-hook-form";
import { MdOutlineCancel, MdOutlineImageNotSupported } from "react-icons/md";

type ImageFieldProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  description?: string;
  accept?: string;
  disabled?: boolean;
};

export const ImageField = <T extends FieldValues>(
  props: ImageFieldProps<T>,
) => {
  const { name, label, description, accept = "image/*", disabled } = props;

  const inputRef = useRef<null | HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);

  const { field, fieldState } = useController({ name });

  useEffect(() => {
    if (!((field.value as unknown) instanceof File)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(field.value);

    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [field.value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    field.onChange(file ?? null);
  };

  const handleRemove = () => {
    field.onChange(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const renderPreviewImg = () => {
    if (!preview)
      return (
        <div className="flex size-full items-center justify-center object-cover">
          <MdOutlineImageNotSupported />
        </div>
      );

    return (
      <img
        src={preview}
        alt="selected-image"
        className="size-full object-cover"
      />
    );
  };

  const renderCancelBtn = () => {
    if (!preview) return null;

    return (
      <Button
        type="button"
        variant="default"
        className="aspect-square! size-8! rounded-s-none!"
        onClick={handleRemove}
      >
        <MdOutlineCancel />
        <span className="sr-only">Remove image</span>
      </Button>
    );
  };

  const inputId = `image-${name}-${label}`;

  return (
    <Field
      data-invalid={fieldState.invalid}
      orientation="responsive"
    >
      <FieldLabel htmlFor={inputId}>{label}</FieldLabel>

      {description && <FieldDescription>{description}</FieldDescription>}

      <div className="flex flex-row justify-between gap-x-4">
        <div className="relative flex flex-row">
          <Input
            className={cn("max-w-fit", preview ? "rounded-e-none" : "")}
            ref={element => {
              field.ref(element);
              inputRef.current = element;
            }}
            id={inputId}
            name={field.name}
            type="file"
            accept={accept}
            disabled={disabled}
            aria-invalid={fieldState.invalid}
            onBlur={field.onBlur}
            onChange={handleChange}
          />

          {renderCancelBtn()}
        </div>

        <div className="size-32 overflow-hidden rounded-md border">
          {renderPreviewImg()}
        </div>
      </div>

      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  );
};

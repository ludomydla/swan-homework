import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils/cn";

type FormFieldProps = ComponentPropsWithoutRef<"div"> & {
    label: string;
    required?: boolean;
}

export default function FormField({label, required, children, className, ...rest}: FormFieldProps) {

    return (
        <div {...rest} className={cn('form-field', required && 'form-field-required', className)} >
            <label>{label}</label>
            {children}
        </div>
    )
}

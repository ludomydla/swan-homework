import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils/cn";
import "./FormField.css";

type FormFieldProps = ComponentPropsWithoutRef<"div"> & {
    label: string;
    required?: boolean;
}

export default function FormField({label, required, children, className, ...rest}: FormFieldProps) {

    return (
        <div {...rest} className={cn('form-field', required && 'form-field-required', className)} >
            <div><label className="form-field-label">{label}</label></div>
            {children}
        </div>
    )
}
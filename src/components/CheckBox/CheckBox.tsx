import { useId, type ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils/cn";
import "./CheckBox.css";

  type CheckBoxProps = ComponentPropsWithoutRef<"input"> & {
    label: string;
  };

  export default function CheckBox({ label, className, id, ...rest }: CheckBoxProps) {
    const generatedId = useId();
    const elementId = id ?? generatedId;

    return (
        <label htmlFor={elementId} className={cn("check-box", className)}>
            <input id={elementId} type="checkbox" className="check-box-hidden" {...rest} />
            <span className="check-box-control" aria-hidden="true"></span>
            {label}
        </label>
    );
  }
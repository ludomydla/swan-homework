 import { useId, type ComponentPropsWithoutRef } from "react";
  import { cn } from "../../utils/cn";

  type CheckBoxProps = ComponentPropsWithoutRef<"input"> & {
    label: string;
  };

  export default function CheckBox({ label, className, id, ...rest }: CheckBoxProps) {
    const generatedId = useId();
    const elementId = id ?? generatedId;

    return (
      <div className={cn("check-box", className)}>
        <input id={elementId} type="checkbox" {...rest} />
        <label htmlFor={elementId}>{label}</label>
      </div>
    );
  }
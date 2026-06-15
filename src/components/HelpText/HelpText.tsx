import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils/cn";
import "./HelpText.css";

type HelpTextProps = Pick<ComponentPropsWithoutRef<"p">, "id" | "className"> & {
    text: string;
}

export default function HelpText({text, id, className}: HelpTextProps) {

    return (
        <p id={id} className={cn("help-text", className)}>
            {text}
        </p>
    )
}

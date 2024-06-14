import "./index.scss";
import type { HTMLAttributes } from "react";

interface OptionButtonProps extends HTMLAttributes<HTMLButtonElement> {
    selected: boolean
}

export default function OptionButton({ children, selected, className = "", ...props }: OptionButtonProps) {
    return (
        <button
            className={`option-button ${className}`}
            data-selected={selected}
            { ...props }
        >
            { children }
        </button>
    );
}
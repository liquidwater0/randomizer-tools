import "./index.scss";
import type { HTMLAttributes } from "react";
import { Sync } from "@mui/icons-material";

interface GenerateButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export default function GenerateButton({ className = "", ...props }: GenerateButtonProps) {
    return (
        <button 
            className={`generate-button ${className}`}
            { ...props }
        >
            <Sync />
        </button>
    );
}
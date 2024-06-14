import "./index.scss";
import type { HTMLAttributes } from 'react';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    //why do i need these here?
    type?: string
    value?: string
}

export default function Input({ className = "", ...props }: InputProps) {
    return (
        <input
            className={`input ${className}`}
            { ...props }
        />
    );
}
import type { ChangeEvent } from 'react';

export type TPasswordFieldProps = {
    value?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    error?: boolean;
    helperText?: string;
}
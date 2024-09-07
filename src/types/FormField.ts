import type { ChangeEvent } from 'react';

export type TTextFormField = {
    value?: string;
    onChange: (value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    error?: boolean;
    helperText?: string;
    label?: string;
}
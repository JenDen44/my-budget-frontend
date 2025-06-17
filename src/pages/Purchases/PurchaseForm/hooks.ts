import { useController, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField } from '@mui/material';
import type { NumberFormatValues } from 'react-number-format';
import type { TPurchaseFormValue } from './types';
import { purchaseFormSchema } from './schema';

export const usePurchaseForm = (defaultValues?: TPurchaseFormValue) => useForm({
    defaultValues,
    resolver: zodResolver(purchaseFormSchema),
    reValidateMode: 'onChange'
});

export const usePurchaseFormFields = () => {
    const dateField = useController<TPurchaseFormValue, 'date'>({ name: 'date', defaultValue: new Date() });
    const categoryField = useController<TPurchaseFormValue, 'category'>({ name: 'category', defaultValue: 'FOOD' });
    const costField = useController<TPurchaseFormValue, 'cost'>({ name: 'cost', defaultValue: undefined });
    const quantityField = useController<TPurchaseFormValue, 'quantity'>({ name: 'quantity', defaultValue: undefined });

    return {
        date: {
            value: dateField.field.value,
            onChange: dateField.field.onChange,
            error: !!dateField.fieldState.error,
            helperText: dateField.fieldState.error?.message,
            label: 'Дата',
            disableFuture: true,
            format: 'dd.MM.yyyy'
        },
        category: {
            value: categoryField.field.value,
            onChange: categoryField.field.onChange,
            error: !!categoryField.fieldState.error,
            helperText: categoryField.fieldState.error?.message,
            label: 'Категория',
            select: true
        },
        quantity: {
            value: quantityField.field.value,
            onValueChange: (values?: NumberFormatValues): void => quantityField.field.onChange(values?.floatValue),
            error: !!quantityField.fieldState.error,
            helperText: quantityField.fieldState.error?.message,
            label: 'Количество',
            customInput: TextField,
            decimalScale: 0,
            thousandSeparator: ' ',
            fullWidth: true
        },
        cost: {
            value: costField.field.value,
            onValueChange: (values?: NumberFormatValues): void => costField.field.onChange(values?.floatValue),
            error: !!costField.fieldState.error,
            helperText: costField.fieldState.error?.message,
            label: 'Цена, ₽',
            customInput: TextField,
            decimalScale: 2,
            thousandSeparator: ' ',
            fullWidth: true
        },
        totalCost: (costField.field.value || 0) * (quantityField.field.value || 0)
    };
};
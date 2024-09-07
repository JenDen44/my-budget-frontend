import { Box, MenuItem, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import type { ReactElement } from 'react';
import { NumericFormat } from 'react-number-format';
import { PURCHASE_CATEGORY_OPTIONS } from '../consts';
import { usePurchaseFormFields } from './hooks';

export const PurchaseForm = (): ReactElement => {
    const fields = usePurchaseFormFields();

    return (
        <Box sx={ { display: 'flex', flexDirection: 'column', gap: 2 } }>
            <DatePicker { ...fields.date }/>
            <TextField { ...fields.category }>
                {PURCHASE_CATEGORY_OPTIONS.map((option) => (
                    <MenuItem key={ option.value } value={ option.value }>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <Box sx={ { display: 'flex', gap: 2 } }>
                <NumericFormat { ...fields.quantity } />
                <NumericFormat { ...fields.cost } />
            </Box>
        </Box>
    );
};
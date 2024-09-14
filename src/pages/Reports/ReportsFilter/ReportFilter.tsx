
import { DateRangePicker, SingleInputDateRangeField } from '@mui/x-date-pickers-pro';
import type { ReactElement } from 'react';
import type { DateRange } from '@mui/lab';
import { Box, Chip } from '@mui/material';
import { subMonths, subWeeks } from 'date-fns';
import { useReportFilter } from './hooks';
import { PERIOD_VARIANT } from './consts';
import type { TPeriodType } from './types';

export const ReportFilter = (): ReactElement => {
    const { value, onChange, error, helperText } = useReportFilter();
    const pickerValue: DateRange<Date> = [ value?.startDate ?? null, value?.endDate ?? null ];
    const onChangePicker = (newPickerValue: DateRange<Date>): void =>
        onChange({ startDate: newPickerValue[0], endDate: newPickerValue[1] });
    const onSelectVariant = (type: TPeriodType): void => {
        const startDate = ((): Date => {
            switch(type) {
            case 'week':
                return subWeeks(new Date(), 1);
            case 'month':
                return subMonths(new Date(), 1);
            case 'threeMonths':
                return subMonths(new Date(), 3);
            default:
                return subMonths(new Date(), 6);
            }
        })();

        onChange({ startDate, endDate: new Date() });
    };

    return (
        <Box sx={ { display: 'flex', flexDirection: 'column', gap: 2 } }>
            <DateRangePicker
                value={ pickerValue }
                onChange={ onChangePicker }
                slots={  { field: SingleInputDateRangeField } }
                slotProps={ {
                    layout: {
                        sx: {
                            '& .MuiDateRangeCalendar-root>*:first-child': { display: 'none' }
                        }
                    },
                    textField: { error, helperText }
                } }
                disableFuture
                format='dd.MM.yyyy'
            />
            <Box sx={ { display: 'flex', gap: 1 } }>
                {PERIOD_VARIANT.map((variant) => (
                    <Chip
                        key={ variant.type }
                        clickable
                        variant='outlined'
                        color='primary'
                        label={ variant.label }
                        onClick={ () => onSelectVariant(variant.type) }
                    />
                ))}
            </Box>
        </Box>
    );
};
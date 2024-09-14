import { useMemo, useState, type PropsWithChildren, type ReactElement } from 'react';
import { subDays, isValid, isAfter, isFuture } from 'date-fns';
import type { Optional } from 'types';
import { formatBackendDate } from 'helpers';
import type { TReportFilterValue } from './types';
import { reportFilterContext } from './context';

export const ReportFilterProvider = (props: PropsWithChildren): ReactElement => {
    const { children } = props;
    const [ value, setValue ] = useState<Optional<TReportFilterValue>>(() => ({
        startDate: subDays(new Date(), 7),
        endDate: new Date()
    }));
    const helperText = useMemo(() => {
        if (!value || ! value.startDate || !value.endDate) {
            return 'Выберите период';
        }

        if (!isValid(value.startDate) || !isValid(value.endDate)) {
            return 'Не верный формат (ДД.ММ.ГГГГ)';
        }

        if (isAfter(value.startDate, value.endDate)) {
            return 'Начало должно быть раньше';
        }

        if (isFuture(value.endDate)) {
            return 'Нельзя выбрать будущее';
        }
    }, [ value ]);
    const formattedValue = useMemo(() => {
        if (value?.startDate && value?.endDate) {
            return {
                startDate: formatBackendDate(value.startDate),
                endDate: formatBackendDate(value.endDate),
            };
        }

        return;
    }, [ value ]);

    return (
        <reportFilterContext.Provider
            value={ {
                value,
                onChange: setValue,
                helperText,
                error: !!helperText,
                formattedValue
            } }
        >
            {children}
        </reportFilterContext.Provider>
    );
};

import type { Nullable } from 'types';

export type TReportFilterValue = {
    startDate: Nullable<Date>;
    endDate: Nullable<Date>;
}

export type TReportFilterFormattedValue = {
    startDate: string;
    endDate: string;
}

export type TReportFilterContext = {
    value?: TReportFilterValue;
    formattedValue?: TReportFilterFormattedValue;
    error?: boolean;
    helperText?: string;
    onChange: (value?: TReportFilterValue) => void;
}

export type TPeriodType = 'week' | 'month' | 'threeMonths' | 'sixMonths';

export type TPeriodVariant = {
    type: TPeriodType;
    label: string;
}
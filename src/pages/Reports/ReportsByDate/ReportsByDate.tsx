import { useEffect, type ReactElement } from 'react';
import { observer, useLocalObservable } from 'mobx-react';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Box, Typography } from '@mui/material';
import { WithLoading } from 'components';
import { formatCurrency, formatDate } from 'helpers';
import type { TPurchaseCategory } from 'entities';
import { PURCHASE_CATEGORY_LABELS } from '../../Purchases/consts';
import { useReportFilter } from '../ReportsFilter';
import { REPORT_BARS } from '../consts';
import { ReportsByDateStore } from './store';

export const ReportsByDate = observer((): ReactElement => {
    const store = useLocalObservable(() => new ReportsByDateStore());
    const { formattedValue } = useReportFilter();

    useEffect(() => {
        store.get(formattedValue);
    }, [ formattedValue ]);

    return (
        <WithLoading isLoading={ store.loading.isLoading }>
            {store.reports.length ? (
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={ store.reports }>
                        <XAxis dataKey="date" tickFormatter={ formatDate } />
                        <YAxis />
                        <Tooltip
                            formatter={ (value: number, name: TPurchaseCategory) =>
                                [ formatCurrency(value), PURCHASE_CATEGORY_LABELS[name] ] }
                            labelFormatter={ formatDate }
                        />
                        <Legend formatter={ (value: TPurchaseCategory) => PURCHASE_CATEGORY_LABELS[value] } />
                        {REPORT_BARS.map((barProps) => (
                            <Bar key={ barProps.dataKey } stackId='1' { ...barProps } />
                        ))}
                    </BarChart>
                </ResponsiveContainer>
            ) :(
                <Box
                    sx={ {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexGrow: 1
                    } }
                >
                    <Typography variant="h3">Нет данных. Выберите другой период</Typography>
                </Box>
            )}
        </WithLoading>
    );
});
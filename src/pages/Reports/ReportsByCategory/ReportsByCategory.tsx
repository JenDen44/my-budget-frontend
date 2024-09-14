import { useEffect, type ReactElement } from 'react';
import { observer, useLocalObservable } from 'mobx-react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Box, Typography } from '@mui/material';
import { WithLoading } from 'components';
import { formatCurrency } from 'helpers';
import { PURCHASE_CATEGORY_LABELS } from '../../Purchases/consts';
import { useReportFilter } from '../ReportsFilter';
import { REPORT_COLORS } from '../consts';
import { ReportsByCategoryStore } from './store';

export const ReportsByCategory = observer((): ReactElement => {
    const store = useLocalObservable(() => new ReportsByCategoryStore());
    const { formattedValue } = useReportFilter();

    useEffect(() => {
        store.get(formattedValue);
    }, [ formattedValue ]);

    return (
        <WithLoading isLoading={ store.loading.isLoading }>
            {store.reports.length ? (
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={ store.reports }
                            cx="50%"
                            cy="50%"
                            innerRadius="60%"
                            outerRadius="75%"
                            fill="#8884d8"
                            dataKey="total"
                            paddingAngle={ 4 }
                        >
                            {store.reports.map((report) => (
                                <Cell key={ report.category } fill={ REPORT_COLORS[report.category] } />
                            ))}
                        </Pie>
                        <Legend
                            formatter={ (index: number) => PURCHASE_CATEGORY_LABELS[store.reports[index].category] }
                        />
                        <Tooltip
                            formatter={
                                (value: number, index: number) =>
                                    [ formatCurrency(value), PURCHASE_CATEGORY_LABELS[store.reports[index].category] ]
                            }
                        />
                    </PieChart>
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
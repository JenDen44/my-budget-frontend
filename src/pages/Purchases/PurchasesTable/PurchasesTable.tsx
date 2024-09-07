import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Edit, Clear } from '@mui/icons-material';
import type { ReactElement } from 'react';
import { formatCurrency, formatDate, formatNumber } from 'helpers';
import { PURCHASE_CATEGORY_LABELS } from '../consts';
import type { TPurchasesTableProps } from './types';

export const PurchasesTable = (props: TPurchasesTableProps): ReactElement => {
    const { purchases, onEdit, onDelete } = props;

    return (
        <TableContainer component={ Paper }>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Дата</TableCell>
                        <TableCell>Категория</TableCell>
                        <TableCell align="right">Цена,&nbsp;₽</TableCell>
                        <TableCell align="right">Количество</TableCell>
                        <TableCell align="right">Стоимость,&nbsp;₽</TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {purchases.map((purchase) => (
                        <TableRow key={ purchase.id }>
                            <TableCell>{formatDate(purchase.date)}</TableCell>
                            <TableCell>{PURCHASE_CATEGORY_LABELS[purchase.category]}</TableCell>
                            <TableCell align="right">{formatCurrency(purchase.cost)}</TableCell>
                            <TableCell align="right">{formatNumber(purchase.quantity)}</TableCell>
                            <TableCell align="right">{formatCurrency(purchase.totalCost)}</TableCell>
                            <TableCell>
                                <Box sx={ { display: 'flex', gap: 1, alignItems: 'center' } }>
                                    <IconButton onClick={ () => onEdit(purchase) }>
                                        <Edit />
                                    </IconButton>
                                    <IconButton onClick={ () => onDelete(purchase) }>
                                        <Clear />
                                    </IconButton>
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
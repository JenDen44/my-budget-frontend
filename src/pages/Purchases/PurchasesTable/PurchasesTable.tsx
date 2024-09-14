import {
    Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow,
    TableSortLabel
} from '@mui/material';
import { Edit, Clear } from '@mui/icons-material';
import type { ChangeEvent, ReactElement } from 'react';
import { formatCurrency, formatDate, formatNumber } from 'helpers';
import { PURCHASE_CATEGORY_LABELS } from '../consts';
import type { TPurchasesTableProps } from './types';
import { PURCHASE_CELLS, PURCHASE_COUNT_ON_PAGE } from './consts';

export const PurchasesTable = (props: TPurchasesTableProps): ReactElement => {
    const {
        purchases, hasNextPage, page, countOnPage, onChangeCountOnPage: onChangeCountOnPageProp,
        onChangePage: onChangePageProp, onEdit, onDelete, sortBy, sortDirection, onChangeSort
    } = props;
    const onChangePage = (_: unknown, newPage: number): void => onChangePageProp(newPage);
    const onChangeCountOnPage = (event: ChangeEvent<HTMLInputElement>): void =>
        onChangeCountOnPageProp(+event.target.value);

    return (
        <TableContainer component={ Paper }>
            <Table>
                <TableHead>
                    <TableRow>
                        {PURCHASE_CELLS.map((cell) => (
                            <TableCell key={ cell.key } align={ cell.align }>
                                <TableSortLabel
                                    active={ cell.key === sortBy }
                                    direction={ cell.key === sortBy ? sortDirection : undefined }
                                    onClick={ () => onChangeSort(cell.key) }
                                >
                                    {cell.label}
                                </TableSortLabel>
                            </TableCell>
                        ))}
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
            <TablePagination
                rowsPerPageOptions={ PURCHASE_COUNT_ON_PAGE }
                component="div"
                count={ -1 }
                rowsPerPage={ countOnPage }
                page={ page }
                onPageChange={ onChangePage }
                onRowsPerPageChange={ onChangeCountOnPage }
                labelRowsPerPage="Трат на странице"
                sx={ {
                    '& .MuiTablePagination-displayedRows': { display: 'none' }
                } }
                slotProps={ {
                    actions: {
                        nextButton: { disabled: !hasNextPage }
                    }
                } }
            />
        </TableContainer>
    );
};
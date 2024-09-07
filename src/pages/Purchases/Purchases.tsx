import { observer, useLocalObservable } from 'mobx-react';
import { Box, Button, Typography } from '@mui/material';
import { WithLoading } from 'components';
import { PurchasesStore } from './store';
import { PurchasesTable } from './PurchasesTable';
import { NewPurchaseModal } from './NewPurchaseModal';
import { EditPurchaseModal } from './EditPurchaseModal';
import { DeletePurchaseModal } from './DeletePurchaseModal';

export const Purchases = observer(() => {
    const store = useLocalObservable(() => new PurchasesStore());

    return (
        <WithLoading isLoading={ store.loading.isFirstLoading }>
            { store.purchases.length ? (
                <Box
                    sx={ {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2
                    } }
                >
                    <Box>
                        <Button variant="contained" onClick={ store.openCreateModal }>Добавить</Button>
                    </Box>
                    <PurchasesTable
                        purchases={ store.purchases }
                        onEdit={ store.openEditModal }
                        onDelete={ store.openDeleteModal }
                    />
                </Box>
            ) : (
                <Box
                    sx={ {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexGrow: 1
                    } }
                >
                    <Typography variant="h3">Нет трат</Typography>
                    <Button variant="contained" onClick={ store.openCreateModal }>Добавить</Button>
                </Box>
            ) }
            <NewPurchaseModal
                isOpen={ store.isOpenCreateModal }
                onClose={ store.closeCreateModal }
                onCreate={ store.create }
            />
            <EditPurchaseModal
                isOpen={ store.isOpenEditModal }
                purchase={ store.purchaseForEdit }
                onClose={ store.closeEditModal }
                onEdit={ store.edit }
            />
            <DeletePurchaseModal
                isOpen={ store.isOpenDeleteModal }
                purchase={ store.purchaseForDelete }
                onClose={ store.closeDeleteModal }
                onDelete={ store.delete }
            />
        </WithLoading>
    );
});
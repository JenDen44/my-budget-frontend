import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import { LoadingButton } from '@mui/lab';
import { useLoading } from 'hooks';
import type { TDeletePurchaseModalProps } from './types';

export const DeletePurchaseModal = (props: TDeletePurchaseModalProps): ReactElement => {
    const { isOpen, purchase, onClose: onCloseProp, onDelete: onDeleteProp } = props;
    const { isLoading, byPromise } = useLoading();
    const onClose = (): void => {
        if (!isLoading) {
            onCloseProp();
        }
    };
    const onDelete = (): void => {
        if (purchase) {
            byPromise(onDeleteProp(purchase.id)).then(onClose);
        }
    };

    return (
        <Dialog
            open={ isOpen }
            onClose={ onClose }
            maxWidth="xl"
            PaperProps={ { sx: { width: 480 } } }
        >
            <DialogTitle>
                {`Удаление траты ${purchase?.id}`}
            </DialogTitle>
            <DialogContent dividers>
                <Typography variant='body1'>
                    {`Вы точно хотите удалить трату ${purchase?.id}?`}
                </Typography>
            </DialogContent>
            <DialogActions>
                <LoadingButton variant="outlined" onClick={ onClose } disabled={ isLoading }>Нет</LoadingButton>
                <LoadingButton variant="contained" onClick={ onDelete } loading={ isLoading }>Да</LoadingButton>
            </DialogActions>
        </Dialog>
    );
};
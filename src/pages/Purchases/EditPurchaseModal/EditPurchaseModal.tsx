import {  Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { FormProvider } from 'react-hook-form';
import { useEffect, type ReactElement } from 'react';
import { LoadingButton } from '@mui/lab';
import { useLoading } from 'hooks';
import { errorValidator } from 'entities';
import { PurchaseForm, usePurchaseForm, purchaseFormValidator, type TPurchaseFormValue } from '../PurchaseForm';
import type { TEditPurchaseModalProps } from './types';

export const EditPurchaseModal = (props: TEditPurchaseModalProps): ReactElement => {
    const { isOpen, purchase, onClose: onCloseProp, onEdit } = props;
    const { isLoading, byPromise } = useLoading();
    const form = usePurchaseForm();
    const onClose = (): void => {
        if (!isLoading) {
            form.reset();
            onCloseProp();
        }
    };
    const onSubmit = form.handleSubmit((data) => {
        if (purchase) {
            byPromise(purchaseFormValidator(data).then((parsedData) => onEdit(purchase.id, parsedData)))
                .then(onClose)
                .catch(errorValidator)
                .then((error) => {
                    if (error?.code == 422) {
                        error.fields?.forEach((errorField) => form.setError(errorField.field as keyof TPurchaseFormValue, { message: errorField.message }) );
                    }
                });
        }
    });

    useEffect(() => {
        if (purchase) {
            form.reset(purchase);
        }
    }, [ purchase ]);

    return (
        <Dialog
            open={ isOpen }
            onClose={ onClose }
            maxWidth="xl"
            PaperProps={ { sx: { width: 640 } } }
        >
            <DialogTitle>
                {`Редактирование траты ${purchase?.id}`}
            </DialogTitle>
            <DialogContent dividers>
                <FormProvider { ...form }>
                    <form>
                        <PurchaseForm />
                    </form>
                </FormProvider>
            </DialogContent>
            <DialogActions>
                <LoadingButton variant="outlined" onClick={ onClose } disabled={ isLoading }>Отмена</LoadingButton>
                <LoadingButton variant="contained" onClick={ onSubmit } loading={ isLoading }>Сохранить</LoadingButton>
            </DialogActions>
        </Dialog>
    );
};
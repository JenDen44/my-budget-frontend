import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { FormProvider } from 'react-hook-form';
import type { ReactElement } from 'react';
import { LoadingButton } from '@mui/lab';
import { useLoading } from 'hooks';
import { errorValidator } from 'entities';
import { PurchaseForm, usePurchaseForm, purchaseFormValidator, type TPurchaseFormValue } from '../PurchaseForm';
import type { TNewPurchaseModalProps } from './types';

export const NewPurchaseModal = (props: TNewPurchaseModalProps): ReactElement => {
    const { isOpen, onClose: onCloseProp, onCreate } = props;
    const { isLoading, byPromise } = useLoading();
    const form = usePurchaseForm();
    const onClose = (): void => {
        form.reset({ date: new Date(), category: 'FOOD' });
        onCloseProp();
    };
    const onSubmit = form.handleSubmit((data) =>
        byPromise(purchaseFormValidator(data).then(onCreate))
            .then(onClose)
            .catch(errorValidator)
            .then((error) => {
                if (error?.code == 422) {
                    error.fields?.forEach((errorField) => form.setError(errorField.field as keyof TPurchaseFormValue, { message: errorField.message }) );
                }
            })
    );

    return (
        <Dialog
            open={ isOpen }
            onClose={ onClose }
            maxWidth="xl"
            PaperProps={ { sx: { width: 640 } } }
        >
            <DialogTitle>Новая трата</DialogTitle>
            <DialogContent dividers>
                <FormProvider { ...form }>
                    <form>
                        <PurchaseForm />
                    </form>
                </FormProvider>
            </DialogContent>
            <DialogActions>
                <LoadingButton variant="outlined" onClick={ onClose } disabled={ isLoading }>Отмена</LoadingButton>
                <LoadingButton variant="contained" onClick={ onSubmit } loading={ isLoading }>Создать</LoadingButton>
            </DialogActions>
        </Dialog>
    );
};
import type { TNewPurchase } from 'entities';

export type TNewPurchaseModalProps = {
    isOpen: boolean;
    onClose: VoidFunction;
    onCreate: (data: TNewPurchase) => Promise<void>;
}
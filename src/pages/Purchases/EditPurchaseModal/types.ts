import type { TNewPurchase, TPurchase } from 'entities';

export type TEditPurchaseModalProps = {
    isOpen: boolean;
    purchase?: TPurchase;
    onClose: VoidFunction;
    onEdit: (id: number, data: TNewPurchase) => Promise<void>;
}
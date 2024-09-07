import type { TPurchase } from 'entities';

export type TDeletePurchaseModalProps = {
    isOpen: boolean;
    purchase?: TPurchase;
    onClose: VoidFunction;
    onDelete: (id: number) => Promise<void>;
}
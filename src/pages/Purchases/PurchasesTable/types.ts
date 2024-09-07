import type { TPurchase } from 'entities';

export type TPurchasesTableProps = {
    purchases: TPurchase[];
    onEdit: (purchase: TPurchase) => void;
    onDelete: (purchase: TPurchase) => void;
}
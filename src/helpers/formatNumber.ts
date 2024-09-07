export const formatNumber = Intl.NumberFormat('ru').format;

export const formatCurrency = Intl.NumberFormat('ru', { style: 'currency', currency: 'RUB' }).format;
import { format, isThisYear, isToday, isYesterday } from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatDate = (date: Date): string => {
    switch (true) {
    case isToday(date):
        return 'Сегодня';
    case isYesterday(date):
        return 'Вчера';
    case isThisYear(date):
        return format(date, 'd MMMM', { locale: ru });
    default:
        return format(date, 'd MMMM yyyy', { locale: ru });
    }
};

export const formatBackendDate = (date: Date): string => format(date, 'yyyy-MM-dd');
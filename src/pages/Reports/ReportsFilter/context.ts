import { createContext } from 'react';
import type { TReportFilterContext } from './types';

export const reportFilterContext = createContext<TReportFilterContext>({
    onChange: () => {}
});
import { useContext } from 'react';
import { reportFilterContext } from './context';
import type { TReportFilterContext } from './types';

export const useReportFilter = (): TReportFilterContext => useContext(reportFilterContext);
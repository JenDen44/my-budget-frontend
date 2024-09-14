import { type ReactElement } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useRouteMatch } from 'hooks';
import { ReportFilter, ReportFilterProvider } from './ReportsFilter';
import { PAGE_ROUTES, PAGES } from './consts';

export const Reports = (): ReactElement => {
    const selectedPage = useRouteMatch(PAGE_ROUTES);

    return (
        <ReportFilterProvider>
            <Box mb={ 3 }>
                <Box sx={ { display: 'flex', gap: 3, alignItems: 'flex-start', justifyContent: 'space-between' } }>
                    <Box sx={ { maxWidth: 320, flexGrow: 1 } }>
                        <ReportFilter />
                    </Box>
                    <ToggleButtonGroup
                        exclusive
                        color="primary"
                        value={ selectedPage }
                    >
                        {PAGES.map((page) => (
                            <ToggleButton
                                key={ page.path }
                                value={ page.path }
                                component={ NavLink }
                                to={ page.path }
                            >
                                <page.Icon />
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </Box>
            </Box>
            <Outlet />
        </ReportFilterProvider>
    );
};
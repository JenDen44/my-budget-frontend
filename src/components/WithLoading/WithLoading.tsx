import { Box, CircularProgress } from "@mui/material";
import type { TWithLoadingProps } from "./types";

export const WithLoading = (props: TWithLoadingProps) => {
    const { isLoading, children } = props;

    if (isLoading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexGrow: 1,
                    minHeight: 0,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <CircularProgress
                    sx={{
                        maxWidth: 240,
                        maxHeight: 240,
                        width: '100%',
                        height: '100%'
                    }}
                />
            </Box>
        );
    }

    return children;
}
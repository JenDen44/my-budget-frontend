import { AppBar, Box, Button, Container, IconButton } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, NavLink } from "react-router-dom";
import { PAGES } from "./consts";

export const Header = () => {
    return (
        <AppBar position="static">
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    gap: 4,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    minHeight: 64
                }}
            >
                <Box sx={{ display: 'flex', gap: 2 }}>
                    {PAGES.map((page) => (
                        <Button
                            key={page.path}
                            component={NavLink}
                            to={page.path}
                            sx={{
                                color: 'inherit',
                                position: 'relative',
                                '&.active:after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: 0,
                                    zIndex: 1,
                                    width: '100%',
                                    height: 2,
                                    bgcolor: '#fff'
                                }
                            }}
                        >
                            {page.title}
                        </Button>
                    ))}
                </Box>
                <IconButton component={Link} to="/logout" sx={{ color: 'inherit' }}>
                    <LogoutIcon />
                </IconButton>
            </Container>
        </AppBar>
    )
}
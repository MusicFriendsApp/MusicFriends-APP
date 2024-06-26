import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Diversity2';
import { Link } from 'react-router-dom';
import './Header.css'
import { useEffect, useState, useContext } from 'react';
import { getCurrentUser } from '../../services/user';
import { AuthContext } from '../../contexts/Contexts';
import { UserContext } from '../../contexts/Contexts';

const color = 'rgb(18,18,18)' // font color

const pages = ['Home', 'Friends', 'About'];
const settings = ['Profile', 'Logout'];

export default function Header() {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    if (isLoggedIn) {
      const sessionUserData = sessionStorage.getItem('currentUser_id');
      if (sessionUserData) {
        const userFetch = async () => {
          const spotify_id = localStorage.getItem('spotify_id');
          const profile = await getCurrentUser(spotify_id);
          setCurrentUser(profile);
          setLoadingUser(false);
        };
        userFetch();
      }
    }
  }, [isLoggedIn]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="sticky" style={{backgroundColor: 'rgb(29,185,84)'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Link to="/Home">
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: {color},
                textDecoration: 'none',
              }}
            >
              MUSIC FRIENDS
            </Typography>
            </Link>
            {isLoggedIn && <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color={color}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <Link key={page} to={`/${page}`}>
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" color={color}>{page}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>}
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Link to="/Home">
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: {color},
                textDecoration: 'none',
              }}
            >
              MUSIC FRIENDS
            </Typography>
              </Link> 
            {isLoggedIn && <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link key={page} to={`/${page}`}>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: {color}, display: 'block' }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>}

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {isLoggedIn && currentUser && currentUser.profile_picture_sm && <Avatar alt="Remy Sharp" src={currentUser.profile_picture_sm} />}
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <Link key={setting} to={`/${setting}`}>
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
